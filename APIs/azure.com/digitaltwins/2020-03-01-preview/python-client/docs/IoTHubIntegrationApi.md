# openapi_client.IoTHubIntegrationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**digital_twins_io_t_hubs_list**](IoTHubIntegrationApi.md#digital_twins_io_t_hubs_list) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DigitalTwins/digitalTwinsInstances/{resourceName}/integrationResources | 
[**io_t_hub_create_or_update**](IoTHubIntegrationApi.md#io_t_hub_create_or_update) | **PUT** /{scope}/providers/Microsoft.DigitalTwins/integrationResources/{integrationResourceName} | 
[**io_t_hub_delete**](IoTHubIntegrationApi.md#io_t_hub_delete) | **DELETE** /{scope}/providers/Microsoft.DigitalTwins/integrationResources/{integrationResourceName} | 
[**io_t_hub_get**](IoTHubIntegrationApi.md#io_t_hub_get) | **GET** /{scope}/providers/Microsoft.DigitalTwins/integrationResources/{integrationResourceName} | 


# **digital_twins_io_t_hubs_list**
> DigitalTwinsIntegrationResourceListResult digital_twins_io_t_hubs_list(api_version, subscription_id, resource_group_name, resource_name)



Get DigitalTwinsInstance IoTHubs.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.digital_twins_integration_resource_list_result import DigitalTwinsIntegrationResourceListResult
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
    api_instance = openapi_client.IoTHubIntegrationApi(api_client)
    api_version = 'api_version_example' # str | Version of the DigitalTwinsInstance Management API.
    subscription_id = 'subscription_id_example' # str | The subscription identifier.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group that contains the DigitalTwinsInstance.
    resource_name = 'resource_name_example' # str | The name of the DigitalTwinsInstance.

    try:
        api_response = api_instance.digital_twins_io_t_hubs_list(api_version, subscription_id, resource_group_name, resource_name)
        print("The response of IoTHubIntegrationApi->digital_twins_io_t_hubs_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTHubIntegrationApi->digital_twins_io_t_hubs_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Version of the DigitalTwinsInstance Management API. | 
 **subscription_id** | **str**| The subscription identifier. | 
 **resource_group_name** | **str**| The name of the resource group that contains the DigitalTwinsInstance. | 
 **resource_name** | **str**| The name of the DigitalTwinsInstance. | 

### Return type

[**DigitalTwinsIntegrationResourceListResult**](DigitalTwinsIntegrationResourceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The body contains all the non-security properties of the DigitalTwinsInstance. Security-related properties are set to null. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_hub_create_or_update**
> IntegrationResource io_t_hub_create_or_update(scope, integration_resource_name, iot_hub_description)



Creates or Updates an IoTHub Integration with DigitalTwinsInstances.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_resource import IntegrationResource
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
    api_instance = openapi_client.IoTHubIntegrationApi(api_client)
    scope = 'scope_example' # str | The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}.
    integration_resource_name = 'integration_resource_name_example' # str | Name of IoTHub and DigitalTwinsInstance integration instance.
    iot_hub_description = openapi_client.IntegrationResource() # IntegrationResource | The IoTHub metadata.

    try:
        api_response = api_instance.io_t_hub_create_or_update(scope, integration_resource_name, iot_hub_description)
        print("The response of IoTHubIntegrationApi->io_t_hub_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTHubIntegrationApi->io_t_hub_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}. | 
 **integration_resource_name** | **str**| Name of IoTHub and DigitalTwinsInstance integration instance. | 
 **iot_hub_description** | [**IntegrationResource**](IntegrationResource.md)| The IoTHub metadata. | 

### Return type

[**IntegrationResource**](IntegrationResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | This is an asynchronous operation. The body contains metadata about IoTHub and DigitalTwinsInstance Integration. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_hub_delete**
> io_t_hub_delete(scope, integration_resource_name)



Deletes a DigitalTwinsInstance link with IoTHub.

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
    api_instance = openapi_client.IoTHubIntegrationApi(api_client)
    scope = 'scope_example' # str | The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}.
    integration_resource_name = 'integration_resource_name_example' # str | Name of IoTHub and DigitalTwinsInstance integration instance.

    try:
        api_instance.io_t_hub_delete(scope, integration_resource_name)
    except Exception as e:
        print("Exception when calling IoTHubIntegrationApi->io_t_hub_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}. | 
 **integration_resource_name** | **str**| Name of IoTHub and DigitalTwinsInstance integration instance. | 

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
**200** | OK. DigitalTwinsInstance IoTHub link has been Deleted. |  -  |
**202** | Accepted. Response includes a Location header which points to the DigitalTwins and IoTHub Integration resource. |  -  |
**204** | NoContent. DigitalTwinsInstance IoTHub link does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **io_t_hub_get**
> IntegrationResource io_t_hub_get(scope, integration_resource_name)



Gets properties of an IoTHub Integration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.integration_resource import IntegrationResource
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
    api_instance = openapi_client.IoTHubIntegrationApi(api_client)
    scope = 'scope_example' # str | The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}.
    integration_resource_name = 'integration_resource_name_example' # str | Name of IoTHub and DigitalTwinsInstance integration instance.

    try:
        api_response = api_instance.io_t_hub_get(scope, integration_resource_name)
        print("The response of IoTHubIntegrationApi->io_t_hub_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling IoTHubIntegrationApi->io_t_hub_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the Digital Twins Integration. The scope has to be an IoTHub resource. For example, /{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Devices/IoTHubs/{resourceName}. | 
 **integration_resource_name** | **str**| Name of IoTHub and DigitalTwinsInstance integration instance. | 

### Return type

[**IntegrationResource**](IntegrationResource.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | This is a synchronous operation. The body contains metadata about IoTHub and DigitalTwinsInstance Integration. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

