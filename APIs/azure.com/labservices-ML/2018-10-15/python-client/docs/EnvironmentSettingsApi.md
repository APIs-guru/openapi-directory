# openapi_client.EnvironmentSettingsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environment_settings_claim_any**](EnvironmentSettingsApi.md#environment_settings_claim_any) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/claimAny | 
[**environment_settings_create_or_update**](EnvironmentSettingsApi.md#environment_settings_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName} | 
[**environment_settings_delete**](EnvironmentSettingsApi.md#environment_settings_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName} | 
[**environment_settings_get**](EnvironmentSettingsApi.md#environment_settings_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName} | 
[**environment_settings_list**](EnvironmentSettingsApi.md#environment_settings_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings | 
[**environment_settings_publish**](EnvironmentSettingsApi.md#environment_settings_publish) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/publish | 
[**environment_settings_start**](EnvironmentSettingsApi.md#environment_settings_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/start | 
[**environment_settings_stop**](EnvironmentSettingsApi.md#environment_settings_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/stop | 
[**environment_settings_update**](EnvironmentSettingsApi.md#environment_settings_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName} | 


# **environment_settings_claim_any**
> environment_settings_claim_any(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version)



Claims a random environment for a user in an environment settings

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
    api_instance = openapi_client.EnvironmentSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.environment_settings_claim_any(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version)
    except Exception as e:
        print("Exception when calling EnvironmentSettingsApi->environment_settings_claim_any: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]

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
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environment_settings_create_or_update**
> EnvironmentSetting environment_settings_create_or_update(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version, environment_setting)



Create or replace an existing Environment Setting. This operation can take a while to complete

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment_setting import EnvironmentSetting
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
    api_instance = openapi_client.EnvironmentSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    environment_setting = openapi_client.EnvironmentSetting() # EnvironmentSetting | Represents settings of an environment, from which environment instances would be created

    try:
        api_response = api_instance.environment_settings_create_or_update(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version, environment_setting)
        print("The response of EnvironmentSettingsApi->environment_settings_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentSettingsApi->environment_settings_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **environment_setting** | [**EnvironmentSetting**](EnvironmentSetting.md)| Represents settings of an environment, from which environment instances would be created | 

### Return type

[**EnvironmentSetting**](EnvironmentSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**201** | Created |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environment_settings_delete**
> environment_settings_delete(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version)



Delete environment setting. This operation can take a while to complete

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
    api_instance = openapi_client.EnvironmentSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.environment_settings_delete(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version)
    except Exception as e:
        print("Exception when calling EnvironmentSettingsApi->environment_settings_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]

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
**202** | Accepted |  -  |
**204** | No Content |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environment_settings_get**
> EnvironmentSetting environment_settings_get(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version, expand=expand)



Get environment setting

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment_setting import EnvironmentSetting
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
    api_instance = openapi_client.EnvironmentSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=publishingState)' (optional)

    try:
        api_response = api_instance.environment_settings_get(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version, expand=expand)
        print("The response of EnvironmentSettingsApi->environment_settings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentSettingsApi->environment_settings_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;publishingState)&#39; | [optional] 

### Return type

[**EnvironmentSetting**](EnvironmentSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environment_settings_list**
> ResponseWithContinuationEnvironmentSetting environment_settings_list(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List environment setting in a given lab.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response_with_continuation_environment_setting import ResponseWithContinuationEnvironmentSetting
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
    api_instance = openapi_client.EnvironmentSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($select=publishingState)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. (optional)
    top = 56 # int | The maximum number of resources to return from the operation. (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. (optional)

    try:
        api_response = api_instance.environment_settings_list(subscription_id, resource_group_name, lab_account_name, lab_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of EnvironmentSettingsApi->environment_settings_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentSettingsApi->environment_settings_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($select&#x3D;publishingState)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. | [optional] 

### Return type

[**ResponseWithContinuationEnvironmentSetting**](ResponseWithContinuationEnvironmentSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environment_settings_publish**
> environment_settings_publish(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version, publish_payload)



Provisions/deprovisions required resources for an environment setting based on current state of the lab/environment setting.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.publish_payload import PublishPayload
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
    api_instance = openapi_client.EnvironmentSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    publish_payload = openapi_client.PublishPayload() # PublishPayload | Payload for Publish operation on EnvironmentSetting.

    try:
        api_instance.environment_settings_publish(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version, publish_payload)
    except Exception as e:
        print("Exception when calling EnvironmentSettingsApi->environment_settings_publish: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **publish_payload** | [**PublishPayload**](PublishPayload.md)| Payload for Publish operation on EnvironmentSetting. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environment_settings_start**
> environment_settings_start(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version)



Starts a template by starting all resources inside the template. This operation can take a while to complete

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
    api_instance = openapi_client.EnvironmentSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.environment_settings_start(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version)
    except Exception as e:
        print("Exception when calling EnvironmentSettingsApi->environment_settings_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environment_settings_stop**
> environment_settings_stop(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version)



Starts a template by starting all resources inside the template. This operation can take a while to complete

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
    api_instance = openapi_client.EnvironmentSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.environment_settings_stop(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version)
    except Exception as e:
        print("Exception when calling EnvironmentSettingsApi->environment_settings_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environment_settings_update**
> EnvironmentSetting environment_settings_update(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version, environment_setting)



Modify properties of environment setting.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment_setting import EnvironmentSetting
from openapi_client.models.environment_setting_fragment import EnvironmentSettingFragment
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
    api_instance = openapi_client.EnvironmentSettingsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    environment_setting = openapi_client.EnvironmentSettingFragment() # EnvironmentSettingFragment | Represents settings of an environment, from which environment instances would be created

    try:
        api_response = api_instance.environment_settings_update(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version, environment_setting)
        print("The response of EnvironmentSettingsApi->environment_settings_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentSettingsApi->environment_settings_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **environment_setting** | [**EnvironmentSettingFragment**](EnvironmentSettingFragment.md)| Represents settings of an environment, from which environment instances would be created | 

### Return type

[**EnvironmentSetting**](EnvironmentSetting.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

