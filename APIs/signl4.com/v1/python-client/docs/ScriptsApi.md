# openapi_client.ScriptsApi

All URIs are relative to *https://connect.signl4.com/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**scripts_instances_get**](ScriptsApi.md#scripts_instances_get) | **GET** /scripts/instances | Returns all script instances of the SIGNL4 team
[**scripts_instances_instance_id_data_put**](ScriptsApi.md#scripts_instances_instance_id_data_put) | **PUT** /scripts/instances/{instanceId}/data | Updates custom data of a given script instance which includes its display name.
[**scripts_instances_instance_id_delete**](ScriptsApi.md#scripts_instances_instance_id_delete) | **DELETE** /scripts/instances/{instanceId} | Deletes a script instance.
[**scripts_instances_instance_id_disable_post**](ScriptsApi.md#scripts_instances_instance_id_disable_post) | **POST** /scripts/instances/{instanceId}/disable | Disables a given script instance.
[**scripts_instances_instance_id_enable_post**](ScriptsApi.md#scripts_instances_instance_id_enable_post) | **POST** /scripts/instances/{instanceId}/enable | Enables a script instance.
[**scripts_instances_instance_id_get**](ScriptsApi.md#scripts_instances_instance_id_get) | **GET** /scripts/instances/{instanceId} | Returns all information about a given script instance which includes its runtime status.
[**scripts_instances_instance_id_put**](ScriptsApi.md#scripts_instances_instance_id_put) | **PUT** /scripts/instances/{instanceId} | Updates a given script instance, typically used for updating the configuration of a script.
[**scripts_instances_post**](ScriptsApi.md#scripts_instances_post) | **POST** /scripts/instances | Creates a new script instance in the in the SIGNL4 team.
[**scripts_inventory_get**](ScriptsApi.md#scripts_inventory_get) | **GET** /scripts/inventory | Returns all available inventory scripts which can be added to a SIGNL4 subscription.
[**scripts_inventory_parsed_get**](ScriptsApi.md#scripts_inventory_parsed_get) | **GET** /scripts/inventory/parsed | Returns all inventory scripts.
[**scripts_inventory_parsed_script_id_get**](ScriptsApi.md#scripts_inventory_parsed_script_id_get) | **GET** /scripts/inventory/parsed/{scriptId} | Returns an inventory script by its id.


# **scripts_instances_get**
> List[ScriptInstanceDetails] scripts_instances_get(team_id=team_id)

Returns all script instances of the SIGNL4 team

Returns all script instances in the subscription.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.script_instance_details import ScriptInstanceDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    team_id = 'team_id_example' # str |  (optional)

    try:
        # Returns all script instances of the SIGNL4 team
        api_response = api_instance.scripts_instances_get(team_id=team_id)
        print("The response of ScriptsApi->scripts_instances_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->scripts_instances_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **team_id** | **str**|  | [optional] 

### Return type

[**List[ScriptInstanceDetails]**](ScriptInstanceDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scripts_instances_instance_id_data_put**
> ScriptInstanceDetails scripts_instances_instance_id_data_put(instance_id, script_instance_custom_user_data=script_instance_custom_user_data)

Updates custom data of a given script instance which includes its display name.

Updates the specified script instance.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.script_instance_custom_user_data import ScriptInstanceCustomUserData
from openapi_client.models.script_instance_details import ScriptInstanceDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    instance_id = 'instance_id_example' # str | InstanceId of the script to be updated.
    script_instance_custom_user_data = openapi_client.ScriptInstanceCustomUserData() # ScriptInstanceCustomUserData | Script instance to be updated. (optional)

    try:
        # Updates custom data of a given script instance which includes its display name.
        api_response = api_instance.scripts_instances_instance_id_data_put(instance_id, script_instance_custom_user_data=script_instance_custom_user_data)
        print("The response of ScriptsApi->scripts_instances_instance_id_data_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->scripts_instances_instance_id_data_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance_id** | **str**| InstanceId of the script to be updated. | 
 **script_instance_custom_user_data** | [**ScriptInstanceCustomUserData**](ScriptInstanceCustomUserData.md)| Script instance to be updated. | [optional] 

### Return type

[**ScriptInstanceDetails**](ScriptInstanceDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | An internal error has occurred during instance creation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scripts_instances_instance_id_delete**
> scripts_instances_instance_id_delete(instance_id)

Deletes a script instance.

Gets the script instance specified by the passed instance id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    instance_id = 'instance_id_example' # str | Instance Id of script instance to be returned.

    try:
        # Deletes a script instance.
        api_instance.scripts_instances_instance_id_delete(instance_id)
    except Exception as e:
        print("Exception when calling ScriptsApi->scripts_instances_instance_id_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance_id** | **str**| Instance Id of script instance to be returned. | 

### Return type

void (empty response body)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database or in memory. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scripts_instances_instance_id_disable_post**
> ScriptInstanceDetails scripts_instances_instance_id_disable_post(instance_id)

Disables a given script instance.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.script_instance_details import ScriptInstanceDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    instance_id = 'instance_id_example' # str | Id of the instance to be disabled.

    try:
        # Disables a given script instance.
        api_response = api_instance.scripts_instances_instance_id_disable_post(instance_id)
        print("The response of ScriptsApi->scripts_instances_instance_id_disable_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->scripts_instances_instance_id_disable_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance_id** | **str**| Id of the instance to be disabled. | 

### Return type

[**ScriptInstanceDetails**](ScriptInstanceDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scripts_instances_instance_id_enable_post**
> ScriptInstanceDetails scripts_instances_instance_id_enable_post(instance_id)

Enables a script instance.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.script_instance_details import ScriptInstanceDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    instance_id = 'instance_id_example' # str | Id of the instance to be enabled.

    try:
        # Enables a script instance.
        api_response = api_instance.scripts_instances_instance_id_enable_post(instance_id)
        print("The response of ScriptsApi->scripts_instances_instance_id_enable_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->scripts_instances_instance_id_enable_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance_id** | **str**| Id of the instance to be enabled. | 

### Return type

[**ScriptInstanceDetails**](ScriptInstanceDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scripts_instances_instance_id_get**
> ScriptInstanceDetails scripts_instances_instance_id_get(instance_id)

Returns all information about a given script instance which includes its runtime status.

Gets the script instance specified by the passed instance id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.script_instance_details import ScriptInstanceDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    instance_id = 'instance_id_example' # str | Instance Id of script instance to be returned.

    try:
        # Returns all information about a given script instance which includes its runtime status.
        api_response = api_instance.scripts_instances_instance_id_get(instance_id)
        print("The response of ScriptsApi->scripts_instances_instance_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->scripts_instances_instance_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance_id** | **str**| Instance Id of script instance to be returned. | 

### Return type

[**ScriptInstanceDetails**](ScriptInstanceDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database or in memory. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scripts_instances_instance_id_put**
> ScriptInstanceDetails scripts_instances_instance_id_put(instance_id, script_instance_details=script_instance_details)

Updates a given script instance, typically used for updating the configuration of a script.

Updates the specified script instance.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.script_instance_details import ScriptInstanceDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    instance_id = 'instance_id_example' # str | InstanceId of the script to be updated.
    script_instance_details = openapi_client.ScriptInstanceDetails() # ScriptInstanceDetails | Script instance to be updated. (optional)

    try:
        # Updates a given script instance, typically used for updating the configuration of a script.
        api_response = api_instance.scripts_instances_instance_id_put(instance_id, script_instance_details=script_instance_details)
        print("The response of ScriptsApi->scripts_instances_instance_id_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->scripts_instances_instance_id_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **instance_id** | **str**| InstanceId of the script to be updated. | 
 **script_instance_details** | [**ScriptInstanceDetails**](ScriptInstanceDetails.md)| Script instance to be updated. | [optional] 

### Return type

[**ScriptInstanceDetails**](ScriptInstanceDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | An internal error has occurred during instance creation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scripts_instances_post**
> ScriptInstanceDetails scripts_instances_post(script_instance_details=script_instance_details)

Creates a new script instance in the in the SIGNL4 team.

Creates a new script instance of the script specified in the request body.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.script_instance_details import ScriptInstanceDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    script_instance_details = openapi_client.ScriptInstanceDetails() # ScriptInstanceDetails | Script instance to be created. (optional)

    try:
        # Creates a new script instance in the in the SIGNL4 team.
        api_response = api_instance.scripts_instances_post(script_instance_details=script_instance_details)
        print("The response of ScriptsApi->scripts_instances_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->scripts_instances_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **script_instance_details** | [**ScriptInstanceDetails**](ScriptInstanceDetails.md)| Script instance to be created. | [optional] 

### Return type

[**ScriptInstanceDetails**](ScriptInstanceDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/*+json, application/json, application/json-patch+json, text/json
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Existing script instance was updated as specified in body. |  -  |
**201** | New script instance was updated as specified in body. |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database. |  -  |
**500** | An internal error has occurred during instance creation. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scripts_inventory_get**
> List[InventoryScriptInfo] scripts_inventory_get()

Returns all available inventory scripts which can be added to a SIGNL4 subscription.

Returns all available inventory scripts which can be added to a SIGNL4 subscription.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.inventory_script_info import InventoryScriptInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)

    try:
        # Returns all available inventory scripts which can be added to a SIGNL4 subscription.
        api_response = api_instance.scripts_inventory_get()
        print("The response of ScriptsApi->scripts_inventory_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->scripts_inventory_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[InventoryScriptInfo]**](InventoryScriptInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**500** | An internal error orccurred while loading all inventory scripts. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scripts_inventory_parsed_get**
> List[InventoryScriptInfo] scripts_inventory_parsed_get(language=language)

Returns all inventory scripts.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.inventory_script_info import InventoryScriptInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    language = 'language_example' # str |  (optional)

    try:
        # Returns all inventory scripts.
        api_response = api_instance.scripts_inventory_parsed_get(language=language)
        print("The response of ScriptsApi->scripts_inventory_parsed_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->scripts_inventory_parsed_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **language** | **str**|  | [optional] 

### Return type

[**List[InventoryScriptInfo]**](InventoryScriptInfo.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**500** | Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **scripts_inventory_parsed_script_id_get**
> ScriptInstanceDetails scripts_inventory_parsed_script_id_get(script_id, language=language)

Returns an inventory script by its id.

Gets the script specified by the passed script id.

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.script_instance_details import ScriptInstanceDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.signl4.com/api
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.signl4.com/api"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ScriptsApi(api_client)
    script_id = 'script_id_example' # str | The Id of the script to be returned.
    language = 'language_example' # str |  (optional)

    try:
        # Returns an inventory script by its id.
        api_response = api_instance.scripts_inventory_parsed_script_id_get(script_id, language=language)
        print("The response of ScriptsApi->scripts_inventory_parsed_script_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ScriptsApi->scripts_inventory_parsed_script_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **script_id** | **str**| The Id of the script to be returned. | 
 **language** | **str**|  | [optional] 

### Return type

[**ScriptInstanceDetails**](ScriptInstanceDetails.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Required information could not be found in the request/claims. |  -  |
**404** | Required entities could not be found in the database or in memory. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

