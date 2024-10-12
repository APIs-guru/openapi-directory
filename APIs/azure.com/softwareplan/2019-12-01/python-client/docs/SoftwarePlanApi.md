# openapi_client.SoftwarePlanApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**software_plan_register**](SoftwarePlanApi.md#software_plan_register) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.SoftwarePlan/register | 


# **software_plan_register**
> software_plan_register(subscription_id, api_version)



Register to Microsoft.SoftwarePlan resource provider.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
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
    api_instance = openapi_client.SoftwarePlanApi(api_client)
    subscription_id = 'subscription_id_example' # str | The ID of the target subscription.
    api_version = 'api_version_example' # str | The api-version to be used by the service

    try:
        api_instance.software_plan_register(subscription_id, api_version)
    except Exception as e:
        print("Exception when calling SoftwarePlanApi->software_plan_register: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The ID of the target subscription. | 
 **api_version** | **str**| The api-version to be used by the service | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | OK - Microsoft.SoftwarePlan is registered |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

