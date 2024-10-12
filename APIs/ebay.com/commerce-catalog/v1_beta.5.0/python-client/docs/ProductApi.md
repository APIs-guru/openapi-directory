# openapi_client.ProductApi

All URIs are relative to *https://api.ebay.com/commerce/catalog/v1_beta*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_product**](ProductApi.md#get_product) | **GET** /product/{epid} | 


# **get_product**
> Product get_product(epid, x_ebay_c_marketplace_id=x_ebay_c_marketplace_id)



This method retrieves details of the catalog product identified by the eBay product identifier (ePID) specified in the request. These details include the product's title and description, aspects and their values, associated images, applicable category IDs, and any recognized identifiers that apply to the product. <br /><br /> For a new listing, you can use the <b>search</b> method to identify candidate products on which to base the listing, then use the <b>getProduct</b> method to present the full details of those candidate products to the seller to make a a final selection.

### Example

* OAuth Authentication (api_auth):

```python
import openapi_client
from openapi_client.models.product import Product
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/catalog/v1_beta
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/catalog/v1_beta"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductApi(api_client)
    epid = 'epid_example' # str | The ePID of the product being requested. This value can be discovered by issuing the <b>search</b> method and examining the value of the <b>productSummaries.epid</b> field for the desired returned product summary.
    x_ebay_c_marketplace_id = 'x_ebay_c_marketplace_id_example' # str | This method also uses the <code>X-EBAY-C-MARKETPLACE-ID</code> header to identify the seller's eBay marketplace. It is required for all marketplaces except EBAY_US, which is the default. <b>Note:</b> This method is limited to <code>EBAY_US</code>, <code>EBAY_AU</code>, <code>EBAY_CA</code>, and <code>EBAY_GB</code> values. (optional)

    try:
        api_response = api_instance.get_product(epid, x_ebay_c_marketplace_id=x_ebay_c_marketplace_id)
        print("The response of ProductApi->get_product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductApi->get_product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **epid** | **str**| The ePID of the product being requested. This value can be discovered by issuing the &lt;b&gt;search&lt;/b&gt; method and examining the value of the &lt;b&gt;productSummaries.epid&lt;/b&gt; field for the desired returned product summary. | 
 **x_ebay_c_marketplace_id** | **str**| This method also uses the &lt;code&gt;X-EBAY-C-MARKETPLACE-ID&lt;/code&gt; header to identify the seller&#39;s eBay marketplace. It is required for all marketplaces except EBAY_US, which is the default. &lt;b&gt;Note:&lt;/b&gt; This method is limited to &lt;code&gt;EBAY_US&lt;/code&gt;, &lt;code&gt;EBAY_AU&lt;/code&gt;, &lt;code&gt;EBAY_CA&lt;/code&gt;, and &lt;code&gt;EBAY_GB&lt;/code&gt; values. | [optional] 

### Return type

[**Product**](Product.md)

### Authorization

[api_auth](../README.md#api_auth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |
**404** | Not Found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

