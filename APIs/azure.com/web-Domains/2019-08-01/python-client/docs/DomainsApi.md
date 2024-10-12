# openapi_client.DomainsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**domains_check_availability**](DomainsApi.md#domains_check_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/checkDomainAvailability | Check if a domain is available for registration.
[**domains_create_or_update**](DomainsApi.md#domains_create_or_update) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName} | Creates or updates a domain.
[**domains_create_or_update_ownership_identifier**](DomainsApi.md#domains_create_or_update_ownership_identifier) | **PUT** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name} | Creates an ownership identifier for a domain or updates identifier details for an existing identifer
[**domains_delete**](DomainsApi.md#domains_delete) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName} | Delete a domain.
[**domains_delete_ownership_identifier**](DomainsApi.md#domains_delete_ownership_identifier) | **DELETE** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name} | Delete ownership identifier for domain
[**domains_get**](DomainsApi.md#domains_get) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName} | Get a domain.
[**domains_get_control_center_sso_request**](DomainsApi.md#domains_get_control_center_sso_request) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/generateSsoRequest | Generate a single sign-on request for the domain management portal.
[**domains_get_ownership_identifier**](DomainsApi.md#domains_get_ownership_identifier) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name} | Get ownership identifier for domain
[**domains_list**](DomainsApi.md#domains_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/domains | Get all domains in a subscription.
[**domains_list_by_resource_group**](DomainsApi.md#domains_list_by_resource_group) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains | Get all domains in a resource group.
[**domains_list_ownership_identifiers**](DomainsApi.md#domains_list_ownership_identifiers) | **GET** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers | Lists domain ownership identifiers.
[**domains_list_recommendations**](DomainsApi.md#domains_list_recommendations) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/listDomainRecommendations | Get domain name recommendations based on keywords.
[**domains_renew**](DomainsApi.md#domains_renew) | **POST** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/renew | Renew a domain.
[**domains_update**](DomainsApi.md#domains_update) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName} | Creates or updates a domain.
[**domains_update_ownership_identifier**](DomainsApi.md#domains_update_ownership_identifier) | **PATCH** /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DomainRegistration/domains/{domainName}/domainOwnershipIdentifiers/{name} | Creates an ownership identifier for a domain or updates identifier details for an existing identifer


# **domains_check_availability**
> DomainAvailabilityCheckResult domains_check_availability(subscription_id, api_version, identifier)

Check if a domain is available for registration.

Description for Check if a domain is available for registration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain_availability_check_result import DomainAvailabilityCheckResult
from openapi_client.models.domains_check_availability_request import DomainsCheckAvailabilityRequest
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
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    identifier = openapi_client.DomainsCheckAvailabilityRequest() # DomainsCheckAvailabilityRequest | Name of the domain.

    try:
        # Check if a domain is available for registration.
        api_response = api_instance.domains_check_availability(subscription_id, api_version, identifier)
        print("The response of DomainsApi->domains_check_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_check_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **identifier** | [**DomainsCheckAvailabilityRequest**](DomainsCheckAvailabilityRequest.md)| Name of the domain. | 

### Return type

[**DomainAvailabilityCheckResult**](DomainAvailabilityCheckResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_create_or_update**
> Domain domains_create_or_update(resource_group_name, domain_name, subscription_id, api_version, domain)

Creates or updates a domain.

Description for Creates or updates a domain.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    domain_name = 'domain_name_example' # str | Name of the domain.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    domain = openapi_client.Domain() # Domain | Domain registration information.

    try:
        # Creates or updates a domain.
        api_response = api_instance.domains_create_or_update(resource_group_name, domain_name, subscription_id, api_version, domain)
        print("The response of DomainsApi->domains_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **domain_name** | **str**| Name of the domain. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **domain** | [**Domain**](Domain.md)| Domain registration information. | 

### Return type

[**Domain**](Domain.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Domain purchase was successful. |  -  |
**202** | Domain purchase is in progress. |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_create_or_update_ownership_identifier**
> DomainOwnershipIdentifier domains_create_or_update_ownership_identifier(resource_group_name, domain_name, name, subscription_id, api_version, domain_ownership_identifier)

Creates an ownership identifier for a domain or updates identifier details for an existing identifer

Description for Creates an ownership identifier for a domain or updates identifier details for an existing identifer

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain_ownership_identifier import DomainOwnershipIdentifier
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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    domain_name = 'domain_name_example' # str | Name of domain.
    name = 'name_example' # str | Name of identifier.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    domain_ownership_identifier = openapi_client.DomainOwnershipIdentifier() # DomainOwnershipIdentifier | A JSON representation of the domain ownership properties.

    try:
        # Creates an ownership identifier for a domain or updates identifier details for an existing identifer
        api_response = api_instance.domains_create_or_update_ownership_identifier(resource_group_name, domain_name, name, subscription_id, api_version, domain_ownership_identifier)
        print("The response of DomainsApi->domains_create_or_update_ownership_identifier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_create_or_update_ownership_identifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **domain_name** | **str**| Name of domain. | 
 **name** | **str**| Name of identifier. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **domain_ownership_identifier** | [**DomainOwnershipIdentifier**](DomainOwnershipIdentifier.md)| A JSON representation of the domain ownership properties. | 

### Return type

[**DomainOwnershipIdentifier**](DomainOwnershipIdentifier.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_delete**
> domains_delete(resource_group_name, domain_name, subscription_id, api_version, force_hard_delete_domain=force_hard_delete_domain)

Delete a domain.

Description for Delete a domain.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    domain_name = 'domain_name_example' # str | Name of the domain.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    force_hard_delete_domain = True # bool | Specify <code>true</code> to delete the domain immediately. The default is <code>false</code> which deletes the domain after 24 hours. (optional)

    try:
        # Delete a domain.
        api_instance.domains_delete(resource_group_name, domain_name, subscription_id, api_version, force_hard_delete_domain=force_hard_delete_domain)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **domain_name** | **str**| Name of the domain. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **force_hard_delete_domain** | **bool**| Specify &lt;code&gt;true&lt;/code&gt; to delete the domain immediately. The default is &lt;code&gt;false&lt;/code&gt; which deletes the domain after 24 hours. | [optional] 

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
**200** | Successfully deleted domain. |  -  |
**204** | Domain does not exist in Azure database probably because it has already been deleted |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_delete_ownership_identifier**
> domains_delete_ownership_identifier(resource_group_name, domain_name, name, subscription_id, api_version)

Delete ownership identifier for domain

Description for Delete ownership identifier for domain

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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    domain_name = 'domain_name_example' # str | Name of domain.
    name = 'name_example' # str | Name of identifier.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Delete ownership identifier for domain
        api_instance.domains_delete_ownership_identifier(resource_group_name, domain_name, name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_delete_ownership_identifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **domain_name** | **str**| Name of domain. | 
 **name** | **str**| Name of identifier. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**200** | Successfully deleted domain ownership identifier. |  -  |
**204** | Domain ownership identifier does not exist. |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_get**
> Domain domains_get(resource_group_name, domain_name, subscription_id, api_version)

Get a domain.

Description for Get a domain.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    domain_name = 'domain_name_example' # str | Name of the domain.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get a domain.
        api_response = api_instance.domains_get(resource_group_name, domain_name, subscription_id, api_version)
        print("The response of DomainsApi->domains_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **domain_name** | **str**| Name of the domain. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**Domain**](Domain.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_get_control_center_sso_request**
> DomainControlCenterSsoRequest domains_get_control_center_sso_request(subscription_id, api_version)

Generate a single sign-on request for the domain management portal.

Description for Generate a single sign-on request for the domain management portal.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain_control_center_sso_request import DomainControlCenterSsoRequest
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
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Generate a single sign-on request for the domain management portal.
        api_response = api_instance.domains_get_control_center_sso_request(subscription_id, api_version)
        print("The response of DomainsApi->domains_get_control_center_sso_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_get_control_center_sso_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DomainControlCenterSsoRequest**](DomainControlCenterSsoRequest.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_get_ownership_identifier**
> DomainOwnershipIdentifier domains_get_ownership_identifier(resource_group_name, domain_name, name, subscription_id, api_version)

Get ownership identifier for domain

Description for Get ownership identifier for domain

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain_ownership_identifier import DomainOwnershipIdentifier
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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    domain_name = 'domain_name_example' # str | Name of domain.
    name = 'name_example' # str | Name of identifier.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get ownership identifier for domain
        api_response = api_instance.domains_get_ownership_identifier(resource_group_name, domain_name, name, subscription_id, api_version)
        print("The response of DomainsApi->domains_get_ownership_identifier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_get_ownership_identifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **domain_name** | **str**| Name of domain. | 
 **name** | **str**| Name of identifier. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DomainOwnershipIdentifier**](DomainOwnershipIdentifier.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_list**
> DomainCollection domains_list(subscription_id, api_version)

Get all domains in a subscription.

Description for Get all domains in a subscription.

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
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all domains in a subscription.
        api_response = api_instance.domains_list(subscription_id, api_version)
        print("The response of DomainsApi->domains_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DomainCollection**](DomainCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_list_by_resource_group**
> DomainCollection domains_list_by_resource_group(resource_group_name, subscription_id, api_version)

Get all domains in a resource group.

Description for Get all domains in a resource group.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all domains in a resource group.
        api_response = api_instance.domains_list_by_resource_group(resource_group_name, subscription_id, api_version)
        print("The response of DomainsApi->domains_list_by_resource_group:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_list_by_resource_group: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DomainCollection**](DomainCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_list_ownership_identifiers**
> DomainOwnershipIdentifierCollection domains_list_ownership_identifiers(resource_group_name, domain_name, subscription_id, api_version)

Lists domain ownership identifiers.

Description for Lists domain ownership identifiers.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain_ownership_identifier_collection import DomainOwnershipIdentifierCollection
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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    domain_name = 'domain_name_example' # str | Name of domain.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Lists domain ownership identifiers.
        api_response = api_instance.domains_list_ownership_identifiers(resource_group_name, domain_name, subscription_id, api_version)
        print("The response of DomainsApi->domains_list_ownership_identifiers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_list_ownership_identifiers: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **domain_name** | **str**| Name of domain. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**DomainOwnershipIdentifierCollection**](DomainOwnershipIdentifierCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_list_recommendations**
> NameIdentifierCollection domains_list_recommendations(subscription_id, api_version, parameters)

Get domain name recommendations based on keywords.

Description for Get domain name recommendations based on keywords.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain_recommendation_search_parameters import DomainRecommendationSearchParameters
from openapi_client.models.name_identifier_collection import NameIdentifierCollection
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
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    parameters = openapi_client.DomainRecommendationSearchParameters() # DomainRecommendationSearchParameters | Search parameters for domain name recommendations.

    try:
        # Get domain name recommendations based on keywords.
        api_response = api_instance.domains_list_recommendations(subscription_id, api_version, parameters)
        print("The response of DomainsApi->domains_list_recommendations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_list_recommendations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **parameters** | [**DomainRecommendationSearchParameters**](DomainRecommendationSearchParameters.md)| Search parameters for domain name recommendations. | 

### Return type

[**NameIdentifierCollection**](NameIdentifierCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_renew**
> domains_renew(resource_group_name, domain_name, subscription_id, api_version)

Renew a domain.

Description for Renew a domain.

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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    domain_name = 'domain_name_example' # str | Name of the domain.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Renew a domain.
        api_instance.domains_renew(resource_group_name, domain_name, subscription_id, api_version)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_renew: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **domain_name** | **str**| Name of the domain. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

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
**200** | Domain renewal was successful. |  -  |
**202** | Domain renewal in progress. |  -  |
**204** | Domain does not exist. |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_update**
> Domain domains_update(resource_group_name, domain_name, subscription_id, api_version, domain)

Creates or updates a domain.

Description for Creates or updates a domain.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain import Domain
from openapi_client.models.domain_patch_resource import DomainPatchResource
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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    domain_name = 'domain_name_example' # str | Name of the domain.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    domain = openapi_client.DomainPatchResource() # DomainPatchResource | Domain registration information.

    try:
        # Creates or updates a domain.
        api_response = api_instance.domains_update(resource_group_name, domain_name, subscription_id, api_version, domain)
        print("The response of DomainsApi->domains_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **domain_name** | **str**| Name of the domain. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **domain** | [**DomainPatchResource**](DomainPatchResource.md)| Domain registration information. | 

### Return type

[**Domain**](Domain.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Domain purchase was successful. |  -  |
**202** | Domain purchase is in progress. |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **domains_update_ownership_identifier**
> DomainOwnershipIdentifier domains_update_ownership_identifier(resource_group_name, domain_name, name, subscription_id, api_version, domain_ownership_identifier)

Creates an ownership identifier for a domain or updates identifier details for an existing identifer

Description for Creates an ownership identifier for a domain or updates identifier details for an existing identifer

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain_ownership_identifier import DomainOwnershipIdentifier
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
    resource_group_name = 'resource_group_name_example' # str | Name of the resource group to which the resource belongs.
    domain_name = 'domain_name_example' # str | Name of domain.
    name = 'name_example' # str | Name of identifier.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    domain_ownership_identifier = openapi_client.DomainOwnershipIdentifier() # DomainOwnershipIdentifier | A JSON representation of the domain ownership properties.

    try:
        # Creates an ownership identifier for a domain or updates identifier details for an existing identifer
        api_response = api_instance.domains_update_ownership_identifier(resource_group_name, domain_name, name, subscription_id, api_version, domain_ownership_identifier)
        print("The response of DomainsApi->domains_update_ownership_identifier:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DomainsApi->domains_update_ownership_identifier: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **resource_group_name** | **str**| Name of the resource group to which the resource belongs. | 
 **domain_name** | **str**| Name of domain. | 
 **name** | **str**| Name of identifier. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **domain_ownership_identifier** | [**DomainOwnershipIdentifier**](DomainOwnershipIdentifier.md)| A JSON representation of the domain ownership properties. | 

### Return type

[**DomainOwnershipIdentifier**](DomainOwnershipIdentifier.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | App Service error response. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

