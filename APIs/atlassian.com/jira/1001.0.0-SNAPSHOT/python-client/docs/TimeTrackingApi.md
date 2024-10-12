# openapi_client.TimeTrackingApi

All URIs are relative to *https://your-domain.atlassian.net*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_available_time_tracking_implementations**](TimeTrackingApi.md#get_available_time_tracking_implementations) | **GET** /rest/api/3/configuration/timetracking/list | Get all time tracking providers
[**get_selected_time_tracking_implementation**](TimeTrackingApi.md#get_selected_time_tracking_implementation) | **GET** /rest/api/3/configuration/timetracking | Get selected time tracking provider
[**get_shared_time_tracking_configuration**](TimeTrackingApi.md#get_shared_time_tracking_configuration) | **GET** /rest/api/3/configuration/timetracking/options | Get time tracking settings
[**select_time_tracking_implementation**](TimeTrackingApi.md#select_time_tracking_implementation) | **PUT** /rest/api/3/configuration/timetracking | Select time tracking provider
[**set_shared_time_tracking_configuration**](TimeTrackingApi.md#set_shared_time_tracking_configuration) | **PUT** /rest/api/3/configuration/timetracking/options | Set time tracking settings


# **get_available_time_tracking_implementations**
> List[TimeTrackingProvider] get_available_time_tracking_implementations()

Get all time tracking providers

Returns all time tracking providers. By default, Jira only has one time tracking provider: *JIRA provided time tracking*. However, you can install other time tracking providers via apps from the Atlassian Marketplace. For more information on time tracking providers, see the documentation for the [ Time Tracking Provider](https://developer.atlassian.com/cloud/jira/platform/modules/time-tracking-provider/) module.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.time_tracking_provider import TimeTrackingProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TimeTrackingApi(api_client)

    try:
        # Get all time tracking providers
        api_response = api_instance.get_available_time_tracking_implementations()
        print("The response of TimeTrackingApi->get_available_time_tracking_implementations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimeTrackingApi->get_available_time_tracking_implementations: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[TimeTrackingProvider]**](TimeTrackingProvider.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_selected_time_tracking_implementation**
> TimeTrackingProvider get_selected_time_tracking_implementation()

Get selected time tracking provider

Returns the time tracking provider that is currently selected. Note that if time tracking is disabled, then a successful but empty response is returned.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.time_tracking_provider import TimeTrackingProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TimeTrackingApi(api_client)

    try:
        # Get selected time tracking provider
        api_response = api_instance.get_selected_time_tracking_implementation()
        print("The response of TimeTrackingApi->get_selected_time_tracking_implementation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimeTrackingApi->get_selected_time_tracking_implementation: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**TimeTrackingProvider**](TimeTrackingProvider.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful and time tracking is enabled. |  -  |
**204** | Returned if the request is successful but time tracking is disabled. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_shared_time_tracking_configuration**
> TimeTrackingConfiguration get_shared_time_tracking_configuration()

Get time tracking settings

Returns the time tracking settings. This includes settings such as the time format, default time unit, and others. For more information, see [Configuring time tracking](https://confluence.atlassian.com/x/qoXKM).  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.time_tracking_configuration import TimeTrackingConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TimeTrackingApi(api_client)

    try:
        # Get time tracking settings
        api_response = api_instance.get_shared_time_tracking_configuration()
        print("The response of TimeTrackingApi->get_shared_time_tracking_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimeTrackingApi->get_shared_time_tracking_configuration: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**TimeTrackingConfiguration**](TimeTrackingConfiguration.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **select_time_tracking_implementation**
> object select_time_tracking_implementation(time_tracking_provider)

Select time tracking provider

Selects a time tracking provider.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.time_tracking_provider import TimeTrackingProvider
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TimeTrackingApi(api_client)
    time_tracking_provider = {"key":"Jira"} # TimeTrackingProvider | 

    try:
        # Select time tracking provider
        api_response = api_instance.select_time_tracking_implementation(time_tracking_provider)
        print("The response of TimeTrackingApi->select_time_tracking_implementation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimeTrackingApi->select_time_tracking_implementation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time_tracking_provider** | [**TimeTrackingProvider**](TimeTrackingProvider.md)|  | 

### Return type

**object**

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Returned if the request is successful. |  -  |
**400** | Returned if the time tracking provider is not found. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **set_shared_time_tracking_configuration**
> TimeTrackingConfiguration set_shared_time_tracking_configuration(time_tracking_configuration)

Set time tracking settings

Sets the time tracking settings.  **[Permissions](#permissions) required:** *Administer Jira* [global permission](https://confluence.atlassian.com/x/x4dKLg).

### Example

* OAuth Authentication (OAuth2):
* Basic Authentication (basicAuth):

```python
import openapi_client
from openapi_client.models.time_tracking_configuration import TimeTrackingConfiguration
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://your-domain.atlassian.net
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://your-domain.atlassian.net"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Configure HTTP basic authorization: basicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.TimeTrackingApi(api_client)
    time_tracking_configuration = {"defaultUnit":"hour","timeFormat":"pretty","workingDaysPerWeek":5.5,"workingHoursPerDay":7.6} # TimeTrackingConfiguration | 

    try:
        # Set time tracking settings
        api_response = api_instance.set_shared_time_tracking_configuration(time_tracking_configuration)
        print("The response of TimeTrackingApi->set_shared_time_tracking_configuration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TimeTrackingApi->set_shared_time_tracking_configuration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **time_tracking_configuration** | [**TimeTrackingConfiguration**](TimeTrackingConfiguration.md)|  | 

### Return type

[**TimeTrackingConfiguration**](TimeTrackingConfiguration.md)

### Authorization

[OAuth2](../README.md#OAuth2), [basicAuth](../README.md#basicAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returned if the request is successful. |  -  |
**400** | Returned if the request object is invalid. |  -  |
**401** | Returned if the authentication credentials are incorrect or missing. |  -  |
**403** | Returned if the user does not have the necessary permission. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

