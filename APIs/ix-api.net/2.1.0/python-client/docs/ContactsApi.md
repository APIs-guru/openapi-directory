# openapi_client.ContactsApi

All URIs are relative to */api/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contacts_create**](ContactsApi.md#contacts_create) | **POST** /contacts | 
[**contacts_destroy**](ContactsApi.md#contacts_destroy) | **DELETE** /contacts/{id} | 
[**contacts_list**](ContactsApi.md#contacts_list) | **GET** /contacts | 
[**contacts_partial_update**](ContactsApi.md#contacts_partial_update) | **PATCH** /contacts/{id} | 
[**contacts_read**](ContactsApi.md#contacts_read) | **GET** /contacts/{id} | 
[**contacts_update**](ContactsApi.md#contacts_update) | **PUT** /contacts/{id} | 


# **contacts_create**
> Contact contacts_create(contact_request=contact_request)



Create a new contact.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.contact import Contact
from openapi_client.models.contact_request import ContactRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContactsApi(api_client)
    contact_request = openapi_client.ContactRequest() # ContactRequest | A contact creation request (optional)

    try:
        api_response = api_instance.contacts_create(contact_request=contact_request)
        print("The response of ContactsApi->contacts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **contact_request** | [**ContactRequest**](ContactRequest.md)| A contact creation request | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Contact |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_destroy**
> Contact contacts_destroy(id)



Remove a contact.  Please note, that a contact can only be removed if it is not longer in use in a network service or config through a role assignment.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.contact import Contact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContactsApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.contacts_destroy(id)
        print("The response of ContactsApi->contacts_destroy:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**Contact**](Contact.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contact |  -  |
**400** | UnableToFulfill |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_list**
> List[Contact] contacts_list(id=id, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref)



List available contacts managed by the authorized account.

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.contact import Contact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContactsApi(api_client)
    id = ['id1,id2,id3'] # List[str] | Filter by id (optional)
    managing_account = 'managing_account_example' # str | Filter by managing_account (optional)
    consuming_account = 'consuming_account_example' # str | Filter by consuming_account (optional)
    external_ref = 'external_ref_example' # str | Filter by external_ref (optional)

    try:
        api_response = api_instance.contacts_list(id=id, managing_account=managing_account, consuming_account=consuming_account, external_ref=external_ref)
        print("The response of ContactsApi->contacts_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**List[str]**](str.md)| Filter by id | [optional] 
 **managing_account** | **str**| Filter by managing_account | [optional] 
 **consuming_account** | **str**| Filter by consuming_account | [optional] 
 **external_ref** | **str**| Filter by external_ref | [optional] 

### Return type

[**List[Contact]**](Contact.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of: Contact |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_partial_update**
> Contact contacts_partial_update(id, contact_request_partial=contact_request_partial)



Update parts of a contact

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.contact import Contact
from openapi_client.models.contact_request_partial import ContactRequestPartial
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContactsApi(api_client)
    id = 'id_example' # str | Get by id
    contact_request_partial = openapi_client.ContactRequestPartial() # ContactRequestPartial | A contact creation request (optional)

    try:
        api_response = api_instance.contacts_partial_update(id, contact_request_partial=contact_request_partial)
        print("The response of ContactsApi->contacts_partial_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_partial_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **contact_request_partial** | [**ContactRequestPartial**](ContactRequestPartial.md)| A contact creation request | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/merge-patch+json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contact |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_read**
> Contact contacts_read(id)



Get a contact by it's id

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.contact import Contact
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContactsApi(api_client)
    id = 'id_example' # str | Get by id

    try:
        api_response = api_instance.contacts_read(id)
        print("The response of ContactsApi->contacts_read:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 

### Return type

[**Contact**](Contact.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contact |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_update**
> Contact contacts_update(id, contact_request=contact_request)



Update a contact

### Example

* Bearer (JWT) Authentication (Bearer):

```python
import openapi_client
from openapi_client.models.contact import Contact
from openapi_client.models.contact_request import ContactRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v2"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): Bearer
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContactsApi(api_client)
    id = 'id_example' # str | Get by id
    contact_request = openapi_client.ContactRequest() # ContactRequest | A contact creation request (optional)

    try:
        api_response = api_instance.contacts_update(id, contact_request=contact_request)
        print("The response of ContactsApi->contacts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Get by id | 
 **contact_request** | [**ContactRequest**](ContactRequest.md)| A contact creation request | [optional] 

### Return type

[**Contact**](Contact.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Contact |  -  |
**400** | ValidationError |  -  |
**401** | Authentication |  -  |
**403** | PermissionDenied |  -  |
**404** | NotFound |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

