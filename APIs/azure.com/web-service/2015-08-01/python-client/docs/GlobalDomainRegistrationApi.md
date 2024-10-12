# openapi_client.GlobalDomainRegistrationApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**global_domain_registration_check_domain_availability**](GlobalDomainRegistrationApi.md#global_domain_registration_check_domain_availability) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/checkDomainAvailability | Checks if a domain is available for registration
[**global_domain_registration_get_all_domains**](GlobalDomainRegistrationApi.md#global_domain_registration_get_all_domains) | **GET** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/domains | Lists all domains in a subscription
[**global_domain_registration_get_domain_control_center_sso_request**](GlobalDomainRegistrationApi.md#global_domain_registration_get_domain_control_center_sso_request) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/generateSsoRequest | Generates a single sign on request for domain management portal
[**global_domain_registration_list_domain_recommendations**](GlobalDomainRegistrationApi.md#global_domain_registration_list_domain_recommendations) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/listDomainRecommendations | Lists domain recommendations based on keywords
[**global_domain_registration_validate_domain_purchase_information**](GlobalDomainRegistrationApi.md#global_domain_registration_validate_domain_purchase_information) | **POST** /subscriptions/{subscriptionId}/providers/Microsoft.DomainRegistration/validateDomainRegistrationInformation | Validates domain registration information


# **global_domain_registration_check_domain_availability**
> DomainAvailablilityCheckResult global_domain_registration_check_domain_availability(subscription_id, api_version, identifier)

Checks if a domain is available for registration

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain_availablility_check_result import DomainAvailablilityCheckResult
from openapi_client.models.name_identifier import NameIdentifier
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
    api_instance = openapi_client.GlobalDomainRegistrationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    identifier = openapi_client.NameIdentifier() # NameIdentifier | Name of the domain

    try:
        # Checks if a domain is available for registration
        api_response = api_instance.global_domain_registration_check_domain_availability(subscription_id, api_version, identifier)
        print("The response of GlobalDomainRegistrationApi->global_domain_registration_check_domain_availability:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalDomainRegistrationApi->global_domain_registration_check_domain_availability: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **identifier** | [**NameIdentifier**](NameIdentifier.md)| Name of the domain | 

### Return type

[**DomainAvailablilityCheckResult**](DomainAvailablilityCheckResult.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_domain_registration_get_all_domains**
> DomainCollection global_domain_registration_get_all_domains(subscription_id, api_version)

Lists all domains in a subscription

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
    api_instance = openapi_client.GlobalDomainRegistrationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Lists all domains in a subscription
        api_response = api_instance.global_domain_registration_get_all_domains(subscription_id, api_version)
        print("The response of GlobalDomainRegistrationApi->global_domain_registration_get_all_domains:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalDomainRegistrationApi->global_domain_registration_get_all_domains: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **global_domain_registration_get_domain_control_center_sso_request**
> DomainControlCenterSsoRequest global_domain_registration_get_domain_control_center_sso_request(subscription_id, api_version)

Generates a single sign on request for domain management portal

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
    api_instance = openapi_client.GlobalDomainRegistrationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version

    try:
        # Generates a single sign on request for domain management portal
        api_response = api_instance.global_domain_registration_get_domain_control_center_sso_request(subscription_id, api_version)
        print("The response of GlobalDomainRegistrationApi->global_domain_registration_get_domain_control_center_sso_request:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalDomainRegistrationApi->global_domain_registration_get_domain_control_center_sso_request: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 

### Return type

[**DomainControlCenterSsoRequest**](DomainControlCenterSsoRequest.md)

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

# **global_domain_registration_list_domain_recommendations**
> NameIdentifierCollection global_domain_registration_list_domain_recommendations(subscription_id, api_version, parameters)

Lists domain recommendations based on keywords

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
    api_instance = openapi_client.GlobalDomainRegistrationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    parameters = openapi_client.DomainRecommendationSearchParameters() # DomainRecommendationSearchParameters | Domain recommendation search parameters

    try:
        # Lists domain recommendations based on keywords
        api_response = api_instance.global_domain_registration_list_domain_recommendations(subscription_id, api_version, parameters)
        print("The response of GlobalDomainRegistrationApi->global_domain_registration_list_domain_recommendations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalDomainRegistrationApi->global_domain_registration_list_domain_recommendations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **parameters** | [**DomainRecommendationSearchParameters**](DomainRecommendationSearchParameters.md)| Domain recommendation search parameters | 

### Return type

[**NameIdentifierCollection**](NameIdentifierCollection.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **global_domain_registration_validate_domain_purchase_information**
> object global_domain_registration_validate_domain_purchase_information(subscription_id, api_version, domain_registration_input)

Validates domain registration information

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.domain_registration_input import DomainRegistrationInput
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
    api_instance = openapi_client.GlobalDomainRegistrationApi(api_client)
    subscription_id = 'subscription_id_example' # str | Subscription Id
    api_version = 'api_version_example' # str | API Version
    domain_registration_input = openapi_client.DomainRegistrationInput() # DomainRegistrationInput | Domain registration information

    try:
        # Validates domain registration information
        api_response = api_instance.global_domain_registration_validate_domain_purchase_information(subscription_id, api_version, domain_registration_input)
        print("The response of GlobalDomainRegistrationApi->global_domain_registration_validate_domain_purchase_information:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GlobalDomainRegistrationApi->global_domain_registration_validate_domain_purchase_information: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **subscription_id** | **str**| Subscription Id | 
 **api_version** | **str**| API Version | 
 **domain_registration_input** | [**DomainRegistrationInput**](DomainRegistrationInput.md)| Domain registration information | 

### Return type

**object**

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/json, application/xml, text/xml, application/x-www-form-urlencoded
 - **Accept**: application/json, text/json, application/xml, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

