# openapi_client.ShippingQuoteApi

All URIs are relative to *https://api.ebay.com/sell/logistics/v1_beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_shipping_quote**](ShippingQuoteApi.md#create_shipping_quote) | **POST** /shipping_quote | 
[**get_shipping_quote**](ShippingQuoteApi.md#get_shipping_quote) | **GET** /shipping_quote/{shippingQuoteId} | 


# **create_shipping_quote**
> ShippingQuote create_shipping_quote(x_ebay_c_marketplace_id, shipping_quote_request)



The <b>createShippingQuote</b> method returns a <i>shipping quote </i> that contains a list of live \"rates.\"  <br><br>Each rate represents an offer made by a shipping carrier for a specific service and each offer has a live quote for the base service cost. Rates have a time window in which they are \"live,\" and rates expire when their purchase window ends. If offered by the carrier, rates can include shipping options (and their associated prices), and users can add any offered shipping option to the base service should they desire.  Also, depending on the services required, rates can also include pickup and delivery windows.  <br><br>Each rate is for a single package and is based on the following information: <ul><li>The shipping origin</li> <li>The shipping destination</li> <li>The package size (weight and dimensions)</li></ul>  Rates are identified by a unique eBay-assigned <b>rateId</b> and rates are based on price points, pickup and delivery time frames, and other user requirements. Because each rate offered must be compliant with the eBay shipping program, all rates reflect eBay-negotiated prices.  <br><br>The various rates returned in a shipping quote offer the user a choice from which they can choose a shipping service that best fits their needs. Select the rate for your shipment and using the associated <b>rateId</b>, call <b>createFromShippingQuote</b> to create a shipment and generate a shipping label that you can use to ship the package.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.shipping_quote import ShippingQuote
from openapi_client.models.shipping_quote_request import ShippingQuoteRequest
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
    api_instance = openapi_client.ShippingQuoteApi(api_client)
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | This header parameter specifies the eBay marketplace for the shipping quote that is being created. For a list of valid values, refer to the section <a href=\"/api-docs/static/rest-request-components.html#marketpl\" target=\"_blank\">Marketplace ID Values</a> in the <b>Using eBay RESTful APIs</b> guide.
    shipping_quote_request = openapi_client.ShippingQuoteRequest() # ShippingQuoteRequest | The request object for <b>createShippingQuote</b>.

    try:
        api_response = api_instance.create_shipping_quote(x_ebay_c_marketplace_id, shipping_quote_request)
        print("The response of ShippingQuoteApi->create_shipping_quote:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingQuoteApi->create_shipping_quote: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_ebay_c_marketplace_id** | **str**| This header parameter specifies the eBay marketplace for the shipping quote that is being created. For a list of valid values, refer to the section &lt;a href&#x3D;\&quot;/api-docs/static/rest-request-components.html#marketpl\&quot; target&#x3D;\&quot;_blank\&quot;&gt;Marketplace ID Values&lt;/a&gt; in the &lt;b&gt;Using eBay RESTful APIs&lt;/b&gt; guide. | 
 **shipping_quote_request** | [**ShippingQuoteRequest**](ShippingQuoteRequest.md)| The request object for &lt;b&gt;createShippingQuote&lt;/b&gt;. | 

### Return type

[**ShippingQuote**](ShippingQuote.md)

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

# **get_shipping_quote**
> ShippingQuote get_shipping_quote(shipping_quote_id)



This method retrieves the complete details of the shipping quote associated with the specified <b>shippingQuoteId</b> value.  <br><br>A \"shipping quote\" pertains to a single specific package and contains a set of shipping \"rates\" that quote the cost to ship the package by different shipping carriers and services. The quotes are based on the package's origin, destination, and size.  <br><br>Call <b>createShippingQuote</b> to create a <b>shippingQuoteId</b>.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.shipping_quote import ShippingQuote
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
    api_instance = openapi_client.ShippingQuoteApi(api_client)
    shipping_quote_id = 'shipping_quote_id_example' # str | This path parameter specifies the unique eBay-assigned ID of the shipping quote you want to retrieve. The <b>shippingQuoteId</b> value is generated and returned by a call to <b>createShippingQuote</b>.

    try:
        api_response = api_instance.get_shipping_quote(shipping_quote_id)
        print("The response of ShippingQuoteApi->get_shipping_quote:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingQuoteApi->get_shipping_quote: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **shipping_quote_id** | **str**| This path parameter specifies the unique eBay-assigned ID of the shipping quote you want to retrieve. The &lt;b&gt;shippingQuoteId&lt;/b&gt; value is generated and returned by a call to &lt;b&gt;createShippingQuote&lt;/b&gt;. | 

### Return type

[**ShippingQuote**](ShippingQuote.md)

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

