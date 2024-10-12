# openapi_client.BankAccountApi

All URIs are relative to *https://api.billingo.hu/v3*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_bank_account**](BankAccountApi.md#create_bank_account) | **POST** /bank-accounts | Create a bank account
[**delete_bank_account**](BankAccountApi.md#delete_bank_account) | **DELETE** /bank-accounts/{id} | Delete a bank account
[**get_bank_account**](BankAccountApi.md#get_bank_account) | **GET** /bank-accounts/{id} | Retrieve a bank account
[**list_bank_account**](BankAccountApi.md#list_bank_account) | **GET** /bank-accounts | List all bank account
[**update_bank_account**](BankAccountApi.md#update_bank_account) | **PUT** /bank-accounts/{id} | Update a bank account


# **create_bank_account**
> BankAccount create_bank_account(bank_account)

Create a bank account

Create a new bank account. Returns a bank account object if the create is succeded.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.bank_account import BankAccount
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BankAccountApi(api_client)
    bank_account = openapi_client.BankAccount() # BankAccount | BankAccount object that you would like to store.

    try:
        # Create a bank account
        api_response = api_instance.create_bank_account(bank_account)
        print("The response of BankAccountApi->create_bank_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BankAccountApi->create_bank_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **bank_account** | [**BankAccount**](BankAccount.md)| BankAccount object that you would like to store. | 

### Return type

[**BankAccount**](BankAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | BankAccount created successfully. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_bank_account**
> delete_bank_account(id)

Delete a bank account

Delete an existing bank account.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BankAccountApi(api_client)
    id = 56 # int | 

    try:
        # Delete a bank account
        api_instance.delete_bank_account(id)
    except Exception as e:
        print("Exception when calling BankAccountApi->delete_bank_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

void (empty response body)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | Bank account deleted successfully. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_bank_account**
> BankAccount get_bank_account(id)

Retrieve a bank account

Retrieves the details of an existing bank account.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.bank_account import BankAccount
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BankAccountApi(api_client)
    id = 56 # int | 

    try:
        # Retrieve a bank account
        api_response = api_instance.get_bank_account(id)
        print("The response of BankAccountApi->get_bank_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BankAccountApi->get_bank_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 

### Return type

[**BankAccount**](BankAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_bank_account**
> BankAccountList list_bank_account(page=page, per_page=per_page)

List all bank account

Returns a list of your bank accounts. The bank accounts are returned sorted by creation date, with the most recent bank account appearing first.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.bank_account_list import BankAccountList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BankAccountApi(api_client)
    page = 56 # int |  (optional)
    per_page = 25 # int |  (optional) (default to 25)

    try:
        # List all bank account
        api_response = api_instance.list_bank_account(page=page, per_page=per_page)
        print("The response of BankAccountApi->list_bank_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BankAccountApi->list_bank_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**|  | [optional] 
 **per_page** | **int**|  | [optional] [default to 25]

### Return type

[**BankAccountList**](BankAccountList.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success response |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_bank_account**
> BankAccount update_bank_account(id, bank_account)

Update a bank account

Update an existing bank accounts. Returns a bank account object if the update is succeded.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.bank_account import BankAccount
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.billingo.hu/v3
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.billingo.hu/v3"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api_key
configuration.api_key['api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.BankAccountApi(api_client)
    id = 56 # int | 
    bank_account = openapi_client.BankAccount() # BankAccount | Bank account object that you would like to update.

    try:
        # Update a bank account
        api_response = api_instance.update_bank_account(id, bank_account)
        print("The response of BankAccountApi->update_bank_account:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BankAccountApi->update_bank_account: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **bank_account** | [**BankAccount**](BankAccount.md)| Bank account object that you would like to update. | 

### Return type

[**BankAccount**](BankAccount.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Bank account updated successfully. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**400** | The request is malformed. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**401** | Authorization information is missing or invalid. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**403** | Authenticated user doesn&#39;t have access to the resource. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**404** | Non-existent resource is requested. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**422** | Validation errors occured. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |
**500** | Internal server error. |  * Retry-After - How many seconds you have to wait before making new request. <br>  * X-RateLimit-Limit - Request limit per minute. <br>  * X-RateLimit-Remaining - The number of requests left for the time window. <br>  * X-RateLimit-Reset - The timestamp at which the current rate limit window resets. <br>  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

