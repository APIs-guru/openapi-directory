# openapi_client.AddonStatusApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**support_plan_types_list_info**](AddonStatusApi.md#support_plan_types_list_info) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.Addons/supportProviders/canonical/listSupportPlanInfo | 


# **support_plan_types_list_info**
> List[CanonicalSupportPlanInfoDefinition] support_plan_types_list_info(api_version, subscription_id)



Returns the canonical support plan information for all types for the subscription.

### Example


```python
import openapi_client
from openapi_client.models.canonical_support_plan_info_definition import CanonicalSupportPlanInfoDefinition
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AddonStatusApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.support_plan_types_list_info(api_version, subscription_id)
        print("The response of AddonStatusApi->support_plan_types_list_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonStatusApi->support_plan_types_list_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**List[CanonicalSupportPlanInfoDefinition]**](CanonicalSupportPlanInfoDefinition.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**404** | Not Found |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

