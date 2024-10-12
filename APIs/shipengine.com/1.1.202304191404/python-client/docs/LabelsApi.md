# openapi_client.LabelsApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_label**](LabelsApi.md#create_label) | **POST** /v1/labels | Purchase Label
[**create_label_from_rate**](LabelsApi.md#create_label_from_rate) | **POST** /v1/labels/rates/{rate_id} | Purchase Label with Rate ID
[**create_label_from_shipment**](LabelsApi.md#create_label_from_shipment) | **POST** /v1/labels/shipment/{shipment_id} | Purchase Label with Shipment ID
[**create_return_label**](LabelsApi.md#create_return_label) | **POST** /v1/labels/{label_id}/return | Create a return label
[**get_label_by_external_shipment_id**](LabelsApi.md#get_label_by_external_shipment_id) | **GET** /v1/labels/external_shipment_id/{external_shipment_id} | Get Label By External Shipment ID
[**get_label_by_id**](LabelsApi.md#get_label_by_id) | **GET** /v1/labels/{label_id} | Get Label By ID
[**get_tracking_log_from_label**](LabelsApi.md#get_tracking_log_from_label) | **GET** /v1/labels/{label_id}/track | Get Label Tracking Information
[**list_labels**](LabelsApi.md#list_labels) | **GET** /v1/labels | List labels
[**void_label**](LabelsApi.md#void_label) | **PUT** /v1/labels/{label_id}/void | Void a Label By ID


# **create_label**
> CreateLabelResponseBody create_label(create_label_request_body)

Purchase Label

Purchase and print a label for shipment

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.create_label_request_body import CreateLabelRequestBody
from openapi_client.models.create_label_response_body import CreateLabelResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
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
    api_instance = openapi_client.LabelsApi(api_client)
    create_label_request_body = openapi_client.CreateLabelRequestBody() # CreateLabelRequestBody | 

    try:
        # Purchase Label
        api_response = api_instance.create_label(create_label_request_body)
        print("The response of LabelsApi->create_label:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->create_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_label_request_body** | [**CreateLabelRequestBody**](CreateLabelRequestBody.md)|  | 

### Return type

[**CreateLabelResponseBody**](CreateLabelResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested object creation was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_label_from_rate**
> CreateLabelFromRateResponseBody create_label_from_rate(rate_id, create_label_from_rate_request_body)

Purchase Label with Rate ID

When retrieving rates for shipments using the `/rates` endpoint, the returned information contains a `rate_id` property that can be used to generate a label without having to refill in the shipment information repeatedly. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.create_label_from_rate_request_body import CreateLabelFromRateRequestBody
from openapi_client.models.create_label_from_rate_response_body import CreateLabelFromRateResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
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
    api_instance = openapi_client.LabelsApi(api_client)
    rate_id = 'rate_id_example' # str | Rate ID
    create_label_from_rate_request_body = openapi_client.CreateLabelFromRateRequestBody() # CreateLabelFromRateRequestBody | 

    try:
        # Purchase Label with Rate ID
        api_response = api_instance.create_label_from_rate(rate_id, create_label_from_rate_request_body)
        print("The response of LabelsApi->create_label_from_rate:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->create_label_from_rate: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **rate_id** | **str**| Rate ID | 
 **create_label_from_rate_request_body** | [**CreateLabelFromRateRequestBody**](CreateLabelFromRateRequestBody.md)|  | 

### Return type

[**CreateLabelFromRateResponseBody**](CreateLabelFromRateResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested object creation was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_label_from_shipment**
> CreateLabelFromShipmentResponseBody create_label_from_shipment(shipment_id, create_label_from_shipment_request_body)

Purchase Label with Shipment ID

Purchase a label using a shipment ID that has already been created with the desired address and package info. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.create_label_from_shipment_request_body import CreateLabelFromShipmentRequestBody
from openapi_client.models.create_label_from_shipment_response_body import CreateLabelFromShipmentResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
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
    api_instance = openapi_client.LabelsApi(api_client)
    shipment_id = 'shipment_id_example' # str | Shipment ID
    create_label_from_shipment_request_body = openapi_client.CreateLabelFromShipmentRequestBody() # CreateLabelFromShipmentRequestBody | 

    try:
        # Purchase Label with Shipment ID
        api_response = api_instance.create_label_from_shipment(shipment_id, create_label_from_shipment_request_body)
        print("The response of LabelsApi->create_label_from_shipment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->create_label_from_shipment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_id** | **str**| Shipment ID | 
 **create_label_from_shipment_request_body** | [**CreateLabelFromShipmentRequestBody**](CreateLabelFromShipmentRequestBody.md)|  | 

### Return type

[**CreateLabelFromShipmentResponseBody**](CreateLabelFromShipmentResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested object creation was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_return_label**
> CreateReturnLabelResponseBody create_return_label(label_id, create_return_label_request_body)

Create a return label

Create a return label

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.create_return_label_request_body import CreateReturnLabelRequestBody
from openapi_client.models.create_return_label_response_body import CreateReturnLabelResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
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
    api_instance = openapi_client.LabelsApi(api_client)
    label_id = 'label_id_example' # str | Label ID
    create_return_label_request_body = openapi_client.CreateReturnLabelRequestBody() # CreateReturnLabelRequestBody | 

    try:
        # Create a return label
        api_response = api_instance.create_return_label(label_id, create_return_label_request_body)
        print("The response of LabelsApi->create_return_label:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->create_return_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_id** | **str**| Label ID | 
 **create_return_label_request_body** | [**CreateReturnLabelRequestBody**](CreateReturnLabelRequestBody.md)|  | 

### Return type

[**CreateReturnLabelResponseBody**](CreateReturnLabelResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_label_by_external_shipment_id**
> GetLabelByExternalShipmentIdResponseBody get_label_by_external_shipment_id(external_shipment_id, label_download_type=label_download_type)

Get Label By External Shipment ID

Find a label by using the external shipment id that was used during label creation 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_label_by_external_shipment_id_response_body import GetLabelByExternalShipmentIdResponseBody
from openapi_client.models.label_download_type import LabelDownloadType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
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
    api_instance = openapi_client.LabelsApi(api_client)
    external_shipment_id = '0bcb569d-1727-4ff9-ab49-b2fec0cee5ae' # str | 
    label_download_type = openapi_client.LabelDownloadType() # LabelDownloadType |  (optional)

    try:
        # Get Label By External Shipment ID
        api_response = api_instance.get_label_by_external_shipment_id(external_shipment_id, label_download_type=label_download_type)
        print("The response of LabelsApi->get_label_by_external_shipment_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->get_label_by_external_shipment_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_shipment_id** | **str**|  | 
 **label_download_type** | [**LabelDownloadType**](.md)|  | [optional] 

### Return type

[**GetLabelByExternalShipmentIdResponseBody**](GetLabelByExternalShipmentIdResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The requested object creation was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_label_by_id**
> GetLabelByIdResponseBody get_label_by_id(label_id, label_download_type=label_download_type)

Get Label By ID

Retrieve information for individual labels.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_label_by_id_response_body import GetLabelByIdResponseBody
from openapi_client.models.label_download_type import LabelDownloadType
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
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
    api_instance = openapi_client.LabelsApi(api_client)
    label_id = 'label_id_example' # str | Label ID
    label_download_type = openapi_client.LabelDownloadType() # LabelDownloadType |  (optional)

    try:
        # Get Label By ID
        api_response = api_instance.get_label_by_id(label_id, label_download_type=label_download_type)
        print("The response of LabelsApi->get_label_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->get_label_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_id** | **str**| Label ID | 
 **label_download_type** | [**LabelDownloadType**](.md)|  | [optional] 

### Return type

[**GetLabelByIdResponseBody**](GetLabelByIdResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_tracking_log_from_label**
> GetTrackingLogFromLabelResponseBody get_tracking_log_from_label(label_id)

Get Label Tracking Information

Retrieve the label's tracking information

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_tracking_log_from_label_response_body import GetTrackingLogFromLabelResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
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
    api_instance = openapi_client.LabelsApi(api_client)
    label_id = 'label_id_example' # str | Label ID

    try:
        # Get Label Tracking Information
        api_response = api_instance.get_tracking_log_from_label(label_id)
        print("The response of LabelsApi->get_tracking_log_from_label:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->get_tracking_log_from_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_id** | **str**| Label ID | 

### Return type

[**GetTrackingLogFromLabelResponseBody**](GetTrackingLogFromLabelResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_labels**
> ListLabelsResponseBody list_labels(label_status=label_status, service_code=service_code, carrier_id=carrier_id, tracking_number=tracking_number, batch_id=batch_id, rate_id=rate_id, shipment_id=shipment_id, warehouse_id=warehouse_id, created_at_start=created_at_start, created_at_end=created_at_end, page=page, page_size=page_size, sort_dir=sort_dir, sort_by=sort_by)

List labels

This endpoint returns a list of labels that you've [created](https://www.shipengine.com/docs/labels/create-a-label/). You can optionally filter the results as well as control their sort order and the number of results returned at a time.  By default, all labels are returned, 25 at a time, starting with the most recently created ones.  You can combine multiple filter options to narrow-down the results.  For example, if you only want to get your UPS labels for your east coast warehouse you could query by both `warehouse_id` and `carrier_id` 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.label_status import LabelStatus
from openapi_client.models.list_labels_response_body import ListLabelsResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
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
    api_instance = openapi_client.LabelsApi(api_client)
    label_status = openapi_client.LabelStatus() # LabelStatus | Only return labels that are currently in the specified status (optional)
    service_code = 'usps_first_class_mail' # str | Only return labels for a specific [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) (optional)
    carrier_id = 'carrier_id_example' # str | Only return labels for a specific [carrier account](https://www.shipengine.com/docs/carriers/setup/) (optional)
    tracking_number = '9405511899223197428490' # str | Only return labels with a specific tracking number (optional)
    batch_id = 'batch_id_example' # str | Only return labels that were created in a specific [batch](https://www.shipengine.com/docs/labels/bulk/) (optional)
    rate_id = 'rate_id_example' # str | Rate ID (optional)
    shipment_id = 'shipment_id_example' # str | Shipment ID (optional)
    warehouse_id = 'warehouse_id_example' # str | Only return labels that originate from a specific [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) (optional)
    created_at_start = '2019-03-12T19:24:13.657Z' # datetime | Only return labels that were created on or after a specific date/time (optional)
    created_at_end = '2019-03-12T19:24:13.657Z' # datetime | Only return labels that were created on or before a specific date/time (optional)
    page = 1 # int | Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
    page_size = 25 # int | The number of results to return per response. (optional) (default to 25)
    sort_dir = openapi_client.SortDir() # SortDir | Controls the sort order of the query. (optional)
    sort_by = created_at # str | Controls which field the query is sorted by. (optional) (default to created_at)

    try:
        # List labels
        api_response = api_instance.list_labels(label_status=label_status, service_code=service_code, carrier_id=carrier_id, tracking_number=tracking_number, batch_id=batch_id, rate_id=rate_id, shipment_id=shipment_id, warehouse_id=warehouse_id, created_at_start=created_at_start, created_at_end=created_at_end, page=page, page_size=page_size, sort_dir=sort_dir, sort_by=sort_by)
        print("The response of LabelsApi->list_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->list_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_status** | [**LabelStatus**](.md)| Only return labels that are currently in the specified status | [optional] 
 **service_code** | **str**| Only return labels for a specific [carrier service](https://www.shipengine.com/docs/shipping/use-a-carrier-service/) | [optional] 
 **carrier_id** | **str**| Only return labels for a specific [carrier account](https://www.shipengine.com/docs/carriers/setup/) | [optional] 
 **tracking_number** | **str**| Only return labels with a specific tracking number | [optional] 
 **batch_id** | **str**| Only return labels that were created in a specific [batch](https://www.shipengine.com/docs/labels/bulk/) | [optional] 
 **rate_id** | **str**| Rate ID | [optional] 
 **shipment_id** | **str**| Shipment ID | [optional] 
 **warehouse_id** | **str**| Only return labels that originate from a specific [warehouse](https://www.shipengine.com/docs/shipping/ship-from-a-warehouse/) | [optional] 
 **created_at_start** | **datetime**| Only return labels that were created on or after a specific date/time | [optional] 
 **created_at_end** | **datetime**| Only return labels that were created on or before a specific date/time | [optional] 
 **page** | **int**| Return a specific page of results. Defaults to the first page. If set to a number that&#39;s greater than the number of pages of results, an empty page is returned.  | [optional] [default to 1]
 **page_size** | **int**| The number of results to return per response. | [optional] [default to 25]
 **sort_dir** | [**SortDir**](.md)| Controls the sort order of the query. | [optional] 
 **sort_by** | **str**| Controls which field the query is sorted by. | [optional] [default to created_at]

### Return type

[**ListLabelsResponseBody**](ListLabelsResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The response includes a &#x60;labels&#x60; array containing a page of results (as determined by the &#x60;page_size&#x60; query parameter).  It also includes other useful information, such as the total number of labels that match the query criteria, the number of pages of results, and the URLs of the first, last, next, and previous pages of results.  |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **void_label**
> VoidLabelResponseBody void_label(label_id)

Void a Label By ID

Void a label by ID to get a refund.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.void_label_response_body import VoidLabelResponseBody
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.shipengine.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.shipengine.com"
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
    api_instance = openapi_client.LabelsApi(api_client)
    label_id = 'label_id_example' # str | Label ID

    try:
        # Void a Label By ID
        api_response = api_instance.void_label(label_id)
        print("The response of LabelsApi->void_label:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->void_label: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **label_id** | **str**| Label ID | 

### Return type

[**VoidLabelResponseBody**](VoidLabelResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The request was a success. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

