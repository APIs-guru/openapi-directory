# openapi_client.AddonDetailsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**support_plan_types_create_or_update**](AddonDetailsApi.md#support_plan_types_create_or_update) | **PUT** /subscriptions/{subscriptionId}/providers/Microsoft.Addons/supportProviders/{providerName}/supportPlanTypes/{planTypeName} | 
[**support_plan_types_get**](AddonDetailsApi.md#support_plan_types_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Addons/supportProviders/{providerName}/supportPlanTypes/{planTypeName} | 


# **support_plan_types_create_or_update**
> CanonicalSupportPlanResponseEnvelope support_plan_types_create_or_update(api_version, subscription_id, provider_name, plan_type_name)



Creates or updates the Canonical support plan of type {type} for the subscription.

### Example


```python
import openapi_client
from openapi_client.models.canonical_support_plan_response_envelope import CanonicalSupportPlanResponseEnvelope
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
    api_instance = openapi_client.AddonDetailsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    provider_name = 'provider_name_example' # str | The support plan type. For now the only valid type is \"canonical\".
    plan_type_name = 'plan_type_name_example' # str | The Canonical support plan type.

    try:
        api_response = api_instance.support_plan_types_create_or_update(api_version, subscription_id, provider_name, plan_type_name)
        print("The response of AddonDetailsApi->support_plan_types_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonDetailsApi->support_plan_types_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **provider_name** | **str**| The support plan type. For now the only valid type is \&quot;canonical\&quot;. | 
 **plan_type_name** | **str**| The Canonical support plan type. | 

### Return type

[**CanonicalSupportPlanResponseEnvelope**](CanonicalSupportPlanResponseEnvelope.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**404** | Not Found |  -  |
**0** | &#39;404&#39; - &#39;Not Found&#39;. &#39;400&#39; - &#39;Bad Request&#39; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **support_plan_types_get**
> CanonicalSupportPlanResponseEnvelope support_plan_types_get(api_version, subscription_id, provider_name, plan_type_name)



Returns whether or not the canonical support plan of type {type} is enabled for the subscription.

### Example


```python
import openapi_client
from openapi_client.models.canonical_support_plan_response_envelope import CanonicalSupportPlanResponseEnvelope
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
    api_instance = openapi_client.AddonDetailsApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    provider_name = 'provider_name_example' # str | The support plan type. For now the only valid type is \"canonical\".
    plan_type_name = 'plan_type_name_example' # str | The Canonical support plan type.

    try:
        api_response = api_instance.support_plan_types_get(api_version, subscription_id, provider_name, plan_type_name)
        print("The response of AddonDetailsApi->support_plan_types_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AddonDetailsApi->support_plan_types_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription credentials that uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **provider_name** | **str**| The support plan type. For now the only valid type is \&quot;canonical\&quot;. | 
 **plan_type_name** | **str**| The Canonical support plan type. | 

### Return type

[**CanonicalSupportPlanResponseEnvelope**](CanonicalSupportPlanResponseEnvelope.md)

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
**0** | &#39;404&#39; - &#39;Not Found&#39;. &#39;400&#39; - &#39;Bad Request&#39; |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

