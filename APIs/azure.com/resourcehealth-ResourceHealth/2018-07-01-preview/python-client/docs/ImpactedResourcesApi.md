# openapi_client.ImpactedResourcesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**impacted_resources_list_by_subscription_id**](ImpactedResourcesApi.md#impacted_resources_list_by_subscription_id) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.ResourceHealth/impactedResources | 


# **impacted_resources_list_by_subscription_id**
> ImpactedResourceListResult impacted_resources_list_by_subscription_id(api_version, subscription_id, filter=filter)



Lists the current availability status for impacted resources in the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.impacted_resource_list_result import ImpactedResourceListResult
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
    api_instance = openapi_client.ImpactedResourcesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    filter = 'filter_example' # str | The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom=MSDN (optional)

    try:
        api_response = api_instance.impacted_resources_list_by_subscription_id(api_version, subscription_id, filter=filter)
        print("The response of ImpactedResourcesApi->impacted_resources_list_by_subscription_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ImpactedResourcesApi->impacted_resources_list_by_subscription_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **filter** | **str**| The filter to apply on the operation. For more information please see https://docs.microsoft.com/en-us/rest/api/apimanagement/apis?redirectedfrom&#x3D;MSDN | [optional] 

### Return type

[**ImpactedResourceListResult**](ImpactedResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The list of current availability status for impacted resources in the subscription |  -  |
**0** | DefaultErrorResponse |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

