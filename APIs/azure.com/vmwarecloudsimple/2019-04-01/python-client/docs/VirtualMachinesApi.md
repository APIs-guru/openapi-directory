# openapi_client.VirtualMachinesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**virtual_machines_create_or_update**](VirtualMachinesApi.md#virtual_machines_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName} | Implements virtual machine PUT method
[**virtual_machines_delete**](VirtualMachinesApi.md#virtual_machines_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName} | Implements virtual machine DELETE method
[**virtual_machines_get**](VirtualMachinesApi.md#virtual_machines_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName} | Implements virtual machine GET method
[**virtual_machines_list_by_resource_group**](VirtualMachinesApi.md#virtual_machines_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines | Implements list virtual machine within RG method
[**virtual_machines_list_by_subscription**](VirtualMachinesApi.md#virtual_machines_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.VMwareCloudSimple/virtualMachines | Implements list virtual machine within subscription method
[**virtual_machines_start**](VirtualMachinesApi.md#virtual_machines_start) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}/start | Implements a start method for a virtual machine
[**virtual_machines_stop**](VirtualMachinesApi.md#virtual_machines_stop) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName}/stop | Implements shutdown, poweroff, and suspend method for a virtual machine
[**virtual_machines_update**](VirtualMachinesApi.md#virtual_machines_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.VMwareCloudSimple/virtualMachines/{virtualMachineName} | Implements virtual machine PATCH method


# **virtual_machines_create_or_update**
> VirtualMachine virtual_machines_create_or_update(subscription_id, resource_group_name, referer, virtual_machine_name, api_version, virtual_machine_request)

Implements virtual machine PUT method

Create Or Update Virtual Machine

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine import VirtualMachine
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    referer = 'referer_example' # str | referer url
    virtual_machine_name = 'virtual_machine_name_example' # str | virtual machine name
    api_version = 'api_version_example' # str | Client API version.
    virtual_machine_request = openapi_client.VirtualMachine() # VirtualMachine | Create or Update Virtual Machine request

    try:
        # Implements virtual machine PUT method
        api_response = api_instance.virtual_machines_create_or_update(subscription_id, resource_group_name, referer, virtual_machine_name, api_version, virtual_machine_request)
        print("The response of VirtualMachinesApi->virtual_machines_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **referer** | **str**| referer url | 
 **virtual_machine_name** | **str**| virtual machine name | 
 **api_version** | **str**| Client API version. | 
 **virtual_machine_request** | [**VirtualMachine**](VirtualMachine.md)| Create or Update Virtual Machine request | 

### Return type

[**VirtualMachine**](VirtualMachine.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If resource is created or updated successfully, 200 should be returned |  * Azure-AsyncOperation -  <br>  |
**201** | If resource is created or updated successfully, 201 should be returned. provisionedState would of VirtualMachineProperties object would reflect the state of the resource |  * Azure-AsyncOperation -  <br>  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_delete**
> virtual_machines_delete(subscription_id, resource_group_name, referer, virtual_machine_name, api_version)

Implements virtual machine DELETE method

Delete virtual machine

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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    referer = 'referer_example' # str | referer url
    virtual_machine_name = 'virtual_machine_name_example' # str | virtual machine name
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements virtual machine DELETE method
        api_instance.virtual_machines_delete(subscription_id, resource_group_name, referer, virtual_machine_name, api_version)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **referer** | **str**| referer url | 
 **virtual_machine_name** | **str**| virtual machine name | 
 **api_version** | **str**| Client API version. | 

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
**202** | accepted. the operation will complete asynchronously |  * Retry-After -  <br>  * Azure-AsyncOperation -  <br>  * Location -  <br>  |
**204** | no content. resource does not exist and the request is well formed |  -  |
**0** | General Error |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_get**
> VirtualMachine virtual_machines_get(subscription_id, resource_group_name, virtual_machine_name, api_version)

Implements virtual machine GET method

Get virtual machine

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine import VirtualMachine
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    virtual_machine_name = 'virtual_machine_name_example' # str | virtual machine name
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements virtual machine GET method
        api_response = api_instance.virtual_machines_get(subscription_id, resource_group_name, virtual_machine_name, api_version)
        print("The response of VirtualMachinesApi->virtual_machines_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **virtual_machine_name** | **str**| virtual machine name | 
 **api_version** | **str**| Client API version. | 

### Return type

[**VirtualMachine**](VirtualMachine.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_list_by_resource_group**
> VirtualMachineListResponse virtual_machines_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top, skip_token=skip_token)

Implements list virtual machine within RG method

Returns list of virtual machine within resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_list_response import VirtualMachineListResponse
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    api_version = 'api_version_example' # str | Client API version.
    filter = 'filter_example' # str | The filter to apply on the list operation (optional)
    top = 56 # int | The maximum number of record sets to return (optional)
    skip_token = 'skip_token_example' # str | to be used by nextLink implementation (optional)

    try:
        # Implements list virtual machine within RG method
        api_response = api_instance.virtual_machines_list_by_resource_group(subscription_id, resource_group_name, api_version, filter=filter, top=top, skip_token=skip_token)
        print("The response of VirtualMachinesApi->virtual_machines_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **api_version** | **str**| Client API version. | 
 **filter** | **str**| The filter to apply on the list operation | [optional] 
 **top** | **int**| The maximum number of record sets to return | [optional] 
 **skip_token** | **str**| to be used by nextLink implementation | [optional] 

### Return type

[**VirtualMachineListResponse**](VirtualMachineListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_list_by_subscription**
> VirtualMachineListResponse virtual_machines_list_by_subscription(subscription_id, api_version, filter=filter, top=top, skip_token=skip_token)

Implements list virtual machine within subscription method

Returns list virtual machine within subscription

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_list_response import VirtualMachineListResponse
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    api_version = 'api_version_example' # str | Client API version.
    filter = 'filter_example' # str | The filter to apply on the list operation (optional)
    top = 56 # int | The maximum number of record sets to return (optional)
    skip_token = 'skip_token_example' # str | to be used by nextLink implementation (optional)

    try:
        # Implements list virtual machine within subscription method
        api_response = api_instance.virtual_machines_list_by_subscription(subscription_id, api_version, filter=filter, top=top, skip_token=skip_token)
        print("The response of VirtualMachinesApi->virtual_machines_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **api_version** | **str**| Client API version. | 
 **filter** | **str**| The filter to apply on the list operation | [optional] 
 **top** | **int**| The maximum number of record sets to return | [optional] 
 **skip_token** | **str**| to be used by nextLink implementation | [optional] 

### Return type

[**VirtualMachineListResponse**](VirtualMachineListResponse.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_start**
> virtual_machines_start(subscription_id, resource_group_name, referer, virtual_machine_name, api_version)

Implements a start method for a virtual machine

Power on virtual machine

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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    referer = 'referer_example' # str | referer url
    virtual_machine_name = 'virtual_machine_name_example' # str | virtual machine name
    api_version = 'api_version_example' # str | Client API version.

    try:
        # Implements a start method for a virtual machine
        api_instance.virtual_machines_start(subscription_id, resource_group_name, referer, virtual_machine_name, api_version)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **referer** | **str**| referer url | 
 **virtual_machine_name** | **str**| virtual machine name | 
 **api_version** | **str**| Client API version. | 

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
**202** | Accepted. the operation will complete asynchronously |  * Retry-After -  <br>  * Azure-AsyncOperation -  <br>  * Location -  <br>  |
**0** | General Error |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_stop**
> virtual_machines_stop(subscription_id, resource_group_name, referer, virtual_machine_name, api_version, mode=mode, m=m)

Implements shutdown, poweroff, and suspend method for a virtual machine

Power off virtual machine, options: shutdown, poweroff, and suspend

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.virtual_machine_stop_mode import VirtualMachineStopMode
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    referer = 'referer_example' # str | referer url
    virtual_machine_name = 'virtual_machine_name_example' # str | virtual machine name
    api_version = 'api_version_example' # str | Client API version.
    mode = 'mode_example' # str | query stop mode parameter (reboot, shutdown, etc...) (optional)
    m = openapi_client.VirtualMachineStopMode() # VirtualMachineStopMode | body stop mode parameter (reboot, shutdown, etc...) (optional)

    try:
        # Implements shutdown, poweroff, and suspend method for a virtual machine
        api_instance.virtual_machines_stop(subscription_id, resource_group_name, referer, virtual_machine_name, api_version, mode=mode, m=m)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **referer** | **str**| referer url | 
 **virtual_machine_name** | **str**| virtual machine name | 
 **api_version** | **str**| Client API version. | 
 **mode** | **str**| query stop mode parameter (reboot, shutdown, etc...) | [optional] 
 **m** | [**VirtualMachineStopMode**](VirtualMachineStopMode.md)| body stop mode parameter (reboot, shutdown, etc...) | [optional] 

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
**202** | Accepted. the operation will complete asynchronously |  * Retry-After -  <br>  * Azure-AsyncOperation -  <br>  * Location -  <br>  |
**0** | General Error |  * Content-Type -  <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **virtual_machines_update**
> VirtualMachine virtual_machines_update(subscription_id, resource_group_name, virtual_machine_name, api_version, virtual_machine_request)

Implements virtual machine PATCH method

Patch virtual machine properties

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.patch_payload import PatchPayload
from openapi_client.models.virtual_machine import VirtualMachine
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
    api_instance = openapi_client.VirtualMachinesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription ID.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group
    virtual_machine_name = 'virtual_machine_name_example' # str | virtual machine name
    api_version = 'api_version_example' # str | Client API version.
    virtual_machine_request = openapi_client.PatchPayload() # PatchPayload | Patch virtual machine request

    try:
        # Implements virtual machine PATCH method
        api_response = api_instance.virtual_machines_update(subscription_id, resource_group_name, virtual_machine_name, api_version, virtual_machine_request)
        print("The response of VirtualMachinesApi->virtual_machines_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VirtualMachinesApi->virtual_machines_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription ID. | 
 **resource_group_name** | **str**| The name of the resource group | 
 **virtual_machine_name** | **str**| virtual machine name | 
 **api_version** | **str**| Client API version. | 
 **virtual_machine_request** | [**PatchPayload**](PatchPayload.md)| Patch virtual machine request | 

### Return type

[**VirtualMachine**](VirtualMachine.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | If resource is created or updated successfully, 200 should be returned |  -  |
**0** | General Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

