# openapi_client.CategoryTreeApi

All URIs are relative to *https://api.ebay.com/commerce/taxonomy/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_item_aspects**](CategoryTreeApi.md#fetch_item_aspects) | **GET** /category_tree/{category_tree_id}/fetch_item_aspects | Get Aspects for All Leaf Categories in a Marketplace
[**get_category_subtree**](CategoryTreeApi.md#get_category_subtree) | **GET** /category_tree/{category_tree_id}/get_category_subtree | Get a Category Subtree
[**get_category_suggestions**](CategoryTreeApi.md#get_category_suggestions) | **GET** /category_tree/{category_tree_id}/get_category_suggestions | Get Suggested Categories
[**get_category_tree**](CategoryTreeApi.md#get_category_tree) | **GET** /category_tree/{category_tree_id} | Get a Category Tree
[**get_compatibility_properties**](CategoryTreeApi.md#get_compatibility_properties) | **GET** /category_tree/{category_tree_id}/get_compatibility_properties | Get Compatibility Properties
[**get_compatibility_property_values**](CategoryTreeApi.md#get_compatibility_property_values) | **GET** /category_tree/{category_tree_id}/get_compatibility_property_values | Get Compatibility Property Values
[**get_default_category_tree_id**](CategoryTreeApi.md#get_default_category_tree_id) | **GET** /get_default_category_tree_id | Get a Default Category Tree ID
[**get_item_aspects_for_category**](CategoryTreeApi.md#get_item_aspects_for_category) | **GET** /category_tree/{category_tree_id}/get_item_aspects_for_category | 


# **fetch_item_aspects**
> GetCategoriesAspectResponse fetch_item_aspects(category_tree_id)

Get Aspects for All Leaf Categories in a Marketplace

Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call returns a complete list of aspects for all of the leaf categories that belong to an eBay marketplace. The eBay marketplace is specified through the category_tree_id URI parameter. Note: This call can return a large payload, so the call returns the response as a gzipped JSON file. The open source Taxonomy SDK can be used to compare the aspect metadata that is returned in this response. The bulk download capability that this method provides, when combined with the Taxonomy SDK, brings transparency to the evolution of the metadata.

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.get_categories_aspect_response import GetCategoriesAspectResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/taxonomy/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/taxonomy/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoryTreeApi(api_client)
    category_tree_id = 'category_tree_id_example' # str | The unique identifier of the eBay category tree being requested.

    try:
        # Get Aspects for All Leaf Categories in a Marketplace
        api_response = api_instance.fetch_item_aspects(category_tree_id)
        print("The response of CategoryTreeApi->fetch_item_aspects:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryTreeApi->fetch_item_aspects: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_tree_id** | **str**| The unique identifier of the eBay category tree being requested. | 

### Return type

[**GetCategoriesAspectResponse**](GetCategoriesAspectResponse.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**404** | Not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_category_subtree**
> CategorySubtree get_category_subtree(category_id, category_tree_id)

Get a Category Subtree

Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call retrieves the details of all nodes of the category tree hierarchy (the subtree) below a specified category of a category tree. You identify the tree using the category_tree_id parameter, which was returned by the getDefaultCategoryTreeId call in the categoryTreeId field. Note: This call can return a very large payload, so you are strongly advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression.

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.category_subtree import CategorySubtree
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/taxonomy/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/taxonomy/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoryTreeApi(api_client)
    category_id = 'category_id_example' # str | The unique identifier of the category at the top of the subtree being requested. Note: If the category_id submitted identifies the root node of the tree, this call returns an error. To retrieve the complete tree, use this value with the getCategoryTree call. If the category_id submitted identifies a leaf node of the tree, the call response will contain information about only that leaf node, which is a valid subtree.
    category_tree_id = 'category_tree_id_example' # str | The unique identifier of the eBay category tree from which a category subtree is being requested.

    try:
        # Get a Category Subtree
        api_response = api_instance.get_category_subtree(category_id, category_tree_id)
        print("The response of CategoryTreeApi->get_category_subtree:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryTreeApi->get_category_subtree: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| The unique identifier of the category at the top of the subtree being requested. Note: If the category_id submitted identifies the root node of the tree, this call returns an error. To retrieve the complete tree, use this value with the getCategoryTree call. If the category_id submitted identifies a leaf node of the tree, the call response will contain information about only that leaf node, which is a valid subtree. | 
 **category_tree_id** | **str**| The unique identifier of the eBay category tree from which a category subtree is being requested. | 

### Return type

[**CategorySubtree**](CategorySubtree.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

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

# **get_category_suggestions**
> CategorySuggestionResponse get_category_suggestions(category_tree_id, q)

Get Suggested Categories

Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call returns an array of category tree leaf nodes in the specified category tree that are considered by eBay to most closely correspond to the query string q. Returned with each suggested node is a localized name for that category (based on the Accept-Language header specified for the call), and details about each of the category's ancestor nodes, extending from its immediate parent up to the root of the category tree. Note: This call can return a large payload, so you are advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression. You identify the tree using the category_tree_id parameter, which was returned by the getDefaultCategoryTreeId call in the categoryTreeId field. Important: This call is not supported in the Sandbox environment. It will return a response payload in which the categoryName fields contain random or boilerplate text regardless of the query submitted.

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.category_suggestion_response import CategorySuggestionResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/taxonomy/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/taxonomy/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoryTreeApi(api_client)
    category_tree_id = 'category_tree_id_example' # str | The unique identifier of the eBay category tree for which suggested nodes are being requested.
    q = 'q_example' # str | A quoted string that describes or characterizes the item being offered for sale. The string format is free form, and can contain any combination of phrases or keywords. eBay will parse the string and return suggested categories for the item.

    try:
        # Get Suggested Categories
        api_response = api_instance.get_category_suggestions(category_tree_id, q)
        print("The response of CategoryTreeApi->get_category_suggestions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryTreeApi->get_category_suggestions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_tree_id** | **str**| The unique identifier of the eBay category tree for which suggested nodes are being requested. | 
 **q** | **str**| A quoted string that describes or characterizes the item being offered for sale. The string format is free form, and can contain any combination of phrases or keywords. eBay will parse the string and return suggested categories for the item. | 

### Return type

[**CategorySuggestionResponse**](CategorySuggestionResponse.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | No content |  -  |
**400** | Bad Request |  -  |
**404** | Not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_category_tree**
> CategoryTree get_category_tree(category_tree_id)

Get a Category Tree

Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call retrieves the complete category tree that is identified by the category_tree_id parameter. The value of category_tree_id was returned by the getDefaultCategoryTreeId call in the categoryTreeId field. The response contains details of all nodes of the specified eBay category tree, as well as the eBay marketplaces that use this category tree. Note: This call can return a very large payload, so you are strongly advised to submit the request with the following HTTP header: &nbsp;&nbsp;Accept-Encoding: application/gzip With this header (in addition to the required headers described under HTTP Request Headers), the call returns the response with gzip compression.

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.category_tree import CategoryTree
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/taxonomy/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/taxonomy/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoryTreeApi(api_client)
    category_tree_id = 'category_tree_id_example' # str | The unique identifier of the eBay category tree being requested.

    try:
        # Get a Category Tree
        api_response = api_instance.get_category_tree(category_tree_id)
        print("The response of CategoryTreeApi->get_category_tree:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryTreeApi->get_category_tree: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_tree_id** | **str**| The unique identifier of the eBay category tree being requested. | 

### Return type

[**CategoryTree**](CategoryTree.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

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

# **get_compatibility_properties**
> GetCompatibilityMetadataResponse get_compatibility_properties(category_tree_id, category_id)

Get Compatibility Properties

Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call retrieves the compatible vehicle aspects that are used to define a motor vehicle that is compatible with a motor vehicle part or accessory. The values that are retrieved here might include motor vehicle aspects such as 'Make', 'Model', 'Year', 'Engine', and 'Trim', and each of these aspects are localized for the eBay marketplace. The category_tree_id value is passed in as a path parameter, and this value identifies the eBay category tree. The category_id value is passed in as a query parameter, as this parameter is also required. The specified category must be a category that supports parts compatibility. At this time, this operation only supports parts and accessories listings for cars, trucks, and motorcycles (not boats, power sports, or any other vehicle types). Only the following eBay marketplaces support parts compatibility: eBay US (Motors and non-Motors categories) eBay Canada (Motors and non-Motors categories) eBay UK eBay Germany eBay Australia eBay France eBay Italy eBay Spain

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.get_compatibility_metadata_response import GetCompatibilityMetadataResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/taxonomy/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/taxonomy/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoryTreeApi(api_client)
    category_tree_id = 'category_tree_id_example' # str | This is the unique identifier of category tree. The following is the list of category_tree_id values and the eBay marketplaces that they represent. One of these ID values must be passed in as a path parameter, and the category_id value, that is passed in as query parameter, must be a valid eBay category on that eBay marketplace that supports parts compatibility for cars, trucks, or motorcyles. eBay US: 0 eBay Motors US: 100 eBay Canada: 2 eBay UK: 3 eBay Germany: 77 eBay Australia: 15 eBay France: 71 eBay Italy: 101 eBay Spain: 186
    category_id = 'category_id_example' # str | The unique identifier of an eBay category. This eBay category must be a valid eBay category on the specified eBay marketplace, and the category must support parts compatibility for cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method of the Selling Metadata API can be used to retrieve all eBay categories for an eBay marketplace that supports parts compatibility cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method can also be used to see if one or more specific eBay categories support parts compatibility.

    try:
        # Get Compatibility Properties
        api_response = api_instance.get_compatibility_properties(category_tree_id, category_id)
        print("The response of CategoryTreeApi->get_compatibility_properties:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryTreeApi->get_compatibility_properties: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_tree_id** | **str**| This is the unique identifier of category tree. The following is the list of category_tree_id values and the eBay marketplaces that they represent. One of these ID values must be passed in as a path parameter, and the category_id value, that is passed in as query parameter, must be a valid eBay category on that eBay marketplace that supports parts compatibility for cars, trucks, or motorcyles. eBay US: 0 eBay Motors US: 100 eBay Canada: 2 eBay UK: 3 eBay Germany: 77 eBay Australia: 15 eBay France: 71 eBay Italy: 101 eBay Spain: 186 | 
 **category_id** | **str**| The unique identifier of an eBay category. This eBay category must be a valid eBay category on the specified eBay marketplace, and the category must support parts compatibility for cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method of the Selling Metadata API can be used to retrieve all eBay categories for an eBay marketplace that supports parts compatibility cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method can also be used to see if one or more specific eBay categories support parts compatibility. | 

### Return type

[**GetCompatibilityMetadataResponse**](GetCompatibilityMetadataResponse.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | No content |  -  |
**400** | Bad Request |  -  |
**404** | Not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_compatibility_property_values**
> GetCompatibilityPropertyValuesResponse get_compatibility_property_values(category_tree_id, compatibility_property, category_id, filter=filter)

Get Compatibility Property Values

Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call retrieves applicable compatible vehicle property values based on the specified eBay marketplace, specified eBay category, and filters used in the request. Compatible vehicle properties are returned in the compatibilityProperties.name field of a getCompatibilityProperties response. One compatible vehicle property applicable to the specified eBay marketplace and eBay category is specified through the required compatibility_property filter. Then, the user has the option of further restricting the compatible vehicle property values that are returned in the response by specifying one or more compatible vehicle property name/value pairs through the filter query parameter. See the documentation in URI parameters section for more information on using the compatibility_property and filter query parameters together to customize the data that is retrieved.

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.get_compatibility_property_values_response import GetCompatibilityPropertyValuesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/taxonomy/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/taxonomy/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoryTreeApi(api_client)
    category_tree_id = 'category_tree_id_example' # str | This is the unique identifier of the category tree. The following is the list of category_tree_id values and the eBay marketplaces that they represent. One of these ID values must be passed in as a path parameter, and the category_id value, that is passed in as query parameter, must be a valid eBay category on that eBay marketplace that supports parts compatibility for cars, trucks, or motorcyles. eBay US: 0 eBay Motors US: 100 eBay Canada: 2 eBay UK: 3 eBay Germany: 77 eBay Australia: 15 eBay France: 71 eBay Italy: 101 eBay Spain: 186
    compatibility_property = 'compatibility_property_example' # str | One compatible vehicle property applicable to the specified eBay marketplace and eBay category is specified in this required filter. Compatible vehicle properties are returned in the compatibilityProperties.name field of a getCompatibilityProperties response. For example, if you wanted to retrieve all vehicle trims for a 2018 Toyota Camry, you would set this filter as follows: compatibility_property=Trim; and then include the following three name/value filters through one filter parameter: filter=Year:2018,Make:Toyota,Model:Camry. So, putting this all together, your URI would look something like this: GET https://api.ebay.com/commerce/ taxonomy/v1/category_tree/100/ get_compatibility_property_values? category_id=6016&amp;compatibility_property=Trim &amp;filter=filter=Year:2018,Make:Toyota,Model:Camry
    category_id = 'category_id_example' # str | The unique identifier of an eBay category. This eBay category must be a valid eBay category on the specified eBay marketplace, and the category must support parts compatibility for cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method of the Selling Metadata API can be used to retrieve all eBay categories for an eBay marketplace that supports parts compatibility cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method can also be used to see if one or more specific eBay categories support parts compatibility.
    filter = 'filter_example' # str | One or more compatible vehicle property name/value pairs are passed in through this query parameter. The compatible vehicle property name and corresponding value are delimited with a colon (:), such as filter=Year:2018, and multiple compatible vehicle property name/value pairs are delimited with a comma (,). For example, if you wanted to retrieve all vehicle trims for a 2018 Toyota Camry, you would set the compatibility_property filter as follows: compatibility_property=Trim; and then include the following three name/value filters through one filter parameter: filter=Year:2018,Make:Toyota,Model:Camry. So, putting this all together, your URI would look something like this: GET https://api.ebay.com/commerce/ taxonomy/v1/category_tree/100/ get_compatibility_property_values? category_id=6016&amp;compatibility_property=Trim &amp;filter=filter=Year:2018,Make:Toyota,Model:Camry For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:ConstraintFilter (optional)

    try:
        # Get Compatibility Property Values
        api_response = api_instance.get_compatibility_property_values(category_tree_id, compatibility_property, category_id, filter=filter)
        print("The response of CategoryTreeApi->get_compatibility_property_values:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryTreeApi->get_compatibility_property_values: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_tree_id** | **str**| This is the unique identifier of the category tree. The following is the list of category_tree_id values and the eBay marketplaces that they represent. One of these ID values must be passed in as a path parameter, and the category_id value, that is passed in as query parameter, must be a valid eBay category on that eBay marketplace that supports parts compatibility for cars, trucks, or motorcyles. eBay US: 0 eBay Motors US: 100 eBay Canada: 2 eBay UK: 3 eBay Germany: 77 eBay Australia: 15 eBay France: 71 eBay Italy: 101 eBay Spain: 186 | 
 **compatibility_property** | **str**| One compatible vehicle property applicable to the specified eBay marketplace and eBay category is specified in this required filter. Compatible vehicle properties are returned in the compatibilityProperties.name field of a getCompatibilityProperties response. For example, if you wanted to retrieve all vehicle trims for a 2018 Toyota Camry, you would set this filter as follows: compatibility_property&#x3D;Trim; and then include the following three name/value filters through one filter parameter: filter&#x3D;Year:2018,Make:Toyota,Model:Camry. So, putting this all together, your URI would look something like this: GET https://api.ebay.com/commerce/ taxonomy/v1/category_tree/100/ get_compatibility_property_values? category_id&#x3D;6016&amp;amp;compatibility_property&#x3D;Trim &amp;amp;filter&#x3D;filter&#x3D;Year:2018,Make:Toyota,Model:Camry | 
 **category_id** | **str**| The unique identifier of an eBay category. This eBay category must be a valid eBay category on the specified eBay marketplace, and the category must support parts compatibility for cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method of the Selling Metadata API can be used to retrieve all eBay categories for an eBay marketplace that supports parts compatibility cars, trucks, or motorcyles. The getAutomotivePartsCompatibilityPolicies method can also be used to see if one or more specific eBay categories support parts compatibility. | 
 **filter** | **str**| One or more compatible vehicle property name/value pairs are passed in through this query parameter. The compatible vehicle property name and corresponding value are delimited with a colon (:), such as filter&#x3D;Year:2018, and multiple compatible vehicle property name/value pairs are delimited with a comma (,). For example, if you wanted to retrieve all vehicle trims for a 2018 Toyota Camry, you would set the compatibility_property filter as follows: compatibility_property&#x3D;Trim; and then include the following three name/value filters through one filter parameter: filter&#x3D;Year:2018,Make:Toyota,Model:Camry. So, putting this all together, your URI would look something like this: GET https://api.ebay.com/commerce/ taxonomy/v1/category_tree/100/ get_compatibility_property_values? category_id&#x3D;6016&amp;amp;compatibility_property&#x3D;Trim &amp;amp;filter&#x3D;filter&#x3D;Year:2018,Make:Toyota,Model:Camry For implementation help, refer to eBay API documentation at https://developer.ebay.com/api-docs/commerce/taxonomy/types/txn:ConstraintFilter | [optional] 

### Return type

[**GetCompatibilityPropertyValuesResponse**](GetCompatibilityPropertyValuesResponse.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | No content |  -  |
**400** | Bad Request |  -  |
**404** | Not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_default_category_tree_id**
> BaseCategoryTree get_default_category_tree_id(marketplace_id, accept_language=accept_language)

Get a Default Category Tree ID

Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. A given eBay marketplace might use multiple category trees, but one of those trees is considered to be the default for that marketplace. This call retrieves a reference to the default category tree associated with the specified eBay marketplace ID. The response includes only the tree's unique identifier and version, which you can use to retrieve more details about the tree, its structure, and its individual category nodes.

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.base_category_tree import BaseCategoryTree
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/taxonomy/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/taxonomy/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoryTreeApi(api_client)
    marketplace_id = 'marketplace_id_example' # str | The ID of the eBay marketplace for which the category tree ID is being requested. For a list of supported marketplace IDs, see Marketplaces with Default Category Trees.
    accept_language = 'accept_language_example' # str | A header used to indicate the natural language the seller prefers for the response. This specifies the language that the seller wants to use when the field values provided in the request body are displayed to consumers. Note: For details, see Accept-Language in HTTP request headers. Valid Values: For EBAY_CA in French: Accept-Language: fr-CA For EBAY_BE in French: Accept-Language: fr-BE (optional)

    try:
        # Get a Default Category Tree ID
        api_response = api_instance.get_default_category_tree_id(marketplace_id, accept_language=accept_language)
        print("The response of CategoryTreeApi->get_default_category_tree_id:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryTreeApi->get_default_category_tree_id: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **marketplace_id** | **str**| The ID of the eBay marketplace for which the category tree ID is being requested. For a list of supported marketplace IDs, see Marketplaces with Default Category Trees. | 
 **accept_language** | **str**| A header used to indicate the natural language the seller prefers for the response. This specifies the language that the seller wants to use when the field values provided in the request body are displayed to consumers. Note: For details, see Accept-Language in HTTP request headers. Valid Values: For EBAY_CA in French: Accept-Language: fr-CA For EBAY_BE in French: Accept-Language: fr-BE | [optional] 

### Return type

[**BaseCategoryTree**](BaseCategoryTree.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | No content |  -  |
**400** | Bad Request |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_item_aspects_for_category**
> AspectMetadata get_item_aspects_for_category(category_id, category_tree_id)



Note: The General Availability (GA) version of the Taxonomy API has been released. Developers currently using the Beta version should make plans to migrate to the new GA version, as the Beta version will be decommissioned on March 31, 2021. Until that date, the Beta version documentation set can be accessed through the All API Documentation page. This call returns a list of aspects that are appropriate or necessary for accurately describing items in the specified leaf category. Each aspect identifies an item attribute (for example, color) for which the seller will be required or encouraged to provide a value (or variation values) when offering an item in that category on eBay. For each aspect, getItemAspectsForCategory provides complete metadata, including: The aspect's data type, format, and entry mode Whether the aspect is required in listings Whether the aspect can be used for item variations Whether the aspect accepts multiple values for an item Allowed values for the aspect Use this information to construct an interface through which sellers can enter or select the appropriate values for their items or item variations. Once you collect those values, include them as product aspects when creating inventory items using the Inventory API.

### Example

* OAuth Authentication (Client Credentials):

```python
import openapi_client
from openapi_client.models.aspect_metadata import AspectMetadata
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.ebay.com/commerce/taxonomy/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.ebay.com/commerce/taxonomy/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CategoryTreeApi(api_client)
    category_id = 'category_id_example' # str | The unique identifier of the leaf category for which aspects are being requested. Note: If the category_id submitted does not identify a leaf node of the tree, this call returns an error.
    category_tree_id = 'category_tree_id_example' # str | The unique identifier of the eBay category tree from which the specified category's aspects are being requested.

    try:
        api_response = api_instance.get_item_aspects_for_category(category_id, category_tree_id)
        print("The response of CategoryTreeApi->get_item_aspects_for_category:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CategoryTreeApi->get_item_aspects_for_category: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **category_id** | **str**| The unique identifier of the leaf category for which aspects are being requested. Note: If the category_id submitted does not identify a leaf node of the tree, this call returns an error. | 
 **category_tree_id** | **str**| The unique identifier of the eBay category tree from which the specified category&#39;s aspects are being requested. | 

### Return type

[**AspectMetadata**](AspectMetadata.md)

### Authorization

[Client Credentials](../README.md#Client Credentials)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**204** | No Content |  -  |
**400** | Bad Request |  -  |
**404** | Not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

