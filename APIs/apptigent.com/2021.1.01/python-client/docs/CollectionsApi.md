# openapi_client.CollectionsApi

All URIs are relative to *https://connect.apptigent.com/api/utilities*

Method | HTTP request | Description
------------- | ------------- | -------------
[**add_to_collection**](CollectionsApi.md#add_to_collection) | **POST** /AddToCollection | Collections - Add to collection
[**collection_contains_number**](CollectionsApi.md#collection_contains_number) | **POST** /CollectionContainsNumber | Collections - Contains number
[**collection_contains_string**](CollectionsApi.md#collection_contains_string) | **POST** /CollectionContainsString | Collections - Contains string
[**collection_ends_with_string**](CollectionsApi.md#collection_ends_with_string) | **POST** /CollectionEndsWithString | Collections - Ends with string
[**collection_starts_with_string**](CollectionsApi.md#collection_starts_with_string) | **POST** /CollectionStartsWithString | Collections - Starts with string
[**collection_to_json**](CollectionsApi.md#collection_to_json) | **POST** /CollectionToJSON | Collections - Collection to JSON
[**collection_to_xml**](CollectionsApi.md#collection_to_xml) | **POST** /CollectionToXML | Collections - Collection to XML
[**count_collection**](CollectionsApi.md#count_collection) | **POST** /CountCollection | Collections - Count collection
[**filter_collection**](CollectionsApi.md#filter_collection) | **POST** /FilterCollection | Collections - Filter collection
[**remove_from_collection**](CollectionsApi.md#remove_from_collection) | **POST** /RemoveFromCollection | Collections - Remove from collection
[**replace_values_in_collection**](CollectionsApi.md#replace_values_in_collection) | **POST** /ReplaceValuesInCollection | Collections - Replace values in collection
[**sort_collection**](CollectionsApi.md#sort_collection) | **POST** /SortCollection | Collections - Sort collection
[**split_collection**](CollectionsApi.md#split_collection) | **POST** /SplitCollection | Collections - Split collection


# **add_to_collection**
> OutputCollectionResult add_to_collection(collection_modify=collection_modify)

Collections - Add to collection

Add an item to a collection

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_modify import InputCollectionModify
from openapi_client.models.output_collection_result import OutputCollectionResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_modify = openapi_client.InputCollectionModify() # InputCollectionModify | Collection modification parameters (optional)

    try:
        # Collections - Add to collection
        api_response = api_instance.add_to_collection(collection_modify=collection_modify)
        print("The response of CollectionsApi->add_to_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->add_to_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_modify** | [**InputCollectionModify**](InputCollectionModify.md)| Collection modification parameters | [optional] 

### Return type

[**OutputCollectionResult**](OutputCollectionResult.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_contains_number**
> OutputCollectionNumber collection_contains_number(collection_search=collection_search)

Collections - Contains number

Determine if a collection contains a specific number

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_search_numeric import InputCollectionSearchNumeric
from openapi_client.models.output_collection_number import OutputCollectionNumber
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_search = openapi_client.InputCollectionSearchNumeric() # InputCollectionSearchNumeric | Collection search parameters (optional)

    try:
        # Collections - Contains number
        api_response = api_instance.collection_contains_number(collection_search=collection_search)
        print("The response of CollectionsApi->collection_contains_number:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->collection_contains_number: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_search** | [**InputCollectionSearchNumeric**](InputCollectionSearchNumeric.md)| Collection search parameters | [optional] 

### Return type

[**OutputCollectionNumber**](OutputCollectionNumber.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_contains_string**
> OutputCollectionString collection_contains_string(collection_search=collection_search)

Collections - Contains string

Determine if any items in a collection contain a specific string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_search import InputCollectionSearch
from openapi_client.models.output_collection_string import OutputCollectionString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_search = openapi_client.InputCollectionSearch() # InputCollectionSearch | Collection search parameters (optional)

    try:
        # Collections - Contains string
        api_response = api_instance.collection_contains_string(collection_search=collection_search)
        print("The response of CollectionsApi->collection_contains_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->collection_contains_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_search** | [**InputCollectionSearch**](InputCollectionSearch.md)| Collection search parameters | [optional] 

### Return type

[**OutputCollectionString**](OutputCollectionString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_ends_with_string**
> OutputCollectionString collection_ends_with_string(collection_search=collection_search)

Collections - Ends with string

Determine if any items in a collection end with a specific string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_search import InputCollectionSearch
from openapi_client.models.output_collection_string import OutputCollectionString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_search = openapi_client.InputCollectionSearch() # InputCollectionSearch | Collection search parameters (optional)

    try:
        # Collections - Ends with string
        api_response = api_instance.collection_ends_with_string(collection_search=collection_search)
        print("The response of CollectionsApi->collection_ends_with_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->collection_ends_with_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_search** | [**InputCollectionSearch**](InputCollectionSearch.md)| Collection search parameters | [optional] 

### Return type

[**OutputCollectionString**](OutputCollectionString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_starts_with_string**
> OutputCollectionString collection_starts_with_string(collection_search=collection_search)

Collections - Starts with string

Determine if any items in a collection start with a specific string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_search import InputCollectionSearch
from openapi_client.models.output_collection_string import OutputCollectionString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_search = openapi_client.InputCollectionSearch() # InputCollectionSearch | Collection search parameters (optional)

    try:
        # Collections - Starts with string
        api_response = api_instance.collection_starts_with_string(collection_search=collection_search)
        print("The response of CollectionsApi->collection_starts_with_string:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->collection_starts_with_string: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_search** | [**InputCollectionSearch**](InputCollectionSearch.md)| Collection search parameters | [optional] 

### Return type

[**OutputCollectionString**](OutputCollectionString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_to_json**
> OutputString collection_to_json(collection_conversion=collection_conversion)

Collections - Collection to JSON

Convert a collection to a named JSON object

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_conversion import InputCollectionConversion
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_conversion = openapi_client.InputCollectionConversion() # InputCollectionConversion |  (optional)

    try:
        # Collections - Collection to JSON
        api_response = api_instance.collection_to_json(collection_conversion=collection_conversion)
        print("The response of CollectionsApi->collection_to_json:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->collection_to_json: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_conversion** | [**InputCollectionConversion**](InputCollectionConversion.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **collection_to_xml**
> OutputString collection_to_xml(collection_conversion_xml=collection_conversion_xml)

Collections - Collection to XML

Convert a collection to an XML string

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_conversion_xml import InputCollectionConversionXML
from openapi_client.models.output_string import OutputString
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_conversion_xml = openapi_client.InputCollectionConversionXML() # InputCollectionConversionXML |  (optional)

    try:
        # Collections - Collection to XML
        api_response = api_instance.collection_to_xml(collection_conversion_xml=collection_conversion_xml)
        print("The response of CollectionsApi->collection_to_xml:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->collection_to_xml: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_conversion_xml** | [**InputCollectionConversionXML**](InputCollectionConversionXML.md)|  | [optional] 

### Return type

[**OutputString**](OutputString.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **count_collection**
> OutputNumber count_collection(collection_count=collection_count)

Collections - Count collection

Count a collection of items

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_count import InputCollectionCount
from openapi_client.models.output_number import OutputNumber
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_count = openapi_client.InputCollectionCount() # InputCollectionCount | Count collection parameters (optional)

    try:
        # Collections - Count collection
        api_response = api_instance.count_collection(collection_count=collection_count)
        print("The response of CollectionsApi->count_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->count_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_count** | [**InputCollectionCount**](InputCollectionCount.md)| Count collection parameters | [optional] 

### Return type

[**OutputNumber**](OutputNumber.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **filter_collection**
> OutputCollectionResult filter_collection(collection_filter=collection_filter)

Collections - Filter collection

Filter a collection of strings by keyword

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_filter import InputCollectionFilter
from openapi_client.models.output_collection_result import OutputCollectionResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_filter = openapi_client.InputCollectionFilter() # InputCollectionFilter | Filter collection parameters (optional)

    try:
        # Collections - Filter collection
        api_response = api_instance.filter_collection(collection_filter=collection_filter)
        print("The response of CollectionsApi->filter_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->filter_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_filter** | [**InputCollectionFilter**](InputCollectionFilter.md)| Filter collection parameters | [optional] 

### Return type

[**OutputCollectionResult**](OutputCollectionResult.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **remove_from_collection**
> OutputCollectionResult remove_from_collection(collection_modify=collection_modify)

Collections - Remove from collection

Remove an item from a collection

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_modify import InputCollectionModify
from openapi_client.models.output_collection_result import OutputCollectionResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_modify = openapi_client.InputCollectionModify() # InputCollectionModify | Collection modification parameters (optional)

    try:
        # Collections - Remove from collection
        api_response = api_instance.remove_from_collection(collection_modify=collection_modify)
        print("The response of CollectionsApi->remove_from_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->remove_from_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_modify** | [**InputCollectionModify**](InputCollectionModify.md)| Collection modification parameters | [optional] 

### Return type

[**OutputCollectionResult**](OutputCollectionResult.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **replace_values_in_collection**
> OutputCollectionResult replace_values_in_collection(collection_replace=collection_replace)

Collections - Replace values in collection

Replace whole or partial strings in a collection

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_replace import InputCollectionReplace
from openapi_client.models.output_collection_result import OutputCollectionResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_replace = openapi_client.InputCollectionReplace() # InputCollectionReplace | Replace values in collection parameters (optional)

    try:
        # Collections - Replace values in collection
        api_response = api_instance.replace_values_in_collection(collection_replace=collection_replace)
        print("The response of CollectionsApi->replace_values_in_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->replace_values_in_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_replace** | [**InputCollectionReplace**](InputCollectionReplace.md)| Replace values in collection parameters | [optional] 

### Return type

[**OutputCollectionResult**](OutputCollectionResult.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **sort_collection**
> OutputCollectionResult sort_collection(collection_sort=collection_sort)

Collections - Sort collection

Sort a collection of strings

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_sort import InputCollectionSort
from openapi_client.models.output_collection_result import OutputCollectionResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_sort = openapi_client.InputCollectionSort() # InputCollectionSort | Sort collection parameters (optional)

    try:
        # Collections - Sort collection
        api_response = api_instance.sort_collection(collection_sort=collection_sort)
        print("The response of CollectionsApi->sort_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->sort_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_sort** | [**InputCollectionSort**](InputCollectionSort.md)| Sort collection parameters | [optional] 

### Return type

[**OutputCollectionResult**](OutputCollectionResult.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **split_collection**
> OutputMultiCollection split_collection(collection_split=collection_split)

Collections - Split collection

Split a collection of items by matching value or index

### Example

* Api Key Authentication (apiKeyHeader):

```python
import openapi_client
from openapi_client.models.input_collection_split import InputCollectionSplit
from openapi_client.models.output_multi_collection import OutputMultiCollection
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://connect.apptigent.com/api/utilities
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://connect.apptigent.com/api/utilities"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: apiKeyHeader
configuration.api_key['apiKeyHeader'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['apiKeyHeader'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.CollectionsApi(api_client)
    collection_split = openapi_client.InputCollectionSplit() # InputCollectionSplit | Split collection parameters (optional)

    try:
        # Collections - Split collection
        api_response = api_instance.split_collection(collection_split=collection_split)
        print("The response of CollectionsApi->split_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling CollectionsApi->split_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **collection_split** | [**InputCollectionSplit**](InputCollectionSplit.md)| Split collection parameters | [optional] 

### Return type

[**OutputMultiCollection**](OutputMultiCollection.md)

### Authorization

[apiKeyHeader](../README.md#apiKeyHeader)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**400** | ERROR |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

