# openapi_client.DomainsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domains_create_or_update**](DomainsApi.md#domains_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName} | Create a domain
[**domains_delete**](DomainsApi.md#domains_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName} | Delete a domain
[**domains_get**](DomainsApi.md#domains_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName} | Get a domain
[**domains_list_by_resource_group**](DomainsApi.md#domains_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains | List domains under a resource group
[**domains_list_by_subscription**](DomainsApi.md#domains_list_by_subscription) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.EventGrid/domains | List domains under an Azure subscription
[**domains_list_shared_access_keys**](DomainsApi.md#domains_list_shared_access_keys) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/listKeys | List keys for a domain
[**domains_regenerate_key**](DomainsApi.md#domains_regenerate_key) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName}/regenerateKey | Regenerate key for a domain
[**domains_update**](DomainsApi.md#domains_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.EventGrid/domains/{domainName} | Update a domain


# **domains_create_or_update**
> Domain domains_create_or_update(subscription_id, resource_group_name, domain_name, api_version, domain_info)

Create a domain

Asynchronously creates a new domain with the specified parameters.

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    domain_name = 'domain_name_example' # str | Name of the domain
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    domain_info = openapi_client.Domain() # Domain | Domain information

    try:
        # Create a domain
        api_response = api_instance.domains_create_or_update(subscription_id, resource_group_name, domain_name, api_version, domain_info)
        print("The response of DomainsApi->domains_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **domain_name** | **str**| Name of the domain | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **domain_info** | [**Domain**](Domain.md)| Domain information | 

### Return type

[**Domain**](Domain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_delete**
> domains_delete(subscription_id, resource_group_name, domain_name, api_version)

Delete a domain

Delete existing domain

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
    api_instance = openapi_client.DomainsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    domain_name = 'domain_name_example' # str | Name of the domain
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Delete a domain
        api_instance.domains_delete(subscription_id, resource_group_name, domain_name, api_version)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **domain_name** | **str**| Name of the domain | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

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
**202** | Accepted |  -  |
**204** | NoContent |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 404 Not Found.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_get**
> Domain domains_get(subscription_id, resource_group_name, domain_name, api_version)

Get a domain

Get properties of a domain

### Example


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


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DomainsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    domain_name = 'domain_name_example' # str | Name of the domain
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # Get a domain
        api_response = api_instance.domains_get(subscription_id, resource_group_name, domain_name, api_version)
        print("The response of DomainsApi->domains_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **domain_name** | **str**| Name of the domain | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**Domain**](Domain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_list_by_resource_group**
> DomainsListResult domains_list_by_resource_group(subscription_id, resource_group_name, api_version)

List domains under a resource group

List all the domains under a resource group

### Example


```python
import openapi_client
from openapi_client.models.domains_list_result import DomainsListResult
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
    api_instance = openapi_client.DomainsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # List domains under a resource group
        api_response = api_instance.domains_list_by_resource_group(subscription_id, resource_group_name, api_version)
        print("The response of DomainsApi->domains_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**DomainsListResult**](DomainsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_list_by_subscription**
> DomainsListResult domains_list_by_subscription(subscription_id, api_version)

List domains under an Azure subscription

List all the domains under an Azure subscription

### Example


```python
import openapi_client
from openapi_client.models.domains_list_result import DomainsListResult
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
    api_instance = openapi_client.DomainsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # List domains under an Azure subscription
        api_response = api_instance.domains_list_by_subscription(subscription_id, api_version)
        print("The response of DomainsApi->domains_list_by_subscription:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_list_by_subscription: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**DomainsListResult**](DomainsListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_list_shared_access_keys**
> DomainSharedAccessKeys domains_list_shared_access_keys(subscription_id, resource_group_name, domain_name, api_version)

List keys for a domain

List the two keys used to publish to a domain

### Example


```python
import openapi_client
from openapi_client.models.domain_shared_access_keys import DomainSharedAccessKeys
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
    api_instance = openapi_client.DomainsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    domain_name = 'domain_name_example' # str | Name of the domain
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.

    try:
        # List keys for a domain
        api_response = api_instance.domains_list_shared_access_keys(subscription_id, resource_group_name, domain_name, api_version)
        print("The response of DomainsApi->domains_list_shared_access_keys:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_list_shared_access_keys: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **domain_name** | **str**| Name of the domain | 
 **api_version** | **str**| Version of the API to be used with the client request. | 

### Return type

[**DomainSharedAccessKeys**](DomainSharedAccessKeys.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_regenerate_key**
> DomainSharedAccessKeys domains_regenerate_key(subscription_id, resource_group_name, domain_name, api_version, regenerate_key_request)

Regenerate key for a domain

Regenerate a shared access key for a domain

### Example


```python
import openapi_client
from openapi_client.models.domain_regenerate_key_request import DomainRegenerateKeyRequest
from openapi_client.models.domain_shared_access_keys import DomainSharedAccessKeys
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
    api_instance = openapi_client.DomainsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    domain_name = 'domain_name_example' # str | Name of the domain
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    regenerate_key_request = openapi_client.DomainRegenerateKeyRequest() # DomainRegenerateKeyRequest | Request body to regenerate key

    try:
        # Regenerate key for a domain
        api_response = api_instance.domains_regenerate_key(subscription_id, resource_group_name, domain_name, api_version, regenerate_key_request)
        print("The response of DomainsApi->domains_regenerate_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_regenerate_key: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **domain_name** | **str**| Name of the domain | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **regenerate_key_request** | [**DomainRegenerateKeyRequest**](DomainRegenerateKeyRequest.md)| Request body to regenerate key | 

### Return type

[**DomainSharedAccessKeys**](DomainSharedAccessKeys.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_update**
> Domain domains_update(subscription_id, resource_group_name, domain_name, api_version, domain_update_parameters)

Update a domain

Asynchronously updates a domain with the specified parameters.

### Example


```python
import openapi_client
from openapi_client.models.domain import Domain
from openapi_client.models.domain_update_parameters import DomainUpdateParameters
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
    api_instance = openapi_client.DomainsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call.
    resource_group_name = 'resource_group_name_example' # str | The name of the resource group within the user's subscription.
    domain_name = 'domain_name_example' # str | Name of the domain
    api_version = 'api_version_example' # str | Version of the API to be used with the client request.
    domain_update_parameters = openapi_client.DomainUpdateParameters() # DomainUpdateParameters | Domain update information

    try:
        # Update a domain
        api_response = api_instance.domains_update(subscription_id, resource_group_name, domain_name, api_version, domain_update_parameters)
        print("The response of DomainsApi->domains_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription credentials that uniquely identify a Microsoft Azure subscription. The subscription ID forms part of the URI for every service call. | 
 **resource_group_name** | **str**| The name of the resource group within the user&#39;s subscription. | 
 **domain_name** | **str**| Name of the domain | 
 **api_version** | **str**| Version of the API to be used with the client request. | 
 **domain_update_parameters** | [**DomainUpdateParameters**](DomainUpdateParameters.md)| Domain update information | 

### Return type

[**Domain**](Domain.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Domain update request accepted. |  -  |
**0** | *** Error Responses: ***   * 400 Bad Request.   * 500 Internal Server Error. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

