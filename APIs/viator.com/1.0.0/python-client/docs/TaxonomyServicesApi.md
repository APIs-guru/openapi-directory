# openapi_client.TaxonomyServicesApi

All URIs are relative to *https://viatorapi.viator.com/service*

Method | HTTP request | Description
------------- | ------------- | -------------
[**taxonomy_attractions**](TaxonomyServicesApi.md#taxonomy_attractions) | **POST** /taxonomy/attractions | /taxonomy/attractions
[**taxonomy_categories**](TaxonomyServicesApi.md#taxonomy_categories) | **GET** /taxonomy/categories | /taxonomy/categories
[**taxonomy_destinations**](TaxonomyServicesApi.md#taxonomy_destinations) | **GET** /taxonomy/destinations | /taxonomy/destinations


# **taxonomy_attractions**
> TaxonomyAttractions200Response taxonomy_attractions(accept_language, taxonomy_attractions_request=taxonomy_attractions_request)

/taxonomy/attractions

Get attractions - Retrieves a list of attractions (things like the Eiffel Tower or Empire State Building) and their associated unique numeric identifiers - The attraction's identifier (`seoId`) can be used as a means of searching for available products; for example, in the [/search/products](#operation/searchProducts) service. 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.taxonomy_attractions200_response import TaxonomyAttractions200Response
from openapi_client.models.taxonomy_attractions_request import TaxonomyAttractionsRequest
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
    api_instance = openapi_client.TaxonomyServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    taxonomy_attractions_request = {"destId":684,"sortOrder":"SEO_PUBLISHED_DATE_D","topX":"1-3"} # TaxonomyAttractionsRequest |  (optional)

    try:
        # /taxonomy/attractions
        api_response = api_instance.taxonomy_attractions(accept_language, taxonomy_attractions_request=taxonomy_attractions_request)
        print("The response of TaxonomyServicesApi->taxonomy_attractions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaxonomyServicesApi->taxonomy_attractions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **taxonomy_attractions_request** | [**TaxonomyAttractionsRequest**](TaxonomyAttractionsRequest.md)|  | [optional] 

### Return type

[**TaxonomyAttractions200Response**](TaxonomyAttractions200Response.md)

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

# **taxonomy_categories**
> TaxonomyCategories200Response taxonomy_categories(accept_language, dest_id=dest_id)

/taxonomy/categories

Get all product categories - Retrieves a list of product categories for a destination that can be used as a means of filtering when searching for products using the [/search/products](/#operation/searchProducts) service - This service can be used to get a list of all categories and subcategories for a destination by including its `destId`, or you can omit the `destId` to get a list of all categories and subcategories - **Note:** If no `destId` is passed, `productCount` and `thumbnailURL` will be `null` as they are destination-specific fields 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.taxonomy_categories200_response import TaxonomyCategories200Response
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
    api_instance = openapi_client.TaxonomyServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 
    dest_id = 684 # int | **unique numeric identifier** of the destination to enquire about (optional) - `destinationId` is returned by [/taxonomy/destinations](#operation/taxonomyDestinations)  (optional)

    try:
        # /taxonomy/categories
        api_response = api_instance.taxonomy_categories(accept_language, dest_id=dest_id)
        print("The response of TaxonomyServicesApi->taxonomy_categories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaxonomyServicesApi->taxonomy_categories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 
 **dest_id** | **int**| **unique numeric identifier** of the destination to enquire about (optional) - &#x60;destinationId&#x60; is returned by [/taxonomy/destinations](#operation/taxonomyDestinations)  | [optional] 

### Return type

[**TaxonomyCategories200Response**](TaxonomyCategories200Response.md)

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

# **taxonomy_destinations**
> TaxonomyDestinations200Response taxonomy_destinations(accept_language)

/taxonomy/destinations

Get details of all destinations supported by this API - Retrieves all the country taxonomy/city nodes as a flat list - Returns a complete list of Viator destinations, including destination names and parent identifiers - Used to provide navigation through drill down lists or combo boxes 

### Example

* Api Key Authentication (Legacy-API-key):
* Api Key Authentication (API-key):

```python
import openapi_client
from openapi_client.models.taxonomy_destinations200_response import TaxonomyDestinations200Response
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
    api_instance = openapi_client.TaxonomyServicesApi(api_client)
    accept_language = 'en-US' # str | Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes) 

    try:
        # /taxonomy/destinations
        api_response = api_instance.taxonomy_destinations(accept_language)
        print("The response of TaxonomyServicesApi->taxonomy_destinations:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling TaxonomyServicesApi->taxonomy_destinations: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **accept_language** | **str**| Specifies the language into which the natural-language fields in the response from this service will be translated (see [Accept-Language header](#section/Appendices/Accept-Language-header) for available langage codes)  | 

### Return type

[**TaxonomyDestinations200Response**](TaxonomyDestinations200Response.md)

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

