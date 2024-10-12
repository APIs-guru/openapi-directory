# openapi_client.CanonicalSupportPlanStatusApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**canonical_support_plan_types_get**](CanonicalSupportPlanStatusApi.md#canonical_support_plan_types_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Addons/supportProviders/{providerName}/supportPlanTypes | Returns the Canonical Support Plans.


# **canonical_support_plan_types_get**
> List[CanonicalSupportPlanStatusInner] canonical_support_plan_types_get(api_version, subscription_id, provider_name)

Returns the Canonical Support Plans.

Returns the Canonical Support Plans as well as whether they are enabled or not for the subscription.

### Example


```python
import openapi_client
from openapi_client.models.canonical_support_plan_status_inner import CanonicalSupportPlanStatusInner
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
    api_instance = openapi_client.CanonicalSupportPlanStatusApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    provider_name = 'provider_name_example' # str | The support plan type. For now the only valid type is \"canonical\".

    try:
        # Returns the Canonical Support Plans.
        api_response = api_instance.canonical_support_plan_types_get(api_version, subscription_id, provider_name)
        print("The response of CanonicalSupportPlanStatusApi->canonical_support_plan_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CanonicalSupportPlanStatusApi->canonical_support_plan_types_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **provider_name** | **str**| The support plan type. For now the only valid type is \&quot;canonical\&quot;. | 

### Return type

[**List[CanonicalSupportPlanStatusInner]**](CanonicalSupportPlanStatusInner.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | &#39;404&#39; - &#39;Not Found&#39;. &#39;400&#39; - &#39;Bad Request&#39; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

