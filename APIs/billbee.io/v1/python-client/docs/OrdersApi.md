# openapi_client.OrdersApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**layout_api_get_list**](OrdersApi.md#layout_api_get_list) | **GET** /api/v1/layouts | 
[**order_api_add_shipment**](OrdersApi.md#order_api_add_shipment) | **POST** /api/v1/orders/{id}/shipment | Add a shipment to a given order
[**order_api_create_delivery_note**](OrdersApi.md#order_api_create_delivery_note) | **POST** /api/v1/orders/CreateDeliveryNote/{id} | Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
[**order_api_create_invoice**](OrdersApi.md#order_api_create_invoice) | **POST** /api/v1/orders/CreateInvoice/{id} | Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
[**order_api_find**](OrdersApi.md#order_api_find) | **GET** /api/v1/orders/find/{id}/{partner} | Find a single order by its external id (order number)
[**order_api_get**](OrdersApi.md#order_api_get) | **GET** /api/v1/orders/{id} | Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute
[**order_api_get_by_ext_ref**](OrdersApi.md#order_api_get_by_ext_ref) | **GET** /api/v1/orders/findbyextref/{extRef} | Get a single order by its external order number
[**order_api_get_invoice_list**](OrdersApi.md#order_api_get_invoice_list) | **GET** /api/v1/orders/invoices | Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate
[**order_api_get_list**](OrdersApi.md#order_api_get_list) | **GET** /api/v1/orders | Get a list of all orders optionally filtered by date
[**order_api_get_patchable_fields**](OrdersApi.md#order_api_get_patchable_fields) | **GET** /api/v1/orders/PatchableFields | Returns a list of fields which can be updated with the orders/{id} patch call
[**order_api_parse_placeholders**](OrdersApi.md#order_api_parse_placeholders) | **POST** /api/v1/orders/{id}/parse-placeholders | Parses a text and replaces all placeholders
[**order_api_patch_order**](OrdersApi.md#order_api_patch_order) | **PATCH** /api/v1/orders/{id} | Updates one or more fields of an order
[**order_api_post_new_order**](OrdersApi.md#order_api_post_new_order) | **POST** /api/v1/orders | Creates a new order in the Billbee account
[**order_api_send_message**](OrdersApi.md#order_api_send_message) | **POST** /api/v1/orders/{id}/send-message | Sends a message to the buyer
[**order_api_tags_create**](OrdersApi.md#order_api_tags_create) | **POST** /api/v1/orders/{id}/tags | Attach one or more tags to an order
[**order_api_tags_update**](OrdersApi.md#order_api_tags_update) | **PUT** /api/v1/orders/{id}/tags | Sets the tags attached to an order
[**order_api_trigger_event**](OrdersApi.md#order_api_trigger_event) | **POST** /api/v1/orders/{id}/trigger-event | Triggers a rule event
[**order_api_update_state**](OrdersApi.md#order_api_update_state) | **PUT** /api/v1/orders/{id}/orderstate | Changes the main state of a single order
[**search_search_1**](OrdersApi.md#search_search_1) | **POST** /api/v1/search | Search for products, customers and orders.  Type can be \&quot;order\&quot;, \&quot;product\&quot; and / or \&quot;customer\&quot;  Term can contains lucene query syntax


# **layout_api_get_list**
> RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelsLayoutTemplate layout_api_get_list()



### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_system_collections_generic_list_billbee_interfaces_billbee_api_models_layout_template import RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelsLayoutTemplate
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
    api_instance = openapi_client.OrdersApi(api_client)

    try:
        api_response = api_instance.layout_api_get_list()
        print("The response of OrdersApi->layout_api_get_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->layout_api_get_list: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelsLayoutTemplate**](RechnungsdruckWebAppControllersApiApiResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelsLayoutTemplate.md)

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

# **order_api_add_shipment**
> object order_api_add_shipment(id, rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model)

Add a shipment to a given order

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model import RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 56 # int | The internal billbee id of the order
    rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model = openapi_client.RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel() # RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel | The shipment data to create the shipment

    try:
        # Add a shipment to a given order
        api_response = api_instance.order_api_add_shipment(id, rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model)
        print("The response of OrdersApi->order_api_add_shipment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_add_shipment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The internal billbee id of the order | 
 **rechnungsdruck_web_app_controllers_api_api_add_shipment_to_order_model** | [**RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel**](RechnungsdruckWebAppControllersApiApiAddShipmentToOrderModel.md)| The shipment data to create the shipment | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_api_create_delivery_note**
> object order_api_create_delivery_note(id, include_pdf=include_pdf, send_to_cloud_id=send_to_cloud_id)

Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### Example


```python
import openapi_client
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 56 # int | The internal billbee id of the order
    include_pdf = True # bool | If true, the PDF is included in the response as base64 encoded string (optional)
    send_to_cloud_id = 56 # int | Optionally specify the id of a billbee connected cloud device to send the pdf to (optional)

    try:
        # Create an delivery note for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
        api_response = api_instance.order_api_create_delivery_note(id, include_pdf=include_pdf, send_to_cloud_id=send_to_cloud_id)
        print("The response of OrdersApi->order_api_create_delivery_note:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_create_delivery_note: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The internal billbee id of the order | 
 **include_pdf** | **bool**| If true, the PDF is included in the response as base64 encoded string | [optional] 
 **send_to_cloud_id** | **int**| Optionally specify the id of a billbee connected cloud device to send the pdf to | [optional] 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_api_create_invoice**
> RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice order_api_create_invoice(id, include_invoice_pdf=include_invoice_pdf, template_id=template_id, send_to_cloud_id=send_to_cloud_id)

Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_rechnungsdruck_web_app_controllers_api_invoice import RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 56 # int | The internal billbee id of the order
    include_invoice_pdf = True # bool | If true, the PDF is included in the response as base64 encoded string (optional)
    template_id = 56 # int | You can pass the id of an invoice template to overwrite the assigned template for invoice creation (optional)
    send_to_cloud_id = 56 # int | You can pass the id of a connected cloud printer/storage to send the invoice to it (optional)

    try:
        # Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
        api_response = api_instance.order_api_create_invoice(id, include_invoice_pdf=include_invoice_pdf, template_id=template_id, send_to_cloud_id=send_to_cloud_id)
        print("The response of OrdersApi->order_api_create_invoice:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_create_invoice: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The internal billbee id of the order | 
 **include_invoice_pdf** | **bool**| If true, the PDF is included in the response as base64 encoded string | [optional] 
 **template_id** | **int**| You can pass the id of an invoice template to overwrite the assigned template for invoice creation | [optional] 
 **send_to_cloud_id** | **int**| You can pass the id of a connected cloud printer/storage to send the invoice to it | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice**](RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice.md)

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

# **order_api_find**
> object order_api_find(id, partner)

Find a single order by its external id (order number)

### Example


```python
import openapi_client
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 'id_example' # str | The order id from the external system
    partner = 'partner_example' # str | Optional the name of the shop/marketplace the order was imported from

    try:
        # Find a single order by its external id (order number)
        api_response = api_instance.order_api_find(id, partner)
        print("The response of OrdersApi->order_api_find:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_find: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| The order id from the external system | 
 **partner** | **str**| Optional the name of the shop/marketplace the order was imported from | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_api_get**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder order_api_get(id, article_title_source=article_title_source)

Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_order import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 56 # int | The internal billbee id of the order
    article_title_source = 56 # int | The source field for the article title. 0 = Order Position (default), 1 = Article Title, 2 = Article Invoice Text (optional)

    try:
        # Get a single order by its internal billbee id. This request is throttled to 6 calls per order in one minute
        api_response = api_instance.order_api_get(id, article_title_source=article_title_source)
        print("The response of OrdersApi->order_api_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The internal billbee id of the order | 
 **article_title_source** | **int**| The source field for the article title. 0 &#x3D; Order Position (default), 1 &#x3D; Article Title, 2 &#x3D; Article Invoice Text | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder.md)

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

# **order_api_get_by_ext_ref**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder order_api_get_by_ext_ref(ext_ref)

Get a single order by its external order number

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_order import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder
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
    api_instance = openapi_client.OrdersApi(api_client)
    ext_ref = 'ext_ref_example' # str | The extern order number of the order

    try:
        # Get a single order by its external order number
        api_response = api_instance.order_api_get_by_ext_ref(ext_ref)
        print("The response of OrdersApi->order_api_get_by_ext_ref:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_get_by_ext_ref: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **ext_ref** | **str**| The extern order number of the order | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder.md)

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

# **order_api_get_invoice_list**
> RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelInvoiceApiModel order_api_get_invoice_list(min_invoice_date=min_invoice_date, max_invoice_date=max_invoice_date, page=page, page_size=page_size, shop_id=shop_id, order_state_id=order_state_id, tag=tag, min_pay_date=min_pay_date, max_pay_date=max_pay_date, include_positions=include_positions, exclude_tags=exclude_tags)

Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_paged_result_system_collections_generic_list_billbee_interfaces_billbee_api_model_invoice_api_model import RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelInvoiceApiModel
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
    api_instance = openapi_client.OrdersApi(api_client)
    min_invoice_date = '2013-10-20T19:20:30+01:00' # datetime | Specifies the oldest invoice date to include (optional)
    max_invoice_date = '2013-10-20T19:20:30+01:00' # datetime | Specifies the newest invoice date to include (optional)
    page = 56 # int | Specifies the page to request (optional)
    page_size = 56 # int | Specifies the pagesize. Defaults to 50, max value is 250 (optional)
    shop_id = [56] # List[int] | Specifies a list of shop ids for which invoices should be included (optional)
    order_state_id = [56] # List[int] | Specifies a list of state ids to include in the response (optional)
    tag = ['tag_example'] # List[str] |  (optional)
    min_pay_date = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    max_pay_date = '2013-10-20T19:20:30+01:00' # datetime |  (optional)
    include_positions = True # bool |  (optional)
    exclude_tags = True # bool | If true the list of tags passed to the call are used to filter orders to not include these tags (optional)

    try:
        # Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate
        api_response = api_instance.order_api_get_invoice_list(min_invoice_date=min_invoice_date, max_invoice_date=max_invoice_date, page=page, page_size=page_size, shop_id=shop_id, order_state_id=order_state_id, tag=tag, min_pay_date=min_pay_date, max_pay_date=max_pay_date, include_positions=include_positions, exclude_tags=exclude_tags)
        print("The response of OrdersApi->order_api_get_invoice_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_get_invoice_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **min_invoice_date** | **datetime**| Specifies the oldest invoice date to include | [optional] 
 **max_invoice_date** | **datetime**| Specifies the newest invoice date to include | [optional] 
 **page** | **int**| Specifies the page to request | [optional] 
 **page_size** | **int**| Specifies the pagesize. Defaults to 50, max value is 250 | [optional] 
 **shop_id** | [**List[int]**](int.md)| Specifies a list of shop ids for which invoices should be included | [optional] 
 **order_state_id** | [**List[int]**](int.md)| Specifies a list of state ids to include in the response | [optional] 
 **tag** | [**List[str]**](str.md)|  | [optional] 
 **min_pay_date** | **datetime**|  | [optional] 
 **max_pay_date** | **datetime**|  | [optional] 
 **include_positions** | **bool**|  | [optional] 
 **exclude_tags** | **bool**| If true the list of tags passed to the call are used to filter orders to not include these tags | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelInvoiceApiModel**](RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelInvoiceApiModel.md)

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

# **order_api_get_list**
> RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelOrder order_api_get_list(min_order_date=min_order_date, max_order_date=max_order_date, page=page, page_size=page_size, shop_id=shop_id, order_state_id=order_state_id, tag=tag, minimum_bill_bee_order_id=minimum_bill_bee_order_id, modified_at_min=modified_at_min, modified_at_max=modified_at_max, article_title_source=article_title_source, exclude_tags=exclude_tags)

Get a list of all orders optionally filtered by date

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_paged_result_system_collections_generic_list_billbee_interfaces_billbee_api_model_order import RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelOrder
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
    api_instance = openapi_client.OrdersApi(api_client)
    min_order_date = '2013-10-20T19:20:30+01:00' # datetime | Specifies the oldest order date to include in the response (optional)
    max_order_date = '2013-10-20T19:20:30+01:00' # datetime | Specifies the newest order date to include in the response (optional)
    page = 56 # int | Specifies the page to request (optional)
    page_size = 56 # int | Specifies the pagesize. Defaults to 50, max value is 250 (optional)
    shop_id = [56] # List[int] | Specifies a list of shop ids for which invoices should be included (optional)
    order_state_id = [56] # List[int] | Specifies a list of state ids to include in the response (optional)
    tag = ['tag_example'] # List[str] | Specifies a list of tags the order must have attached to be included in the response (optional)
    minimum_bill_bee_order_id = 56 # int | If given, all delivered orders have an Id greater than or equal to the given minimumOrderId (optional)
    modified_at_min = '2013-10-20T19:20:30+01:00' # datetime | If given, the last modification has to be newer than the given date (optional)
    modified_at_max = '2013-10-20T19:20:30+01:00' # datetime | If given, the last modification has to be older or equal than the given date. (optional)
    article_title_source = 56 # int | The source field for the article title. 0 = Order Position (default), 1 = Article Title, 2 = Article Invoice Text (optional)
    exclude_tags = True # bool | If true the list of tags passed to the call are used to filter orders to not include these tags (optional)

    try:
        # Get a list of all orders optionally filtered by date
        api_response = api_instance.order_api_get_list(min_order_date=min_order_date, max_order_date=max_order_date, page=page, page_size=page_size, shop_id=shop_id, order_state_id=order_state_id, tag=tag, minimum_bill_bee_order_id=minimum_bill_bee_order_id, modified_at_min=modified_at_min, modified_at_max=modified_at_max, article_title_source=article_title_source, exclude_tags=exclude_tags)
        print("The response of OrdersApi->order_api_get_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_get_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **min_order_date** | **datetime**| Specifies the oldest order date to include in the response | [optional] 
 **max_order_date** | **datetime**| Specifies the newest order date to include in the response | [optional] 
 **page** | **int**| Specifies the page to request | [optional] 
 **page_size** | **int**| Specifies the pagesize. Defaults to 50, max value is 250 | [optional] 
 **shop_id** | [**List[int]**](int.md)| Specifies a list of shop ids for which invoices should be included | [optional] 
 **order_state_id** | [**List[int]**](int.md)| Specifies a list of state ids to include in the response | [optional] 
 **tag** | [**List[str]**](str.md)| Specifies a list of tags the order must have attached to be included in the response | [optional] 
 **minimum_bill_bee_order_id** | **int**| If given, all delivered orders have an Id greater than or equal to the given minimumOrderId | [optional] 
 **modified_at_min** | **datetime**| If given, the last modification has to be newer than the given date | [optional] 
 **modified_at_max** | **datetime**| If given, the last modification has to be older or equal than the given date. | [optional] 
 **article_title_source** | **int**| The source field for the article title. 0 &#x3D; Order Position (default), 1 &#x3D; Article Title, 2 &#x3D; Article Invoice Text | [optional] 
 **exclude_tags** | **bool**| If true the list of tags passed to the call are used to filter orders to not include these tags | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelOrder**](RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelOrder.md)

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

# **order_api_get_patchable_fields**
> object order_api_get_patchable_fields()

Returns a list of fields which can be updated with the orders/{id} patch call

### Example


```python
import openapi_client
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
    api_instance = openapi_client.OrdersApi(api_client)

    try:
        # Returns a list of fields which can be updated with the orders/{id} patch call
        api_response = api_instance.order_api_get_patchable_fields()
        print("The response of OrdersApi->order_api_get_patchable_fields:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_get_patchable_fields: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_api_parse_placeholders**
> object order_api_parse_placeholders(id, rechnungsdruck_web_app_controllers_api_order_api_controller_parse_text_container)

Parses a text and replaces all placeholders

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_order_api_controller_parse_text_container import RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 56 # int | The id of the order
    rechnungsdruck_web_app_controllers_api_order_api_controller_parse_text_container = openapi_client.RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer() # RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer | 

    try:
        # Parses a text and replaces all placeholders
        api_response = api_instance.order_api_parse_placeholders(id, rechnungsdruck_web_app_controllers_api_order_api_controller_parse_text_container)
        print("The response of OrdersApi->order_api_parse_placeholders:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_parse_placeholders: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the order | 
 **rechnungsdruck_web_app_controllers_api_order_api_controller_parse_text_container** | [**RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer**](RechnungsdruckWebAppControllersApiOrderApiControllerParseTextContainer.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_api_patch_order**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder order_api_patch_order(id, body)

Updates one or more fields of an order

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_order import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 56 # int | 
    body = None # object | 

    try:
        # Updates one or more fields of an order
        api_response = api_instance.order_api_patch_order(id, body)
        print("The response of OrdersApi->order_api_patch_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_patch_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**|  | 
 **body** | **object**|  | 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder.md)

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

# **order_api_post_new_order**
> RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder order_api_post_new_order(billbee_interfaces_billbee_api_model_order, shop_id=shop_id)

Creates a new order in the Billbee account

To create an order POST an JSON object to the orders endpoint with the shown properties.  Not all properties are required.

### Example


```python
import openapi_client
from openapi_client.models.billbee_interfaces_billbee_api_model_order import BillbeeInterfacesBillbeeAPIModelOrder
from openapi_client.models.rechnungsdruck_web_app_controllers_api_api_result_billbee_interfaces_billbee_api_model_order import RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder
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
    api_instance = openapi_client.OrdersApi(api_client)
    billbee_interfaces_billbee_api_model_order = openapi_client.BillbeeInterfacesBillbeeAPIModelOrder() # BillbeeInterfacesBillbeeAPIModelOrder | 
    shop_id = 56 # int | Deprecated, if orderData.ApiAccountId is set, it will be used instead of 'shopId' (optional)

    try:
        # Creates a new order in the Billbee account
        api_response = api_instance.order_api_post_new_order(billbee_interfaces_billbee_api_model_order, shop_id=shop_id)
        print("The response of OrdersApi->order_api_post_new_order:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_post_new_order: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **billbee_interfaces_billbee_api_model_order** | [**BillbeeInterfacesBillbeeAPIModelOrder**](BillbeeInterfacesBillbeeAPIModelOrder.md)|  | 
 **shop_id** | **int**| Deprecated, if orderData.ApiAccountId is set, it will be used instead of &#39;shopId&#39; | [optional] 

### Return type

[**RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder**](RechnungsdruckWebAppControllersApiApiResultBillbeeInterfacesBillbeeAPIModelOrder.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | The order was created successfully |  -  |
**400** | Invalid data was received in the request |  -  |
**500** | An internal exception occured. Order was not created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_api_send_message**
> object order_api_send_message(id, rechnungsdruck_web_app_controllers_api_order_api_controller_send_message_model)

Sends a message to the buyer

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_order_api_controller_send_message_model import RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 56 # int | The id of the order
    rechnungsdruck_web_app_controllers_api_order_api_controller_send_message_model = openapi_client.RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel() # RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel | The message model

    try:
        # Sends a message to the buyer
        api_response = api_instance.order_api_send_message(id, rechnungsdruck_web_app_controllers_api_order_api_controller_send_message_model)
        print("The response of OrdersApi->order_api_send_message:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_send_message: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the order | 
 **rechnungsdruck_web_app_controllers_api_order_api_controller_send_message_model** | [**RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel**](RechnungsdruckWebAppControllersApiOrderApiControllerSendMessageModel.md)| The message model | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_api_tags_create**
> object order_api_tags_create(id, rechnungsdruck_web_app_controllers_api_order_tag_create)

Attach one or more tags to an order

When a tag is already attached, it is ignored. Tags are not case sensitive. All given tags are added to the existing tags.

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_order_tag_create import RechnungsdruckWebAppControllersApiOrderTagCreate
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 56 # int | The internal id of the order
    rechnungsdruck_web_app_controllers_api_order_tag_create = openapi_client.RechnungsdruckWebAppControllersApiOrderTagCreate() # RechnungsdruckWebAppControllersApiOrderTagCreate | Tags to attach

    try:
        # Attach one or more tags to an order
        api_response = api_instance.order_api_tags_create(id, rechnungsdruck_web_app_controllers_api_order_tag_create)
        print("The response of OrdersApi->order_api_tags_create:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_tags_create: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The internal id of the order | 
 **rechnungsdruck_web_app_controllers_api_order_tag_create** | [**RechnungsdruckWebAppControllersApiOrderTagCreate**](RechnungsdruckWebAppControllersApiOrderTagCreate.md)| Tags to attach | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_api_tags_update**
> object order_api_tags_update(id, rechnungsdruck_web_app_controllers_api_order_tag_create)

Sets the tags attached to an order

All existing tags will be replaced by the given list of new tags. To just add tags, use POST method.

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_order_tag_create import RechnungsdruckWebAppControllersApiOrderTagCreate
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 56 # int | The internal id of the order
    rechnungsdruck_web_app_controllers_api_order_tag_create = openapi_client.RechnungsdruckWebAppControllersApiOrderTagCreate() # RechnungsdruckWebAppControllersApiOrderTagCreate | Tags to attach

    try:
        # Sets the tags attached to an order
        api_response = api_instance.order_api_tags_update(id, rechnungsdruck_web_app_controllers_api_order_tag_create)
        print("The response of OrdersApi->order_api_tags_update:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_tags_update: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The internal id of the order | 
 **rechnungsdruck_web_app_controllers_api_order_tag_create** | [**RechnungsdruckWebAppControllersApiOrderTagCreate**](RechnungsdruckWebAppControllersApiOrderTagCreate.md)| Tags to attach | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_api_trigger_event**
> object order_api_trigger_event(id, rechnungsdruck_web_app_controllers_api_order_api_controller_trigger_event_container)

Triggers a rule event

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_order_api_controller_trigger_event_container import RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 56 # int | The id of the order
    rechnungsdruck_web_app_controllers_api_order_api_controller_trigger_event_container = openapi_client.RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer() # RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer | 

    try:
        # Triggers a rule event
        api_response = api_instance.order_api_trigger_event(id, rechnungsdruck_web_app_controllers_api_order_api_controller_trigger_event_container)
        print("The response of OrdersApi->order_api_trigger_event:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_trigger_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The id of the order | 
 **rechnungsdruck_web_app_controllers_api_order_api_controller_trigger_event_container** | [**RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer**](RechnungsdruckWebAppControllersApiOrderApiControllerTriggerEventContainer.md)|  | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **order_api_update_state**
> object order_api_update_state(id, rechnungsdruck_web_app_controllers_api_order_state_update)

Changes the main state of a single order

### REMARKS ###  Use this call to change the state of an order to i.e. paid or sent.    The state is transfered to the external shop/marketplace if configured.  This is the list of known states:  - 1: ordered  - 2: confirmed  - 3: paid  - 4: shipped  - 5: reclamation  - 6: deleted  - 7: closed  - 8: canceled  - 9: archived  - 10: not used  - 11: demand note 1  - 12: demand note 2  - 13: packed  - 14: offered  - 15: payment reminder  - 16: fulfilling

### Example


```python
import openapi_client
from openapi_client.models.rechnungsdruck_web_app_controllers_api_order_state_update import RechnungsdruckWebAppControllersApiOrderStateUpdate
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
    api_instance = openapi_client.OrdersApi(api_client)
    id = 56 # int | The internal id of the order
    rechnungsdruck_web_app_controllers_api_order_state_update = openapi_client.RechnungsdruckWebAppControllersApiOrderStateUpdate() # RechnungsdruckWebAppControllersApiOrderStateUpdate | The data used to change the state

    try:
        # Changes the main state of a single order
        api_response = api_instance.order_api_update_state(id, rechnungsdruck_web_app_controllers_api_order_state_update)
        print("The response of OrdersApi->order_api_update_state:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->order_api_update_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **int**| The internal id of the order | 
 **rechnungsdruck_web_app_controllers_api_order_state_update** | [**RechnungsdruckWebAppControllersApiOrderStateUpdate**](RechnungsdruckWebAppControllersApiOrderStateUpdate.md)| The data used to change the state | 

### Return type

**object**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json, application/x-www-form-urlencoded, application/xml, text/json, text/xml
 - **Accept**: application/json, text/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_search_1**
> RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiSearchControllerSearchResultsModel search_search_1(rechnungsdruck_web_app_controllers_api_search_controller_search_model)

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
    api_instance = openapi_client.OrdersApi(api_client)
    rechnungsdruck_web_app_controllers_api_search_controller_search_model = openapi_client.RechnungsdruckWebAppControllersApiSearchControllerSearchModel() # RechnungsdruckWebAppControllersApiSearchControllerSearchModel | 

    try:
        # Search for products, customers and orders.  Type can be \"order\", \"product\" and / or \"customer\"  Term can contains lucene query syntax
        api_response = api_instance.search_search_1(rechnungsdruck_web_app_controllers_api_search_controller_search_model)
        print("The response of OrdersApi->search_search_1:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OrdersApi->search_search_1: %s\n" % e)
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

