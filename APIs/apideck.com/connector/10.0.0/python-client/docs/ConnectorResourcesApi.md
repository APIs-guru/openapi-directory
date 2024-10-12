# openapi_client.ConnectorResourcesApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**connector_resources_one**](ConnectorResourcesApi.md#connector_resources_one) | **GET** /connector/connectors/{id}/resources/{resource_id} | Get Connector Resource


# **connector_resources_one**
> GetConnectorResourceResponse connector_resources_one(x_apideck_app_id, id, resource_id, unified_api=unified_api)

Get Connector Resource

Get Connector Resource

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_connector_resource_response import GetConnectorResourceResponse
from openapi_client.models.unified_api_id import UnifiedApiId
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
    api_instance = openapi_client.ConnectorResourcesApi(api_client)
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    id = 'id_example' # str | ID of the record you are acting upon.
    resource_id = 'resource_id_example' # str | ID of the resource you are acting upon.
    unified_api = openapi_client.UnifiedApiId() # UnifiedApiId | Specify unified API for the connector resource. This is useful when a resource appears in multiple APIs (optional)

    try:
        # Get Connector Resource
        api_response = api_instance.connector_resources_one(x_apideck_app_id, id, resource_id, unified_api=unified_api)
        print("The response of ConnectorResourcesApi->connector_resources_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ConnectorResourcesApi->connector_resources_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **id** | **str**| ID of the record you are acting upon. | 
 **resource_id** | **str**| ID of the resource you are acting upon. | 
 **unified_api** | [**UnifiedApiId**](.md)| Specify unified API for the connector resource. This is useful when a resource appears in multiple APIs | [optional] 

### Return type

[**GetConnectorResourceResponse**](GetConnectorResourceResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | ConnectorResources |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

