# openapi_client.ProductServicesApi

All URIs are relative to *https://viatorapi.viator.com/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**available_products**](ProductServicesApi.md#available_products) | **POST** /available/products | /available/products
[**product**](ProductServicesApi.md#product) | **GET** /product | /product
[**product_photos**](ProductServicesApi.md#product_photos) | **GET** /product/photos | /product/photos
[**product_reviews**](ProductServicesApi.md#product_reviews) | **GET** /product/reviews | /product/reviews
[**search_freetext**](ProductServicesApi.md#search_freetext) | **POST** /search/freetext | /search/freetext
[**search_products**](ProductServicesApi.md#search_products) | **POST** /search/products | /search/products
[**search_products_codes**](ProductServicesApi.md#search_products_codes) | **POST** /search/products/codes | /search/products/codes


# **available_products**
> AvailableProducts200Response available_products(accept_language, available_products_request=available_products_request)

/available/products

Find products that are available   This endpoint returns available products filtered by product code, date range or number of adult travelers    - **Note**: Availability data is limited to a period of **12 months** into the future from the present time on the production server and **6 months** on the sandbox server.    

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.available_products200_response import AvailableProducts200Response
from openapi_client.models.available_products_request import AvailableProductsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    available_products_request = {"currencyCode":"USD","endDate":"2020-12-31","numAdults":1,"productCodes":["5010SYDNEY","2280SUN","9169P50"],"startDate":"2020-12-21"} # AvailableProductsRequest |  (optional)

    try:
        # /available/products
        api_response = api_instance.available_products(accept_language, available_products_request=available_products_request)
        print("The response of ProductServicesApi->available_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductServicesApi->available_products: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **available_products_request** | [**AvailableProductsRequest**](AvailableProductsRequest.md)|  | [optional] 

### Return type

[**AvailableProducts200Response**](AvailableProducts200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product**
> Product200Response product(accept_language, currency_code=currency_code, sort_order=sort_order, voucher_option=voucher_option, code=code, show_unavailable=show_unavailable, exclude_tour_grade_availability=exclude_tour_grade_availability)

/product

Get product information This service provides all product details required for a product display page, as well as information required for price checks and booking, such as:  - age bands - tour grades - language options  - booking questions - hotel pickup flags  **currencyCode (in query):**  - use this parameter to specify the currency in which product pricing should be displayed - the default currency is the currency of your account; or, if you have multi-currency enabled, US dollars - \"multi-currency\" allows pricing and booking in various currencies - please speak to the business development team if you'd like this enabled - **Note**: you will be billed in the currency in which the booking was made  **Product photos**  &lt;mark&gt;**&lt;u&gt;Update 13 Feb 2020&lt;/u&gt;**: All supplier-provided photos for the selected product are now available in the `productPhotos` array in this endpoint's response. Previously, only two supplier-provided photos were available – one in the `productPhotos` array and one in `thumbnailHiResURL`. &lt;/mark&gt;  **Videos**  - Videos are no longer provided via this API 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.product200_response import Product200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    currency_code = 'currency_code_example' # str | **currency code** for the currency in which pricing is displayed - default=`'USD'`  (optional)
    sort_order = 'sort_order_example' # str | **specifier** of the order in which to return reviews  Sort order options:    - `\"REVIEW_RATING_A\"`: Traveler Rating (low→high) Average   - `\"REVIEW_RATING_D\"`: Traveler Rating (high→low) Average   - `\"REVIEW_RATING_SUBMISSION_DATE_D\"`: Most recent review  (optional)
    voucher_option = 'voucher_option_example' # str | - `\"VOUCHER_PAPER_ONLY\"`: Paper Vouchers only accepted - `\"VOUCHER_E\"`: EVouchers + Paper Vouchers accepted  (optional)
    code = '5010SYDNEY' # str | **unique alphanumeric identifier** of the product (optional)
    show_unavailable = false # bool | **specifier** as to whether or not to show 'unavailable' products:    - `true`: return *both* available and unavailable products   - `false`: return *only* available products (default)  (optional)
    exclude_tour_grade_availability = True # bool | **specifier:**  - `true`: return **all** tour grades, including those that are not available - `false`: only display tour grades that *are* available  (optional)

    try:
        # /product
        api_response = api_instance.product(accept_language, currency_code=currency_code, sort_order=sort_order, voucher_option=voucher_option, code=code, show_unavailable=show_unavailable, exclude_tour_grade_availability=exclude_tour_grade_availability)
        print("The response of ProductServicesApi->product:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductServicesApi->product: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **currency_code** | **str**| **currency code** for the currency in which pricing is displayed - default&#x3D;&#x60;&#39;USD&#39;&#x60;  | [optional] 
 **sort_order** | **str**| **specifier** of the order in which to return reviews  Sort order options:    - &#x60;\&quot;REVIEW_RATING_A\&quot;&#x60;: Traveler Rating (low→high) Average   - &#x60;\&quot;REVIEW_RATING_D\&quot;&#x60;: Traveler Rating (high→low) Average   - &#x60;\&quot;REVIEW_RATING_SUBMISSION_DATE_D\&quot;&#x60;: Most recent review  | [optional] 
 **voucher_option** | **str**| - &#x60;\&quot;VOUCHER_PAPER_ONLY\&quot;&#x60;: Paper Vouchers only accepted - &#x60;\&quot;VOUCHER_E\&quot;&#x60;: EVouchers + Paper Vouchers accepted  | [optional] 
 **code** | **str**| **unique alphanumeric identifier** of the product | [optional] 
 **show_unavailable** | **bool**| **specifier** as to whether or not to show &#39;unavailable&#39; products:    - &#x60;true&#x60;: return *both* available and unavailable products   - &#x60;false&#x60;: return *only* available products (default)  | [optional] 
 **exclude_tour_grade_availability** | **bool**| **specifier:**  - &#x60;true&#x60;: return **all** tour grades, including those that are not available - &#x60;false&#x60;: only display tour grades that *are* available  | [optional] 

### Return type

[**Product200Response**](Product200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_photos**
> ProductPhotos200Response product_photos(accept_language, top_x=top_x, code=code, show_unavailable=show_unavailable)

/product/photos

Get photos of a product submitted by users

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.product_photos200_response import ProductPhotos200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    top_x = '1-3' # str | **start and end rows** to return in the format {start}-{end} - e.g. `'1-10'`, `'11-20'`  **Note**:  - the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'` - if `topX` is not specified, the default is `'1-100'`  (optional)
    code = '5010SYDNEY' # str | **unique alphanumeric identifier** of the product (optional)
    show_unavailable = false # bool | **specifier** as to whether or not to show 'unavailable' products:    - `true`: return *both* available and unavailable products   - `false`: return *only* available products (default)  (optional)

    try:
        # /product/photos
        api_response = api_instance.product_photos(accept_language, top_x=top_x, code=code, show_unavailable=show_unavailable)
        print("The response of ProductServicesApi->product_photos:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductServicesApi->product_photos: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **top_x** | **str**| **start and end rows** to return in the format {start}-{end} - e.g. &#x60;&#39;1-10&#39;&#x60;, &#x60;&#39;11-20&#39;&#x60;  **Note**:  - the maximum number of rows per request is 100; therefore, &#x60;&#39;100-400&#39;&#x60; will return the same as &#x60;&#39;100-200&#39;&#x60; - if &#x60;topX&#x60; is not specified, the default is &#x60;&#39;1-100&#39;&#x60;  | [optional] 
 **code** | **str**| **unique alphanumeric identifier** of the product | [optional] 
 **show_unavailable** | **bool**| **specifier** as to whether or not to show &#39;unavailable&#39; products:    - &#x60;true&#x60;: return *both* available and unavailable products   - &#x60;false&#x60;: return *only* available products (default)  | [optional] 

### Return type

[**ProductPhotos200Response**](ProductPhotos200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **product_reviews**
> ProductReviews200Response product_reviews(accept_language, sort_order=sort_order, top_x=top_x, code=code, show_unavailable=show_unavailable)

/product/reviews

Get user-submitted reviews of a product  **Note**:  - The number of reviews that you can obtain via this service will depend on whether your account is limited in terms of the number of reviews you are entitled to receive.  - The number of reviews available through this service is given in the `reviewCount` element in the response from [/product](#operation/product) - Please speak to your account manager if you wish to receive more reviews. If your account is not limited, you will be able to receive all available reviews for this product. - Only reviews in the language specified in the Accept-Language request header will be returned  **Example:** \"Get the first three reviews for product `5010SYDNEY` sorted by rating in ascending order\":  ```javascript https://viatorapi.sandbox.viator.com/service/product/reviews?sortOrder=REVIEW_RATING_A&amp;topX=1-3&amp;code=5010SYDNEY&amp;showUnavailable=false ``` 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.product_reviews200_response import ProductReviews200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    sort_order = 'sort_order_example' # str | **specifier** of the order in which to return reviews  Sort order options:    - `\"REVIEW_RATING_A\"`: Traveler Rating (low→high) Average   - `\"REVIEW_RATING_D\"`: Traveler Rating (high→low) Average   - `\"REVIEW_RATING_SUBMISSION_DATE_D\"`: Most recent review  (optional)
    top_x = '1-3' # str | **start and end rows** to return in the format {start}-{end} - e.g. `'1-10'`, `'11-20'`  **Note**:  - the maximum number of rows per request is 100; therefore, `'100-400'` will return the same as `'100-200'` - if `topX` is not specified, the default is `'1-100'`  (optional)
    code = '5010SYDNEY' # str | **unique alphanumeric identifier** of the product (optional)
    show_unavailable = false # bool | **specifier** as to whether or not to show 'unavailable' products:    - `true`: return *both* available and unavailable products   - `false`: return *only* available products (default)  (optional)

    try:
        # /product/reviews
        api_response = api_instance.product_reviews(accept_language, sort_order=sort_order, top_x=top_x, code=code, show_unavailable=show_unavailable)
        print("The response of ProductServicesApi->product_reviews:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductServicesApi->product_reviews: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **sort_order** | **str**| **specifier** of the order in which to return reviews  Sort order options:    - &#x60;\&quot;REVIEW_RATING_A\&quot;&#x60;: Traveler Rating (low→high) Average   - &#x60;\&quot;REVIEW_RATING_D\&quot;&#x60;: Traveler Rating (high→low) Average   - &#x60;\&quot;REVIEW_RATING_SUBMISSION_DATE_D\&quot;&#x60;: Most recent review  | [optional] 
 **top_x** | **str**| **start and end rows** to return in the format {start}-{end} - e.g. &#x60;&#39;1-10&#39;&#x60;, &#x60;&#39;11-20&#39;&#x60;  **Note**:  - the maximum number of rows per request is 100; therefore, &#x60;&#39;100-400&#39;&#x60; will return the same as &#x60;&#39;100-200&#39;&#x60; - if &#x60;topX&#x60; is not specified, the default is &#x60;&#39;1-100&#39;&#x60;  | [optional] 
 **code** | **str**| **unique alphanumeric identifier** of the product | [optional] 
 **show_unavailable** | **bool**| **specifier** as to whether or not to show &#39;unavailable&#39; products:    - &#x60;true&#x60;: return *both* available and unavailable products   - &#x60;false&#x60;: return *only* available products (default)  | [optional] 

### Return type

[**ProductReviews200Response**](ProductReviews200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_freetext**
> SearchFreetext200Response search_freetext(accept_language, search_freetext_request=search_freetext_request)

/search/freetext

Free text search - This service provides a **free text search across all products and destinations** - The `text` parameter is required - **Note:** results include a type indicator (`type`) that you can use to display each result appropriately based on its content 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.search_freetext200_response import SearchFreetext200Response
from openapi_client.models.search_freetext_request import SearchFreetextRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    search_freetext_request = {"currencyCode":"EUR","destId":684,"searchTypes":["ATTRACTION","RECOMMENDATION"],"text":"grand","topX":"1-3"} # SearchFreetextRequest |  (optional)

    try:
        # /search/freetext
        api_response = api_instance.search_freetext(accept_language, search_freetext_request=search_freetext_request)
        print("The response of ProductServicesApi->search_freetext:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductServicesApi->search_freetext: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **search_freetext_request** | [**SearchFreetextRequest**](SearchFreetextRequest.md)|  | [optional] 

### Return type

[**SearchFreetext200Response**](SearchFreetext200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_products**
> SearchProducts200Response search_products(accept_language, search_products_request=search_products_request)

/search/products

Search for products This service is used to search for products based on various criteria; such as: * the destination (locale) in which it operates * its association with a tourist attraction * its category and/or subcategory * the time period during which it operates The fields you include in the request body for this service determine the kind of search that will be performed.  **&lt;u&gt;Note&lt;/u&gt;**:   * You can search **EITHER** by destination (`destId`) **OR** by attraction-link (`seoId`), but not both. * The destination identifier (`destId`) can be retrieved from the [/taxonomy/destinations](#operation/taxonomyDestinations) service. * The category (`catId`) and subcategory (`subCatId`) identifiers can be retrieved from the [/taxonomy/categories](#operation/taxonomyCategories) service. * The attraction identifier (`seoId`) can be retrieved from the [/taxonomy/attractions](#operation/taxonomyAttractions) service.  **&lt;u&gt;Examples&lt;/u&gt;**:  **Search by destination**:  * E.g., \"Top ten highest-rated yoga classes operating in Las Vegas: ```javascript {     \"destId\": 684,     \"subCatId\": 26052,     \"sortOrder\": \"REVIEW_AVG_RATING_D\",     \"topX\": \"1-3\" } ```  **Search by attraction-link**:  * E.g., \"Products related to Everglades National Park operating 21-26 May 2019 in order of descending price\": ```javascript {     \"seoId\": 1115,     \"sortOrder\": \"PRICE_FROM_D\",     \"topX\": \"1-3\" } ```  **&lt;u&gt;'Freesale-only' merchants&lt;/u&gt;**: - Merchants with a \"freesale only\" key *must* pass `startDate` and `endDate` to this service to retrieve a list of all available 'freesale' products (and 'freesale/on-request' products that are currently 'freesale') in the destination.  - E.g., the following request body will result in 'freesale/on-request' products within their on-request period not appearing in the results from this service.  ```javascript {     \"destId\": 684,     \"startDate\": \"2020-02-21\",     \"endDate\": \"2020-03-21\",     \"sortOrder\": \"PRICE_FROM_D\",     \"topX\": \"1-3\" } ```  - If `startDate` and `endDate` are omitted, 'freesale/on-request' products that are presently within their on-request period may appear to be available to customers, but won't be available at the time of booking. 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.search_products200_response import SearchProducts200Response
from openapi_client.models.search_products_request import SearchProductsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    search_products_request = {"destId":684,"sortOrder":"REVIEW_AVG_RATING_D","subCatId":26052,"topX":"1-3"} # SearchProductsRequest |  (optional)

    try:
        # /search/products
        api_response = api_instance.search_products(accept_language, search_products_request=search_products_request)
        print("The response of ProductServicesApi->search_products:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductServicesApi->search_products: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **search_products_request** | [**SearchProductsRequest**](SearchProductsRequest.md)|  | [optional] 

### Return type

[**SearchProducts200Response**](SearchProducts200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **search_products_codes**
> SearchProductsCodes200Response search_products_codes(accept_language, search_products_codes_request=search_products_codes_request)

/search/products/codes

Search by product code - This service returns an array of products given an array of product identifiers that is useful for wishlist / shopping cart / user account display  - **Note**: requesting an inactive or non-existent product code will return `0`, `null` and blank values (as per the 'invalid_product' example). 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.search_products_codes200_response import SearchProductsCodes200Response
from openapi_client.models.search_products_codes_request import SearchProductsCodesRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://viatorapi.viator.com/service
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://viatorapi.viator.com/service"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Legacy-API-key
configuration.api_key['Legacy-API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Legacy-API-key'] = 'Bearer'

# Configure API key authorization: API-key
configuration.api_key['API-key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['API-key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProductServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    search_products_codes_request = {"currencyCode":"USD","productCodes":["123457890"]} # SearchProductsCodesRequest |  (optional)

    try:
        # /search/products/codes
        api_response = api_instance.search_products_codes(accept_language, search_products_codes_request=search_products_codes_request)
        print("The response of ProductServicesApi->search_products_codes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProductServicesApi->search_products_codes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **search_products_codes_request** | [**SearchProductsCodesRequest**](SearchProductsCodesRequest.md)|  | [optional] 

### Return type

[**SearchProductsCodes200Response**](SearchProductsCodes200Response.md)

### Authorization

[Legacy-API-key](../README.md#Legacy-API-key), [API-key](../README.md#API-key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

