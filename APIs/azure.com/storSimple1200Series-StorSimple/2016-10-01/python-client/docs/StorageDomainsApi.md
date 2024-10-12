# openapi_client.StorageDomainsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**storage_domains_create_or_update**](StorageDomainsApi.md#storage_domains_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageDomains/{storageDomainName} | 
[**storage_domains_delete**](StorageDomainsApi.md#storage_domains_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageDomains/{storageDomainName} | 
[**storage_domains_get**](StorageDomainsApi.md#storage_domains_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageDomains/{storageDomainName} | 
[**storage_domains_list_by_manager**](StorageDomainsApi.md#storage_domains_list_by_manager) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.StorSimple/managers/{managerName}/storageDomains | 


# **storage_domains_create_or_update**
> StorageDomain storage_domains_create_or_update(storage_domain_name, subscription_id, resource_group_name, manager_name, api_version, storage_domain)



Creates or updates the storage domain.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_domain import StorageDomain
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
    api_instance = openapi_client.StorageDomainsApi(api_client)
    storage_domain_name = 'storage_domain_name_example' # str | The storage domain name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version
    storage_domain = openapi_client.StorageDomain() # StorageDomain | The storageDomain.

    try:
        api_response = api_instance.storage_domains_create_or_update(storage_domain_name, subscription_id, resource_group_name, manager_name, api_version, storage_domain)
        print("The response of StorageDomainsApi->storage_domains_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageDomainsApi->storage_domains_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_domain_name** | **str**| The storage domain name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 
 **storage_domain** | [**StorageDomain**](StorageDomain.md)| The storageDomain. | 

### Return type

[**StorageDomain**](StorageDomain.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully created or updated the storage domain. |  -  |
**202** | Accepted the request to create or update the storage domain. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_domains_delete**
> storage_domains_delete(storage_domain_name, subscription_id, resource_group_name, manager_name, api_version)



Deletes the storage domain.

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
    api_instance = openapi_client.StorageDomainsApi(api_client)
    storage_domain_name = 'storage_domain_name_example' # str | The storage domain name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_instance.storage_domains_delete(storage_domain_name, subscription_id, resource_group_name, manager_name, api_version)
    except Exception as e:
        print("Exception when calling StorageDomainsApi->storage_domains_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_domain_name** | **str**| The storage domain name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

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
**202** | Accepted the request to delete the storage domain. |  -  |
**204** | Successfully deleted the storage domain. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_domains_get**
> StorageDomain storage_domains_get(storage_domain_name, subscription_id, resource_group_name, manager_name, api_version)



Returns the properties of the specified storage domain name.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_domain import StorageDomain
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
    api_instance = openapi_client.StorageDomainsApi(api_client)
    storage_domain_name = 'storage_domain_name_example' # str | The storage domain name.
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.storage_domains_get(storage_domain_name, subscription_id, resource_group_name, manager_name, api_version)
        print("The response of StorageDomainsApi->storage_domains_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageDomainsApi->storage_domains_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **storage_domain_name** | **str**| The storage domain name. | 
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**StorageDomain**](StorageDomain.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The storage domain. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **storage_domains_list_by_manager**
> StorageDomainList storage_domains_list_by_manager(subscription_id, resource_group_name, manager_name, api_version)



Retrieves all the storage domains in a manager.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.storage_domain_list import StorageDomainList
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
    api_instance = openapi_client.StorageDomainsApi(api_client)
    subscription_id = 'subscription_id_example' # str | The subscription id
    resource_group_name = 'resource_group_name_example' # str | The resource group name
    manager_name = 'manager_name_example' # str | The manager name
    api_version = 'api_version_example' # str | The api version

    try:
        api_response = api_instance.storage_domains_list_by_manager(subscription_id, resource_group_name, manager_name, api_version)
        print("The response of StorageDomainsApi->storage_domains_list_by_manager:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StorageDomainsApi->storage_domains_list_by_manager: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| The subscription id | 
 **resource_group_name** | **str**| The resource group name | 
 **manager_name** | **str**| The manager name | 
 **api_version** | **str**| The api version | 

### Return type

[**StorageDomainList**](StorageDomainList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The collection of storage domains. |  -  |
**0** | Default Response. It will be deserialized as per the Error definition specified in the schema. Exception will be thrown. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

