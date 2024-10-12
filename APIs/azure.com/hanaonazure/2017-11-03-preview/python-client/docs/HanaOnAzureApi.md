# openapi_client.HanaOnAzureApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**hana_instances_create**](HanaOnAzureApi.md#hana_instances_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName} | Creates a SAP HANA instance.
[**hana_instances_delete**](HanaOnAzureApi.md#hana_instances_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName} | Deletes a SAP HANA instance.
[**hana_instances_get**](HanaOnAzureApi.md#hana_instances_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName} | Gets properties of a SAP HANA instance.
[**hana_instances_list**](HanaOnAzureApi.md#hana_instances_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.HanaOnAzure/hanaInstances | Gets a list of SAP HANA instances in the specified subscription.
[**hana_instances_list_by_resource_group**](HanaOnAzureApi.md#hana_instances_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances | Gets a list of SAP HANA instances in the specified subscription and the resource group.
[**hana_instances_restart**](HanaOnAzureApi.md#hana_instances_restart) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName}/restart | 
[**hana_instances_shutdown**](HanaOnAzureApi.md#hana_instances_shutdown) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName}/shutdown | 
[**hana_instances_start**](HanaOnAzureApi.md#hana_instances_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName}/start | 
[**hana_instances_update**](HanaOnAzureApi.md#hana_instances_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/hanaInstances/{hanaInstanceName} | Patches the Tags field of a SAP HANA instance.
[**operations_list**](HanaOnAzureApi.md#operations_list) | **GET** /providers/Microsoft.HanaOnAzure/operations | 
[**sap_monitors_create**](HanaOnAzureApi.md#sap_monitors_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/sapMonitors/{sapMonitorName} | Creates a SAP monitor.
[**sap_monitors_delete**](HanaOnAzureApi.md#sap_monitors_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/sapMonitors/{sapMonitorName} | Deletes a SAP monitor.
[**sap_monitors_get**](HanaOnAzureApi.md#sap_monitors_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/sapMonitors/{sapMonitorName} | Gets properties of a SAP monitor.
[**sap_monitors_list**](HanaOnAzureApi.md#sap_monitors_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.HanaOnAzure/sapMonitors | Gets a list of SAP monitors in the specified subscription.
[**sap_monitors_update**](HanaOnAzureApi.md#sap_monitors_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HanaOnAzure/sapMonitors/{sapMonitorName} | Patches the Tags field of a SAP monitor.


# **hana_instances_create**
> HanaInstance hana_instances_create(api_version, subscription_id, resource_group_name, hana_instance_name, hana_instance_parameter)

Creates a SAP HANA instance.

Creates a SAP HANA instance for the specified subscription, resource group, and instance name.

### Example


```python
import openapi_client
from openapi_client.models.hana_instance import HanaInstance
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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    hana_instance_name = 'hana_instance_name_example' # str | Name of the SAP HANA on Azure instance.
    hana_instance_parameter = openapi_client.HanaInstance() # HanaInstance | Request body representing a HanaInstance

    try:
        # Creates a SAP HANA instance.
        api_response = api_instance.hana_instances_create(api_version, subscription_id, resource_group_name, hana_instance_name, hana_instance_parameter)
        print("The response of HanaOnAzureApi->hana_instances_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->hana_instances_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **hana_instance_name** | **str**| Name of the SAP HANA on Azure instance. | 
 **hana_instance_parameter** | [**HanaInstance**](HanaInstance.md)| Request body representing a HanaInstance | 

### Return type

[**HanaInstance**](HanaInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created HanaInstance |  -  |
**201** | Creating HanaInstance |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hana_instances_delete**
> hana_instances_delete(api_version, subscription_id, resource_group_name, hana_instance_name)

Deletes a SAP HANA instance.

Deletes a SAP HANA instance with the specified subscription, resource group, and instance name.

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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    hana_instance_name = 'hana_instance_name_example' # str | Name of the SAP HANA on Azure instance.

    try:
        # Deletes a SAP HANA instance.
        api_instance.hana_instances_delete(api_version, subscription_id, resource_group_name, hana_instance_name)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->hana_instances_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **hana_instance_name** | **str**| Name of the SAP HANA on Azure instance. | 

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
**200** | Deleted HanaInstance |  -  |
**202** | Deleting HanaInstance |  -  |
**204** | No HanaInstance to delete |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hana_instances_get**
> HanaInstance hana_instances_get(api_version, subscription_id, resource_group_name, hana_instance_name)

Gets properties of a SAP HANA instance.

Gets properties of a SAP HANA instance for the specified subscription, resource group, and instance name.

### Example


```python
import openapi_client
from openapi_client.models.hana_instance import HanaInstance
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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    hana_instance_name = 'hana_instance_name_example' # str | Name of the SAP HANA on Azure instance.

    try:
        # Gets properties of a SAP HANA instance.
        api_response = api_instance.hana_instances_get(api_version, subscription_id, resource_group_name, hana_instance_name)
        print("The response of HanaOnAzureApi->hana_instances_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->hana_instances_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **hana_instance_name** | **str**| Name of the SAP HANA on Azure instance. | 

### Return type

[**HanaInstance**](HanaInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hana_instances_list**
> HanaInstancesListResult hana_instances_list(api_version, subscription_id)

Gets a list of SAP HANA instances in the specified subscription.

Gets a list of SAP HANA instances in the specified subscription. The operations returns various properties of each SAP HANA on Azure instance.

### Example


```python
import openapi_client
from openapi_client.models.hana_instances_list_result import HanaInstancesListResult
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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        # Gets a list of SAP HANA instances in the specified subscription.
        api_response = api_instance.hana_instances_list(api_version, subscription_id)
        print("The response of HanaOnAzureApi->hana_instances_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->hana_instances_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**HanaInstancesListResult**](HanaInstancesListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hana_instances_list_by_resource_group**
> HanaInstancesListResult hana_instances_list_by_resource_group(api_version, subscription_id, resource_group_name)

Gets a list of SAP HANA instances in the specified subscription and the resource group.

Gets a list of SAP HANA instances in the specified subscription and the resource group. The operations returns various properties of each SAP HANA on Azure instance.

### Example


```python
import openapi_client
from openapi_client.models.hana_instances_list_result import HanaInstancesListResult
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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.

    try:
        # Gets a list of SAP HANA instances in the specified subscription and the resource group.
        api_response = api_instance.hana_instances_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of HanaOnAzureApi->hana_instances_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->hana_instances_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 

### Return type

[**HanaInstancesListResult**](HanaInstancesListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hana_instances_restart**
> hana_instances_restart(api_version, subscription_id, resource_group_name, hana_instance_name)



The operation to restart a SAP HANA instance.

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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    hana_instance_name = 'hana_instance_name_example' # str | Name of the SAP HANA on Azure instance.

    try:
        api_instance.hana_instances_restart(api_version, subscription_id, resource_group_name, hana_instance_name)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->hana_instances_restart: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **hana_instance_name** | **str**| Name of the SAP HANA on Azure instance. | 

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hana_instances_shutdown**
> hana_instances_shutdown(api_version, subscription_id, resource_group_name, hana_instance_name)



The operation to shutdown a SAP HANA instance.

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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    hana_instance_name = 'hana_instance_name_example' # str | Name of the SAP HANA on Azure instance.

    try:
        api_instance.hana_instances_shutdown(api_version, subscription_id, resource_group_name, hana_instance_name)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->hana_instances_shutdown: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **hana_instance_name** | **str**| Name of the SAP HANA on Azure instance. | 

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hana_instances_start**
> hana_instances_start(api_version, subscription_id, resource_group_name, hana_instance_name)



The operation to start a SAP HANA instance.

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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    hana_instance_name = 'hana_instance_name_example' # str | Name of the SAP HANA on Azure instance.

    try:
        api_instance.hana_instances_start(api_version, subscription_id, resource_group_name, hana_instance_name)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->hana_instances_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **hana_instance_name** | **str**| Name of the SAP HANA on Azure instance. | 

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
**200** | OK |  -  |
**202** | Accepted |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **hana_instances_update**
> HanaInstance hana_instances_update(api_version, subscription_id, resource_group_name, hana_instance_name, tags_parameter)

Patches the Tags field of a SAP HANA instance.

Patches the Tags field of a SAP HANA instance for the specified subscription, resource group, and instance name.

### Example


```python
import openapi_client
from openapi_client.models.hana_instance import HanaInstance
from openapi_client.models.tags import Tags
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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    hana_instance_name = 'hana_instance_name_example' # str | Name of the SAP HANA on Azure instance.
    tags_parameter = openapi_client.Tags() # Tags | Request body that only contains the new Tags field

    try:
        # Patches the Tags field of a SAP HANA instance.
        api_response = api_instance.hana_instances_update(api_version, subscription_id, resource_group_name, hana_instance_name, tags_parameter)
        print("The response of HanaOnAzureApi->hana_instances_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->hana_instances_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **hana_instance_name** | **str**| Name of the SAP HANA on Azure instance. | 
 **tags_parameter** | [**Tags**](Tags.md)| Request body that only contains the new Tags field | 

### Return type

[**HanaInstance**](HanaInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **operations_list**
> OperationList operations_list(api_version)



Gets a list of SAP HANA management operations.

### Example


```python
import openapi_client
from openapi_client.models.operation_list import OperationList
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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.

    try:
        api_response = api_instance.operations_list(api_version)
        print("The response of HanaOnAzureApi->operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 

### Return type

[**OperationList**](OperationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sap_monitors_create**
> SapMonitor sap_monitors_create(api_version, subscription_id, resource_group_name, sap_monitor_name, sap_monitor_parameter)

Creates a SAP monitor.

Creates a SAP monitor for the specified subscription, resource group, and resource name.

### Example


```python
import openapi_client
from openapi_client.models.sap_monitor import SapMonitor
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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    sap_monitor_name = 'sap_monitor_name_example' # str | Name of the SAP monitor resource.
    sap_monitor_parameter = openapi_client.SapMonitor() # SapMonitor | Request body representing a SAP Monitor

    try:
        # Creates a SAP monitor.
        api_response = api_instance.sap_monitors_create(api_version, subscription_id, resource_group_name, sap_monitor_name, sap_monitor_parameter)
        print("The response of HanaOnAzureApi->sap_monitors_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->sap_monitors_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **sap_monitor_name** | **str**| Name of the SAP monitor resource. | 
 **sap_monitor_parameter** | [**SapMonitor**](SapMonitor.md)| Request body representing a SAP Monitor | 

### Return type

[**SapMonitor**](SapMonitor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created SapMonitor |  -  |
**201** | Creating SapMonitor |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sap_monitors_delete**
> sap_monitors_delete(api_version, subscription_id, resource_group_name, sap_monitor_name)

Deletes a SAP monitor.

Deletes a SAP monitor with the specified subscription, resource group, and monitor name.

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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    sap_monitor_name = 'sap_monitor_name_example' # str | Name of the SAP monitor resource.

    try:
        # Deletes a SAP monitor.
        api_instance.sap_monitors_delete(api_version, subscription_id, resource_group_name, sap_monitor_name)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->sap_monitors_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **sap_monitor_name** | **str**| Name of the SAP monitor resource. | 

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
**200** | Deleted SapMonitor |  -  |
**202** | Deleting SapMonitor |  -  |
**204** | No SapMonitor to delete |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sap_monitors_get**
> SapMonitor sap_monitors_get(api_version, subscription_id, resource_group_name, sap_monitor_name)

Gets properties of a SAP monitor.

Gets properties of a SAP monitor for the specified subscription, resource group, and resource name.

### Example


```python
import openapi_client
from openapi_client.models.sap_monitor import SapMonitor
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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    sap_monitor_name = 'sap_monitor_name_example' # str | Name of the SAP monitor resource.

    try:
        # Gets properties of a SAP monitor.
        api_response = api_instance.sap_monitors_get(api_version, subscription_id, resource_group_name, sap_monitor_name)
        print("The response of HanaOnAzureApi->sap_monitors_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->sap_monitors_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **sap_monitor_name** | **str**| Name of the SAP monitor resource. | 

### Return type

[**SapMonitor**](SapMonitor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sap_monitors_list**
> SapMonitorListResult sap_monitors_list(api_version, subscription_id)

Gets a list of SAP monitors in the specified subscription.

Gets a list of SAP monitors in the specified subscription. The operations returns various properties of each SAP monitor.

### Example


```python
import openapi_client
from openapi_client.models.sap_monitor_list_result import SapMonitorListResult
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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        # Gets a list of SAP monitors in the specified subscription.
        api_response = api_instance.sap_monitors_list(api_version, subscription_id)
        print("The response of HanaOnAzureApi->sap_monitors_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->sap_monitors_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SapMonitorListResult**](SapMonitorListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sap_monitors_update**
> SapMonitor sap_monitors_update(api_version, subscription_id, resource_group_name, sap_monitor_name, tags_parameter)

Patches the Tags field of a SAP monitor.

Patches the Tags field of a SAP monitor for the specified subscription, resource group, and monitor name.

### Example


```python
import openapi_client
from openapi_client.models.sap_monitor import SapMonitor
from openapi_client.models.tags import Tags
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
    api_instance = openapi_client.HanaOnAzureApi(api_client)
    api_version = 'api_version_example' # str | Client API version.
    subscription_id = 'subscription_id_example' # str | Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group.
    sap_monitor_name = 'sap_monitor_name_example' # str | Name of the SAP monitor resource.
    tags_parameter = openapi_client.Tags() # Tags | Request body that only contains the new Tags field

    try:
        # Patches the Tags field of a SAP monitor.
        api_response = api_instance.sap_monitors_update(api_version, subscription_id, resource_group_name, sap_monitor_name, tags_parameter)
        print("The response of HanaOnAzureApi->sap_monitors_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling HanaOnAzureApi->sap_monitors_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client API version. | 
 **subscription_id** | **str**| Subscription ID which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Name of the resource group. | 
 **sap_monitor_name** | **str**| Name of the SAP monitor resource. | 
 **tags_parameter** | [**Tags**](Tags.md)| Request body that only contains the new Tags field | 

### Return type

[**SapMonitor**](SapMonitor.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

