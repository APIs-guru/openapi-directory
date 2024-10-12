# openapi_client.EnvironmentsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**environments_claim**](EnvironmentsApi.md#environments_claim) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}/claim | 
[**environments_create_or_update**](EnvironmentsApi.md#environments_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName} | 
[**environments_delete**](EnvironmentsApi.md#environments_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName} | 
[**environments_get**](EnvironmentsApi.md#environments_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName} | 
[**environments_list**](EnvironmentsApi.md#environments_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments | 
[**environments_reset_password**](EnvironmentsApi.md#environments_reset_password) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}/resetPassword | 
[**environments_start**](EnvironmentsApi.md#environments_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}/start | 
[**environments_stop**](EnvironmentsApi.md#environments_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName}/stop | 
[**environments_update**](EnvironmentsApi.md#environments_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/labs/{labName}/environmentsettings/{environmentSettingName}/environments/{environmentName} | 


# **environments_claim**
> environments_claim(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version)



Claims the environment and assigns it to the user

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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    environment_name = 'environment_name_example' # str | The name of the environment.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.environments_claim(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_claim: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **environment_name** | **str**| The name of the environment. | 
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

# **environments_create_or_update**
> Environment environments_create_or_update(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version, environment)



Create or replace an existing Environment.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment import Environment
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    environment_name = 'environment_name_example' # str | The name of the environment.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    environment = openapi_client.Environment() # Environment | Represents an environment instance

    try:
        api_response = api_instance.environments_create_or_update(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version, environment)
        print("The response of EnvironmentsApi->environments_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **environment_name** | **str**| The name of the environment. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **environment** | [**Environment**](Environment.md)| Represents an environment instance | 

### Return type

[**Environment**](Environment.md)

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

# **environments_delete**
> environments_delete(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version)



Delete environment. This operation can take a while to complete

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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    environment_name = 'environment_name_example' # str | The name of the environment.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.environments_delete(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **environment_name** | **str**| The name of the environment. | 
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

# **environments_get**
> Environment environments_get(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version, expand=expand)



Get environment

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment import Environment
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    environment_name = 'environment_name_example' # str | The name of the environment.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($expand=networkInterface)' (optional)

    try:
        api_response = api_instance.environments_get(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version, expand=expand)
        print("The response of EnvironmentsApi->environments_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **environment_name** | **str**| The name of the environment. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($expand&#x3D;networkInterface)&#39; | [optional] 

### Return type

[**Environment**](Environment.md)

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

# **environments_list**
> ResponseWithContinuationEnvironment environments_list(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)



List environments in a given environment setting.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.response_with_continuation_environment import ResponseWithContinuationEnvironment
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    expand = 'expand_example' # str | Specify the $expand query. Example: 'properties($expand=networkInterface)' (optional)
    filter = 'filter_example' # str | The filter to apply to the operation. (optional)
    top = 56 # int | The maximum number of resources to return from the operation. (optional)
    orderby = 'orderby_example' # str | The ordering expression for the results, using OData notation. (optional)

    try:
        api_response = api_instance.environments_list(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, api_version, expand=expand, filter=filter, top=top, orderby=orderby)
        print("The response of EnvironmentsApi->environments_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_list: %s\n" % e)
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
 **expand** | **str**| Specify the $expand query. Example: &#39;properties($expand&#x3D;networkInterface)&#39; | [optional] 
 **filter** | **str**| The filter to apply to the operation. | [optional] 
 **top** | **int**| The maximum number of resources to return from the operation. | [optional] 
 **orderby** | **str**| The ordering expression for the results, using OData notation. | [optional] 

### Return type

[**ResponseWithContinuationEnvironment**](ResponseWithContinuationEnvironment.md)

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

# **environments_reset_password**
> environments_reset_password(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version, reset_password_payload)



Resets the user password on an environment This operation can take a while to complete

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.reset_password_payload import ResetPasswordPayload
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    environment_name = 'environment_name_example' # str | The name of the environment.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    reset_password_payload = openapi_client.ResetPasswordPayload() # ResetPasswordPayload | Represents the payload for resetting passwords.

    try:
        api_instance.environments_reset_password(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version, reset_password_payload)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_reset_password: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **environment_name** | **str**| The name of the environment. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **reset_password_payload** | [**ResetPasswordPayload**](ResetPasswordPayload.md)| Represents the payload for resetting passwords. | 

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
**202** | Accepted |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **environments_start**
> environments_start(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version)



Starts an environment by starting all resources inside the environment. This operation can take a while to complete

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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    environment_name = 'environment_name_example' # str | The name of the environment.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.environments_start(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **environment_name** | **str**| The name of the environment. | 
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

# **environments_stop**
> environments_stop(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version)



Stops an environment by stopping all resources inside the environment This operation can take a while to complete

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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    environment_name = 'environment_name_example' # str | The name of the environment.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')

    try:
        api_instance.environments_stop(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **environment_name** | **str**| The name of the environment. | 
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

# **environments_update**
> Environment environments_update(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version, environment)



Modify properties of environments.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.environment import Environment
from openapi_client.models.environment_fragment import EnvironmentFragment
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
    api_instance = openapi_client.EnvironmentsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    lab_account_name = 'lab_account_name_example' # str | The name of the lab Account.
    lab_name = 'lab_name_example' # str | The name of the lab.
    environment_setting_name = 'environment_setting_name_example' # str | The name of the environment Setting.
    environment_name = 'environment_name_example' # str | The name of the environment.
    api_version = '2018-10-15' # str | Client API version. (default to '2018-10-15')
    environment = openapi_client.EnvironmentFragment() # EnvironmentFragment | Represents an environment instance

    try:
        api_response = api_instance.environments_update(subscription_id, resource_group_name, lab_account_name, lab_name, environment_setting_name, environment_name, api_version, environment)
        print("The response of EnvironmentsApi->environments_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EnvironmentsApi->environments_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group. | 
 **lab_account_name** | **str**| The name of the lab Account. | 
 **lab_name** | **str**| The name of the lab. | 
 **environment_setting_name** | **str**| The name of the environment Setting. | 
 **environment_name** | **str**| The name of the environment. | 
 **api_version** | **str**| Client API version. | [default to &#39;2018-10-15&#39;]
 **environment** | [**EnvironmentFragment**](EnvironmentFragment.md)| Represents an environment instance | 

### Return type

[**Environment**](Environment.md)

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

