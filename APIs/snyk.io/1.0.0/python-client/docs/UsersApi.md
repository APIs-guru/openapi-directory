# openapi_client.UsersApi

All URIs are relative to *https://api.snyk.io/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_my_details**](UsersApi.md#get_my_details) | **GET** /user/me | Get My Details
[**get_organization_notification_settings**](UsersApi.md#get_organization_notification_settings) | **GET** /user/me/notification-settings/org/{orgId} | Get organization notification settings
[**get_project_notification_settings**](UsersApi.md#get_project_notification_settings) | **GET** /user/me/notification-settings/org/{orgId}/project/{projectId} | Get project notification settings
[**get_user_details**](UsersApi.md#get_user_details) | **GET** /user/{userId} | Get User Details
[**modify_organization_notification_settings**](UsersApi.md#modify_organization_notification_settings) | **PUT** /user/me/notification-settings/org/{orgId} | Modify organization notification settings
[**modify_project_notification_settings**](UsersApi.md#modify_project_notification_settings) | **PUT** /user/me/notification-settings/org/{orgId}/project/{projectId} | Modify project notification settings


# **get_my_details**
> GetMyDetails200Response get_my_details()

Get My Details



### Example


```python
import openapi_client
from openapi_client.models.get_my_details200_response import GetMyDetails200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)

    try:
        # Get My Details
        api_response = api_instance.get_my_details()
        print("The response of UsersApi->get_my_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_my_details: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**GetMyDetails200Response**](GetMyDetails200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | &#x60;API_KEY&#x60; is invalid. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_organization_notification_settings**
> OrgOrgIdNotificationSettingsGet200Response get_organization_notification_settings(org_id)

Get organization notification settings



### Example


```python
import openapi_client
from openapi_client.models.org_org_id_notification_settings_get200_response import OrgOrgIdNotificationSettingsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.

    try:
        # Get organization notification settings
        api_response = api_instance.get_organization_notification_settings(org_id)
        print("The response of UsersApi->get_organization_notification_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_organization_notification_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 

### Return type

[**OrgOrgIdNotificationSettingsGet200Response**](OrgOrgIdNotificationSettingsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_notification_settings**
> OrgOrgIdNotificationSettingsGet200Response get_project_notification_settings(org_id, project_id)

Get project notification settings



### Example


```python
import openapi_client
from openapi_client.models.org_org_id_notification_settings_get200_response import OrgOrgIdNotificationSettingsGet200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    org_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The organization ID. The `API_KEY` must have access to this organization.
    project_id = '6d5813be-7e6d-4ab8-80c2-1e3e2a454545' # str | The project ID to return notification settings for.

    try:
        # Get project notification settings
        api_response = api_instance.get_project_notification_settings(org_id, project_id)
        print("The response of UsersApi->get_project_notification_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_project_notification_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| The organization ID. The &#x60;API_KEY&#x60; must have access to this organization. | 
 **project_id** | **str**| The project ID to return notification settings for. | 

### Return type

[**OrgOrgIdNotificationSettingsGet200Response**](OrgOrgIdNotificationSettingsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_user_details**
> GetUserDetails200Response get_user_details(user_id)

Get User Details



### Example


```python
import openapi_client
from openapi_client.models.get_user_details200_response import GetUserDetails200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    user_id = '4a18d42f-0706-4ad0-b127-24078731fbed' # str | The users ID. The `API_KEY` must have admin access to at least one group or organization where the requested user is a member and must have the `api` entitlement on their preferred organization.

    try:
        # Get User Details
        api_response = api_instance.get_user_details(user_id)
        print("The response of UsersApi->get_user_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->get_user_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **user_id** | **str**| The users ID. The &#x60;API_KEY&#x60; must have admin access to at least one group or organization where the requested user is a member and must have the &#x60;api&#x60; entitlement on their preferred organization. | 

### Return type

[**GetUserDetails200Response**](GetUserDetails200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | The provided &#x60;id&#x60; is not in a valid format. |  -  |
**401** | &#x60;API_KEY&#x60; is invalid. |  -  |
**404** | The requested user could not be found or caller does not have sufficient permissions. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modify_organization_notification_settings**
> OrgOrgIdNotificationSettingsGet200Response modify_organization_notification_settings(org_id, set_notification_settings_request=set_notification_settings_request)

Modify organization notification settings



### Example


```python
import openapi_client
from openapi_client.models.org_org_id_notification_settings_get200_response import OrgOrgIdNotificationSettingsGet200Response
from openapi_client.models.set_notification_settings_request import SetNotificationSettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    org_id = 'org_id_example' # str | Automatically added
    set_notification_settings_request = openapi_client.SetNotificationSettingsRequest() # SetNotificationSettingsRequest |  (optional)

    try:
        # Modify organization notification settings
        api_response = api_instance.modify_organization_notification_settings(org_id, set_notification_settings_request=set_notification_settings_request)
        print("The response of UsersApi->modify_organization_notification_settings:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UsersApi->modify_organization_notification_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Automatically added | 
 **set_notification_settings_request** | [**SetNotificationSettingsRequest**](SetNotificationSettingsRequest.md)|  | [optional] 

### Return type

[**OrgOrgIdNotificationSettingsGet200Response**](OrgOrgIdNotificationSettingsGet200Response.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json; charset=utf-8

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **modify_project_notification_settings**
> modify_project_notification_settings(org_id, project_id, modify_project_notification_settings_request=modify_project_notification_settings_request)

Modify project notification settings



### Example


```python
import openapi_client
from openapi_client.models.modify_project_notification_settings_request import ModifyProjectNotificationSettingsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.snyk.io/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.snyk.io/v1"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UsersApi(api_client)
    org_id = 'org_id_example' # str | Automatically added
    project_id = 'project_id_example' # str | Automatically added
    modify_project_notification_settings_request = openapi_client.ModifyProjectNotificationSettingsRequest() # ModifyProjectNotificationSettingsRequest |  (optional)

    try:
        # Modify project notification settings
        api_instance.modify_project_notification_settings(org_id, project_id, modify_project_notification_settings_request=modify_project_notification_settings_request)
    except Exception as e:
        print("Exception when calling UsersApi->modify_project_notification_settings: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **org_id** | **str**| Automatically added | 
 **project_id** | **str**| Automatically added | 
 **modify_project_notification_settings_request** | [**ModifyProjectNotificationSettingsRequest**](ModifyProjectNotificationSettingsRequest.md)|  | [optional] 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

