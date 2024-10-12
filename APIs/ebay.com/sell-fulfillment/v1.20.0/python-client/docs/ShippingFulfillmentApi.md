# openapi_client.ShippingFulfillmentApi

All URIs are relative to *https://api.ebay.com/sell/fulfillment/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_shipping_fulfillment**](ShippingFulfillmentApi.md#create_shipping_fulfillment) | **POST** /order/{orderId}/shipping_fulfillment | 
[**get_shipping_fulfillment**](ShippingFulfillmentApi.md#get_shipping_fulfillment) | **GET** /order/{orderId}/shipping_fulfillment/{fulfillmentId} | 
[**get_shipping_fulfillments**](ShippingFulfillmentApi.md#get_shipping_fulfillments) | **GET** /order/{orderId}/shipping_fulfillment | 


# **create_shipping_fulfillment**
> object create_shipping_fulfillment(order_id, shipping_fulfillment_details)



When you group an order's line items into one or more packages, each package requires a corresponding plan for handling, addressing, and shipping; this is a <i>shipping fulfillment</i>. For each package, execute this call once to generate a shipping fulfillment associated with that package. <br><br> <span class=\"tablenote\"><strong>Note:</strong> A single line item in an order can consist of multiple units of a purchased item, and one unit can consist of multiple parts or components. Although these components might be provided by the manufacturer in separate packaging, the seller must include all components of a given line item in the same package.</span> <br><br>Before using this call for a given package, you must determine which line items are in the package. If the package has been shipped, you should provide the date of shipment in the request. If not provided, it will default to the current date and time.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.shipping_fulfillment_details import ShippingFulfillmentDetails
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/fulfillment/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/fulfillment/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShippingFulfillmentApi(api_client)
    order_id = 'order_id_example' # str | The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.
    shipping_fulfillment_details = openapi_client.ShippingFulfillmentDetails() # ShippingFulfillmentDetails | fulfillment payload

    try:
        api_response = api_instance.create_shipping_fulfillment(order_id, shipping_fulfillment_details)
        print("The response of ShippingFulfillmentApi->create_shipping_fulfillment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingFulfillmentApi->create_shipping_fulfillment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the &lt;b&gt;getOrders&lt;/b&gt; method in the &lt;b&gt;orders.orderId&lt;/b&gt; field. | 
 **shipping_fulfillment_details** | [**ShippingFulfillmentDetails**](ShippingFulfillmentDetails.md)| fulfillment payload | 

### Return type

**object**

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created. The call also returns the following location code: &lt;br&gt;&lt;br&gt;&lt;code&gt;{ENV}/sell/fulfillment/v1/order/{ORDERID}/shipping_fulfillment/{FULFILLMENTID}&lt;/code&gt; &lt;br&gt;&lt;br&gt;The &lt;code&gt;ENV&lt;/code&gt; string is the HTTPS path to the same eBay supported environment in which this call was issued. The &lt;code&gt;ORDERID&lt;/code&gt; parameter is the unique identifier of the order addressed by this call; for example, &lt;code&gt;01-03955-36441&lt;/code&gt;. The &lt;code&gt;FULFILLMENTID&lt;/code&gt; parameter identifies the newly created fulfillment; for example, &lt;code&gt;9405509699937003457459&lt;/code&gt;. Use this Get Fulfillment URI to retrieve the contents of the new fulfillment. |  * Location -  <br>  |
**400** | Bad Request |  -  |
**409** | Conflict |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_shipping_fulfillment**
> ShippingFulfillment get_shipping_fulfillment(fulfillment_id, order_id)



Use this call to retrieve the contents of a fulfillment based on its unique identifier, <b>fulfillmentId</b> (combined with the associated order's <b>orderId</b>). The <b>fulfillmentId</b> value was originally generated by the <b>createShippingFulfillment</b> call, and is returned by the <b>getShippingFulfillments</b> call in the <b>members.fulfillmentId</b> field.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.shipping_fulfillment import ShippingFulfillment
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/fulfillment/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/fulfillment/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShippingFulfillmentApi(api_client)
    fulfillment_id = 'fulfillment_id_example' # str | The unique identifier of the fulfillment. This eBay-generated value was created by the <b>Create Shipping Fulfillment</b> call, and returned by the <b>getShippingFulfillments</b> call in the <b>fulfillments.fulfillmentId</b> field; for example, <code>9405509699937003457459</code>.
    order_id = 'order_id_example' # str | The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.

    try:
        api_response = api_instance.get_shipping_fulfillment(fulfillment_id, order_id)
        print("The response of ShippingFulfillmentApi->get_shipping_fulfillment:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingFulfillmentApi->get_shipping_fulfillment: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **fulfillment_id** | **str**| The unique identifier of the fulfillment. This eBay-generated value was created by the &lt;b&gt;Create Shipping Fulfillment&lt;/b&gt; call, and returned by the &lt;b&gt;getShippingFulfillments&lt;/b&gt; call in the &lt;b&gt;fulfillments.fulfillmentId&lt;/b&gt; field; for example, &lt;code&gt;9405509699937003457459&lt;/code&gt;. | 
 **order_id** | **str**| The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the &lt;b&gt;getOrders&lt;/b&gt; method in the &lt;b&gt;orders.orderId&lt;/b&gt; field. | 

### Return type

[**ShippingFulfillment**](ShippingFulfillment.md)

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

# **get_shipping_fulfillments**
> ShippingFulfillmentPagedCollection get_shipping_fulfillments(order_id)



Use this call to retrieve the contents of all fulfillments currently defined for a specified order based on the order's unique identifier, <b>orderId</b>. This value is returned in the <b>getOrders</b> call's <b>members.orderId</b> field when you search for orders by creation date or shipment status.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.shipping_fulfillment_paged_collection import ShippingFulfillmentPagedCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/sell/fulfillment/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/sell/fulfillment/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ShippingFulfillmentApi(api_client)
    order_id = 'order_id_example' # str | The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the <b>getOrders</b> method in the <b>orders.orderId</b> field.

    try:
        api_response = api_instance.get_shipping_fulfillments(order_id)
        print("The response of ShippingFulfillmentApi->get_shipping_fulfillments:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ShippingFulfillmentApi->get_shipping_fulfillments: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **order_id** | **str**| The unique identifier of the order. Order ID values are shown in My eBay/Seller Hub, and are also returned by the &lt;b&gt;getOrders&lt;/b&gt; method in the &lt;b&gt;orders.orderId&lt;/b&gt; field. | 

### Return type

[**ShippingFulfillmentPagedCollection**](ShippingFulfillmentPagedCollection.md)

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
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

