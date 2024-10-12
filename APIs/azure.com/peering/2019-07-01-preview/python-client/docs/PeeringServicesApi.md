# openapi_client.PeeringServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**peering_services_create_or_update**](PeeringServicesApi.md#peering_services_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName} | 
[**peering_services_delete**](PeeringServicesApi.md#peering_services_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName} | 
[**peering_services_get**](PeeringServicesApi.md#peering_services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName} | 
[**peering_services_list_by_resource_group**](PeeringServicesApi.md#peering_services_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices | 
[**peering_services_list_by_subscription**](PeeringServicesApi.md#peering_services_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.Peering/peeringServices | 
[**peering_services_update**](PeeringServicesApi.md#peering_services_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Peering/peeringServices/{peeringServiceName} | 


# **peering_services_create_or_update**
> PeeringService peering_services_create_or_update(resource_group_name, peering_service_name, subscription_id, api_version, peering_service)



Creates a new peering service or updates an existing peering with the specified name under the given subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_service import PeeringService
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
    api_instance = openapi_client.PeeringServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_service_name = 'peering_service_name_example' # str | The name of the peering service.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.
    peering_service = openapi_client.PeeringService() # PeeringService | The properties needed to create or update a peering service.

    try:
        api_response = api_instance.peering_services_create_or_update(resource_group_name, peering_service_name, subscription_id, api_version, peering_service)
        print("The response of PeeringServicesApi->peering_services_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringServicesApi->peering_services_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_service_name** | **str**| The name of the peering service. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 
 **peering_service** | [**PeeringService**](PeeringService.md)| The properties needed to create or update a peering service. | 

### Return type

[**PeeringService**](PeeringService.md)

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
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **peering_services_delete**
> peering_services_delete(resource_group_name, peering_service_name, subscription_id, api_version)



Deletes an existing peering service with the specified name under the given subscription and resource group.

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
    api_instance = openapi_client.PeeringServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_service_name = 'peering_service_name_example' # str | The name of the peering service.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_instance.peering_services_delete(resource_group_name, peering_service_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling PeeringServicesApi->peering_services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_service_name** | **str**| The name of the peering service. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

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
**204** | NoContent |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **peering_services_get**
> PeeringService peering_services_get(resource_group_name, peering_service_name, subscription_id, api_version)



Gets an existing peering service with the specified name under the given subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_service import PeeringService
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
    api_instance = openapi_client.PeeringServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_service_name = 'peering_service_name_example' # str | The name of the peering.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.peering_services_get(resource_group_name, peering_service_name, subscription_id, api_version)
        print("The response of PeeringServicesApi->peering_services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringServicesApi->peering_services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_service_name** | **str**| The name of the peering. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**PeeringService**](PeeringService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **peering_services_list_by_resource_group**
> PeeringServiceListResult peering_services_list_by_resource_group(resource_group_name, subscription_id, api_version)



Lists all of the peering services under the given subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_service_list_result import PeeringServiceListResult
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
    api_instance = openapi_client.PeeringServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.peering_services_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of PeeringServicesApi->peering_services_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringServicesApi->peering_services_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**PeeringServiceListResult**](PeeringServiceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **peering_services_list_by_subscription**
> PeeringServiceListResult peering_services_list_by_subscription(subscription_id, api_version)



Lists all of the peerings under the given subscription.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_service_list_result import PeeringServiceListResult
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
    api_instance = openapi_client.PeeringServicesApi(api_client)
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.

    try:
        api_response = api_instance.peering_services_list_by_subscription(subscription_id, api_version)
        print("The response of PeeringServicesApi->peering_services_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringServicesApi->peering_services_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 

### Return type

[**PeeringServiceListResult**](PeeringServiceListResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **peering_services_update**
> PeeringService peering_services_update(resource_group_name, peering_service_name, subscription_id, api_version, tags)



Updates tags for a peering service with the specified name under the given subscription and resource group.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.peering_service import PeeringService
from openapi_client.models.resource_tags import ResourceTags
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
    api_instance = openapi_client.PeeringServicesApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group.
    peering_service_name = 'peering_service_name_example' # str | The name of the peering service.
    subscription_id = 'subscription_id_example' # str | The Azure subscription ID.
    api_version = 'api_version_example' # str | The client API version.
    tags = openapi_client.ResourceTags() # ResourceTags | The resource tags.

    try:
        api_response = api_instance.peering_services_update(resource_group_name, peering_service_name, subscription_id, api_version, tags)
        print("The response of PeeringServicesApi->peering_services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PeeringServicesApi->peering_services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| The name of the resource group. | 
 **peering_service_name** | **str**| The name of the peering service. | 
 **subscription_id** | **str**| The Azure subscription ID. | 
 **api_version** | **str**| The client API version. | 
 **tags** | [**ResourceTags**](ResourceTags.md)| The resource tags. | 

### Return type

[**PeeringService**](PeeringService.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | Error response describing why the operation has failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

