# openapi_client.ContactsApi

All URIs are relative to *https://api.sakari.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**contacts_create**](ContactsApi.md#contacts_create) | **POST** /v1/accounts/{accountId}/contacts | Create contact
[**contacts_fetch**](ContactsApi.md#contacts_fetch) | **GET** /v1/accounts/{accountId}/contacts/{contactId} | Fetch contact by ID
[**contacts_fetch_all**](ContactsApi.md#contacts_fetch_all) | **GET** /v1/accounts/{accountId}/contacts | Fetch contacts
[**contacts_remove**](ContactsApi.md#contacts_remove) | **DELETE** /v1/accounts/{accountId}/contacts/{contactId} | Deletes a contact
[**contacts_update**](ContactsApi.md#contacts_update) | **PUT** /v1/accounts/{accountId}/contacts/{contactId} | Updates a contact


# **contacts_create**
> ContactsCreate201Response contacts_create(account_id, merge_strategy=merge_strategy, contact_request=contact_request)

Create contact

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.contact_request import ContactRequest
from openapi_client.models.contacts_create201_response import ContactsCreate201Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContactsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    merge_strategy = 'merge_strategy_example' # str | Determines how existing contacts with matching mobile numbers are treated (optional)
    contact_request = openapi_client.ContactRequest() # ContactRequest |  (optional)

    try:
        # Create contact
        api_response = api_instance.contacts_create(account_id, merge_strategy=merge_strategy, contact_request=contact_request)
        print("The response of ContactsApi->contacts_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **merge_strategy** | **str**| Determines how existing contacts with matching mobile numbers are treated | [optional] 
 **contact_request** | [**ContactRequest**](ContactRequest.md)|  | [optional] 

### Return type

[**ContactsCreate201Response**](ContactsCreate201Response.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: application/json, text/csv
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_fetch**
> ContactResponse contacts_fetch(account_id, contact_id)

Fetch contact by ID

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.contact_response import ContactResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContactsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    contact_id = 'contact_id_example' # str | ID of contact to return

    try:
        # Fetch contact by ID
        api_response = api_instance.contacts_fetch(account_id, contact_id)
        print("The response of ContactsApi->contacts_fetch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_fetch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **contact_id** | **str**| ID of contact to return | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_fetch_all**
> ContactsResponse contacts_fetch_all(account_id, offset=offset, limit=limit, first_name=first_name, last_name=last_name, mobile=mobile, email=email, tags=tags)

Fetch contacts

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.contacts_response import ContactsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContactsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    offset = 56 # int | Results to skip when paginating through a result set (optional)
    limit = 56 # int | Maximum number of results to return (optional)
    first_name = 'first_name_example' # str | Filter by first name or part of (optional)
    last_name = 'last_name_example' # str | Filter by last name or part of (optional)
    mobile = 'mobile_example' # str | Filter by mobile or part of (optional)
    email = 'email_example' # str | Filter by email or part of (optional)
    tags = 'tags_example' # str | Filter by tag(s) (optional)

    try:
        # Fetch contacts
        api_response = api_instance.contacts_fetch_all(account_id, offset=offset, limit=limit, first_name=first_name, last_name=last_name, mobile=mobile, email=email, tags=tags)
        print("The response of ContactsApi->contacts_fetch_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_fetch_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **offset** | **int**| Results to skip when paginating through a result set | [optional] 
 **limit** | **int**| Maximum number of results to return | [optional] 
 **first_name** | **str**| Filter by first name or part of | [optional] 
 **last_name** | **str**| Filter by last name or part of | [optional] 
 **mobile** | **str**| Filter by mobile or part of | [optional] 
 **email** | **str**| Filter by email or part of | [optional] 
 **tags** | **str**| Filter by tag(s) | [optional] 

### Return type

[**ContactsResponse**](ContactsResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**4XX** | invalid request |  -  |
**5XX** | invalid request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_remove**
> CampaignsRemove200Response contacts_remove(account_id, contact_id)

Deletes a contact

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.campaigns_remove200_response import CampaignsRemove200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContactsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    contact_id = 'contact_id_example' # str | Contact id to delete

    try:
        # Deletes a contact
        api_response = api_instance.contacts_remove(account_id, contact_id)
        print("The response of ContactsApi->contacts_remove:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_remove: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **contact_id** | **str**| Contact id to delete | 

### Return type

[**CampaignsRemove200Response**](CampaignsRemove200Response.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **contacts_update**
> ContactResponse contacts_update(account_id, contact_id)

Updates a contact

### Example

* OAuth Authentication (sakari_auth):

```python
import openapi_client
from openapi_client.models.contact_response import ContactResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.sakari.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.sakari.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ContactsApi(api_client)
    account_id = 'account_id_example' # str | Account to apply operations to
    contact_id = 'contact_id_example' # str | ID of contact

    try:
        # Updates a contact
        api_response = api_instance.contacts_update(account_id, contact_id)
        print("The response of ContactsApi->contacts_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContactsApi->contacts_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account_id** | **str**| Account to apply operations to | 
 **contact_id** | **str**| ID of contact | 

### Return type

[**ContactResponse**](ContactResponse.md)

### Authorization

[sakari_auth](../README.md#sakari_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

