# openapi_client.DomainsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domains_create_or_update_domain**](DomainsApi.md#domains_create_or_update_domain) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName} | Creates a domain
[**domains_delete_domain**](DomainsApi.md#domains_delete_domain) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName} | Deletes a domain
[**domains_get_domain**](DomainsApi.md#domains_get_domain) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName} | Gets details of a domain
[**domains_get_domain_operation**](DomainsApi.md#domains_get_domain_operation) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/operationresults/{operationId} | Retrieves the latest status of a domain purchase operation
[**domains_get_domains**](DomainsApi.md#domains_get_domains) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains | Lists domains under a resource group
[**domains_update_domain**](DomainsApi.md#domains_update_domain) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName} | Creates a domain


# **domains_create_or_update_domain**
> Domain domains_create_or_update_domain(resource_group_name, domain_name, subscription_id, api_version, domain)

Creates a domain

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain import Domain
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
    api_instance = openapi_client.DomainsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | &gt;Name of the resource group
    domain_name = 'domain_name_example' # str | Name of the domain
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    domain = openapi_client.Domain() # Domain | Domain registration information

    try:
        # Creates a domain
        api_response = api_instance.domains_create_or_update_domain(resource_group_name, domain_name, subscription_id, api_version, domain)
        print("The response of DomainsApi->domains_create_or_update_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_create_or_update_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| &amp;gt;Name of the resource group | 
 **domain_name** | **str**| Name of the domain | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **domain** | [**Domain**](Domain.md)| Domain registration information | 

### Return type

[**Domain**](Domain.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Domain purchase was successful |  -  |
**202** | Domain purchase is in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_delete_domain**
> object domains_delete_domain(resource_group_name, domain_name, subscription_id, api_version, force_hard_delete_domain=force_hard_delete_domain)

Deletes a domain

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
    api_instance = openapi_client.DomainsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    domain_name = 'domain_name_example' # str | Name of the domain
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    force_hard_delete_domain = True # bool | If true then the domain will be deleted immediately instead of after 24 hours (optional)

    try:
        # Deletes a domain
        api_response = api_instance.domains_delete_domain(resource_group_name, domain_name, subscription_id, api_version, force_hard_delete_domain=force_hard_delete_domain)
        print("The response of DomainsApi->domains_delete_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_delete_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **domain_name** | **str**| Name of the domain | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **force_hard_delete_domain** | **bool**| If true then the domain will be deleted immediately instead of after 24 hours | [optional] 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Domain does not exist in Azure database probably because it has already been deleted |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_get_domain**
> Domain domains_get_domain(resource_group_name, domain_name, subscription_id, api_version)

Gets details of a domain

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain import Domain
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
    api_instance = openapi_client.DomainsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    domain_name = 'domain_name_example' # str | Name of the domain
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Gets details of a domain
        api_response = api_instance.domains_get_domain(resource_group_name, domain_name, subscription_id, api_version)
        print("The response of DomainsApi->domains_get_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_get_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **domain_name** | **str**| Name of the domain | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**Domain**](Domain.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_get_domain_operation**
> Domain domains_get_domain_operation(resource_group_name, domain_name, operation_id, subscription_id, api_version)

Retrieves the latest status of a domain purchase operation

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain import Domain
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
    api_instance = openapi_client.DomainsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    domain_name = 'domain_name_example' # str | Name of the domain
    operation_id = 'operation_id_example' # str | Domain purchase operation Id
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Retrieves the latest status of a domain purchase operation
        api_response = api_instance.domains_get_domain_operation(resource_group_name, domain_name, operation_id, subscription_id, api_version)
        print("The response of DomainsApi->domains_get_domain_operation:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_get_domain_operation: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **domain_name** | **str**| Name of the domain | 
 **operation_id** | **str**| Domain purchase operation Id | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**Domain**](Domain.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Domain purchase was successful |  -  |
**202** | Domain purchase is in progress |  -  |
**500** | Domain purchase request failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_get_domains**
> DomainCollection domains_get_domains(resource_group_name, subscription_id, api_version)

Lists domains under a resource group

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain_collection import DomainCollection
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
    api_instance = openapi_client.DomainsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Lists domains under a resource group
        api_response = api_instance.domains_get_domains(resource_group_name, subscription_id, api_version)
        print("The response of DomainsApi->domains_get_domains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_get_domains: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**DomainCollection**](DomainCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_update_domain**
> Domain domains_update_domain(resource_group_name, domain_name, subscription_id, api_version, domain)

Creates a domain

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain import Domain
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
    api_instance = openapi_client.DomainsApi(api_client)
    resource_group_name = 'resource_group_name_example' # str | &gt;Name of the resource group
    domain_name = 'domain_name_example' # str | Name of the domain
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    domain = openapi_client.Domain() # Domain | Domain registration information

    try:
        # Creates a domain
        api_response = api_instance.domains_update_domain(resource_group_name, domain_name, subscription_id, api_version, domain)
        print("The response of DomainsApi->domains_update_domain:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_update_domain: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| &amp;gt;Name of the resource group | 
 **domain_name** | **str**| Name of the domain | 
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **domain** | [**Domain**](Domain.md)| Domain registration information | 

### Return type

[**Domain**](Domain.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Domain purchase was successful |  -  |
**202** | Domain purchase is in progress |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

