# openapi_client.DefaultApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**log_profiles_update**](DefaultApi.md#log_profiles_update) | **PATCH** /subscriptions/{subscriptionId}/providers/microsoft.insights/logprofiles/{logProfileName} | 


# **log_profiles_update**
> LogProfileResource log_profiles_update(subscription_id, log_profile_name, api_version, log_profiles_resource)



Updates an existing LogProfilesResource. To update other fields use the CreateOrUpdate method.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.log_profile_resource import LogProfileResource
from openapi_client.models.log_profile_resource_patch import LogProfileResourcePatch
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
    api_instance = openapi_client.DefaultApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription Id.
    log_profile_name = 'log_profile_name_example' # str | The name of the log profile.
    api_version = 'api_version_example' # str | Client Api Version.
    log_profiles_resource = openapi_client.LogProfileResourcePatch() # LogProfileResourcePatch | Parameters supplied to the operation.

    try:
        api_response = api_instance.log_profiles_update(subscription_id, log_profile_name, api_version, log_profiles_resource)
        print("The response of DefaultApi->log_profiles_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DefaultApi->log_profiles_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription Id. | 
 **log_profile_name** | **str**| The name of the log profile. | 
 **api_version** | **str**| Client Api Version. | 
 **log_profiles_resource** | [**LogProfileResourcePatch**](LogProfileResourcePatch.md)| Parameters supplied to the operation. | 

### Return type

[**LogProfileResource**](LogProfileResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An existing log profile was successfully updated. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

