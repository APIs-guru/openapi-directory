# openapi_client.LegalEntitiesApi

All URIs are relative to *https://api.storecove.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_legal_entity**](LegalEntitiesApi.md#create_legal_entity) | **POST** /legal_entities | Create a new LegalEntity
[**delete_legal_entity**](LegalEntitiesApi.md#delete_legal_entity) | **DELETE** /legal_entities/{id} | Delete LegalEntity
[**get_legal_entity**](LegalEntitiesApi.md#get_legal_entity) | **GET** /legal_entities/{id} | Get LegalEntity
[**update_legal_entity**](LegalEntitiesApi.md#update_legal_entity) | **PATCH** /legal_entities/{id} | Update LegalEntity


# **create_legal_entity**
> LegalEntity create_legal_entity(legal_entity_create)

Create a new LegalEntity

Create a new LegalEntity.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.legal_entity import LegalEntity
from openapi_client.models.legal_entity_create import LegalEntityCreate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LegalEntitiesApi(api_client)
    legal_entity_create = openapi_client.LegalEntityCreate() # LegalEntityCreate | LegalEntity to create

    try:
        # Create a new LegalEntity
        api_response = api_instance.create_legal_entity(legal_entity_create)
        print("The response of LegalEntitiesApi->create_legal_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LegalEntitiesApi->create_legal_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_create** | [**LegalEntityCreate**](LegalEntityCreate.md)| LegalEntity to create | 

### Return type

[**LegalEntity**](LegalEntity.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_legal_entity**
> delete_legal_entity(id)

Delete LegalEntity

Delete a specific LegalEntity.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LegalEntitiesApi(api_client)
    id = 56 # int | legal_entity id

    try:
        # Delete LegalEntity
        api_instance.delete_legal_entity(id)
    except Exception as e:
        print("Exception when calling LegalEntitiesApi->delete_legal_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| legal_entity id | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_legal_entity**
> LegalEntity get_legal_entity(id)

Get LegalEntity

Get a specific LegalEntity.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.legal_entity import LegalEntity
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LegalEntitiesApi(api_client)
    id = 56 # int | legal_entity id

    try:
        # Get LegalEntity
        api_response = api_instance.get_legal_entity(id)
        print("The response of LegalEntitiesApi->get_legal_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LegalEntitiesApi->get_legal_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| legal_entity id | 

### Return type

[**LegalEntity**](LegalEntity.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_legal_entity**
> LegalEntity update_legal_entity(id, legal_entity_update)

Update LegalEntity

Update a specific LegalEntity.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.legal_entity import LegalEntity
from openapi_client.models.legal_entity_update import LegalEntityUpdate
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.storecove.com/api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.storecove.com/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.LegalEntitiesApi(api_client)
    id = 56 # int | legal_entity id
    legal_entity_update = openapi_client.LegalEntityUpdate() # LegalEntityUpdate | LegalEntity updates

    try:
        # Update LegalEntity
        api_response = api_instance.update_legal_entity(id, legal_entity_update)
        print("The response of LegalEntitiesApi->update_legal_entity:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LegalEntitiesApi->update_legal_entity: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| legal_entity id | 
 **legal_entity_update** | [**LegalEntityUpdate**](LegalEntityUpdate.md)| LegalEntity updates | 

### Return type

[**LegalEntity**](LegalEntity.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**422** | Unprocessable Entity |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

