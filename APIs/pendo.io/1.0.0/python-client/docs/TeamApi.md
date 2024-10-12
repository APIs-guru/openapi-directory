# openapi_client.TeamApi

All URIs are relative to *https://api.feedback.eu.pendo.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**users_invite_vendor_user_post_0**](TeamApi.md#users_invite_vendor_user_post_0) | **POST** /users/invite_vendor_user | Invite a VendorUser (Team member)
[**vendor_users_post_0**](TeamApi.md#vendor_users_post_0) | **POST** /vendor_users | Create or update a team member by their external_id


# **users_invite_vendor_user_post_0**
> users_invite_vendor_user_post_0(data)

Invite a VendorUser (Team member)

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.users_invite_vendor_user_post_request import UsersInviteVendorUserPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamApi(api_client)
    data = openapi_client.UsersInviteVendorUserPostRequest() # UsersInviteVendorUserPostRequest | 

    try:
        # Invite a VendorUser (Team member)
        api_instance.users_invite_vendor_user_post_0(data)
    except Exception as e:
        print("Exception when calling TeamApi->users_invite_vendor_user_post_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**UsersInviteVendorUserPostRequest**](UsersInviteVendorUserPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **vendor_users_post_0**
> vendor_users_post_0(data)

Create or update a team member by their external_id

the POST /vendor_users is very similar to the POST /users/invite_vendor_user but /vendor_users is intended for consumers to refresh team member data periodically, rather than just a one-off user creation.

### Example

* Api Key Authentication (userApiKey (request header)):
* Api Key Authentication (userApiKey (query parameter)):

```python
import openapi_client
from openapi_client.models.vendor_users_post_request import VendorUsersPostRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.feedback.eu.pendo.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.feedback.eu.pendo.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: userApiKey (request header)
configuration.api_key['userApiKey (request header)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (request header)'] = 'Bearer'

# Configure API key authorization: userApiKey (query parameter)
configuration.api_key['userApiKey (query parameter)'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['userApiKey (query parameter)'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TeamApi(api_client)
    data = openapi_client.VendorUsersPostRequest() # VendorUsersPostRequest | 

    try:
        # Create or update a team member by their external_id
        api_instance.vendor_users_post_0(data)
    except Exception as e:
        print("Exception when calling TeamApi->vendor_users_post_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **data** | [**VendorUsersPostRequest**](VendorUsersPostRequest.md)|  | 

### Return type

void (empty response body)

### Authorization

[userApiKey (request header)](../README.md#userApiKey (request header)), [userApiKey (query parameter)](../README.md#userApiKey (query parameter))

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

