# openapi_client.UsersApi

All URIs are relative to *https://api.clever-cloud.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_users_id_0**](UsersApi.md#get_users_id_0) | **GET** /users/{id} | 
[**get_users_id_applications_1**](UsersApi.md#get_users_id_applications_1) | **GET** /users/{id}/applications | 
[**get_users_user_id_git_info_0**](UsersApi.md#get_users_user_id_git_info_0) | **GET** /users/{userId}/git-info | 
[**post_users_0**](UsersApi.md#post_users_0) | **POST** /users | 


# **get_users_id_0**
> User get_users_id_0(id)



### Example


```python
import openapi_client
from openapi_client.models.user import User
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_users_id_0(id)
        print("The response of UsersApi->get_users_id_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_users_id_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**User**](User.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getUser |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_users_id_applications_1**
> List[Application] get_users_id_applications_1(id)



### Example


```python
import openapi_client
from openapi_client.models.application import Application
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.get_users_id_applications_1(id)
        print("The response of UsersApi->get_users_id_applications_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_users_id_applications_1: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**List[Application]**](Application.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getApplications |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_users_user_id_git_info_0**
> get_users_user_id_git_info_0(user_id)



### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = 'user_id_example' # str | 

    try:
        api_instance.get_users_user_id_git_info_0(user_id)
    except Exception as e:
        print("Exception when calling UsersApi->get_users_user_id_git_info_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | getGitInfo |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **post_users_0**
> post_users_0(wannabe_user, invitation_key=invitation_key, addon_beta_invitation_key=addon_beta_invitation_key, email=email, var_pass=var_pass, url_next=url_next, terms=terms)



### Example


```python
import openapi_client
from openapi_client.models.wannabe_user import WannabeUser
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.clever-cloud.com/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.clever-cloud.com/v2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    wannabe_user = openapi_client.WannabeUser() # WannabeUser | 
    invitation_key = 'invitation_key_example' # str |  (optional)
    addon_beta_invitation_key = 'addon_beta_invitation_key_example' # str |  (optional)
    email = 'email_example' # str |  (optional)
    var_pass = 'var_pass_example' # str |  (optional)
    url_next = 'url_next_example' # str |  (optional)
    terms = 'terms_example' # str |  (optional)

    try:
        api_instance.post_users_0(wannabe_user, invitation_key=invitation_key, addon_beta_invitation_key=addon_beta_invitation_key, email=email, var_pass=var_pass, url_next=url_next, terms=terms)
    except Exception as e:
        print("Exception when calling UsersApi->post_users_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **wannabe_user** | [**WannabeUser**](WannabeUser.md)|  | 
 **invitation_key** | **str**|  | [optional] 
 **addon_beta_invitation_key** | **str**|  | [optional] 
 **email** | **str**|  | [optional] 
 **var_pass** | **str**|  | [optional] 
 **url_next** | **str**|  | [optional] 
 **terms** | **str**|  | [optional] 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | createUser createUserFromForm |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

