# openapi_client.TopLevelDomainsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**top_level_domains_get**](TopLevelDomainsApi.md#top_level_domains_get) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains/{name} | Get details of a top-level domain.
[**top_level_domains_list**](TopLevelDomainsApi.md#top_level_domains_list) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains | Get all top-level domains supported for registration.
[**top_level_domains_list_agreements**](TopLevelDomainsApi.md#top_level_domains_list_agreements) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/topLevelDomains/{name}/listAgreements | Gets all legal agreements that user needs to accept before purchasing a domain.


# **top_level_domains_get**
> TopLevelDomain top_level_domains_get(name, subscription_id, api_version)

Get details of a top-level domain.

Get details of a top-level domain.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.top_level_domain import TopLevelDomain
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
    api_instance = openapi_client.TopLevelDomainsApi(api_client)
    name = 'name_example' # str | Name of the top-level domain.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get details of a top-level domain.
        api_response = api_instance.top_level_domains_get(name, subscription_id, api_version)
        print("The response of TopLevelDomainsApi->top_level_domains_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopLevelDomainsApi->top_level_domains_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the top-level domain. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**TopLevelDomain**](TopLevelDomain.md)

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

# **top_level_domains_list**
> TopLevelDomainCollection top_level_domains_list(subscription_id, api_version)

Get all top-level domains supported for registration.

Get all top-level domains supported for registration.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.top_level_domain_collection import TopLevelDomainCollection
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
    api_instance = openapi_client.TopLevelDomainsApi(api_client)
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version

    try:
        # Get all top-level domains supported for registration.
        api_response = api_instance.top_level_domains_list(subscription_id, api_version)
        print("The response of TopLevelDomainsApi->top_level_domains_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopLevelDomainsApi->top_level_domains_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 

### Return type

[**TopLevelDomainCollection**](TopLevelDomainCollection.md)

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

# **top_level_domains_list_agreements**
> TldLegalAgreementCollection top_level_domains_list_agreements(name, subscription_id, api_version, agreement_option)

Gets all legal agreements that user needs to accept before purchasing a domain.

Gets all legal agreements that user needs to accept before purchasing a domain.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.tld_legal_agreement_collection import TldLegalAgreementCollection
from openapi_client.models.top_level_domain_agreement_option import TopLevelDomainAgreementOption
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
    api_instance = openapi_client.TopLevelDomainsApi(api_client)
    name = 'name_example' # str | Name of the top-level domain.
    subscription_id = 'subscription_id_example' # str | Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000).
    api_version = 'api_version_example' # str | API Version
    agreement_option = openapi_client.TopLevelDomainAgreementOption() # TopLevelDomainAgreementOption | Domain agreement options.

    try:
        # Gets all legal agreements that user needs to accept before purchasing a domain.
        api_response = api_instance.top_level_domains_list_agreements(name, subscription_id, api_version, agreement_option)
        print("The response of TopLevelDomainsApi->top_level_domains_list_agreements:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TopLevelDomainsApi->top_level_domains_list_agreements: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **name** | **str**| Name of the top-level domain. | 
 **subscription_id** | **str**| Your Azure subscription ID. This is a GUID-formatted string (e.g. 00000000-0000-0000-0000-000000000000). | 
 **api_version** | **str**| API Version | 
 **agreement_option** | [**TopLevelDomainAgreementOption**](TopLevelDomainAgreementOption.md)| Domain agreement options. | 

### Return type

[**TldLegalAgreementCollection**](TldLegalAgreementCollection.md)

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

