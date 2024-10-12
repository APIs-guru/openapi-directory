# openapi_client.ServicePointsApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**service_points_get_by_id**](ServicePointsApi.md#service_points_get_by_id) | **GET** /v1/service_points/{carrier_code}/{country_code}/{service_point_id} | Get Service Point By ID
[**service_points_list**](ServicePointsApi.md#service_points_list) | **POST** /v1/service_points/list | List Service Points


# **service_points_get_by_id**
> GetServicePointByIdResponseBody service_points_get_by_id(carrier_code, country_code, service_point_id)

Get Service Point By ID

Returns a carrier service point by using the service_point_id

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_service_point_by_id_response_body import GetServicePointByIdResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServicePointsApi(api_client)
    carrier_code = 'stamps_com' # str | Carrier code
    country_code = 'CA' # str | A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1) 
    service_point_id = '614940' # str | 

    try:
        # Get Service Point By ID
        api_response = api_instance.service_points_get_by_id(carrier_code, country_code, service_point_id)
        print("The response of ServicePointsApi->service_points_get_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicePointsApi->service_points_get_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **carrier_code** | **str**| Carrier code | 
 **country_code** | **str**| A two-letter [ISO 3166-1 country code](https://en.wikipedia.org/wiki/ISO_3166-1)  | 
 **service_point_id** | **str**|  | 

### Return type

[**GetServicePointByIdResponseBody**](GetServicePointByIdResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **service_points_list**
> ListServicePointsResponseBody service_points_list(get_service_points_request)

List Service Points

List carrier service points by location

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_service_points_request import GetServicePointsRequest
from openapi_client.models.list_service_points_response_body import ListServicePointsResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ServicePointsApi(api_client)
    get_service_points_request = openapi_client.GetServicePointsRequest() # GetServicePointsRequest | 

    try:
        # List Service Points
        api_response = api_instance.service_points_list(get_service_points_request)
        print("The response of ServicePointsApi->service_points_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServicePointsApi->service_points_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **get_service_points_request** | [**GetServicePointsRequest**](GetServicePointsRequest.md)|  | 

### Return type

[**ListServicePointsResponseBody**](ListServicePointsResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

