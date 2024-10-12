# openapi_client.AdminTeamsSettingsApi

All URIs are relative to *https://slack.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**admin_teams_settings_info**](AdminTeamsSettingsApi.md#admin_teams_settings_info) | **GET** /admin.teams.settings.info | 
[**admin_teams_settings_set_default_channels**](AdminTeamsSettingsApi.md#admin_teams_settings_set_default_channels) | **POST** /admin.teams.settings.setDefaultChannels | 
[**admin_teams_settings_set_description**](AdminTeamsSettingsApi.md#admin_teams_settings_set_description) | **POST** /admin.teams.settings.setDescription | 
[**admin_teams_settings_set_discoverability**](AdminTeamsSettingsApi.md#admin_teams_settings_set_discoverability) | **POST** /admin.teams.settings.setDiscoverability | 
[**admin_teams_settings_set_icon**](AdminTeamsSettingsApi.md#admin_teams_settings_set_icon) | **POST** /admin.teams.settings.setIcon | 
[**admin_teams_settings_set_name**](AdminTeamsSettingsApi.md#admin_teams_settings_set_name) | **POST** /admin.teams.settings.setName | 


# **admin_teams_settings_info**
> DefaultSuccessTemplate admin_teams_settings_info(token, team_id)



Fetch information about settings in a workspace

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminTeamsSettingsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:read`
    team_id = 'team_id_example' # str | 

    try:
        api_response = api_instance.admin_teams_settings_info(token, team_id)
        print("The response of AdminTeamsSettingsApi->admin_teams_settings_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminTeamsSettingsApi->admin_teams_settings_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:read&#x60; | 
 **team_id** | **str**|  | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_teams_settings_set_default_channels**
> DefaultSuccessTemplate admin_teams_settings_set_default_channels(channel_ids, team_id, token)



Set the default channels of a workspace.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminTeamsSettingsApi(api_client)
    channel_ids = 'channel_ids_example' # str | An array of channel IDs.
    team_id = 'team_id_example' # str | ID for the workspace to set the default channel for.
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:write`

    try:
        api_response = api_instance.admin_teams_settings_set_default_channels(channel_ids, team_id, token)
        print("The response of AdminTeamsSettingsApi->admin_teams_settings_set_default_channels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminTeamsSettingsApi->admin_teams_settings_set_default_channels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_ids** | **str**| An array of channel IDs. | 
 **team_id** | **str**| ID for the workspace to set the default channel for. | 
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:write&#x60; | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_teams_settings_set_description**
> DefaultSuccessTemplate admin_teams_settings_set_description(token, description, team_id)



Set the description of a given workspace.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminTeamsSettingsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:write`
    description = 'description_example' # str | The new description for the workspace.
    team_id = 'team_id_example' # str | ID for the workspace to set the description for.

    try:
        api_response = api_instance.admin_teams_settings_set_description(token, description, team_id)
        print("The response of AdminTeamsSettingsApi->admin_teams_settings_set_description:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminTeamsSettingsApi->admin_teams_settings_set_description: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:write&#x60; | 
 **description** | **str**| The new description for the workspace. | 
 **team_id** | **str**| ID for the workspace to set the description for. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_teams_settings_set_discoverability**
> DefaultSuccessTemplate admin_teams_settings_set_discoverability(token, discoverability, team_id)



An API method that allows admins to set the discoverability of a given workspace

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminTeamsSettingsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:write`
    discoverability = 'discoverability_example' # str | This workspace's discovery setting. It must be set to one of `open`, `invite_only`, `closed`, or `unlisted`.
    team_id = 'team_id_example' # str | The ID of the workspace to set discoverability on.

    try:
        api_response = api_instance.admin_teams_settings_set_discoverability(token, discoverability, team_id)
        print("The response of AdminTeamsSettingsApi->admin_teams_settings_set_discoverability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminTeamsSettingsApi->admin_teams_settings_set_discoverability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:write&#x60; | 
 **discoverability** | **str**| This workspace&#39;s discovery setting. It must be set to one of &#x60;open&#x60;, &#x60;invite_only&#x60;, &#x60;closed&#x60;, or &#x60;unlisted&#x60;. | 
 **team_id** | **str**| The ID of the workspace to set discoverability on. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_teams_settings_set_icon**
> DefaultSuccessTemplate admin_teams_settings_set_icon(image_url, team_id, token)



Sets the icon of a workspace.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminTeamsSettingsApi(api_client)
    image_url = 'image_url_example' # str | Image URL for the icon
    team_id = 'team_id_example' # str | ID for the workspace to set the icon for.
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:write`

    try:
        api_response = api_instance.admin_teams_settings_set_icon(image_url, team_id, token)
        print("The response of AdminTeamsSettingsApi->admin_teams_settings_set_icon:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminTeamsSettingsApi->admin_teams_settings_set_icon: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | **str**| Image URL for the icon | 
 **team_id** | **str**| ID for the workspace to set the icon for. | 
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:write&#x60; | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **admin_teams_settings_set_name**
> DefaultSuccessTemplate admin_teams_settings_set_name(token, name, team_id)



Set the name of a given workspace.

### Example

* OAuth Authentication (slackAuth):

```python
import openapi_client
from openapi_client.models.default_success_template import DefaultSuccessTemplate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://slack.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://slack.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AdminTeamsSettingsApi(api_client)
    token = 'token_example' # str | Authentication token. Requires scope: `admin.teams:write`
    name = 'name_example' # str | The new name of the workspace.
    team_id = 'team_id_example' # str | ID for the workspace to set the name for.

    try:
        api_response = api_instance.admin_teams_settings_set_name(token, name, team_id)
        print("The response of AdminTeamsSettingsApi->admin_teams_settings_set_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdminTeamsSettingsApi->admin_teams_settings_set_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **token** | **str**| Authentication token. Requires scope: &#x60;admin.teams:write&#x60; | 
 **name** | **str**| The new name of the workspace. | 
 **team_id** | **str**| ID for the workspace to set the name for. | 

### Return type

[**DefaultSuccessTemplate**](DefaultSuccessTemplate.md)

### Authorization

[slackAuth](../README.md#slackAuth)

### HTTP request headers

 - **Content-Type**: application/x-www-form-urlencoded
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Typical success response |  -  |
**0** | Typical error response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

