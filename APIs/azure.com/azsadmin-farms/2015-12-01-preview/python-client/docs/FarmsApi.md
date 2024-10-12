# openapi_client.FarmsApi

All URIs are relative to *https://adminmanagement.local.azurestack.external*

Method | HTTP request | Description
------------- | ------------- | -------------
[**farms_create**](FarmsApi.md#farms_create) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId} | 
[**farms_get**](FarmsApi.md#farms_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId} | 
[**farms_list**](FarmsApi.md#farms_list) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms | 
[**farms_list_metric_definitions**](FarmsApi.md#farms_list_metric_definitions) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/metricdefinitions | 
[**farms_list_metrics**](FarmsApi.md#farms_list_metrics) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/metrics | 
[**farms_start_garbage_collection**](FarmsApi.md#farms_start_garbage_collection) | **POST** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId}/ondemandgc | 
[**farms_update**](FarmsApi.md#farms_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Storage.Admin/farms/{farmId} | 


# **farms_create**
> Farm farms_create(subscription_id, resource_group_name, farm_id, api_version, farm_object)



Create a new storage farm.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.farm import Farm
from openapi_client.models.farm_creation_properties import FarmCreationProperties
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FarmsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    api_version = 'api_version_example' # str | REST Api Version.
    farm_object = openapi_client.FarmCreationProperties() # FarmCreationProperties | Parameters used to create a farm

    try:
        api_response = api_instance.farms_create(subscription_id, resource_group_name, farm_id, api_version, farm_object)
        print("The response of FarmsApi->farms_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FarmsApi->farms_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **api_version** | **str**| REST Api Version. | 
 **farm_object** | [**FarmCreationProperties**](FarmCreationProperties.md)| Parameters used to create a farm | 

### Return type

[**Farm**](Farm.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The new storage farm has been created. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **farms_get**
> Farm farms_get(subscription_id, resource_group_name, farm_id, api_version)



Returns the Storage properties and settings for a specified storage farm.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.farm import Farm
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FarmsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.farms_get(subscription_id, resource_group_name, farm_id, api_version)
        print("The response of FarmsApi->farms_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FarmsApi->farms_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**Farm**](Farm.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The farm has been returned. |  -  |
**404** | NOT FOUND -- The specified farm was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **farms_list**
> FarmList farms_list(subscription_id, resource_group_name, api_version)



Returns a list of all storage farms.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.farm_list import FarmList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FarmsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.farms_list(subscription_id, resource_group_name, api_version)
        print("The response of FarmsApi->farms_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FarmsApi->farms_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**FarmList**](FarmList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The list of storage farms has been returned. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **farms_list_metric_definitions**
> FarmsListMetricDefinitions200Response farms_list_metric_definitions(subscription_id, resource_group_name, farm_id, api_version)



Returns a list of metric definitions for a storage farm.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.farms_list_metric_definitions200_response import FarmsListMetricDefinitions200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FarmsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.farms_list_metric_definitions(subscription_id, resource_group_name, farm_id, api_version)
        print("The response of FarmsApi->farms_list_metric_definitions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FarmsApi->farms_list_metric_definitions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**FarmsListMetricDefinitions200Response**](FarmsListMetricDefinitions200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The list of metric definitions has been returned. |  -  |
**404** | NOT FOUND -- The specified farm was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **farms_list_metrics**
> FarmsListMetrics200Response farms_list_metrics(subscription_id, resource_group_name, farm_id, api_version)



Returns a list of storage farm metrics.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.farms_list_metrics200_response import FarmsListMetrics200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FarmsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_response = api_instance.farms_list_metrics(subscription_id, resource_group_name, farm_id, api_version)
        print("The response of FarmsApi->farms_list_metrics:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FarmsApi->farms_list_metrics: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **api_version** | **str**| REST Api Version. | 

### Return type

[**FarmsListMetrics200Response**](FarmsListMetrics200Response.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The list of metrics has been returned. |  -  |
**404** | NOT FOUND -- The specified farm was not found. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **farms_start_garbage_collection**
> farms_start_garbage_collection(subscription_id, resource_group_name, farm_id, api_version)



Start garbage collection on deleted storage objects.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FarmsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    api_version = 'api_version_example' # str | REST Api Version.

    try:
        api_instance.farms_start_garbage_collection(subscription_id, resource_group_name, farm_id, api_version)
    except Exception as e:
        print("Exception when calling FarmsApi->farms_start_garbage_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **api_version** | **str**| REST Api Version. | 

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
**200** | OK -- Garbage collection has completed. |  -  |
**202** | ACCEPTED -- Garbage collection has started. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **farms_update**
> Farm farms_update(subscription_id, api_version, resource_group_name, farm_id, farm_object)



Update an existing storage farm.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.farm import Farm
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://adminmanagement.local.azurestack.external
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://adminmanagement.local.azurestack.external"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FarmsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id.
    api_version = 'api_version_example' # str | REST Api Version.
    resource_group_name = 'resource_group_name_example' # str | Resource group name.
    farm_id = 'farm_id_example' # str | Farm Id.
    farm_object = openapi_client.Farm() # Farm | Farm to update.

    try:
        api_response = api_instance.farms_update(subscription_id, api_version, resource_group_name, farm_id, farm_object)
        print("The response of FarmsApi->farms_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FarmsApi->farms_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id. | 
 **api_version** | **str**| REST Api Version. | 
 **resource_group_name** | **str**| Resource group name. | 
 **farm_id** | **str**| Farm Id. | 
 **farm_object** | [**Farm**](Farm.md)| Farm to update. | 

### Return type

[**Farm**](Farm.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK -- The properties and settings of storage farm have been updated. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

