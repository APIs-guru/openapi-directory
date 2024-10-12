# openapi_client.TriggerApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**triggers_get**](TriggerApi.md#triggers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DataFactory/factories/{factoryName}/triggers/{triggerName} | 


# **triggers_get**
> TriggerResource triggers_get(subscription_id, resource_group_name, factory_name, trigger_name, api_version, if_none_match=if_none_match)



Gets a trigger.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.trigger_resource import TriggerResource
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TriggerApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The resource group name.
    factory_name = 'factory_name_example' # str | The factory name.
    trigger_name = 'trigger_name_example' # str | The trigger name.
    api_version = 'api_version_example' # str | The API version.
    if_none_match = 'if_none_match_example' # str | ETag of the trigger entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. (optional)

    try:
        api_response = api_instance.triggers_get(subscription_id, resource_group_name, factory_name, trigger_name, api_version, if_none_match=if_none_match)
        print("The response of TriggerApi->triggers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TriggerApi->triggers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The resource group name. | 
 **factory_name** | **str**| The factory name. | 
 **trigger_name** | **str**| The trigger name. | 
 **api_version** | **str**| The API version. | 
 **if_none_match** | **str**| ETag of the trigger entity. Should only be specified for get. If the ETag matches the existing entity tag, or if * was provided, then no content will be returned. | [optional] 

### Return type

[**TriggerResource**](TriggerResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**304** | Not modified. |  -  |
**0** | An error response received from the Azure Data Factory service. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

