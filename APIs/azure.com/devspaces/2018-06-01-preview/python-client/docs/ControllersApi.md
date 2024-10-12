# openapi_client.ControllersApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**controllers_create**](ControllersApi.md#controllers_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name} | Creates an Azure Dev Spaces Controller.
[**controllers_delete**](ControllersApi.md#controllers_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name} | Deletes an Azure Dev Spaces Controller.
[**controllers_get**](ControllersApi.md#controllers_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name} | Gets an Azure Dev Spaces Controller.
[**controllers_list**](ControllersApi.md#controllers_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DevSpaces/controllers | Lists the Azure Dev Spaces Controllers in a subscription.
[**controllers_list_by_resource_group**](ControllersApi.md#controllers_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers | Lists the Azure Dev Spaces Controllers in a resource group.
[**controllers_list_connection_details**](ControllersApi.md#controllers_list_connection_details) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name}/listConnectionDetails | Lists connection details for an Azure Dev Spaces Controller.
[**controllers_update**](ControllersApi.md#controllers_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevSpaces/controllers/{name} | Updates an Azure Dev Spaces Controller.


# **controllers_create**
> Controller controllers_create(api_version, subscription_id, resource_group_name, name, controller)

Creates an Azure Dev Spaces Controller.

Creates an Azure Dev Spaces Controller with the specified create parameters.

### Example


```python
import openapi_client
from openapi_client.models.controller import Controller
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ControllersApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group to which the resource belongs.
    name = 'name_example' # str | Name of the resource.
    controller = openapi_client.Controller() # Controller | Controller create parameters.

    try:
        # Creates an Azure Dev Spaces Controller.
        api_response = api_instance.controllers_create(api_version, subscription_id, resource_group_name, name, controller)
        print("The response of ControllersApi->controllers_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ControllersApi->controllers_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group to which the resource belongs. | 
 **name** | **str**| Name of the resource. | 
 **controller** | [**Controller**](Controller.md)| Controller create parameters. | 

### Return type

[**Controller**](Controller.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; response contains the created Azure Dev Spaces Controller . |  -  |
**201** | The request was successful; Azure Dev Spaces Controller is being created. |  -  |
**0** | Error response describing the reason for operation failure. 404 - NotFound(Azure Dev Spaces Controller doesn&#39;t exist.), 400 - BadRequest(One or more creation parameters are invalid.) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **controllers_delete**
> controllers_delete(api_version, subscription_id, resource_group_name, name)

Deletes an Azure Dev Spaces Controller.

Deletes an existing Azure Dev Spaces Controller.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ControllersApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group to which the resource belongs.
    name = 'name_example' # str | Name of the resource.

    try:
        # Deletes an Azure Dev Spaces Controller.
        api_instance.controllers_delete(api_version, subscription_id, resource_group_name, name)
    except Exception as e:
        print("Exception when calling ControllersApi->controllers_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group to which the resource belongs. | 
 **name** | **str**| Name of the resource. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; the Azure Dev Spaces Controller is deleted. |  -  |
**202** | The request was successful; Azure Dev Spaces Controller is being deleted. |  -  |
**204** | The request was successful; Azure Dev Spaces Controller does not exist. |  -  |
**0** | Error response describing the reason for operation failure. 409 - Conflict(Azure Dev Spaces Controller is already getting deleted.) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **controllers_get**
> Controller controllers_get(api_version, subscription_id, resource_group_name, name)

Gets an Azure Dev Spaces Controller.

Gets the properties for an Azure Dev Spaces Controller.

### Example


```python
import openapi_client
from openapi_client.models.controller import Controller
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ControllersApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group to which the resource belongs.
    name = 'name_example' # str | Name of the resource.

    try:
        # Gets an Azure Dev Spaces Controller.
        api_response = api_instance.controllers_get(api_version, subscription_id, resource_group_name, name)
        print("The response of ControllersApi->controllers_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ControllersApi->controllers_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group to which the resource belongs. | 
 **name** | **str**| Name of the resource. | 

### Return type

[**Controller**](Controller.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; response contains the Azure Dev Spaces Controller. |  -  |
**0** | Error response describing the reason for operation failure. 404 - NotFound(Azure Dev Spaces Controller doesn&#39;t exist.) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **controllers_list**
> ControllerList controllers_list(api_version, subscription_id)

Lists the Azure Dev Spaces Controllers in a subscription.

Lists all the Azure Dev Spaces Controllers with their properties in the subscription.

### Example


```python
import openapi_client
from openapi_client.models.controller_list import ControllerList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ControllersApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.

    try:
        # Lists the Azure Dev Spaces Controllers in a subscription.
        api_response = api_instance.controllers_list(api_version, subscription_id)
        print("The response of ControllersApi->controllers_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ControllersApi->controllers_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Azure subscription ID. | 

### Return type

[**ControllerList**](ControllerList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; response contains the list of Azure Dev Spaces Controllers in the subscription. |  -  |
**0** | Error response describing the reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **controllers_list_by_resource_group**
> ControllerList controllers_list_by_resource_group(api_version, subscription_id, resource_group_name)

Lists the Azure Dev Spaces Controllers in a resource group.

Lists all the Azure Dev Spaces Controllers with their properties in the specified resource group and subscription.

### Example


```python
import openapi_client
from openapi_client.models.controller_list import ControllerList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ControllersApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group to which the resource belongs.

    try:
        # Lists the Azure Dev Spaces Controllers in a resource group.
        api_response = api_instance.controllers_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of ControllersApi->controllers_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ControllersApi->controllers_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group to which the resource belongs. | 

### Return type

[**ControllerList**](ControllerList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; response contains the list of Azure Dev Spaces Controllers in the resource group. |  -  |
**0** | Error response describing the reason for operation failure. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **controllers_list_connection_details**
> ControllerConnectionDetailsList controllers_list_connection_details(api_version, subscription_id, resource_group_name, name)

Lists connection details for an Azure Dev Spaces Controller.

Lists connection details for the underlying container resources of an Azure Dev Spaces Controller.

### Example


```python
import openapi_client
from openapi_client.models.controller_connection_details_list import ControllerConnectionDetailsList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ControllersApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group to which the resource belongs.
    name = 'name_example' # str | Name of the resource.

    try:
        # Lists connection details for an Azure Dev Spaces Controller.
        api_response = api_instance.controllers_list_connection_details(api_version, subscription_id, resource_group_name, name)
        print("The response of ControllersApi->controllers_list_connection_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ControllersApi->controllers_list_connection_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group to which the resource belongs. | 
 **name** | **str**| Name of the resource. | 

### Return type

[**ControllerConnectionDetailsList**](ControllerConnectionDetailsList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; response contains the list of connection details for the Azure Dev Spaces Controller . |  -  |
**0** | Error response describing the reason for operation failure. 404 - NotFound(Azure Dev Spaces Controller doesn&#39;t exist.) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **controllers_update**
> Controller controllers_update(api_version, subscription_id, resource_group_name, name, controller_update_parameters)

Updates an Azure Dev Spaces Controller.

Updates the properties of an existing Azure Dev Spaces Controller with the specified update parameters.

### Example


```python
import openapi_client
from openapi_client.models.controller import Controller
from openapi_client.models.controller_update_parameters import ControllerUpdateParameters
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://management.azure.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://management.azure.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ControllersApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Azure subscription ID.
    resource_group_name = 'resource_group_name_example' # str | Resource group to which the resource belongs.
    name = 'name_example' # str | Name of the resource.
    controller_update_parameters = openapi_client.ControllerUpdateParameters() # ControllerUpdateParameters | Parameters for updating the Azure Dev Spaces Controller.

    try:
        # Updates an Azure Dev Spaces Controller.
        api_response = api_instance.controllers_update(api_version, subscription_id, resource_group_name, name, controller_update_parameters)
        print("The response of ControllersApi->controllers_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ControllersApi->controllers_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Azure subscription ID. | 
 **resource_group_name** | **str**| Resource group to which the resource belongs. | 
 **name** | **str**| Name of the resource. | 
 **controller_update_parameters** | [**ControllerUpdateParameters**](ControllerUpdateParameters.md)| Parameters for updating the Azure Dev Spaces Controller. | 

### Return type

[**Controller**](Controller.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was successful; response contains the updated Azure Dev Spaces Controller . |  -  |
**0** | Error response describing the reason for operation failure. 404 - NotFound(Azure Dev Spaces Controller doesn&#39;t exist.), 400 - BadRequest(One or more update parameters are invalid.) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

