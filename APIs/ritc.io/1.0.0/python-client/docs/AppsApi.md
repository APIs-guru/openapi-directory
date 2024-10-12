# openapi_client.AppsApi

All URIs are relative to *https://api.ritc.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_app**](AppsApi.md#add_app) | **POST** /apps | 
[**add_app_channel_user**](AppsApi.md#add_app_channel_user) | **POST** /apps/channels/{channel_id}/users/{user_id} | 
[**add_channel_external_credentials**](AppsApi.md#add_channel_external_credentials) | **POST** /apps/ext/api/credentials | 
[**get_app**](AppsApi.md#get_app) | **GET** /apps/{app_id} | 
[**get_app_channel_user**](AppsApi.md#get_app_channel_user) | **GET** /apps/channels/{channel_id}/users/{user_id} | 
[**get_channel_external_credentials**](AppsApi.md#get_channel_external_credentials) | **GET** /apps/ext/api/credentials/{channel_id} | 
[**list_app_channel_users**](AppsApi.md#list_app_channel_users) | **GET** /apps/channels/{channel_id}/users | 
[**list_app_channels**](AppsApi.md#list_app_channels) | **GET** /apps/channels/users | 
[**list_apps**](AppsApi.md#list_apps) | **GET** /apps | 
[**list_channel_external_credentials**](AppsApi.md#list_channel_external_credentials) | **GET** /apps/ext/api/credentials | 
[**remove_app**](AppsApi.md#remove_app) | **DELETE** /apps/{app_id} | 
[**remove_channel_external_credentials**](AppsApi.md#remove_channel_external_credentials) | **DELETE** /apps/ext/api/credentials/{channel_id} | 
[**run_app**](AppsApi.md#run_app) | **POST** /apps/rules/run | 
[**run_rule_group**](AppsApi.md#run_rule_group) | **POST** /apps/rulegroup/run/{rule_id_list} | 
[**update_app**](AppsApi.md#update_app) | **PATCH** /apps/{app_id} | 
[**update_channel_external_credentials**](AppsApi.md#update_channel_external_credentials) | **PATCH** /apps/ext/api/credentials/{channel_id} | 


# **add_app**
> AppResponse add_app(app_object)



Create a new app

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app import App
from openapi_client.models.app_response import AppResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    app_object = openapi_client.App() # App | App information

    try:
        api_response = api_instance.add_app(app_object)
        print("The response of AppsApi->add_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->add_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_object** | [**App**](App.md)| App information | 

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | An app was created |  -  |
**400** | Invalid Input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_app_channel_user**
> AppChannelResponse add_app_channel_user(channel_id, user_id)



Create user channel

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app_channel_response import AppChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel
    user_id = 'user_id_example' # str | Id of User

    try:
        api_response = api_instance.add_app_channel_user(channel_id, user_id)
        print("The response of AppsApi->add_app_channel_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->add_app_channel_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 
 **user_id** | **str**| Id of User | 

### Return type

[**AppChannelResponse**](AppChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | User was assigned to a channel in in app |  -  |
**400** | Invalid Input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **add_channel_external_credentials**
> AppExternalCredentialsResponse add_channel_external_credentials(app_external_credentials_object)



Create new external credentials

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app_external_credentials import AppExternalCredentials
from openapi_client.models.app_external_credentials_response import AppExternalCredentialsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    app_external_credentials_object = openapi_client.AppExternalCredentials() # AppExternalCredentials | App_External_Credentials information

    try:
        api_response = api_instance.add_channel_external_credentials(app_external_credentials_object)
        print("The response of AppsApi->add_channel_external_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->add_channel_external_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_external_credentials_object** | [**AppExternalCredentials**](AppExternalCredentials.md)| App_External_Credentials information | 

### Return type

[**AppExternalCredentialsResponse**](AppExternalCredentialsResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | External credentials created |  -  |
**400** | Invalid Input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_app**
> List[AppResponse] get_app(app_id)



Get app information

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app_response import AppResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    app_id = 'app_id_example' # str | Id of App

    try:
        api_response = api_instance.get_app(app_id)
        print("The response of AppsApi->get_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->get_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Id of App | 

### Return type

[**List[AppResponse]**](AppResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed information about an app |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_app_channel_user**
> List[AppChannelResponse] get_app_channel_user(channel_id, user_id)



Get user of a specified channel

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app_channel_response import AppChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel
    user_id = 'user_id_example' # str | Id of User

    try:
        api_response = api_instance.get_app_channel_user(channel_id, user_id)
        print("The response of AppsApi->get_app_channel_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->get_app_channel_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 
 **user_id** | **str**| Id of User | 

### Return type

[**List[AppChannelResponse]**](AppChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed information about a specified user of a specified channel |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_channel_external_credentials**
> List[AppExternalCredentialsResponse] get_channel_external_credentials(channel_id)



Get credentials for a channel in an app

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app_external_credentials_response import AppExternalCredentialsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel

    try:
        api_response = api_instance.get_channel_external_credentials(channel_id)
        print("The response of AppsApi->get_channel_external_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->get_channel_external_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 

### Return type

[**List[AppExternalCredentialsResponse]**](AppExternalCredentialsResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Credentials for a channel in an app |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_app_channel_users**
> List[AppChannelResponse] list_app_channel_users(channel_id)



Get users of a specified channel

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app_channel_response import AppChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel

    try:
        api_response = api_instance.list_app_channel_users(channel_id)
        print("The response of AppsApi->list_app_channel_users:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->list_app_channel_users: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 

### Return type

[**List[AppChannelResponse]**](AppChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed information about users of a specified channel |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_app_channels**
> List[AppChannelResponse] list_app_channels()



Get app channels

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app_channel_response import AppChannelResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)

    try:
        api_response = api_instance.list_app_channels()
        print("The response of AppsApi->list_app_channels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->list_app_channels: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[AppChannelResponse]**](AppChannelResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of all channels in an app |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_apps**
> List[AppResponse] list_apps()



Get apps information

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app_response import AppResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)

    try:
        api_response = api_instance.list_apps()
        print("The response of AppsApi->list_apps:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->list_apps: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[AppResponse]**](AppResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of apps in an org |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_channel_external_credentials**
> List[AppExternalCredentialsResponse] list_channel_external_credentials()



Get external credentials

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app_external_credentials_response import AppExternalCredentialsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)

    try:
        api_response = api_instance.list_channel_external_credentials()
        print("The response of AppsApi->list_channel_external_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->list_channel_external_credentials: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[AppExternalCredentialsResponse]**](AppExternalCredentialsResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Detailed information about external credentials |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_app**
> remove_app(app_id)



Delete an app

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    app_id = 'app_id_example' # str | Id of App

    try:
        api_instance.remove_app(app_id)
    except Exception as e:
        print("Exception when calling AppsApi->remove_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Id of App | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The app was successfully removed |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_channel_external_credentials**
> remove_channel_external_credentials(channel_id)



Delete credentials for a channel

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel

    try:
        api_instance.remove_channel_external_credentials(channel_id)
    except Exception as e:
        print("Exception when calling AppsApi->remove_channel_external_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 

### Return type

void (empty response body)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The credentials for a channel were successfully removed |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_app**
> List[RuleResults] run_app(break_when_rule_fires=break_when_rule_fires, initial_data=initial_data)



Run active app rules

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.rule_results import RuleResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    break_when_rule_fires = True # bool | Do not continue with remaining rules after a rule fires (optional)
    initial_data = None # object | Initial data (optional)

    try:
        api_response = api_instance.run_app(break_when_rule_fires=break_when_rule_fires, initial_data=initial_data)
        print("The response of AppsApi->run_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->run_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **break_when_rule_fires** | **bool**| Do not continue with remaining rules after a rule fires | [optional] 
 **initial_data** | **object**| Initial data | [optional] 

### Return type

[**List[RuleResults]**](RuleResults.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Execution of active rules in the app (for user #1) |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **run_rule_group**
> List[RuleResults] run_rule_group(rule_id_list, break_when_rule_fires=break_when_rule_fires, initial_data=initial_data)



Run specified rule group in the app

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.rule_results import RuleResults
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    rule_id_list = 'rule_id_list_example' # str | Ids of rules in the group, separated by commas, no spaces
    break_when_rule_fires = True # bool | Do not continue with remaining rules after a rule fires (optional)
    initial_data = None # object | Initial data (optional)

    try:
        api_response = api_instance.run_rule_group(rule_id_list, break_when_rule_fires=break_when_rule_fires, initial_data=initial_data)
        print("The response of AppsApi->run_rule_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->run_rule_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rule_id_list** | **str**| Ids of rules in the group, separated by commas, no spaces | 
 **break_when_rule_fires** | **bool**| Do not continue with remaining rules after a rule fires | [optional] 
 **initial_data** | **object**| Initial data | [optional] 

### Return type

[**List[RuleResults]**](RuleResults.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Execution of specified rules in the app (for user #1) |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_app**
> AppResponse update_app(app_id, app_object)



Update an app

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app import App
from openapi_client.models.app_response import AppResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    app_id = 'app_id_example' # str | Id of app
    app_object = openapi_client.App() # App | App information

    try:
        api_response = api_instance.update_app(app_id, app_object)
        print("The response of AppsApi->update_app:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->update_app: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **app_id** | **str**| Id of app | 
 **app_object** | [**App**](App.md)| App information | 

### Return type

[**AppResponse**](AppResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the app was updated successfully |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_channel_external_credentials**
> AppExternalCredentialsResponse update_channel_external_credentials(channel_id, app_external_credentials_object)



Update credentials for a channel

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.app_external_credentials import AppExternalCredentials
from openapi_client.models.app_external_credentials_response import AppExternalCredentialsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ritc.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ritc.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AppsApi(api_client)
    channel_id = 'channel_id_example' # str | Id of Channel
    app_external_credentials_object = openapi_client.AppExternalCredentials() # AppExternalCredentials | App_External_Credentials information

    try:
        api_response = api_instance.update_channel_external_credentials(channel_id, app_external_credentials_object)
        print("The response of AppsApi->update_channel_external_credentials:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AppsApi->update_channel_external_credentials: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **channel_id** | **str**| Id of Channel | 
 **app_external_credentials_object** | [**AppExternalCredentials**](AppExternalCredentials.md)| App_External_Credentials information | 

### Return type

[**AppExternalCredentialsResponse**](AppExternalCredentialsResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Information about the channel credentials was updated successfully |  -  |
**400** | Invalid input |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

