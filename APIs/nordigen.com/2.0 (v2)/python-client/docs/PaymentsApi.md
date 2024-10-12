# openapi_client.PaymentsApi

All URIs are relative to *https://ob.nordigen.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_payment**](PaymentsApi.md#create_payment) | **POST** /api/v2/payments/ | 
[**delete_periodic_payment**](PaymentsApi.md#delete_periodic_payment) | **DELETE** /api/v2/payments/{id}/ | 
[**list_minimum_required_fields_for_institution**](PaymentsApi.md#list_minimum_required_fields_for_institution) | **GET** /api/v2/payments/fields/{institution_id}/ | 
[**list_payments**](PaymentsApi.md#list_payments) | **GET** /api/v2/payments/ | 
[**payments_creditors_create**](PaymentsApi.md#payments_creditors_create) | **POST** /api/v2/payments/creditors/ | 
[**payments_creditors_destroy**](PaymentsApi.md#payments_creditors_destroy) | **DELETE** /api/v2/payments/creditors/{id}/ | 
[**payments_creditors_list**](PaymentsApi.md#payments_creditors_list) | **GET** /api/v2/payments/creditors/ | 
[**payments_creditors_retrieve**](PaymentsApi.md#payments_creditors_retrieve) | **GET** /api/v2/payments/creditors/{id}/ | 
[**payments_submit_create**](PaymentsApi.md#payments_submit_create) | **POST** /api/v2/payments/{id}/submit/ | 
[**retrieve_all_payment_creditor_accounts**](PaymentsApi.md#retrieve_all_payment_creditor_accounts) | **GET** /api/v2/payments/account/ | 
[**retrieve_payment**](PaymentsApi.md#retrieve_payment) | **GET** /api/v2/payments/{id}/ | 


# **create_payment**
> PaymentWrite create_payment(payment_write_request)



Create payment

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.payment_write import PaymentWrite
from openapi_client.models.payment_write_request import PaymentWriteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    payment_write_request = openapi_client.PaymentWriteRequest() # PaymentWriteRequest | 

    try:
        api_response = api_instance.create_payment(payment_write_request)
        print("The response of PaymentsApi->create_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->create_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **payment_write_request** | [**PaymentWriteRequest**](PaymentWriteRequest.md)|  | 

### Return type

[**PaymentWrite**](PaymentWrite.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Create payment |  -  |
**400** | Unknown Fields |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **delete_periodic_payment**
> Dict[str, object] delete_periodic_payment(id)



Delete periodic payment

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.delete_periodic_payment(id)
        print("The response of PaymentsApi->delete_periodic_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->delete_periodic_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

**Dict[str, object]**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Payment deleted |  -  |
**400** | Invalid ID |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Not found error |  -  |
**409** | Payment delete error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_minimum_required_fields_for_institution**
> Dict[str, object] list_minimum_required_fields_for_institution(institution_id)



List minimum required fields for institution

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    institution_id = 'institution_id_example' # str | 

    try:
        api_response = api_instance.list_minimum_required_fields_for_institution(institution_id)
        print("The response of PaymentsApi->list_minimum_required_fields_for_institution:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->list_minimum_required_fields_for_institution: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **institution_id** | **str**|  | 

### Return type

**Dict[str, object]**

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Minimum required fields |  -  |
**400** | Unknown Fields |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_payments**
> PaginatedPaymentReadList list_payments(limit=limit, offset=offset)



Retrieve all payments belonging to the company

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.paginated_payment_read_list import PaginatedPaymentReadList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    limit = 100 # int | Number of results to return per page. (optional) (default to 100)
    offset = 1 # int | The initial index from which to return the results. (optional) (default to 1)

    try:
        api_response = api_instance.list_payments(limit=limit, offset=offset)
        print("The response of PaymentsApi->list_payments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->list_payments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **int**| Number of results to return per page. | [optional] [default to 100]
 **offset** | **int**| The initial index from which to return the results. | [optional] [default to 1]

### Return type

[**PaginatedPaymentReadList**](PaginatedPaymentReadList.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List payments |  -  |
**400** | Unknown Fields |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_creditors_create**
> CreditorAccountWrite payments_creditors_create(creditor_account_write_request)



API endpoints related to creditor accounts.

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.creditor_account_write import CreditorAccountWrite
from openapi_client.models.creditor_account_write_request import CreditorAccountWriteRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    creditor_account_write_request = openapi_client.CreditorAccountWriteRequest() # CreditorAccountWriteRequest | 

    try:
        api_response = api_instance.payments_creditors_create(creditor_account_write_request)
        print("The response of PaymentsApi->payments_creditors_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_creditors_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **creditor_account_write_request** | [**CreditorAccountWriteRequest**](CreditorAccountWriteRequest.md)|  | 

### Return type

[**CreditorAccountWrite**](CreditorAccountWrite.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_creditors_destroy**
> payments_creditors_destroy(id)



API endpoints related to creditor accounts.

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_instance.payments_creditors_destroy(id)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_creditors_destroy: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

void (empty response body)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No response body |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_creditors_list**
> PaginatedCreditorAccountList payments_creditors_list(account=account, address_country=address_country, agent=agent, currency=currency, limit=limit, name=name, offset=offset, type=type)



API endpoints related to creditor accounts.

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.paginated_creditor_account_list import PaginatedCreditorAccountList
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    account = 'account_example' # str |  (optional)
    address_country = 'address_country_example' # str |  (optional)
    agent = 'agent_example' # str |  (optional)
    currency = 'currency_example' # str |  (optional)
    limit = 100 # int | Number of results to return per page. (optional) (default to 100)
    name = 'name_example' # str |  (optional)
    offset = 1 # int | The initial index from which to return the results. (optional) (default to 1)
    type = 'type_example' # str |  (optional)

    try:
        api_response = api_instance.payments_creditors_list(account=account, address_country=address_country, agent=agent, currency=currency, limit=limit, name=name, offset=offset, type=type)
        print("The response of PaymentsApi->payments_creditors_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_creditors_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **account** | **str**|  | [optional] 
 **address_country** | **str**|  | [optional] 
 **agent** | **str**|  | [optional] 
 **currency** | **str**|  | [optional] 
 **limit** | **int**| Number of results to return per page. | [optional] [default to 100]
 **name** | **str**|  | [optional] 
 **offset** | **int**| The initial index from which to return the results. | [optional] [default to 1]
 **type** | **str**|  | [optional] 

### Return type

[**PaginatedCreditorAccountList**](PaginatedCreditorAccountList.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_creditors_retrieve**
> CreditorAccount payments_creditors_retrieve(id)



API endpoints related to creditor accounts.

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.creditor_account import CreditorAccount
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.payments_creditors_retrieve(id)
        print("The response of PaymentsApi->payments_creditors_retrieve:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_creditors_retrieve: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**CreditorAccount**](CreditorAccount.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **payments_submit_create**
> PaymentRead payments_submit_create(id, payment_read_request)



Initiate the payment on bank's side.  Complete the payment and return payment details as a response.

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.payment_read import PaymentRead
from openapi_client.models.payment_read_request import PaymentReadRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 
    payment_read_request = openapi_client.PaymentReadRequest() # PaymentReadRequest | 

    try:
        api_response = api_instance.payments_submit_create(id, payment_read_request)
        print("The response of PaymentsApi->payments_submit_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->payments_submit_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 
 **payment_read_request** | [**PaymentReadRequest**](PaymentReadRequest.md)|  | 

### Return type

[**PaymentRead**](PaymentRead.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, multipart/form-data
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_all_payment_creditor_accounts**
> List[CreditorAccount] retrieve_all_payment_creditor_accounts()



Retrieve all payment creditor accounts

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.creditor_account import CreditorAccount
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)

    try:
        api_response = api_instance.retrieve_all_payment_creditor_accounts()
        print("The response of PaymentsApi->retrieve_all_payment_creditor_accounts:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->retrieve_all_payment_creditor_accounts: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[CreditorAccount]**](CreditorAccount.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieve all payment creditor accounts |  -  |
**400** | Unknown Fields |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **retrieve_payment**
> PaymentRead retrieve_payment(id)



Retrieve payment

### Example

* Bearer (JWT) Authentication (jwtAuth):

```python
import openapi_client
from openapi_client.models.payment_read import PaymentRead
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://ob.nordigen.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://ob.nordigen.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): jwtAuth
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.PaymentsApi(api_client)
    id = 'id_example' # str | 

    try:
        api_response = api_instance.retrieve_payment(id)
        print("The response of PaymentsApi->retrieve_payment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PaymentsApi->retrieve_payment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**|  | 

### Return type

[**PaymentRead**](PaymentRead.md)

### Authorization

[jwtAuth](../README.md#jwtAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Retrieve payment information |  -  |
**400** | Invalid ID |  -  |
**401** | Invalid token |  -  |
**403** | IP Access denied |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

