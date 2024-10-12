# openapi_client.InvoiceApi

All URIs are relative to *https://app.billbee.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**order_api_create_invoice_0**](InvoiceApi.md#order_api_create_invoice_0) | **POST** /api/v1/orders/CreateInvoice/{id} | Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
[**order_api_get_invoice_list_0**](InvoiceApi.md#order_api_get_invoice_list_0) | **GET** /api/v1/orders/invoices | Get a list of all invoices optionally filtered by date. This request ist throttled to 1 per 1 minute for same page and minInvoiceDate


# **order_api_create_invoice_0**
> RechnungsdruckWebAppControllersApiApiResultRechnungsdruckWebAppControllersApiInvoice order_api_create_invoice_0(id, include_invoice_pdf=include_invoice_pdf, template_id=template_id, send_to_cloud_id=send_to_cloud_id)

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
    api_instance = openapi_client.InvoiceApi(api_client)
    id = 56 # int | The internal billbee id of the order
    include_invoice_pdf = True # bool | If true, the PDF is included in the response as base64 encoded string (optional)
    template_id = 56 # int | You can pass the id of an invoice template to overwrite the assigned template for invoice creation (optional)
    send_to_cloud_id = 56 # int | You can pass the id of a connected cloud printer/storage to send the invoice to it (optional)

    try:
        # Create an invoice for an existing order. This request is extra throttled by order and api key to a maximum of 1 per 5 minutes.
        api_response = api_instance.order_api_create_invoice_0(id, include_invoice_pdf=include_invoice_pdf, template_id=template_id, send_to_cloud_id=send_to_cloud_id)
        print("The response of InvoiceApi->order_api_create_invoice_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->order_api_create_invoice_0: %s\n" % e)
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

# **order_api_get_invoice_list_0**
> RechnungsdruckWebAppControllersApiApiPagedResultSystemCollectionsGenericListBillbeeInterfacesBillbeeAPIModelInvoiceApiModel order_api_get_invoice_list_0(min_invoice_date=min_invoice_date, max_invoice_date=max_invoice_date, page=page, page_size=page_size, shop_id=shop_id, order_state_id=order_state_id, tag=tag, min_pay_date=min_pay_date, max_pay_date=max_pay_date, include_positions=include_positions, exclude_tags=exclude_tags)

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
    api_instance = openapi_client.InvoiceApi(api_client)
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
        api_response = api_instance.order_api_get_invoice_list_0(min_invoice_date=min_invoice_date, max_invoice_date=max_invoice_date, page=page, page_size=page_size, shop_id=shop_id, order_state_id=order_state_id, tag=tag, min_pay_date=min_pay_date, max_pay_date=max_pay_date, include_positions=include_positions, exclude_tags=exclude_tags)
        print("The response of InvoiceApi->order_api_get_invoice_list_0:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling InvoiceApi->order_api_get_invoice_list_0: %s\n" % e)
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

