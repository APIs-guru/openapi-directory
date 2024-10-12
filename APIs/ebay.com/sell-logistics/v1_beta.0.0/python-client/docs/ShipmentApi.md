# openapi_client.ShipmentApi

All URIs are relative to *https://api.ebay.com/sell/logistics/v1_beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancel_shipment**](ShipmentApi.md#cancel_shipment) | **POST** /shipment/{shipmentId}/cancel | 
[**create_from_shipping_quote**](ShipmentApi.md#create_from_shipping_quote) | **POST** /shipment/create_from_shipping_quote | 
[**download_label_file**](ShipmentApi.md#download_label_file) | **GET** /shipment/{shipmentId}/download_label_file | 
[**get_shipment**](ShipmentApi.md#get_shipment) | **GET** /shipment/{shipmentId} | 


# **cancel_shipment**
> Shipment cancel_shipment(shipment_id)



This method cancels the shipment associated with the specified shipment ID and the associated shipping label is deleted. When you cancel a shipment, the <b>totalShippingCost</b> of the canceled shipment is refunded to the account established by the user's billing agreement.  <br><br>Note that you cannot cancel a shipment if you have used the associated shipping label.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.shipment import Shipment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/logistics/v1_beta
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/logistics/v1_beta"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShipmentApi(api_client)
    shipment_id = 'shipment_id_example' # str | This path parameter specifies the unique eBay-assigned ID of the shipment to be canceled. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.

    try:
        api_response = api_instance.cancel_shipment(shipment_id)
        print("The response of ShipmentApi->cancel_shipment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentApi->cancel_shipment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_id** | **str**| This path parameter specifies the unique eBay-assigned ID of the shipment to be canceled. The &lt;b&gt;shipmentId&lt;/b&gt; value is generated and returned by a call to &lt;b&gt;createFromShippingQuote&lt;/b&gt;. | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **create_from_shipping_quote**
> Shipment create_from_shipping_quote(create_shipment_from_quote_request)



This method creates a \"shipment\" based on the <b>shippingQuoteId</b> and <b>rateId</b> values supplied in the request. The rate identified by the <b>rateId</b> value specifies the carrier and service for the package shipment, and the rate ID must be contained in the shipping quote identified by the <b>shippingQuoteId</b> value. Call <b>createShippingQuote</b> to retrieve a set of live shipping rates.  <br><br>When you create a shipment, eBay generates a shipping label that you can download and use to ship your package.  <br><br>In a <b>createFromShippingQuote</b> request, sellers can include a list of shipping options they want to add to the base service quoted in the selected rate. The list of available shipping options is specific to each quoted rate and if available, the options are listed in the rate container of the of the shipping quote.  <br><br>In addition to a configurable return-to location and other details about the shipment, the response to this method includes:  <ul><li>The shipping carrier and service to be used for the package shipment</li> <li>A list of selected shipping options, if any</li> <li>The shipment tracking number</li> <li>The total shipping cost (the sum cost of the base shipping service and any added options)</li></ul> When you create a shipment, your billing agreement account is charged the sum of the <b>baseShippingCost</b> and the total cost of any additional shipping options you might have selected. Use the URL returned in <b>labelDownloadUrl</b> field, or call <b>downloadLabelFile</b> with the <b>shipmentId</b> value from the response, to download a shipping label for your package. <p class=\"tablenote\"><b>Important!</b> Sellers must set up their payment method with eBay before they can use this method to create a shipment and the associated shipping label.</p>

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.create_shipment_from_quote_request import CreateShipmentFromQuoteRequest
from openapi_client.models.shipment import Shipment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/logistics/v1_beta
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/logistics/v1_beta"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShipmentApi(api_client)
    create_shipment_from_quote_request = openapi_client.CreateShipmentFromQuoteRequest() # CreateShipmentFromQuoteRequest | The create shipment from quote request.

    try:
        api_response = api_instance.create_from_shipping_quote(create_shipment_from_quote_request)
        print("The response of ShipmentApi->create_from_shipping_quote:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentApi->create_from_shipping_quote: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_shipment_from_quote_request** | [**CreateShipmentFromQuoteRequest**](CreateShipmentFromQuoteRequest.md)| The create shipment from quote request. | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **download_label_file**
> List[str] download_label_file(shipment_id)



This method returns the shipping label file that was generated for the <b>shipmentId</b> value specified in the request. Call <b>createFromShippingQuote</b> to generate a shipment ID.  <br><br>Use the <code>Accept</code> HTTP header to specify the format of the returned file. The default file format is a PDF file. <!-- Are other options available? -->

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/logistics/v1_beta
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/logistics/v1_beta"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShipmentApi(api_client)
    shipment_id = 'shipment_id_example' # str | This path parameter specifies the unique eBay-assigned ID of the shipment associated with the shipping label you want to download. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.

    try:
        api_response = api_instance.download_label_file(shipment_id)
        print("The response of ShipmentApi->download_label_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentApi->download_label_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_id** | **str**| This path parameter specifies the unique eBay-assigned ID of the shipment associated with the shipping label you want to download. The &lt;b&gt;shipmentId&lt;/b&gt; value is generated and returned by a call to &lt;b&gt;createFromShippingQuote&lt;/b&gt;. | 

### Return type

**List[str]**

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/pdf

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_shipment**
> Shipment get_shipment(shipment_id)



This method retrieves the shipment details for the specified shipment ID. Call <b>createFromShippingQuote</b> to generate a shipment ID.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.shipment import Shipment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/logistics/v1_beta
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/logistics/v1_beta"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShipmentApi(api_client)
    shipment_id = 'shipment_id_example' # str | This path parameter specifies the unique eBay-assigned ID of the shipment you want to retrieve. The <b>shipmentId</b> value is generated and returned by a call to <b>createFromShippingQuote</b>.

    try:
        api_response = api_instance.get_shipment(shipment_id)
        print("The response of ShipmentApi->get_shipment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShipmentApi->get_shipment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipment_id** | **str**| This path parameter specifies the unique eBay-assigned ID of the shipment you want to retrieve. The &lt;b&gt;shipmentId&lt;/b&gt; value is generated and returned by a call to &lt;b&gt;createFromShippingQuote&lt;/b&gt;. | 

### Return type

[**Shipment**](Shipment.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

