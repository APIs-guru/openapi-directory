# openapi_client.RegistrationDefinitionsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**registration_definitions_create_or_update**](RegistrationDefinitionsApi.md#registration_definitions_create_or_update) | **PUT** /{scope}/providers/Microsoft.ManagedServices/registrationDefinitions/{registrationDefinitionId} | 
[**registration_definitions_delete**](RegistrationDefinitionsApi.md#registration_definitions_delete) | **DELETE** /{scope}/providers/Microsoft.ManagedServices/registrationDefinitions/{registrationDefinitionId} | 
[**registration_definitions_get**](RegistrationDefinitionsApi.md#registration_definitions_get) | **GET** /{scope}/providers/Microsoft.ManagedServices/registrationDefinitions/{registrationDefinitionId} | 
[**registration_definitions_list**](RegistrationDefinitionsApi.md#registration_definitions_list) | **GET** /{scope}/providers/Microsoft.ManagedServices/registrationDefinitions | 


# **registration_definitions_create_or_update**
> RegistrationDefinition registration_definitions_create_or_update(registration_definition_id, api_version, scope, request_body)



Creates or updates a registration definition.

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
    api_instance = openapi_client.RegistrationDefinitionsApi(api_client)
    registration_definition_id = 'registration_definition_id_example' # str | Guid of the registration definition.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope = 'scope_example' # str | Scope of the resource.
    request_body = openapi_client.RegistrationDefinition() # RegistrationDefinition | The parameters required to create new registration definition.

    try:
        api_response = api_instance.registration_definitions_create_or_update(registration_definition_id, api_version, scope, request_body)
        print("The response of RegistrationDefinitionsApi->registration_definitions_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationDefinitionsApi->registration_definitions_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registration_definition_id** | **str**| Guid of the registration definition. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope** | **str**| Scope of the resource. | 
 **request_body** | [**RegistrationDefinition**](RegistrationDefinition.md)| The parameters required to create new registration definition. | 

### Return type

[**RegistrationDefinition**](RegistrationDefinition.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Ok - Returns information about the updated registration definition. |  -  |
**201** | Created - Returns information about the created registration definition. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registration_definitions_delete**
> registration_definitions_delete(registration_definition_id, api_version, scope)



Deletes the registration definition.

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
    api_instance = openapi_client.RegistrationDefinitionsApi(api_client)
    registration_definition_id = 'registration_definition_id_example' # str | Guid of the registration definition.
    api_version = 'api_version_example' # str | The API version to use for this operation.
    scope = 'scope_example' # str | Scope of the resource.

    try:
        api_instance.registration_definitions_delete(registration_definition_id, api_version, scope)
    except Exception as e:
        print("Exception when calling RegistrationDefinitionsApi->registration_definitions_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **registration_definition_id** | **str**| Guid of the registration definition. | 
 **api_version** | **str**| The API version to use for this operation. | 
 **scope** | **str**| Scope of the resource. | 

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
**200** | OK - The registration definition is deleted. |  -  |
**204** | No Content- The registration definition does not exist. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registration_definitions_get**
> RegistrationDefinition registration_definitions_get(scope, registration_definition_id, api_version)



Gets the registration definition details.

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
    api_instance = openapi_client.RegistrationDefinitionsApi(api_client)
    scope = 'scope_example' # str | Scope of the resource.
    registration_definition_id = 'registration_definition_id_example' # str | Guid of the registration definition.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.registration_definitions_get(scope, registration_definition_id, api_version)
        print("The response of RegistrationDefinitionsApi->registration_definitions_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationDefinitionsApi->registration_definitions_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope of the resource. | 
 **registration_definition_id** | **str**| Guid of the registration definition. | 
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
**200** | OK - Returns the complete registration definition with plan details. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **registration_definitions_list**
> RegistrationDefinitionList registration_definitions_list(scope, api_version)



Gets a list of the registration definitions.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.registration_definition_list import RegistrationDefinitionList
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
    api_instance = openapi_client.RegistrationDefinitionsApi(api_client)
    scope = 'scope_example' # str | Scope of the resource.
    api_version = 'api_version_example' # str | The API version to use for this operation.

    try:
        api_response = api_instance.registration_definitions_list(scope, api_version)
        print("The response of RegistrationDefinitionsApi->registration_definitions_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RegistrationDefinitionsApi->registration_definitions_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| Scope of the resource. | 
 **api_version** | **str**| The API version to use for this operation. | 

### Return type

[**RegistrationDefinitionList**](RegistrationDefinitionList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK - Returns a list of the registration definitions. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

