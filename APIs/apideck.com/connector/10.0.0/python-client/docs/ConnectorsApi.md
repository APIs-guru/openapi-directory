# openapi_client.ConnectorsApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connectors_all**](ConnectorsApi.md#connectors_all) | **GET** /connector/connectors | List Connectors
[**connectors_one**](ConnectorsApi.md#connectors_one) | **GET** /connector/connectors/{id} | Get Connector


# **connectors_all**
> GetConnectorsResponse connectors_all(x_apideck_app_id, cursor=cursor, limit=limit, filter=filter)

List Connectors

List Connectors

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.connectors_filter import ConnectorsFilter
from openapi_client.models.get_connectors_response import GetConnectorsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectorsApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 20 # int | Number of results to return. Minimum 1, Maximum 200, Default 20 (optional) (default to 20)
    filter = openapi_client.ConnectorsFilter() # ConnectorsFilter | Apply filters (optional)

    try:
        # List Connectors
        api_response = api_instance.connectors_all(x_apideck_app_id, cursor=cursor, limit=limit, filter=filter)
        print("The response of ConnectorsApi->connectors_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsApi->connectors_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of results to return. Minimum 1, Maximum 200, Default 20 | [optional] [default to 20]
 **filter** | [**ConnectorsFilter**](.md)| Apply filters | [optional] 

### Return type

[**GetConnectorsResponse**](GetConnectorsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connectors |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **connectors_one**
> GetConnectorResponse connectors_one(x_apideck_app_id, id)

Get Connector

Get Connector

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_connector_response import GetConnectorResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ConnectorsApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    id = 'id_example' # str | ID of the record you are acting upon.

    try:
        # Get Connector
        api_response = api_instance.connectors_one(x_apideck_app_id, id)
        print("The response of ConnectorsApi->connectors_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorsApi->connectors_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **id** | **str**| ID of the record you are acting upon. | 

### Return type

[**GetConnectorResponse**](GetConnectorResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Connectors |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

