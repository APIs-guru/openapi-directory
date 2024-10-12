# openapi_client.TrendsApi

All URIs are relative to *http://uebermaps.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**trends_latest_get**](TrendsApi.md#trends_latest_get) | **GET** /trends/latest | List latest maps
[**trends_recommended_get**](TrendsApi.md#trends_recommended_get) | **GET** /trends/recommended | List recommended maps


# **trends_latest_get**
> List[Map] trends_latest_get()

List latest maps

List latest maps.

### Example


```python
import openapi_client
from openapi_client.models.map import Map
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TrendsApi(api_client)

    try:
        # List latest maps
        api_response = api_instance.trends_latest_get()
        print("The response of TrendsApi->trends_latest_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrendsApi->trends_latest_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Map]**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of maps. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **trends_recommended_get**
> List[Map] trends_recommended_get()

List recommended maps

List recommended maps.

### Example


```python
import openapi_client
from openapi_client.models.map import Map
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://uebermaps.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://uebermaps.com/api/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TrendsApi(api_client)

    try:
        # List recommended maps
        api_response = api_instance.trends_recommended_get()
        print("The response of TrendsApi->trends_recommended_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TrendsApi->trends_recommended_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Map]**](Map.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contains list of maps. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

