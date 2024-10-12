# openapi_client.CapacitiesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**capacities_check_name_availability**](CapacitiesApi.md#capacities_check_name_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.PowerBIDedicated/locations/{location}/checkNameAvailability | 
[**capacities_create**](CapacitiesApi.md#capacities_create) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName} | 
[**capacities_delete**](CapacitiesApi.md#capacities_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName} | 
[**capacities_get_details**](CapacitiesApi.md#capacities_get_details) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName} | 
[**capacities_list**](CapacitiesApi.md#capacities_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.PowerBIDedicated/capacities | 
[**capacities_list_by_resource_group**](CapacitiesApi.md#capacities_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities | 
[**capacities_list_skus_for_capacity**](CapacitiesApi.md#capacities_list_skus_for_capacity) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}/skus | 
[**capacities_resume**](CapacitiesApi.md#capacities_resume) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}/resume | 
[**capacities_suspend**](CapacitiesApi.md#capacities_suspend) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName}/suspend | 
[**capacities_update**](CapacitiesApi.md#capacities_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.PowerBIDedicated/capacities/{dedicatedCapacityName} | 


# **capacities_check_name_availability**
> CheckCapacityNameAvailabilityResult capacities_check_name_availability(location, api_version, subscription_id, capacity_parameters)



Check the name availability in the target location.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.check_capacity_name_availability_parameters import CheckCapacityNameAvailabilityParameters
from openapi_client.models.check_capacity_name_availability_result import CheckCapacityNameAvailabilityResult
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
    api_instance = openapi_client.CapacitiesApi(api_client)
    location = 'location_example' # str | The region name which the operation will lookup into.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    capacity_parameters = openapi_client.CheckCapacityNameAvailabilityParameters() # CheckCapacityNameAvailabilityParameters | The name of the capacity.

    try:
        api_response = api_instance.capacities_check_name_availability(location, api_version, subscription_id, capacity_parameters)
        print("The response of CapacitiesApi->capacities_check_name_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacitiesApi->capacities_check_name_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **location** | **str**| The region name which the operation will lookup into. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **capacity_parameters** | [**CheckCapacityNameAvailabilityParameters**](CheckCapacityNameAvailabilityParameters.md)| The name of the capacity. | 

### Return type

[**CheckCapacityNameAvailabilityResult**](CheckCapacityNameAvailabilityResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The request has succeeded. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capacities_create**
> DedicatedCapacity capacities_create(resource_group_name, dedicated_capacity_name, api_version, subscription_id, capacity_parameters)



Provisions the specified Dedicated capacity based on the configuration specified in the request.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_capacity import DedicatedCapacity
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
    api_instance = openapi_client.CapacitiesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
    dedicated_capacity_name = 'dedicated_capacity_name_example' # str | The name of the Dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    capacity_parameters = openapi_client.DedicatedCapacity() # DedicatedCapacity | Contains the information used to provision the Dedicated capacity.

    try:
        api_response = api_instance.capacities_create(resource_group_name, dedicated_capacity_name, api_version, subscription_id, capacity_parameters)
        print("The response of CapacitiesApi->capacities_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacitiesApi->capacities_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90. | 
 **dedicated_capacity_name** | **str**| The name of the Dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **capacity_parameters** | [**DedicatedCapacity**](DedicatedCapacity.md)| Contains the information used to provision the Dedicated capacity. | 

### Return type

[**DedicatedCapacity**](DedicatedCapacity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The operation completed successfully. |  -  |
**201** | InProgress. The operation is still in progress. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capacities_delete**
> capacities_delete(resource_group_name, dedicated_capacity_name, api_version, subscription_id)



Deletes the specified Dedicated capacity.

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
    api_instance = openapi_client.CapacitiesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
    dedicated_capacity_name = 'dedicated_capacity_name_example' # str | The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.capacities_delete(resource_group_name, dedicated_capacity_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling CapacitiesApi->capacities_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90. | 
 **dedicated_capacity_name** | **str**| The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Accepted. |  -  |
**204** | No Content. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capacities_get_details**
> DedicatedCapacity capacities_get_details(resource_group_name, dedicated_capacity_name, api_version, subscription_id)



Gets details about the specified dedicated capacity.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_capacity import DedicatedCapacity
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
    api_instance = openapi_client.CapacitiesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
    dedicated_capacity_name = 'dedicated_capacity_name_example' # str | The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.capacities_get_details(resource_group_name, dedicated_capacity_name, api_version, subscription_id)
        print("The response of CapacitiesApi->capacities_get_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacitiesApi->capacities_get_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90. | 
 **dedicated_capacity_name** | **str**| The name of the dedicated capacity. It must be a minimum of 3 characters, and a maximum of 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DedicatedCapacity**](DedicatedCapacity.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. The operation was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capacities_list**
> DedicatedCapacities capacities_list(api_version, subscription_id)



Lists all the Dedicated capacities for the given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_capacities import DedicatedCapacities
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
    api_instance = openapi_client.CapacitiesApi(api_client)
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.capacities_list(api_version, subscription_id)
        print("The response of CapacitiesApi->capacities_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacitiesApi->capacities_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DedicatedCapacities**](DedicatedCapacities.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capacities_list_by_resource_group**
> DedicatedCapacities capacities_list_by_resource_group(resource_group_name, api_version, subscription_id)



Gets all the Dedicated capacities for the given resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_capacities import DedicatedCapacities
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
    api_instance = openapi_client.CapacitiesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.capacities_list_by_resource_group(resource_group_name, api_version, subscription_id)
        print("The response of CapacitiesApi->capacities_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacitiesApi->capacities_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DedicatedCapacities**](DedicatedCapacities.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capacities_list_skus_for_capacity**
> SkuEnumerationForExistingResourceResult capacities_list_skus_for_capacity(resource_group_name, dedicated_capacity_name, api_version, subscription_id)



Lists eligible SKUs for a PowerBI Dedicated resource.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.sku_enumeration_for_existing_resource_result import SkuEnumerationForExistingResourceResult
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
    api_instance = openapi_client.CapacitiesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
    dedicated_capacity_name = 'dedicated_capacity_name_example' # str | The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_response = api_instance.capacities_list_skus_for_capacity(resource_group_name, dedicated_capacity_name, api_version, subscription_id)
        print("The response of CapacitiesApi->capacities_list_skus_for_capacity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacitiesApi->capacities_list_skus_for_capacity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90. | 
 **dedicated_capacity_name** | **str**| The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**SkuEnumerationForExistingResourceResult**](SkuEnumerationForExistingResourceResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capacities_resume**
> capacities_resume(resource_group_name, dedicated_capacity_name, api_version, subscription_id)



Resumes operation of the specified Dedicated capacity instance.

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
    api_instance = openapi_client.CapacitiesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
    dedicated_capacity_name = 'dedicated_capacity_name_example' # str | The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.capacities_resume(resource_group_name, dedicated_capacity_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling CapacitiesApi->capacities_resume: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90. | 
 **dedicated_capacity_name** | **str**| The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**202** | Accepted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capacities_suspend**
> capacities_suspend(resource_group_name, dedicated_capacity_name, api_version, subscription_id)



Suspends operation of the specified dedicated capacity instance.

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
    api_instance = openapi_client.CapacitiesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
    dedicated_capacity_name = 'dedicated_capacity_name_example' # str | The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        api_instance.capacities_suspend(resource_group_name, dedicated_capacity_name, api_version, subscription_id)
    except Exception as e:
        print("Exception when calling CapacitiesApi->capacities_suspend: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90. | 
 **dedicated_capacity_name** | **str**| The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

void (empty response body)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. |  -  |
**202** | Accepted. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **capacities_update**
> DedicatedCapacity capacities_update(resource_group_name, dedicated_capacity_name, api_version, subscription_id, capacity_update_parameters)



Updates the current state of the specified Dedicated capacity.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.dedicated_capacity import DedicatedCapacity
from openapi_client.models.dedicated_capacity_update_parameters import DedicatedCapacityUpdateParameters
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
    api_instance = openapi_client.CapacitiesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90.
    dedicated_capacity_name = 'dedicated_capacity_name_example' # str | The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63.
    api_version = 'api_version_example' # str | The client API version.
    subscription_id = 'subscription_id_example' # str | A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    capacity_update_parameters = openapi_client.DedicatedCapacityUpdateParameters() # DedicatedCapacityUpdateParameters | Request object that contains the updated information for the capacity.

    try:
        api_response = api_instance.capacities_update(resource_group_name, dedicated_capacity_name, api_version, subscription_id, capacity_update_parameters)
        print("The response of CapacitiesApi->capacities_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CapacitiesApi->capacities_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the Azure Resource group of which a given PowerBIDedicated capacity is part. This name must be at least 1 character in length, and no more than 90. | 
 **dedicated_capacity_name** | **str**| The name of the Dedicated capacity. It must be at least 3 characters in length, and no more than 63. | 
 **api_version** | **str**| The client API version. | 
 **subscription_id** | **str**| A unique identifier for a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **capacity_update_parameters** | [**DedicatedCapacityUpdateParameters**](DedicatedCapacityUpdateParameters.md)| Request object that contains the updated information for the capacity. | 

### Return type

[**DedicatedCapacity**](DedicatedCapacity.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

