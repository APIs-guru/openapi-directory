# openapi_client.MarketplaceRegistrationDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**marketplace_registration_definitions_get**](MarketplaceRegistrationDefinitionsApi.md#marketplace_registration_definitions_get) | **GET** /{scope}/providers/Microsoft.ManagedServices/marketplaceRegistrationDefinitions/{marketplaceIdentifier} | 
[**marketplace_registration_definitions_list**](MarketplaceRegistrationDefinitionsApi.md#marketplace_registration_definitions_list) | **GET** /{scope}/providers/Microsoft.ManagedServices/marketplaceRegistrationDefinitions | 


# **marketplace_registration_definitions_get**
> RegistrationDefinition marketplace_registration_definitions_get(scope, marketplace_identifier, api_version)



Get the marketplace registration definition for the marketplace identifier.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registration_definition import RegistrationDefinition
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
    api_instance = openapi_client.MarketplaceRegistrationDefinitionsApi(api_client)
    scope = 'scope_example' # str | Scope of the resource.
    marketplace_identifier = 'marketplace_identifier_example' # str | Market place identifer. Expected Formats - {publisher}.{product[-preview]}.{planName}.{version} or {publisher}.{product[-preview]}.{planName} or {publisher}.{product[-preview]} or {publisher}).
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.marketplace_registration_definitions_get(scope, marketplace_identifier, api_version)
        print("The response of MarketplaceRegistrationDefinitionsApi->marketplace_registration_definitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarketplaceRegistrationDefinitionsApi->marketplace_registration_definitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope of the resource. | 
 **marketplace_identifier** | **str**| Market place identifer. Expected Formats - {publisher}.{product[-preview]}.{planName}.{version} or {publisher}.{product[-preview]}.{planName} or {publisher}.{product[-preview]} or {publisher}). | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**RegistrationDefinition**](RegistrationDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns the details of the marketplace registration definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **marketplace_registration_definitions_list**
> MarketplaceRegistrationDefinitionList marketplace_registration_definitions_list(scope, api_version, filter=filter)



Gets a list of the marketplace registration definitions for the marketplace identifier.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.marketplace_registration_definition_list import MarketplaceRegistrationDefinitionList
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
    api_instance = openapi_client.MarketplaceRegistrationDefinitionsApi(api_client)
    scope = 'scope_example' # str | Scope of the resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    filter = 'filter_example' # str | The filter query parameter. Might be used to filter marketplace registration definition by plan identifier, publisher, version etc. (optional)

    try:
        api_response = api_instance.marketplace_registration_definitions_list(scope, api_version, filter=filter)
        print("The response of MarketplaceRegistrationDefinitionsApi->marketplace_registration_definitions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MarketplaceRegistrationDefinitionsApi->marketplace_registration_definitions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope of the resource. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **filter** | **str**| The filter query parameter. Might be used to filter marketplace registration definition by plan identifier, publisher, version etc. | [optional] 

### Return type

[**MarketplaceRegistrationDefinitionList**](MarketplaceRegistrationDefinitionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns a list of the marketplace registration definitions. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

