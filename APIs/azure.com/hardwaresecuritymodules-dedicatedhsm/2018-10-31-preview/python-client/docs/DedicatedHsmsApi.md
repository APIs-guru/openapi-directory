# openapi_client.DedicatedHsmsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**dedicated_hsm_create_or_update**](DedicatedHsmsApi.md#dedicated_hsm_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name} | 
[**dedicated_hsm_delete**](DedicatedHsmsApi.md#dedicated_hsm_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name} | 
[**dedicated_hsm_get**](DedicatedHsmsApi.md#dedicated_hsm_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name} | 
[**dedicated_hsm_list_by_resource_group**](DedicatedHsmsApi.md#dedicated_hsm_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs | 
[**dedicated_hsm_list_by_subscription**](DedicatedHsmsApi.md#dedicated_hsm_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs | 
[**dedicated_hsm_update**](DedicatedHsmsApi.md#dedicated_hsm_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.HardwareSecurityModules/dedicatedHSMs/{name} | 


# **dedicated_hsm_create_or_update**
> DedicatedHsm dedicated_hsm_create_or_update(resource_group_name, name, api_version, subscription_id, parameters)



Create or Update a dedicated HSM in the specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_hsm import DedicatedHsm
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
    api_instance = openapi_client.DedicatedHsmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the resource belongs.
    name = 'name_example' # str | Name of the dedicated Hsm
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DedicatedHsm() # DedicatedHsm | Parameters to create or update the dedicated hsm

    try:
        api_response = api_instance.dedicated_hsm_create_or_update(resource_group_name, name, api_version, subscription_id, parameters)
        print("The response of DedicatedHsmsApi->dedicated_hsm_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHsmsApi->dedicated_hsm_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the resource belongs. | 
 **name** | **str**| Name of the dedicated Hsm | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DedicatedHsm**](DedicatedHsm.md)| Parameters to create or update the dedicated hsm | 

### Return type

[**DedicatedHsm**](DedicatedHsm.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Created dedicated HSM |  -  |
**201** | Created dedicated HSM |  -  |
**0** | The error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_hsm_delete**
> dedicated_hsm_delete(resource_group_name, name, api_version, subscription_id)



Deletes the specified Azure Dedicated HSM.

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
    api_instance = openapi_client.DedicatedHsmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the dedicated HSM belongs.
    name = 'name_example' # str | The name of the dedicated HSM to delete
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.dedicated_hsm_delete(resource_group_name, name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling DedicatedHsmsApi->dedicated_hsm_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the dedicated HSM belongs. | 
 **name** | **str**| The name of the dedicated HSM to delete | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

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
**200** | OK Response. |  -  |
**202** | Accepted |  -  |
**204** | No Content |  -  |
**0** | The error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_hsm_get**
> DedicatedHsm dedicated_hsm_get(resource_group_name, name, api_version, subscription_id)



Gets the specified Azure dedicated HSM.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_hsm import DedicatedHsm
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
    api_instance = openapi_client.DedicatedHsmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the dedicated hsm belongs.
    name = 'name_example' # str | The name of the dedicated HSM.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.dedicated_hsm_get(resource_group_name, name, api_version, subscription_id)
        print("The response of DedicatedHsmsApi->dedicated_hsm_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHsmsApi->dedicated_hsm_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the dedicated hsm belongs. | 
 **name** | **str**| The name of the dedicated HSM. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DedicatedHsm**](DedicatedHsm.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieved dedicated HSM |  -  |
**0** | The error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_hsm_list_by_resource_group**
> DedicatedHsmListResult dedicated_hsm_list_by_resource_group(resource_group_name, api_version, subscription_id, top=top)



The List operation gets information about the dedicated hsms associated with the subscription and within the specified resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_hsm_list_result import DedicatedHsmListResult
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
    api_instance = openapi_client.DedicatedHsmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the dedicated HSM belongs.
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | Maximum number of results to return. (optional)

    try:
        api_response = api_instance.dedicated_hsm_list_by_resource_group(resource_group_name, api_version, subscription_id, top=top)
        print("The response of DedicatedHsmsApi->dedicated_hsm_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHsmsApi->dedicated_hsm_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the dedicated HSM belongs. | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| Maximum number of results to return. | [optional] 

### Return type

[**DedicatedHsmListResult**](DedicatedHsmListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get information about all dedicated HSMs in the specified resource group. |  -  |
**0** | The error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_hsm_list_by_subscription**
> DedicatedHsmListResult dedicated_hsm_list_by_subscription(api_version, subscription_id, top=top)



The List operation gets information about the dedicated HSMs associated with the subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_hsm_list_result import DedicatedHsmListResult
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
    api_instance = openapi_client.DedicatedHsmsApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    top = 56 # int | Maximum number of results to return. (optional)

    try:
        api_response = api_instance.dedicated_hsm_list_by_subscription(api_version, subscription_id, top=top)
        print("The response of DedicatedHsmsApi->dedicated_hsm_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHsmsApi->dedicated_hsm_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **top** | **int**| Maximum number of results to return. | [optional] 

### Return type

[**DedicatedHsmListResult**](DedicatedHsmListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Get information about all dedicated HSMs in the specified subscription. |  -  |
**0** | The error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **dedicated_hsm_update**
> DedicatedHsm dedicated_hsm_update(resource_group_name, name, api_version, subscription_id, parameters)



Update a dedicated HSM in the specified subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_hsm import DedicatedHsm
from openapi_client.models.dedicated_hsm_patch_parameters import DedicatedHsmPatchParameters
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
    api_instance = openapi_client.DedicatedHsmsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Resource Group to which the server belongs.
    name = 'name_example' # str | Name of the dedicated HSM
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    parameters = openapi_client.DedicatedHsmPatchParameters() # DedicatedHsmPatchParameters | Parameters to patch the dedicated HSM

    try:
        api_response = api_instance.dedicated_hsm_update(resource_group_name, name, api_version, subscription_id, parameters)
        print("The response of DedicatedHsmsApi->dedicated_hsm_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DedicatedHsmsApi->dedicated_hsm_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Resource Group to which the server belongs. | 
 **name** | **str**| Name of the dedicated HSM | 
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Subscription credentials which uniquely identify Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **parameters** | [**DedicatedHsmPatchParameters**](DedicatedHsmPatchParameters.md)| Parameters to patch the dedicated HSM | 

### Return type

[**DedicatedHsm**](DedicatedHsm.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Patched dedicated HSM |  -  |
**0** | The error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

