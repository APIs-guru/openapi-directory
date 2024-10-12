# openapi_client.ProductsApi

All URIs are relative to *https://productapi.intel.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_code_name**](ProductsApi.md#get_code_name) | **GET** /api/products/get-codename | 5. Get list of codename details for Intel products.
[**get_product_info**](ProductsApi.md#get_product_info) | **GET** /api/products/get-products-info | 2. Get complete product info with product id.
[**get_product_list**](ProductsApi.md#get_product_list) | **GET** /api/products/get-products | 1. Find products by product id or category id
[**getorderinginfo**](ProductsApi.md#getorderinginfo) | **GET** /api/products/get-ordering-info | 3. Get ordering info for product id&#39;s requested.


# **get_code_name**
> CompleteCodenameLsit get_code_name(locale_geo_id)

5. Get list of codename details for Intel products.

Use this to get codename details for Intel products. No pagination supported.

### Example

* Basic Authentication (BasicAuth):
* Api Key Authentication (ClientId):

```python
import openapi_client
from openapi_client.models.complete_codename_lsit import CompleteCodenameLsit
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://productapi.intel.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://productapi.intel.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: ClientId
configuration.api_key['ClientId'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ClientId'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductsApi(api_client)
    locale_geo_id = 'locale_geo_id_example' # str | Locale and Geo code used to get localised data.<br/><br/>

    try:
        # 5. Get list of codename details for Intel products.
        api_response = api_instance.get_code_name(locale_geo_id)
        print("The response of ProductsApi->get_code_name:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_code_name: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locale_geo_id** | **str**| Locale and Geo code used to get localised data.&lt;br/&gt;&lt;br/&gt; | 

### Return type

[**CompleteCodenameLsit**](CompleteCodenameLsit.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**500** | unsuccessful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_product_info**
> DetailedProductInformation get_product_info(locale_geo_id, product_id, include_reference=include_reference)

2. Get complete product info with product id.

Use this to get complete product info. No pagination supported.

### Example

* Basic Authentication (BasicAuth):
* Api Key Authentication (ClientId):

```python
import openapi_client
from openapi_client.models.detailed_product_information import DetailedProductInformation
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://productapi.intel.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://productapi.intel.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: ClientId
configuration.api_key['ClientId'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ClientId'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductsApi(api_client)
    locale_geo_id = 'locale_geo_id_example' # str | Locale and Geo code used to get localised data.<br/><br/>
    product_id = 'product_id_example' # str | Product id's that needs to be filtered. Only max of 40 products are supported now. Values must be enclosed in [ square brackets ] and each value must be in \"double quotes\". Use comma to add multiple values.<br/><br/>Example: [\"223\",\"224\"]
    include_reference = 'include_reference_example' # str | If send \"true\", this will fetch variant/compatible info into result set. Default is false. (optional)

    try:
        # 2. Get complete product info with product id.
        api_response = api_instance.get_product_info(locale_geo_id, product_id, include_reference=include_reference)
        print("The response of ProductsApi->get_product_info:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_product_info: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locale_geo_id** | **str**| Locale and Geo code used to get localised data.&lt;br/&gt;&lt;br/&gt; | 
 **product_id** | **str**| Product id&#39;s that needs to be filtered. Only max of 40 products are supported now. Values must be enclosed in [ square brackets ] and each value must be in \&quot;double quotes\&quot;. Use comma to add multiple values.&lt;br/&gt;&lt;br/&gt;Example: [\&quot;223\&quot;,\&quot;224\&quot;] | 
 **include_reference** | **str**| If send \&quot;true\&quot;, this will fetch variant/compatible info into result set. Default is false. | [optional] 

### Return type

[**DetailedProductInformation**](DetailedProductInformation.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation. |  -  |
**500** | unsuccessful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_product_list**
> ProductListingLevelInfo get_product_list(locale_geo_id, category_id=category_id, product_id=product_id, highlights=highlights, sort=sort, filters=filters, per_page=per_page, page_no=page_no)

1. Find products by product id or category id

Use this to get basic details of products with pagination. Can be used to generate listing page for products.

### Example

* Basic Authentication (BasicAuth):
* Api Key Authentication (ClientId):

```python
import openapi_client
from openapi_client.models.product_listing_level_info import ProductListingLevelInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://productapi.intel.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://productapi.intel.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: ClientId
configuration.api_key['ClientId'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ClientId'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductsApi(api_client)
    locale_geo_id = 'locale_geo_id_example' # str | Locale and Geo code used to get localised data.<br/><br/>
    category_id = 'category_id_example' # str | Filter products based on one or multiple category id. Either category id or product id is mandatory for any request. Values must be enclosed in [ square brackets ] and each value must be in \"double quotes\". Use comma to add multiple values. <br/><br/>Example: [\"873\"]<br/><br/>Categories Available:<br/> Processors = 873, Server Products = 1201, Mini PC's = 98414, Wireless Networking = 59485, Ethernet Products = 36773, Fabric products = 70021, Memory and Storage = 35125, Chipsets = 53, Graphics Drivers = 80939 <br/><br/> (optional)
    product_id = 'product_id_example' # str | Filter products based on one or multiple product id. Either category id or product id is mandatory for any request. Values must be enclosed in [ square brackets ] and each value must be in \"double quotes\". Use comma to add multiple values. <br/><br/>Example: [\"123003\"]<br/><br/> (optional)
    highlights = 'highlights_example' # str | Specification values which needs to be pulled from product data. Values must be enclosed in [ square brackets ] and each value must be in \"double quotes\". Use comma to add multiple values. <br/><br/>Example: [\"CoreCount\", \"StatusCodeText\"]<br/><br/> (optional)
    sort = 'sort_example' # str | Indicates sorting fields. Accepts array of objects in format like: [{\"field\":\"name\",\"order\":\"ASC\"}].<br/><br/>Any specification that we get from get-product-info can be used to sort result. Other generic sort field is \"name\".<br/><br/> (optional)
    filters = 'filters_example' # str | Allows to filter data.<br/><br/>Format of filter: [{\"type\":\"specvalue\",\"name\":\"ThreadCount\",\"gteq\":\"4\"}]<br/><br/><b>Available operators are:</b> \"eq\": equal to, \"neq\": not equal to, \"lteq\": less than or equal to, \"gteq\": greater than or equal to, \"swc\": starts with characters, \"nswc\": not starting with characters, \"cts\": contains, \"ncts\": not contains<br/><br/><b>Conditions:</b> By default all objects works on an AND condition. But inside an object we have the capability to put an \"OR\" or \"AND\" condition.<br/>Example conditions: [{\"type\":\"specvalue\",\"name\":\"ThreadCount\",\"ncts\":\"4,5\",\"cond\":\"AND\"}]<br/><br/><br/> (optional)
    per_page = 56 # int | Filter number of products in response to desired size. (optional)
    page_no = 56 # int | Indicates page number for pagination of results. (optional)

    try:
        # 1. Find products by product id or category id
        api_response = api_instance.get_product_list(locale_geo_id, category_id=category_id, product_id=product_id, highlights=highlights, sort=sort, filters=filters, per_page=per_page, page_no=page_no)
        print("The response of ProductsApi->get_product_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->get_product_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **locale_geo_id** | **str**| Locale and Geo code used to get localised data.&lt;br/&gt;&lt;br/&gt; | 
 **category_id** | **str**| Filter products based on one or multiple category id. Either category id or product id is mandatory for any request. Values must be enclosed in [ square brackets ] and each value must be in \&quot;double quotes\&quot;. Use comma to add multiple values. &lt;br/&gt;&lt;br/&gt;Example: [\&quot;873\&quot;]&lt;br/&gt;&lt;br/&gt;Categories Available:&lt;br/&gt; Processors &#x3D; 873, Server Products &#x3D; 1201, Mini PC&#39;s &#x3D; 98414, Wireless Networking &#x3D; 59485, Ethernet Products &#x3D; 36773, Fabric products &#x3D; 70021, Memory and Storage &#x3D; 35125, Chipsets &#x3D; 53, Graphics Drivers &#x3D; 80939 &lt;br/&gt;&lt;br/&gt; | [optional] 
 **product_id** | **str**| Filter products based on one or multiple product id. Either category id or product id is mandatory for any request. Values must be enclosed in [ square brackets ] and each value must be in \&quot;double quotes\&quot;. Use comma to add multiple values. &lt;br/&gt;&lt;br/&gt;Example: [\&quot;123003\&quot;]&lt;br/&gt;&lt;br/&gt; | [optional] 
 **highlights** | **str**| Specification values which needs to be pulled from product data. Values must be enclosed in [ square brackets ] and each value must be in \&quot;double quotes\&quot;. Use comma to add multiple values. &lt;br/&gt;&lt;br/&gt;Example: [\&quot;CoreCount\&quot;, \&quot;StatusCodeText\&quot;]&lt;br/&gt;&lt;br/&gt; | [optional] 
 **sort** | **str**| Indicates sorting fields. Accepts array of objects in format like: [{\&quot;field\&quot;:\&quot;name\&quot;,\&quot;order\&quot;:\&quot;ASC\&quot;}].&lt;br/&gt;&lt;br/&gt;Any specification that we get from get-product-info can be used to sort result. Other generic sort field is \&quot;name\&quot;.&lt;br/&gt;&lt;br/&gt; | [optional] 
 **filters** | **str**| Allows to filter data.&lt;br/&gt;&lt;br/&gt;Format of filter: [{\&quot;type\&quot;:\&quot;specvalue\&quot;,\&quot;name\&quot;:\&quot;ThreadCount\&quot;,\&quot;gteq\&quot;:\&quot;4\&quot;}]&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Available operators are:&lt;/b&gt; \&quot;eq\&quot;: equal to, \&quot;neq\&quot;: not equal to, \&quot;lteq\&quot;: less than or equal to, \&quot;gteq\&quot;: greater than or equal to, \&quot;swc\&quot;: starts with characters, \&quot;nswc\&quot;: not starting with characters, \&quot;cts\&quot;: contains, \&quot;ncts\&quot;: not contains&lt;br/&gt;&lt;br/&gt;&lt;b&gt;Conditions:&lt;/b&gt; By default all objects works on an AND condition. But inside an object we have the capability to put an \&quot;OR\&quot; or \&quot;AND\&quot; condition.&lt;br/&gt;Example conditions: [{\&quot;type\&quot;:\&quot;specvalue\&quot;,\&quot;name\&quot;:\&quot;ThreadCount\&quot;,\&quot;ncts\&quot;:\&quot;4,5\&quot;,\&quot;cond\&quot;:\&quot;AND\&quot;}]&lt;br/&gt;&lt;br/&gt;&lt;br/&gt; | [optional] 
 **per_page** | **int**| Filter number of products in response to desired size. | [optional] 
 **page_no** | **int**| Indicates page number for pagination of results. | [optional] 

### Return type

[**ProductListingLevelInfo**](ProductListingLevelInfo.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**500** | unsuccessful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **getorderinginfo**
> DetailedOrderingLevelInfo getorderinginfo(product_id, locale_geo_id)

3. Get ordering info for product id's requested.

Use this to fetch ordering info details for Intel products. No pagination supported.

### Example

* Basic Authentication (BasicAuth):
* Api Key Authentication (ClientId):

```python
import openapi_client
from openapi_client.models.detailed_ordering_level_info import DetailedOrderingLevelInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://productapi.intel.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://productapi.intel.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure HTTP basic authorization: BasicAuth
configuration = openapi_client.Configuration(
    username = os.environ["USERNAME"],
    password = os.environ["PASSWORD"]
)

# Configure API key authorization: ClientId
configuration.api_key['ClientId'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['ClientId'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductsApi(api_client)
    product_id = 'product_id_example' # str | Filter ordering info details based on one or multiple product id's. Values must be enclosed in [ square brackets ] and each value must be in \"double quotes\". Use comma to add multiple values. <br/><br/>Example: [\"123003\"]
    locale_geo_id = 'locale_geo_id_example' # str | Locale and Geo code used to get localised data.<br/><br/>

    try:
        # 3. Get ordering info for product id's requested.
        api_response = api_instance.getorderinginfo(product_id, locale_geo_id)
        print("The response of ProductsApi->getorderinginfo:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductsApi->getorderinginfo: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **product_id** | **str**| Filter ordering info details based on one or multiple product id&#39;s. Values must be enclosed in [ square brackets ] and each value must be in \&quot;double quotes\&quot;. Use comma to add multiple values. &lt;br/&gt;&lt;br/&gt;Example: [\&quot;123003\&quot;] | 
 **locale_geo_id** | **str**| Locale and Geo code used to get localised data.&lt;br/&gt;&lt;br/&gt; | 

### Return type

[**DetailedOrderingLevelInfo**](DetailedOrderingLevelInfo.md)

### Authorization

[BasicAuth](../README.md#BasicAuth), [ClientId](../README.md#ClientId)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | successful operation |  -  |
**500** | unsuccessful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

