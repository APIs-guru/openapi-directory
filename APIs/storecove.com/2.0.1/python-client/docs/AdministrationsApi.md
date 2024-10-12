# openapi_client.AdministrationsApi

All URIs are relative to *https://api.storecove.com/api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_administration**](AdministrationsApi.md#create_administration) | **POST** /legal_entities/{legal_entity_id}/administrations | Create a new Administration
[**delete_administration**](AdministrationsApi.md#delete_administration) | **DELETE** /legal_entities/{legal_entity_id}/administrations/{id} | Delete Administration
[**get_administration**](AdministrationsApi.md#get_administration) | **GET** /legal_entities/{legal_entity_id}/administrations/{id} | Get Administration
[**update_administration**](AdministrationsApi.md#update_administration) | **PATCH** /legal_entities/{legal_entity_id}/administrations/{id} | Update Administration


# **create_administration**
> Administration create_administration(legal_entity_id, administration_create)

Create a new Administration

Deprecated. Create a new Administration. An Administration is an email destination for purchase invoices.

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.administration import Administration
from openapi_client.models.administration_create import AdministrationCreate
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
    api_instance = openapi_client.AdministrationsApi(api_client)
    legal_entity_id = 56 # int | The id of the LegalEntity for which to create the Administration
    administration_create = openapi_client.AdministrationCreate() # AdministrationCreate | Administration to create

    try:
        # Create a new Administration
        api_response = api_instance.create_administration(legal_entity_id, administration_create)
        print("The response of AdministrationsApi->create_administration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationsApi->create_administration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_id** | **int**| The id of the LegalEntity for which to create the Administration | 
 **administration_create** | [**AdministrationCreate**](AdministrationCreate.md)| Administration to create | 

### Return type

[**Administration**](Administration.md)

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

# **delete_administration**
> delete_administration(legal_entity_id, id)

Delete Administration

Deprecated. Delete an Administration

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
    api_instance = openapi_client.AdministrationsApi(api_client)
    legal_entity_id = 56 # int | The id of the LegalEntity the Administration belongs to
    id = 56 # int | The id of the Administration

    try:
        # Delete Administration
        api_instance.delete_administration(legal_entity_id, id)
    except Exception as e:
        print("Exception when calling AdministrationsApi->delete_administration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_id** | **int**| The id of the LegalEntity the Administration belongs to | 
 **id** | **int**| The id of the Administration | 

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

# **get_administration**
> Administration get_administration(legal_entity_id, id)

Get Administration

Deprecated. Get an Administration

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.administration import Administration
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
    api_instance = openapi_client.AdministrationsApi(api_client)
    legal_entity_id = 56 # int | The id of the LegalEntity the Administration belongs to
    id = 56 # int | The id of the Administration

    try:
        # Get Administration
        api_response = api_instance.get_administration(legal_entity_id, id)
        print("The response of AdministrationsApi->get_administration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationsApi->get_administration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_id** | **int**| The id of the LegalEntity the Administration belongs to | 
 **id** | **int**| The id of the Administration | 

### Return type

[**Administration**](Administration.md)

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

# **update_administration**
> Administration update_administration(legal_entity_id, id, administration_update)

Update Administration

Deprecated. Update an Administration

### Example

* Api Key Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.administration import Administration
from openapi_client.models.administration_update import AdministrationUpdate
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
    api_instance = openapi_client.AdministrationsApi(api_client)
    legal_entity_id = 56 # int | The id of the LegalEntity the Administration belongs to
    id = 56 # int | The id of the Administration to be updated
    administration_update = openapi_client.AdministrationUpdate() # AdministrationUpdate | Administration to update

    try:
        # Update Administration
        api_response = api_instance.update_administration(legal_entity_id, id, administration_update)
        print("The response of AdministrationsApi->update_administration:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AdministrationsApi->update_administration: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **legal_entity_id** | **int**| The id of the LegalEntity the Administration belongs to | 
 **id** | **int**| The id of the Administration to be updated | 
 **administration_update** | [**AdministrationUpdate**](AdministrationUpdate.md)| Administration to update | 

### Return type

[**Administration**](Administration.md)

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

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

