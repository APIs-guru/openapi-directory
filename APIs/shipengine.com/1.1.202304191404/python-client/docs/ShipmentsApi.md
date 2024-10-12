# openapi_client.ShipmentsApi

All URIs are relative to *https://api.shipengine.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_shipments**](ShipmentsApi.md#cancel_shipments) | **PUT** /v1/shipments/{shipment_id}/cancel | Cancel a Shipment
[**create_shipments**](ShipmentsApi.md#create_shipments) | **POST** /v1/shipments | Create Shipments
[**get_shipment_by_external_id**](ShipmentsApi.md#get_shipment_by_external_id) | **GET** /v1/shipments/external_shipment_id/{external_shipment_id} | Get Shipment By External ID
[**get_shipment_by_id**](ShipmentsApi.md#get_shipment_by_id) | **GET** /v1/shipments/{shipment_id} | Get Shipment By ID
[**list_shipment_rates**](ShipmentsApi.md#list_shipment_rates) | **GET** /v1/shipments/{shipment_id}/rates | Get Shipment Rates
[**list_shipments**](ShipmentsApi.md#list_shipments) | **GET** /v1/shipments | List Shipments
[**parse_shipment**](ShipmentsApi.md#parse_shipment) | **PUT** /v1/shipments/recognize | Parse shipping info
[**tag_shipment**](ShipmentsApi.md#tag_shipment) | **POST** /v1/shipments/{shipment_id}/tags/{tag_name} | Add Tag to Shipment
[**untag_shipment**](ShipmentsApi.md#untag_shipment) | **DELETE** /v1/shipments/{shipment_id}/tags/{tag_name} | Remove Tag from Shipment
[**update_shipment**](ShipmentsApi.md#update_shipment) | **PUT** /v1/shipments/{shipment_id} | Update Shipment By ID


# **cancel_shipments**
> str cancel_shipments(shipment_id)

Cancel a Shipment

Mark a shipment cancelled, if it is no longer needed or being used by your organized. Any label associated with the shipment needs to be voided first An example use case would be if a batch label creation job is going to run at a set time and only queries `pending` shipments. Marking a shipment as cancelled would remove it from this process 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    shipment_id = 'shipment_id_example' # str | Shipment ID

    try:
        # Cancel a Shipment
        api_response = api_instance.cancel_shipments(shipment_id)
        print("The response of ShipmentsApi->cancel_shipments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->cancel_shipments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_id** | **str**| Shipment ID | 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request was successful. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_shipments**
> CreateShipmentsResponseBody create_shipments(create_shipments_request_body)

Create Shipments

Create one or multiple shipments.

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.create_shipments_request_body import CreateShipmentsRequestBody
from openapi_client.models.create_shipments_response_body import CreateShipmentsResponseBody
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    create_shipments_request_body = openapi_client.CreateShipmentsRequestBody() # CreateShipmentsRequestBody | 

    try:
        # Create Shipments
        api_response = api_instance.create_shipments(create_shipments_request_body)
        print("The response of ShipmentsApi->create_shipments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->create_shipments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_shipments_request_body** | [**CreateShipmentsRequestBody**](CreateShipmentsRequestBody.md)|  | 

### Return type

[**CreateShipmentsResponseBody**](CreateShipmentsResponseBody.md)

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
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_shipment_by_external_id**
> GetShipmentByExternalIdResponseBody get_shipment_by_external_id(external_shipment_id)

Get Shipment By External ID

Query Shipments created using your own custom ID convention using this endpint

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_shipment_by_external_id_response_body import GetShipmentByExternalIdResponseBody
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    external_shipment_id = '0bcb569d-1727-4ff9-ab49-b2fec0cee5ae' # str | 

    try:
        # Get Shipment By External ID
        api_response = api_instance.get_shipment_by_external_id(external_shipment_id)
        print("The response of ShipmentsApi->get_shipment_by_external_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->get_shipment_by_external_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **external_shipment_id** | **str**|  | 

### Return type

[**GetShipmentByExternalIdResponseBody**](GetShipmentByExternalIdResponseBody.md)

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

# **get_shipment_by_id**
> GetShipmentByIdResponseBody get_shipment_by_id(shipment_id)

Get Shipment By ID

Get an individual shipment based on its ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.get_shipment_by_id_response_body import GetShipmentByIdResponseBody
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    shipment_id = 'shipment_id_example' # str | Shipment ID

    try:
        # Get Shipment By ID
        api_response = api_instance.get_shipment_by_id(shipment_id)
        print("The response of ShipmentsApi->get_shipment_by_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->get_shipment_by_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_id** | **str**| Shipment ID | 

### Return type

[**GetShipmentByIdResponseBody**](GetShipmentByIdResponseBody.md)

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

# **list_shipment_rates**
> ListShipmentRatesResponseBody list_shipment_rates(shipment_id, created_at_start=created_at_start)

Get Shipment Rates

Get Rates for the shipment information associated with the shipment ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.list_shipment_rates_response_body import ListShipmentRatesResponseBody
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    shipment_id = 'shipment_id_example' # str | Shipment ID
    created_at_start = '2019-03-12T19:24:13.657Z' # datetime | Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) (optional)

    try:
        # Get Shipment Rates
        api_response = api_instance.list_shipment_rates(shipment_id, created_at_start=created_at_start)
        print("The response of ShipmentsApi->list_shipment_rates:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->list_shipment_rates: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_id** | **str**| Shipment ID | 
 **created_at_start** | **datetime**| Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) | [optional] 

### Return type

[**ListShipmentRatesResponseBody**](ListShipmentRatesResponseBody.md)

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

# **list_shipments**
> ListShipmentsResponseBody list_shipments(shipment_status=shipment_status, batch_id=batch_id, tag=tag, created_at_start=created_at_start, created_at_end=created_at_end, modified_at_start=modified_at_start, modified_at_end=modified_at_end, page=page, page_size=page_size, sales_order_id=sales_order_id, sort_dir=sort_dir, sort_by=sort_by)

List Shipments

Get list of Shipments

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.list_shipments_response_body import ListShipmentsResponseBody
from openapi_client.models.shipment_status import ShipmentStatus
from openapi_client.models.shipments_sort_by import ShipmentsSortBy
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    shipment_status = openapi_client.ShipmentStatus() # ShipmentStatus |  (optional)
    batch_id = 'batch_id_example' # str | Batch ID (optional)
    tag = 'Letters_to_santa' # str | Search for shipments based on the custom tag added to the shipment object (optional)
    created_at_start = '2019-03-12T19:24:13.657Z' # datetime | Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) (optional)
    created_at_end = '2019-03-12T19:24:13.657Z' # datetime | Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) (optional)
    modified_at_start = '2019-03-12T19:24:13.657Z' # datetime | Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time) (optional)
    modified_at_end = '2019-03-12T19:24:13.657Z' # datetime | Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time) (optional)
    page = 1 # int | Return a specific page of results. Defaults to the first page. If set to a number that's greater than the number of pages of results, an empty page is returned.  (optional) (default to 1)
    page_size = 25 # int | The number of results to return per response. (optional) (default to 25)
    sales_order_id = 'sales_order_id_example' # str | Sales Order ID (optional)
    sort_dir = openapi_client.SortDir() # SortDir | Controls the sort order of the query. (optional)
    sort_by = openapi_client.ShipmentsSortBy() # ShipmentsSortBy |  (optional)

    try:
        # List Shipments
        api_response = api_instance.list_shipments(shipment_status=shipment_status, batch_id=batch_id, tag=tag, created_at_start=created_at_start, created_at_end=created_at_end, modified_at_start=modified_at_start, modified_at_end=modified_at_end, page=page, page_size=page_size, sales_order_id=sales_order_id, sort_dir=sort_dir, sort_by=sort_by)
        print("The response of ShipmentsApi->list_shipments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->list_shipments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_status** | [**ShipmentStatus**](.md)|  | [optional] 
 **batch_id** | **str**| Batch ID | [optional] 
 **tag** | **str**| Search for shipments based on the custom tag added to the shipment object | [optional] 
 **created_at_start** | **datetime**| Used to create a filter for when a resource was created (ex. A shipment that was created after a certain time) | [optional] 
 **created_at_end** | **datetime**| Used to create a filter for when a resource was created, (ex. A shipment that was created before a certain time) | [optional] 
 **modified_at_start** | **datetime**| Used to create a filter for when a resource was modified (ex. A shipment that was modified after a certain time) | [optional] 
 **modified_at_end** | **datetime**| Used to create a filter for when a resource was modified (ex. A shipment that was modified before a certain time) | [optional] 
 **page** | **int**| Return a specific page of results. Defaults to the first page. If set to a number that&#39;s greater than the number of pages of results, an empty page is returned.  | [optional] [default to 1]
 **page_size** | **int**| The number of results to return per response. | [optional] [default to 25]
 **sales_order_id** | **str**| Sales Order ID | [optional] 
 **sort_dir** | [**SortDir**](.md)| Controls the sort order of the query. | [optional] 
 **sort_by** | [**ShipmentsSortBy**](.md)|  | [optional] 

### Return type

[**ListShipmentsResponseBody**](ListShipmentsResponseBody.md)

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

# **parse_shipment**
> ParseShipmentResponseBody parse_shipment(parse_shipment_request_body)

Parse shipping info

The shipment-recognition API makes it easy for you to extract shipping data from unstructured text, including people's names, addresses, package weights and dimensions, insurance and delivery requirements, and more.  Data often enters your system as unstructured text (for example: emails, SMS messages, support tickets, or other documents). ShipEngine's shipment-recognition API helps you extract meaningful, structured data from this unstructured text. The parsed shipment data is returned in the same structure that's used for other ShipEngine APIs, so you can easily use the parsed data to create a shipping label.  > **Note:** Shipment recognition is currently supported for the United States, Canada, Australia, New Zealand, the United Kingdom, and Ireland. 

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.parse_shipment_request_body import ParseShipmentRequestBody
from openapi_client.models.parse_shipment_response_body import ParseShipmentResponseBody
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    parse_shipment_request_body = {"shipment":{"service_code":"usps_first_class_mail","ship_from":{"address_line1":"587 Shotwell St.","address_line2":"Suite 201","address_residential_indicator":true,"city_locality":"San Francisco","company_name":"My Awesome Store","country_code":"US","phone":"555-555-5555","postal_code":94110,"state_province":"CA"}},"text":"I have a 4oz package that's 5x10x14in, and I need to ship it to Margie McMiller at 3800 North Lamar suite 200 in austin, tx 78652. Please send it via USPS first class and require an adult signature. It also needs to be insured for $400.\n"} # ParseShipmentRequestBody | The only required field is `text`, which is the text to be parsed. You can optionally also provide a `shipment` containing any already-known values. For example, you probably already know the `ship_from` address, and you may also already know what carrier and service you want to use. 

    try:
        # Parse shipping info
        api_response = api_instance.parse_shipment(parse_shipment_request_body)
        print("The response of ShipmentsApi->parse_shipment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->parse_shipment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **parse_shipment_request_body** | [**ParseShipmentRequestBody**](ParseShipmentRequestBody.md)| The only required field is &#x60;text&#x60;, which is the text to be parsed. You can optionally also provide a &#x60;shipment&#x60; containing any already-known values. For example, you probably already know the &#x60;ship_from&#x60; address, and you may also already know what carrier and service you want to use.  | 

### Return type

[**ParseShipmentResponseBody**](ParseShipmentResponseBody.md)

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Returns the parsed shipment, as well as a confidence score and a list of all the shipping entities that were recognized in the text.  |  -  |
**400** | The request contained errors. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **tag_shipment**
> TagShipmentResponseBody tag_shipment(shipment_id, tag_name)

Add Tag to Shipment

Add a tag to the shipment object

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.tag_shipment_response_body import TagShipmentResponseBody
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    shipment_id = 'shipment_id_example' # str | Shipment ID
    tag_name = 'tag_name_example' # str | 

    try:
        # Add Tag to Shipment
        api_response = api_instance.tag_shipment(shipment_id, tag_name)
        print("The response of ShipmentsApi->tag_shipment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->tag_shipment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_id** | **str**| Shipment ID | 
 **tag_name** | **str**|  | 

### Return type

[**TagShipmentResponseBody**](TagShipmentResponseBody.md)

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

# **untag_shipment**
> str untag_shipment(shipment_id, tag_name)

Remove Tag from Shipment

Remove an existing tag from the Shipment object

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    shipment_id = 'shipment_id_example' # str | Shipment ID
    tag_name = 'tag_name_example' # str | 

    try:
        # Remove Tag from Shipment
        api_response = api_instance.untag_shipment(shipment_id, tag_name)
        print("The response of ShipmentsApi->untag_shipment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->untag_shipment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_id** | **str**| Shipment ID | 
 **tag_name** | **str**|  | 

### Return type

**str**

### Authorization

[api_key](../README.md#api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | The request was successful. |  -  |
**400** | The request contained errors. |  -  |
**404** | The specified resource does not exist. |  -  |
**500** | An error occurred on ShipEngine&#39;s side.  &gt; This error will automatically be reported to our engineers.  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_shipment**
> UpdateShipmentResponseBody update_shipment(shipment_id, update_shipment_request_body)

Update Shipment By ID

Update a shipment object based on its ID

### Example

* Api Key Authentication (api_key):

```python
import openapi_client
from openapi_client.models.update_shipment_request_body import UpdateShipmentRequestBody
from openapi_client.models.update_shipment_response_body import UpdateShipmentResponseBody
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
    api_instance = openapi_client.ShipmentsApi(api_client)
    shipment_id = 'shipment_id_example' # str | Shipment ID
    update_shipment_request_body = openapi_client.UpdateShipmentRequestBody() # UpdateShipmentRequestBody | 

    try:
        # Update Shipment By ID
        api_response = api_instance.update_shipment(shipment_id, update_shipment_request_body)
        print("The response of ShipmentsApi->update_shipment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentsApi->update_shipment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_id** | **str**| Shipment ID | 
 **update_shipment_request_body** | [**UpdateShipmentRequestBody**](UpdateShipmentRequestBody.md)|  | 

### Return type

[**UpdateShipmentResponseBody**](UpdateShipmentResponseBody.md)

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

