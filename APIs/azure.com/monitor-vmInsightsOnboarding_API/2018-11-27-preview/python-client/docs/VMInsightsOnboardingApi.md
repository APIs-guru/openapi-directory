# openapi_client.VMInsightsOnboardingApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v_m_insights_get_onboarding_status**](VMInsightsOnboardingApi.md#v_m_insights_get_onboarding_status) | **GET** /{resourceUri}/providers/Microsoft.Insights/vmInsightsOnboardingStatuses/default | 


# **v_m_insights_get_onboarding_status**
> VMInsightsOnboardingStatus v_m_insights_get_onboarding_status(api_version, resource_uri)



Retrieves the VM Insights onboarding status for the specified resource or resource scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.vm_insights_onboarding_status import VMInsightsOnboardingStatus
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
    api_instance = openapi_client.VMInsightsOnboardingApi(api_client)
    api_version = 'api_version_example' # str | API version.
    resource_uri = 'resource_uri_example' # str | The fully qualified Azure Resource manager identifier of the resource, or scope, whose status to retrieve.

    try:
        api_response = api_instance.v_m_insights_get_onboarding_status(api_version, resource_uri)
        print("The response of VMInsightsOnboardingApi->v_m_insights_get_onboarding_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VMInsightsOnboardingApi->v_m_insights_get_onboarding_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| API version. | 
 **resource_uri** | **str**| The fully qualified Azure Resource manager identifier of the resource, or scope, whose status to retrieve. | 

### Return type

[**VMInsightsOnboardingStatus**](VMInsightsOnboardingStatus.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The operation completed successfully. |  -  |
**0** | An error occurred while processing the request. See the error.code parameter to identify the specific error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

