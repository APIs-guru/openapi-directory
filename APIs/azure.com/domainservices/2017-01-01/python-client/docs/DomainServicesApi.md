# openapi_client.DomainServicesApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domain_service_operations_list**](DomainServicesApi.md#domain_service_operations_list) | **GET** /providers/Microsoft.AAD/operations | 
[**domain_services_create_or_update**](DomainServicesApi.md#domain_services_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName} | Create or Update Domain Service (PUT Resource)
[**domain_services_delete**](DomainServicesApi.md#domain_services_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName} | Delete Domain Service (DELETE Resource)
[**domain_services_get**](DomainServicesApi.md#domain_services_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName} | Get Domain Service (GET Resources)
[**domain_services_list**](DomainServicesApi.md#domain_services_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.AAD/domainServices | List Domain Services in Subscription (GET Resources)
[**domain_services_list_by_resource_group**](DomainServicesApi.md#domain_services_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices | List Domain Services in Resource Group (GET Resources)
[**domain_services_update**](DomainServicesApi.md#domain_services_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AAD/domainServices/{domainServiceName} | Update Domain Service (PATCH Resource)


# **domain_service_operations_list**
> OperationEntityListResult domain_service_operations_list(api_version)



Lists all the available Domain Services operations.

### Example


```python
import openapi_client
from openapi_client.models.operation_entity_list_result import OperationEntityListResult
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
    api_instance = openapi_client.DomainServicesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.

    try:
        api_response = api_instance.domain_service_operations_list(api_version)
        print("The response of DomainServicesApi->domain_service_operations_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainServicesApi->domain_service_operations_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 

### Return type

[**OperationEntityListResult**](OperationEntityListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTTP 200 (OK) if the operation was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domain_services_create_or_update**
> DomainService domain_services_create_or_update(api_version, subscription_id, resource_group_name, domain_service_name, domain_service)

Create or Update Domain Service (PUT Resource)

The Create Domain Service operation creates a new domain service with the specified parameters. If the specific service already exists, then any patchable properties will be updated and any immutable properties will remain unchanged.

### Example


```python
import openapi_client
from openapi_client.models.domain_service import DomainService
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
    api_instance = openapi_client.DomainServicesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    domain_service_name = 'domain_service_name_example' # str | The name of the domain service.
    domain_service = openapi_client.DomainService() # DomainService | Properties supplied to the Create or Update a Domain Service operation.

    try:
        # Create or Update Domain Service (PUT Resource)
        api_response = api_instance.domain_services_create_or_update(api_version, subscription_id, resource_group_name, domain_service_name, domain_service)
        print("The response of DomainServicesApi->domain_services_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainServicesApi->domain_services_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **domain_service_name** | **str**| The name of the domain service. | 
 **domain_service** | [**DomainService**](DomainService.md)| Properties supplied to the Create or Update a Domain Service operation. | 

### Return type

[**DomainService**](DomainService.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTTP 200 (OK) if the operation was successful. |  -  |
**201** | HTTP 201 (Created) if the operation completed successfully. |  -  |
**202** | HTTP 202 (Accepted) if the operation was successfully started and will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domain_services_delete**
> domain_services_delete(api_version, subscription_id, resource_group_name, domain_service_name)

Delete Domain Service (DELETE Resource)

The Delete Domain Service operation deletes an existing Domain Service.

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
    api_instance = openapi_client.DomainServicesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    domain_service_name = 'domain_service_name_example' # str | The name of the domain service.

    try:
        # Delete Domain Service (DELETE Resource)
        api_instance.domain_services_delete(api_version, subscription_id, resource_group_name, domain_service_name)
    except Exception as e:
        print("Exception when calling DomainServicesApi->domain_services_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **domain_service_name** | **str**| The name of the domain service. | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**202** | HTTP 202 (Accepted) if the operation was successfully started and will complete asynchronously. |  -  |
**204** | HTTP 204 (Not Content) should be used if the resource does not exist and the request is well formed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domain_services_get**
> DomainService domain_services_get(api_version, subscription_id, resource_group_name, domain_service_name)

Get Domain Service (GET Resources)

The Get Domain Service operation retrieves a json representation of the Domain Service.

### Example


```python
import openapi_client
from openapi_client.models.domain_service import DomainService
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
    api_instance = openapi_client.DomainServicesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    domain_service_name = 'domain_service_name_example' # str | The name of the domain service.

    try:
        # Get Domain Service (GET Resources)
        api_response = api_instance.domain_services_get(api_version, subscription_id, resource_group_name, domain_service_name)
        print("The response of DomainServicesApi->domain_services_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainServicesApi->domain_services_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **domain_service_name** | **str**| The name of the domain service. | 

### Return type

[**DomainService**](DomainService.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTTP 200 (OK) if the operation was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domain_services_list**
> DomainServiceListResult domain_services_list(api_version, subscription_id)

List Domain Services in Subscription (GET Resources)

The List Domain Services in Subscription operation lists all the domain services available under the given subscription (and across all resource groups within that subscription).

### Example


```python
import openapi_client
from openapi_client.models.domain_service_list_result import DomainServiceListResult
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
    api_instance = openapi_client.DomainServicesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.

    try:
        # List Domain Services in Subscription (GET Resources)
        api_response = api_instance.domain_services_list(api_version, subscription_id)
        print("The response of DomainServicesApi->domain_services_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainServicesApi->domain_services_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 

### Return type

[**DomainServiceListResult**](DomainServiceListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTTP 200 (OK) if the operation was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domain_services_list_by_resource_group**
> DomainServiceListResult domain_services_list_by_resource_group(api_version, subscription_id, resource_group_name)

List Domain Services in Resource Group (GET Resources)

The List Domain Services in Resource Group operation lists all the domain services available under the given resource group.

### Example


```python
import openapi_client
from openapi_client.models.domain_service_list_result import DomainServiceListResult
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
    api_instance = openapi_client.DomainServicesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.

    try:
        # List Domain Services in Resource Group (GET Resources)
        api_response = api_instance.domain_services_list_by_resource_group(api_version, subscription_id, resource_group_name)
        print("The response of DomainServicesApi->domain_services_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainServicesApi->domain_services_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 

### Return type

[**DomainServiceListResult**](DomainServiceListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTTP 200 (OK) if the operation was successful. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domain_services_update**
> DomainService domain_services_update(api_version, subscription_id, resource_group_name, domain_service_name, domain_service)

Update Domain Service (PATCH Resource)

The Update Domain Service operation can be used to update the existing deployment. The update call only supports the properties listed in the PATCH body.

### Example


```python
import openapi_client
from openapi_client.models.domain_service import DomainService
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
    api_instance = openapi_client.DomainServicesApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    subscription_id = 'subscription_id_example' # str | Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription. The name is case insensitive.
    domain_service_name = 'domain_service_name_example' # str | The name of the domain service.
    domain_service = openapi_client.DomainService() # DomainService | Properties supplied to the Update a Domain Service operation.

    try:
        # Update Domain Service (PATCH Resource)
        api_response = api_instance.domain_services_update(api_version, subscription_id, resource_group_name, domain_service_name, domain_service)
        print("The response of DomainServicesApi->domain_services_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainServicesApi->domain_services_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **subscription_id** | **str**| Gets subscription credentials which uniquely identify the Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. The name is case insensitive. | 
 **domain_service_name** | **str**| The name of the domain service. | 
 **domain_service** | [**DomainService**](DomainService.md)| Properties supplied to the Update a Domain Service operation. | 

### Return type

[**DomainService**](DomainService.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | HTTP 200 (OK) if the operation was successful. |  -  |
**202** | HTTP 202 (Accepted) if the operation was successfully started and will complete asynchronously. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

