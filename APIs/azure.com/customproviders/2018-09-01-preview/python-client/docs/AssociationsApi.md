# openapi_client.AssociationsApi

All URIs are relative to *https://management.azure.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**associations_create_or_update**](AssociationsApi.md#associations_create_or_update) | **PUT** /{scope}/providers/Microsoft.CustomProviders/associations/{associationName} | 
[**associations_delete**](AssociationsApi.md#associations_delete) | **DELETE** /{scope}/providers/Microsoft.CustomProviders/associations/{associationName} | 
[**associations_get**](AssociationsApi.md#associations_get) | **GET** /{scope}/providers/Microsoft.CustomProviders/associations/{associationName} | 
[**associations_list_all**](AssociationsApi.md#associations_list_all) | **GET** /{scope}/providers/Microsoft.CustomProviders/associations | 


# **associations_create_or_update**
> Association associations_create_or_update(scope, association_name, api_version, association)



Create or update an association.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.association import Association
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
    api_instance = openapi_client.AssociationsApi(api_client)
    scope = 'scope_example' # str | The scope of the association. The scope can be any valid REST resource instance. For example, use '/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/Microsoft.Compute/virtualMachines/{vm-name}' for a virtual machine resource.
    association_name = 'association_name_example' # str | The name of the association.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    association = openapi_client.Association() # Association | The parameters required to create or update an association.

    try:
        api_response = api_instance.associations_create_or_update(scope, association_name, api_version, association)
        print("The response of AssociationsApi->associations_create_or_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssociationsApi->associations_create_or_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the association. The scope can be any valid REST resource instance. For example, use &#39;/subscriptions/{subscription-id}/resourceGroups/{resource-group-name}/providers/Microsoft.Compute/virtualMachines/{vm-name}&#39; for a virtual machine resource. | 
 **association_name** | **str**| The name of the association. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **association** | [**Association**](Association.md)| The parameters required to create or update an association. | 

### Return type

[**Association**](Association.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Association already exists and the changes have been accepted. |  -  |
**201** | Created. Association has been created. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **associations_delete**
> associations_delete(scope, association_name, api_version)



Delete an association.

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
    api_instance = openapi_client.AssociationsApi(api_client)
    scope = 'scope_example' # str | The scope of the association.
    association_name = 'association_name_example' # str | The name of the association.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_instance.associations_delete(scope, association_name, api_version)
    except Exception as e:
        print("Exception when calling AssociationsApi->associations_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the association. | 
 **association_name** | **str**| The name of the association. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

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
**200** | OK. Association deleted. |  -  |
**202** | Accepted. Association delete has been accepted. |  -  |
**204** | No Content. Association was not found. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **associations_get**
> Association associations_get(scope, association_name, api_version)



Get an association.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.association import Association
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
    api_instance = openapi_client.AssociationsApi(api_client)
    scope = 'scope_example' # str | The scope of the association.
    association_name = 'association_name_example' # str | The name of the association.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_response = api_instance.associations_get(scope, association_name, api_version)
        print("The response of AssociationsApi->associations_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssociationsApi->associations_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the association. | 
 **association_name** | **str**| The name of the association. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

### Return type

[**Association**](Association.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns association. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **associations_list_all**
> AssociationsList associations_list_all(scope, api_version)



Gets all association for the given scope.

### Example

* OAuth Authentication (azure_auth):

```python
import openapi_client
from openapi_client.models.associations_list import AssociationsList
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
    api_instance = openapi_client.AssociationsApi(api_client)
    scope = 'scope_example' # str | The scope of the association.
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.

    try:
        api_response = api_instance.associations_list_all(scope, api_version)
        print("The response of AssociationsApi->associations_list_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AssociationsApi->associations_list_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **scope** | **str**| The scope of the association. | 
 **api_version** | **str**| The API version to be used with the HTTP request. | 

### Return type

[**AssociationsList**](AssociationsList.md)

### Authorization

[azure_auth](../README.md#azure_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK. Returns all associations for the given scope. |  -  |
**0** | Error response describing why the operation failed. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

