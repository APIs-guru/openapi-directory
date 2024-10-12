# openapi_client.InvoiceItemsApi

All URIs are relative to *https://unify.apideck.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**invoice_items_add**](InvoiceItemsApi.md#invoice_items_add) | **POST** /accounting/invoice-items | Create Invoice Item
[**invoice_items_all**](InvoiceItemsApi.md#invoice_items_all) | **GET** /accounting/invoice-items | List Invoice Items
[**invoice_items_delete**](InvoiceItemsApi.md#invoice_items_delete) | **DELETE** /accounting/invoice-items/{id} | Delete Invoice Item
[**invoice_items_one**](InvoiceItemsApi.md#invoice_items_one) | **GET** /accounting/invoice-items/{id} | Get Invoice Item
[**invoice_items_update**](InvoiceItemsApi.md#invoice_items_update) | **PATCH** /accounting/invoice-items/{id} | Update Invoice Item


# **invoice_items_add**
> CreateInvoiceItemResponse invoice_items_add(x_apideck_consumer_id, x_apideck_app_id, invoice_item, raw=raw, x_apideck_service_id=x_apideck_service_id)

Create Invoice Item

Create Invoice Item

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.create_invoice_item_response import CreateInvoiceItemResponse
from openapi_client.models.invoice_item import InvoiceItem
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InvoiceItemsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    invoice_item = openapi_client.InvoiceItem() # InvoiceItem | 
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)

    try:
        # Create Invoice Item
        api_response = api_instance.invoice_items_add(x_apideck_consumer_id, x_apideck_app_id, invoice_item, raw=raw, x_apideck_service_id=x_apideck_service_id)
        print("The response of InvoiceItemsApi->invoice_items_add:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceItemsApi->invoice_items_add: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **invoice_item** | [**InvoiceItem**](InvoiceItem.md)|  | 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 

### Return type

[**CreateInvoiceItemResponse**](CreateInvoiceItemResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | InvoiceItems |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoice_items_all**
> GetInvoiceItemsResponse invoice_items_all(x_apideck_consumer_id, x_apideck_app_id, raw=raw, x_apideck_service_id=x_apideck_service_id, cursor=cursor, limit=limit, filter=filter, pass_through=pass_through, fields=fields)

List Invoice Items

List Invoice Items

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_invoice_items_response import GetInvoiceItemsResponse
from openapi_client.models.invoice_items_filter import InvoiceItemsFilter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InvoiceItemsApi(api_client)
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    cursor = 'cursor_example' # str | Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. (optional)
    limit = 20 # int | Number of results to return. Minimum 1, Maximum 200, Default 20 (optional) (default to 20)
    filter = openapi_client.InvoiceItemsFilter() # InvoiceItemsFilter | Apply filters (optional)
    pass_through = None # PassThroughQuery | Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]=leads becomes ?search=leads (optional)
    fields = 'id,updated_at' # str | The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded. (optional)

    try:
        # List Invoice Items
        api_response = api_instance.invoice_items_all(x_apideck_consumer_id, x_apideck_app_id, raw=raw, x_apideck_service_id=x_apideck_service_id, cursor=cursor, limit=limit, filter=filter, pass_through=pass_through, fields=fields)
        print("The response of InvoiceItemsApi->invoice_items_all:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceItemsApi->invoice_items_all: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **cursor** | **str**| Cursor to start from. You can find cursors for next/previous pages in the meta.cursors property of the response. | [optional] 
 **limit** | **int**| Number of results to return. Minimum 1, Maximum 200, Default 20 | [optional] [default to 20]
 **filter** | [**InvoiceItemsFilter**](.md)| Apply filters | [optional] 
 **pass_through** | [**PassThroughQuery**](object.md)| Optional unmapped key/values that will be passed through to downstream as query parameters. Ie: ?pass_through[search]&#x3D;leads becomes ?search&#x3D;leads | [optional] 
 **fields** | **str**| The &#39;fields&#39; parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. &lt;br /&gt;&lt;br /&gt;Example: &#x60;fields&#x3D;name,email,addresses.city&#x60;&lt;br /&gt;&lt;br /&gt;In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | [optional] 

### Return type

[**GetInvoiceItemsResponse**](GetInvoiceItemsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | InvoiceItems |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoice_items_delete**
> DeleteTaxRateResponse invoice_items_delete(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw)

Delete Invoice Item

Delete Invoice Item

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.delete_tax_rate_response import DeleteTaxRateResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InvoiceItemsApi(api_client)
    id = 'id_example' # str | ID of the record you are acting upon.
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)

    try:
        # Delete Invoice Item
        api_response = api_instance.invoice_items_delete(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw)
        print("The response of InvoiceItemsApi->invoice_items_delete:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceItemsApi->invoice_items_delete: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the record you are acting upon. | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]

### Return type

[**DeleteTaxRateResponse**](DeleteTaxRateResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | InvoiceItems |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoice_items_one**
> GetInvoiceItemResponse invoice_items_one(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw, fields=fields)

Get Invoice Item

Get Invoice Item

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.get_invoice_item_response import GetInvoiceItemResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InvoiceItemsApi(api_client)
    id = 'id_example' # str | ID of the record you are acting upon.
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)
    fields = 'id,updated_at' # str | The 'fields' parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. <br /><br />Example: `fields=name,email,addresses.city`<br /><br />In the example above, the response will only include the fields \"name\", \"email\" and \"addresses.city\". If any other fields are available, they will be excluded. (optional)

    try:
        # Get Invoice Item
        api_response = api_instance.invoice_items_one(id, x_apideck_consumer_id, x_apideck_app_id, x_apideck_service_id=x_apideck_service_id, raw=raw, fields=fields)
        print("The response of InvoiceItemsApi->invoice_items_one:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceItemsApi->invoice_items_one: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the record you are acting upon. | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]
 **fields** | **str**| The &#39;fields&#39; parameter allows API users to specify the fields they want to include in the API response. If this parameter is not present, the API will return all available fields. If this parameter is present, only the fields specified in the comma-separated string will be included in the response. Nested properties can also be requested by using a dot notation. &lt;br /&gt;&lt;br /&gt;Example: &#x60;fields&#x3D;name,email,addresses.city&#x60;&lt;br /&gt;&lt;br /&gt;In the example above, the response will only include the fields \&quot;name\&quot;, \&quot;email\&quot; and \&quot;addresses.city\&quot;. If any other fields are available, they will be excluded. | [optional] 

### Return type

[**GetInvoiceItemResponse**](GetInvoiceItemResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | InvoiceItems |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **invoice_items_update**
> UpdateInvoiceItemsResponse invoice_items_update(id, x_apideck_consumer_id, x_apideck_app_id, invoice_item, x_apideck_service_id=x_apideck_service_id, raw=raw)

Update Invoice Item

Update Invoice Item

### Example

* Api Key Authentication (apiKey):

```python
import openapi_client
from openapi_client.models.invoice_item import InvoiceItem
from openapi_client.models.update_invoice_items_response import UpdateInvoiceItemsResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://unify.apideck.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://unify.apideck.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKey
configuration.api_key['apiKey'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKey'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.InvoiceItemsApi(api_client)
    id = 'id_example' # str | ID of the record you are acting upon.
    x_apideck_consumer_id = 'x_apideck_consumer_id_example' # str | ID of the consumer which you want to get or push data from
    x_apideck_app_id = 'dSBdXd2H6Mqwfg0atXHXYcysLJE9qyn1VwBtXHX' # str | The ID of your Unify application
    invoice_item = openapi_client.InvoiceItem() # InvoiceItem | 
    x_apideck_service_id = 'x_apideck_service_id_example' # str | Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. (optional)
    raw = False # bool | Include raw response. Mostly used for debugging purposes (optional) (default to False)

    try:
        # Update Invoice Item
        api_response = api_instance.invoice_items_update(id, x_apideck_consumer_id, x_apideck_app_id, invoice_item, x_apideck_service_id=x_apideck_service_id, raw=raw)
        print("The response of InvoiceItemsApi->invoice_items_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceItemsApi->invoice_items_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| ID of the record you are acting upon. | 
 **x_apideck_consumer_id** | **str**| ID of the consumer which you want to get or push data from | 
 **x_apideck_app_id** | **str**| The ID of your Unify application | 
 **invoice_item** | [**InvoiceItem**](InvoiceItem.md)|  | 
 **x_apideck_service_id** | **str**| Provide the service id you want to call (e.g., pipedrive). Only needed when a consumer has activated multiple integrations for a Unified API. | [optional] 
 **raw** | **bool**| Include raw response. Mostly used for debugging purposes | [optional] [default to False]

### Return type

[**UpdateInvoiceItemsResponse**](UpdateInvoiceItemsResponse.md)

### Authorization

[apiKey](../README.md#apiKey)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | InvoiceItems |  -  |
**400** | Bad Request |  -  |
**401** | Unauthorized |  -  |
**402** | Payment Required |  -  |
**404** | The specified resource was not found |  -  |
**422** | Unprocessable |  -  |
**0** | Unexpected error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

