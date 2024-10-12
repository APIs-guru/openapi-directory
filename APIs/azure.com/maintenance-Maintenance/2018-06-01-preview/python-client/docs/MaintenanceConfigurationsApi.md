# openapi_client.MaintenanceConfigurationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**maintenance_configurations_create_or_update**](MaintenanceConfigurationsApi.md#maintenance_configurations_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName} | Create or Update configuration record
[**maintenance_configurations_delete**](MaintenanceConfigurationsApi.md#maintenance_configurations_delete) | **DELETE** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName} | Delete Configuration record
[**maintenance_configurations_get**](MaintenanceConfigurationsApi.md#maintenance_configurations_get) | **GET** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName} | Get Configuration record
[**maintenance_configurations_list**](MaintenanceConfigurationsApi.md#maintenance_configurations_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Maintenance/maintenanceConfigurations | Get Configuration records within a subscription
[**maintenance_configurations_update**](MaintenanceConfigurationsApi.md#maintenance_configurations_update) | **PATCH** /subscriptions/{subscriptionId}/resourcegroups/{resourceGroupName}/providers/Microsoft.Maintenance/maintenanceConfigurations/{resourceName} | Patch configuration record


# **maintenance_configurations_create_or_update**
> MaintenanceConfiguration maintenance_configurations_create_or_update(subscription_id, resource_group_name, resource_name, api_version, configuration)

Create or Update configuration record

### Example


```python
import openapi_client
from openapi_client.models.maintenance_configuration import MaintenanceConfiguration
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
    api_instance = openapi_client.MaintenanceConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    resource_name = 'resource_name_example' # str | Resource Identifier
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    configuration = openapi_client.MaintenanceConfiguration() # MaintenanceConfiguration | The configuration

    try:
        # Create or Update configuration record
        api_response = api_instance.maintenance_configurations_create_or_update(subscription_id, resource_group_name, resource_name, api_version, configuration)
        print("The response of MaintenanceConfigurationsApi->maintenance_configurations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MaintenanceConfigurationsApi->maintenance_configurations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource Group Name | 
 **resource_name** | **str**| Resource Identifier | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **configuration** | [**MaintenanceConfiguration**](MaintenanceConfiguration.md)| The configuration | 

### Return type

[**MaintenanceConfiguration**](MaintenanceConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maintenance_configurations_delete**
> MaintenanceConfiguration maintenance_configurations_delete(subscription_id, resource_group_name, resource_name, api_version)

Delete Configuration record

### Example


```python
import openapi_client
from openapi_client.models.maintenance_configuration import MaintenanceConfiguration
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
    api_instance = openapi_client.MaintenanceConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    resource_name = 'resource_name_example' # str | Resource Identifier
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Delete Configuration record
        api_response = api_instance.maintenance_configurations_delete(subscription_id, resource_group_name, resource_name, api_version)
        print("The response of MaintenanceConfigurationsApi->maintenance_configurations_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MaintenanceConfigurationsApi->maintenance_configurations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource Group Name | 
 **resource_name** | **str**| Resource Identifier | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**MaintenanceConfiguration**](MaintenanceConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maintenance_configurations_get**
> MaintenanceConfiguration maintenance_configurations_get(subscription_id, resource_group_name, resource_name, api_version)

Get Configuration record

### Example


```python
import openapi_client
from openapi_client.models.maintenance_configuration import MaintenanceConfiguration
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
    api_instance = openapi_client.MaintenanceConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    resource_name = 'resource_name_example' # str | Resource Identifier
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Get Configuration record
        api_response = api_instance.maintenance_configurations_get(subscription_id, resource_group_name, resource_name, api_version)
        print("The response of MaintenanceConfigurationsApi->maintenance_configurations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MaintenanceConfigurationsApi->maintenance_configurations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource Group Name | 
 **resource_name** | **str**| Resource Identifier | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**MaintenanceConfiguration**](MaintenanceConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maintenance_configurations_list**
> ListMaintenanceConfigurationsResult maintenance_configurations_list(subscription_id, api_version)

Get Configuration records within a subscription

### Example


```python
import openapi_client
from openapi_client.models.list_maintenance_configurations_result import ListMaintenanceConfigurationsResult
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
    api_instance = openapi_client.MaintenanceConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Get Configuration records within a subscription
        api_response = api_instance.maintenance_configurations_list(subscription_id, api_version)
        print("The response of MaintenanceConfigurationsApi->maintenance_configurations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MaintenanceConfigurationsApi->maintenance_configurations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**ListMaintenanceConfigurationsResult**](ListMaintenanceConfigurationsResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **maintenance_configurations_update**
> MaintenanceConfiguration maintenance_configurations_update(subscription_id, resource_group_name, resource_name, api_version, configuration)

Patch configuration record

### Example


```python
import openapi_client
from openapi_client.models.maintenance_configuration import MaintenanceConfiguration
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
    api_instance = openapi_client.MaintenanceConfigurationsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | Resource Group Name
    resource_name = 'resource_name_example' # str | Resource Identifier
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    configuration = openapi_client.MaintenanceConfiguration() # MaintenanceConfiguration | The configuration

    try:
        # Patch configuration record
        api_response = api_instance.maintenance_configurations_update(subscription_id, resource_group_name, resource_name, api_version, configuration)
        print("The response of MaintenanceConfigurationsApi->maintenance_configurations_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MaintenanceConfigurationsApi->maintenance_configurations_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| Resource Group Name | 
 **resource_name** | **str**| Resource Identifier | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **configuration** | [**MaintenanceConfiguration**](MaintenanceConfiguration.md)| The configuration | 

### Return type

[**MaintenanceConfiguration**](MaintenanceConfiguration.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | BadRequest |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

