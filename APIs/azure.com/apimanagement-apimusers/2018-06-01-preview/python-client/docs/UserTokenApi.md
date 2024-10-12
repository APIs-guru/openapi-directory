# openapi_client.UserTokenApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_get_shared_access_token**](UserTokenApi.md#user_get_shared_access_token) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.ApiManagement/service/{serviceName}/users/{userId}/token | 


# **user_get_shared_access_token**
> UserGetSharedAccessToken200Response user_get_shared_access_token(resource_group_name, service_name, user_id, api_version, subscription_id, parameters)



Gets the Shared Access Authorization Token for the User.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.user_get_shared_access_token200_response import UserGetSharedAccessToken200Response
from openapi_client.models.user_get_shared_access_token_request import UserGetSharedAccessTokenRequest
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
    api_instance = openapi_client.UserTokenApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    service_name = 'service_name_example' # str | The name of the API Management service.
    user_id = 'user_id_example' # str | User identifier. Must be unique in the current API Management service instance.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.UserGetSharedAccessTokenRequest() # UserGetSharedAccessTokenRequest | Create Authorization Token parameters.

    try:
        api_response = api_instance.user_get_shared_access_token(resource_group_name, service_name, user_id, api_version, subscription_id, parameters)
        print("The response of UserTokenApi->user_get_shared_access_token:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserTokenApi->user_get_shared_access_token: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **service_name** | **str**| The name of the API Management service. | 
 **user_id** | **str**| User identifier. Must be unique in the current API Management service instance. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**UserGetSharedAccessTokenRequest**](UserGetSharedAccessTokenRequest.md)| Create Authorization Token parameters. | 

### Return type

[**UserGetSharedAccessToken200Response**](UserGetSharedAccessToken200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response body contains the authorization token for the user. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

