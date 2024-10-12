# openapi_client.CustomersApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customer_add_customer_address**](CustomersApi.md#customer_add_customer_address) | **POST** /api/v1/customers/{id}/addresses | Adds a new address to a customer
[**customer_create**](CustomersApi.md#customer_create) | **POST** /api/v1/customers | Creates a new customer
[**customer_get_all**](CustomersApi.md#customer_get_all) | **GET** /api/v1/customers | Get a list of all customers
[**customer_get_customer_address**](CustomersApi.md#customer_get_customer_address) | **GET** /api/v1/customers/addresses/{id} | Queries a single address from a customer
[**customer_get_customer_addresses**](CustomersApi.md#customer_get_customer_addresses) | **GET** /api/v1/customers/{id}/addresses | Queries a list of addresses from a customer
[**customer_get_customer_orders**](CustomersApi.md#customer_get_customer_orders) | **GET** /api/v1/customers/{id}/orders | Queries a list of orders from a customer
[**customer_get_one**](CustomersApi.md#customer_get_one) | **GET** /api/v1/customers/{id} | Queries a single customer by id
[**customer_patch_address**](CustomersApi.md#customer_patch_address) | **PATCH** /api/v1/customers/addresses/{id} | Updates one or more fields of an address
[**customer_update**](CustomersApi.md#customer_update) | **PUT** /api/v1/customers/{id} | Updates a customer by id
[**customer_update_address**](CustomersApi.md#customer_update_address) | **PUT** /api/v1/customers/addresses/{id} | Updates all fields of an address
[**search_search_0**](CustomersApi.md#search_search_0) | **POST** /api/v1/search | Search for products, customers and orders.  Type can be \&quot;order\&quot;, \&quot;product\&quot; and / or \&quot;customer\&quot;  Term can contains lucene query syntax


# **customer_add_customer_address**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel customer_add_customer_address(id, billbee_interfaces_billbee_api_model_customer_address_api_model)

Adds a new address to a customer

Id and  CustomerId will be ignored in model. If Id is set, the addition will be stopped.

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_customer_address_api_model import BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_customer_address_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    id = 56 # int | CustomerId to attach the new address to.
    billbee_interfaces_billbee_api_model_customer_address_api_model = openapi_client.BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel() # BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel | Model containing the address, that should be attached.

    try:
        # Adds a new address to a customer
        api_response = api_instance.customer_add_customer_address(id, billbee_interfaces_billbee_api_model_customer_address_api_model)
        print("The response of CustomersApi->customer_add_customer_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customer_add_customer_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| CustomerId to attach the new address to. | 
 **billbee_interfaces_billbee_api_model_customer_address_api_model** | [**BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel**](BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.md)| Model containing the address, that should be attached. | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_create**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel customer_create(billbee_interfaces_billbee_api_model_create_customer_api_model)

Creates a new customer

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_create_customer_api_model import BillbeeInterfacesBillbeeAPIModelCreateCustomerApiModel
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_customer_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    billbee_interfaces_billbee_api_model_create_customer_api_model = openapi_client.BillbeeInterfacesBillbeeAPIModelCreateCustomerApiModel() # BillbeeInterfacesBillbeeAPIModelCreateCustomerApiModel | 

    try:
        # Creates a new customer
        api_response = api_instance.customer_create(billbee_interfaces_billbee_api_model_create_customer_api_model)
        print("The response of CustomersApi->customer_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customer_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billbee_interfaces_billbee_api_model_create_customer_api_model** | [**BillbeeInterfacesBillbeeAPIModelCreateCustomerApiModel**](BillbeeInterfacesBillbeeAPIModelCreateCustomerApiModel.md)|  | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_get_all**
> RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerApiModel customer_get_all(page=page, page_size=page_size)

Get a list of all customers

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_paged_result_system_collections_generic_list_billbee_interfaces_billbee_api_model_customer_api_model import RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    page = 56 # int | The current page to request starting with 1 (optional)
    page_size = 56 # int | The pagesize for the result list. Values between 1 and 250 are allowed (optional)

    try:
        # Get a list of all customers
        api_response = api_instance.customer_get_all(page=page, page_size=page_size)
        print("The response of CustomersApi->customer_get_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customer_get_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The current page to request starting with 1 | [optional] 
 **page_size** | **int**| The pagesize for the result list. Values between 1 and 250 are allowed | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerApiModel**](RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_get_customer_address**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel customer_get_customer_address(id)

Queries a single address from a customer

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_customer_address_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    id = 56 # int | The id of the address

    try:
        # Queries a single address from a customer
        api_response = api_instance.customer_get_customer_address(id)
        print("The response of CustomersApi->customer_get_customer_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customer_get_customer_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the address | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_get_customer_addresses**
> RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel customer_get_customer_addresses(id, page=page, page_size=page_size)

Queries a list of addresses from a customer

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_paged_result_system_collections_generic_list_billbee_interfaces_billbee_api_model_customer_address_api_model import RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    id = 56 # int | The id of the customer
    page = 56 # int | The current page to request starting with 1 (optional)
    page_size = 56 # int | The pagesize for the result list. Values between 1 and 250 are allowed (optional)

    try:
        # Queries a list of addresses from a customer
        api_response = api_instance.customer_get_customer_addresses(id, page=page, page_size=page_size)
        print("The response of CustomersApi->customer_get_customer_addresses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customer_get_customer_addresses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the customer | 
 **page** | **int**| The current page to request starting with 1 | [optional] 
 **page_size** | **int**| The pagesize for the result list. Values between 1 and 250 are allowed | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel**](RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_get_customer_orders**
> RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListRechnungsdruckWebAppControllersApiOrder customer_get_customer_orders(id, page=page, page_size=page_size)

Queries a list of orders from a customer

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_paged_result_system_collections_generic_list_rechnungsdruck_web_app_controllers_api_order import RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListRechnungsdruckWebAppControllersApiOrder
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    id = 56 # int | The id of the customer
    page = 56 # int | The current page to request starting with 1 (optional)
    page_size = 56 # int | The pagesize for the result list. Values between 1 and 250 are allowed (optional)

    try:
        # Queries a list of orders from a customer
        api_response = api_instance.customer_get_customer_orders(id, page=page, page_size=page_size)
        print("The response of CustomersApi->customer_get_customer_orders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customer_get_customer_orders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the customer | 
 **page** | **int**| The current page to request starting with 1 | [optional] 
 **page_size** | **int**| The pagesize for the result list. Values between 1 and 250 are allowed | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListRechnungsdruckWebAppControllersApiOrder**](RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListRechnungsdruckWebAppControllersApiOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_get_one**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel customer_get_one(id)

Queries a single customer by id

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_customer_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    id = 56 # int | The id of the customer to query

    try:
        # Queries a single customer by id
        api_response = api_instance.customer_get_one(id)
        print("The response of CustomersApi->customer_get_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customer_get_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the customer to query | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_patch_address**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel customer_patch_address(id, body)

Updates one or more fields of an address

Id and CustomerId cannot be changed

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_customer_address_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    id = 56 # int | The id of the address
    body = None # object | The address fields to be changed. Please query an address via (todo) to see all fields. Note that Id and CustomerId cannot be changed.

    try:
        # Updates one or more fields of an address
        api_response = api_instance.customer_patch_address(id, body)
        print("The response of CustomersApi->customer_patch_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customer_patch_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the address | 
 **body** | **object**| The address fields to be changed. Please query an address via (todo) to see all fields. Note that Id and CustomerId cannot be changed. | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, text/json
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_update**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel customer_update(id, billbee_interfaces_billbee_api_model_customer_api_model)

Updates a customer by id

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_customer_api_model import BillbeeInterfacesBillbeeAPIModelCustomerApiModel
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_customer_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    id = 56 # int | The id of the customer
    billbee_interfaces_billbee_api_model_customer_api_model = openapi_client.BillbeeInterfacesBillbeeAPIModelCustomerApiModel() # BillbeeInterfacesBillbeeAPIModelCustomerApiModel | 

    try:
        # Updates a customer by id
        api_response = api_instance.customer_update(id, billbee_interfaces_billbee_api_model_customer_api_model)
        print("The response of CustomersApi->customer_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customer_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the customer | 
 **billbee_interfaces_billbee_api_model_customer_api_model** | [**BillbeeInterfacesBillbeeAPIModelCustomerApiModel**](BillbeeInterfacesBillbeeAPIModelCustomerApiModel.md)|  | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **customer_update_address**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel customer_update_address(id, billbee_interfaces_billbee_api_model_customer_address_api_model)

Updates all fields of an address

Id and CustomerId cannot be changed. Fields you do not send will become empty.

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_customer_address_api_model import BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_customer_address_api_model import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    id = 56 # int | The id of the address
    billbee_interfaces_billbee_api_model_customer_address_api_model = openapi_client.BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel() # BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel | The updated address. Please query an address via (todo) to see all fields. Note that Id and CustomerId cannot be changed.

    try:
        # Updates all fields of an address
        api_response = api_instance.customer_update_address(id, billbee_interfaces_billbee_api_model_customer_address_api_model)
        print("The response of CustomersApi->customer_update_address:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->customer_update_address: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the address | 
 **billbee_interfaces_billbee_api_model_customer_address_api_model** | [**BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel**](BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.md)| The updated address. Please query an address via (todo) to see all fields. Note that Id and CustomerId cannot be changed. | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_search_0**
> RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel search_search_0(rechnungsdruck_web_app_controllers_api_search_controller_search_model)

Search for products, customers and orders.  Type can be \"order\", \"product\" and / or \"customer\"  Term can contains lucene query syntax

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_rechnungsdruck_web_app_controllers_api_search_controller_search_results_model import RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel
from openapi_client.models.rechnungsdruck_web_app_controllers_api_search_controller_search_model import RechnungsdruckWebAppControllersApiSearchControllerSearchModel
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://app.billbee.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://app.billbee.io"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CustomersApi(api_client)
    rechnungsdruck_web_app_controllers_api_search_controller_search_model = openapi_client.RechnungsdruckWebAppControllersApiSearchControllerSearchModel() # RechnungsdruckWebAppControllersApiSearchControllerSearchModel | 

    try:
        # Search for products, customers and orders.  Type can be \"order\", \"product\" and / or \"customer\"  Term can contains lucene query syntax
        api_response = api_instance.search_search_0(rechnungsdruck_web_app_controllers_api_search_controller_search_model)
        print("The response of CustomersApi->search_search_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomersApi->search_search_0: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rechnungsdruck_web_app_controllers_api_search_controller_search_model** | [**RechnungsdruckWebAppControllersApiSearchControllerSearchModel**](RechnungsdruckWebAppControllersApiSearchControllerSearchModel.md)|  | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel**](RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

