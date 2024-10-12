# openapi_client.CustomerAddressesApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**customer_addresses_create**](CustomerAddressesApi.md#customer_addresses_create) | **POST** /api/v1/customer-addresses | Creates a new customer address
[**customer_addresses_get_all**](CustomerAddressesApi.md#customer_addresses_get_all) | **GET** /api/v1/customer-addresses | Get a list of all customer addresses
[**customer_addresses_get_one**](CustomerAddressesApi.md#customer_addresses_get_one) | **GET** /api/v1/customer-addresses/{id} | Queries a single customer address by id
[**customer_addresses_update**](CustomerAddressesApi.md#customer_addresses_update) | **PUT** /api/v1/customer-addresses/{id} | Updates a customer address by id


# **customer_addresses_create**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel customer_addresses_create(billbee_interfaces_billbee_api_model_customer_address_api_model)

Creates a new customer address

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
    api_instance = openapi_client.CustomerAddressesApi(api_client)
    billbee_interfaces_billbee_api_model_customer_address_api_model = openapi_client.BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel() # BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel | 

    try:
        # Creates a new customer address
        api_response = api_instance.customer_addresses_create(billbee_interfaces_billbee_api_model_customer_address_api_model)
        print("The response of CustomerAddressesApi->customer_addresses_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerAddressesApi->customer_addresses_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billbee_interfaces_billbee_api_model_customer_address_api_model** | [**BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel**](BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.md)|  | 

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

# **customer_addresses_get_all**
> RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel customer_addresses_get_all(page=page, page_size=page_size)

Get a list of all customer addresses

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
    api_instance = openapi_client.CustomerAddressesApi(api_client)
    page = 56 # int | The current page to request starting with 1 (default is 1) (optional)
    page_size = 56 # int | The page size for the result list. Values between 1 and 250 are allowed. (default is 50) (optional)

    try:
        # Get a list of all customer addresses
        api_response = api_instance.customer_addresses_get_all(page=page, page_size=page_size)
        print("The response of CustomerAddressesApi->customer_addresses_get_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerAddressesApi->customer_addresses_get_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page** | **int**| The current page to request starting with 1 (default is 1) | [optional] 
 **page_size** | **int**| The page size for the result list. Values between 1 and 250 are allowed. (default is 50) | [optional] 

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

# **customer_addresses_get_one**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel customer_addresses_get_one(id)

Queries a single customer address by id

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
    api_instance = openapi_client.CustomerAddressesApi(api_client)
    id = 56 # int | The id of the address to query

    try:
        # Queries a single customer address by id
        api_response = api_instance.customer_addresses_get_one(id)
        print("The response of CustomerAddressesApi->customer_addresses_get_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerAddressesApi->customer_addresses_get_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the address to query | 

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

# **customer_addresses_update**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel customer_addresses_update(id, billbee_interfaces_billbee_api_model_customer_address_api_model)

Updates a customer address by id

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
    api_instance = openapi_client.CustomerAddressesApi(api_client)
    id = 56 # int | The id of the address
    billbee_interfaces_billbee_api_model_customer_address_api_model = openapi_client.BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel() # BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel | 

    try:
        # Updates a customer address by id
        api_response = api_instance.customer_addresses_update(id, billbee_interfaces_billbee_api_model_customer_address_api_model)
        print("The response of CustomerAddressesApi->customer_addresses_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CustomerAddressesApi->customer_addresses_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the address | 
 **billbee_interfaces_billbee_api_model_customer_address_api_model** | [**BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel**](BillbeeInterfacesBillbeeAPIModelCustomerAddressApiModel.md)|  | 

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

