# openapi_client.UserInvitationsApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**user_invitations_create_instance**](UserInvitationsApi.md#user_invitations_create_instance) | **POST** /v1/userInvitations | 
[**user_invitations_delete_instance**](UserInvitationsApi.md#user_invitations_delete_instance) | **DELETE** /v1/userInvitations/{id} | 
[**user_invitations_get_collection**](UserInvitationsApi.md#user_invitations_get_collection) | **GET** /v1/userInvitations | 
[**user_invitations_get_instance**](UserInvitationsApi.md#user_invitations_get_instance) | **GET** /v1/userInvitations/{id} | 
[**user_invitations_visible_apps_get_to_many_related**](UserInvitationsApi.md#user_invitations_visible_apps_get_to_many_related) | **GET** /v1/userInvitations/{id}/visibleApps | 


# **user_invitations_create_instance**
> UserInvitationResponse user_invitations_create_instance(user_invitation_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.user_invitation_create_request import UserInvitationCreateRequest
from openapi_client.models.user_invitation_response import UserInvitationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserInvitationsApi(api_client)
    user_invitation_create_request = openapi_client.UserInvitationCreateRequest() # UserInvitationCreateRequest | UserInvitation representation

    try:
        api_response = api_instance.user_invitations_create_instance(user_invitation_create_request)
        print("The response of UserInvitationsApi->user_invitations_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserInvitationsApi->user_invitations_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_invitation_create_request** | [**UserInvitationCreateRequest**](UserInvitationCreateRequest.md)| UserInvitation representation | 

### Return type

[**UserInvitationResponse**](UserInvitationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single UserInvitation |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_invitations_delete_instance**
> user_invitations_delete_instance(id)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserInvitationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource

    try:
        api_instance.user_invitations_delete_instance(id)
    except Exception as e:
        print("Exception when calling UserInvitationsApi->user_invitations_delete_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 

### Return type

void (empty response body)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success (no content) |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_invitations_get_collection**
> UserInvitationsResponse user_invitations_get_collection(filter_email=filter_email, filter_roles=filter_roles, filter_visible_apps=filter_visible_apps, sort=sort, fields_user_invitations=fields_user_invitations, limit=limit, include=include, fields_apps=fields_apps, limit_visible_apps=limit_visible_apps)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.user_invitations_response import UserInvitationsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserInvitationsApi(api_client)
    filter_email = ['filter_email_example'] # List[str] | filter by attribute 'email' (optional)
    filter_roles = ['filter_roles_example'] # List[str] | filter by attribute 'roles' (optional)
    filter_visible_apps = ['filter_visible_apps_example'] # List[str] | filter by id(s) of related 'visibleApps' (optional)
    sort = ['sort_example'] # List[str] | comma-separated list of sort expressions; resources will be sorted as specified (optional)
    fields_user_invitations = ['fields_user_invitations_example'] # List[str] | the fields to include for returned resources of type userInvitations (optional)
    limit = 56 # int | maximum resources per page (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit_visible_apps = 56 # int | maximum number of related visibleApps returned (when they are included) (optional)

    try:
        api_response = api_instance.user_invitations_get_collection(filter_email=filter_email, filter_roles=filter_roles, filter_visible_apps=filter_visible_apps, sort=sort, fields_user_invitations=fields_user_invitations, limit=limit, include=include, fields_apps=fields_apps, limit_visible_apps=limit_visible_apps)
        print("The response of UserInvitationsApi->user_invitations_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserInvitationsApi->user_invitations_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_email** | [**List[str]**](str.md)| filter by attribute &#39;email&#39; | [optional] 
 **filter_roles** | [**List[str]**](str.md)| filter by attribute &#39;roles&#39; | [optional] 
 **filter_visible_apps** | [**List[str]**](str.md)| filter by id(s) of related &#39;visibleApps&#39; | [optional] 
 **sort** | [**List[str]**](str.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fields_user_invitations** | [**List[str]**](str.md)| the fields to include for returned resources of type userInvitations | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit_visible_apps** | **int**| maximum number of related visibleApps returned (when they are included) | [optional] 

### Return type

[**UserInvitationsResponse**](UserInvitationsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of UserInvitations |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_invitations_get_instance**
> UserInvitationResponse user_invitations_get_instance(id, fields_user_invitations=fields_user_invitations, include=include, fields_apps=fields_apps, limit_visible_apps=limit_visible_apps)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.user_invitation_response import UserInvitationResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserInvitationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_user_invitations = ['fields_user_invitations_example'] # List[str] | the fields to include for returned resources of type userInvitations (optional)
    include = ['include_example'] # List[str] | comma-separated list of relationships to include (optional)
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit_visible_apps = 56 # int | maximum number of related visibleApps returned (when they are included) (optional)

    try:
        api_response = api_instance.user_invitations_get_instance(id, fields_user_invitations=fields_user_invitations, include=include, fields_apps=fields_apps, limit_visible_apps=limit_visible_apps)
        print("The response of UserInvitationsApi->user_invitations_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserInvitationsApi->user_invitations_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_user_invitations** | [**List[str]**](str.md)| the fields to include for returned resources of type userInvitations | [optional] 
 **include** | [**List[str]**](str.md)| comma-separated list of relationships to include | [optional] 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit_visible_apps** | **int**| maximum number of related visibleApps returned (when they are included) | [optional] 

### Return type

[**UserInvitationResponse**](UserInvitationResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single UserInvitation |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **user_invitations_visible_apps_get_to_many_related**
> AppsResponse user_invitations_visible_apps_get_to_many_related(id, fields_apps=fields_apps, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.apps_response import AppsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UserInvitationsApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_apps = ['fields_apps_example'] # List[str] | the fields to include for returned resources of type apps (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.user_invitations_visible_apps_get_to_many_related(id, fields_apps=fields_apps, limit=limit)
        print("The response of UserInvitationsApi->user_invitations_visible_apps_get_to_many_related:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UserInvitationsApi->user_invitations_visible_apps_get_to_many_related: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_apps** | [**List[str]**](str.md)| the fields to include for returned resources of type apps | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**AppsResponse**](AppsResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of related resources |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

