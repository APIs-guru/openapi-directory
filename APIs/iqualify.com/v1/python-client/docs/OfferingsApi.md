# openapi_client.OfferingsApi

All URIs are relative to *https://api.iqualify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**offerings_current_get**](OfferingsApi.md#offerings_current_get) | **GET** /offerings/current | Find active offerings
[**offerings_future_get**](OfferingsApi.md#offerings_future_get) | **GET** /offerings/future | Find scheduled offerings
[**offerings_get**](OfferingsApi.md#offerings_get) | **GET** /offerings | Find current, past and future offerings
[**offerings_info_text_pattern_get**](OfferingsApi.md#offerings_info_text_pattern_get) | **GET** /offerings/info/{textPattern} | Find offerings where info field matches the specified textPattern
[**offerings_offering_id_get**](OfferingsApi.md#offerings_offering_id_get) | **GET** /offerings/{offeringId} | Find offering by ID
[**offerings_offering_id_patch**](OfferingsApi.md#offerings_offering_id_patch) | **PATCH** /offerings/{offeringId} | Update offering
[**offerings_past_get**](OfferingsApi.md#offerings_past_get) | **GET** /offerings/past | Find past offerings
[**offerings_post**](OfferingsApi.md#offerings_post) | **POST** /offerings | Create offering
[**offerings_summary_get**](OfferingsApi.md#offerings_summary_get) | **GET** /offerings/summary | Offerings summary


# **offerings_current_get**
> List[OfferingMetadataResponse] offerings_current_get()

Find active offerings

Responds with active offerings for your organisation.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferingsApi(api_client)

    try:
        # Find active offerings
        api_response = api_instance.offerings_current_get()
        print("The response of OfferingsApi->offerings_current_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingsApi->offerings_current_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[OfferingMetadataResponse]**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | current offerings |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_future_get**
> List[OfferingMetadataResponse] offerings_future_get()

Find scheduled offerings

Responds with scheduled offerings for your organisation. Scheduled offerings have a start date after today's date (inclusive).

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferingsApi(api_client)

    try:
        # Find scheduled offerings
        api_response = api_instance.offerings_future_get()
        print("The response of OfferingsApi->offerings_future_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingsApi->offerings_future_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[OfferingMetadataResponse]**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | future offerings |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_get**
> List[OfferingMetadataResponse] offerings_get()

Find current, past and future offerings

Responds with all offerings for your organisation.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferingsApi(api_client)

    try:
        # Find current, past and future offerings
        api_response = api_instance.offerings_get()
        print("The response of OfferingsApi->offerings_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingsApi->offerings_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[OfferingMetadataResponse]**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | all offerings (current, past and future ones) |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_info_text_pattern_get**
> List[PortfolioActivations] offerings_info_text_pattern_get(text_pattern)

Find offerings where info field matches the specified textPattern

Find offerings where info field matches the specified text pattern.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.portfolio_activations import PortfolioActivations
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferingsApi(api_client)
    text_pattern = 'text_pattern_example' # str | Text pattern to search for (minimum of 3 characters length).

    try:
        # Find offerings where info field matches the specified textPattern
        api_response = api_instance.offerings_info_text_pattern_get(text_pattern)
        print("The response of OfferingsApi->offerings_info_text_pattern_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingsApi->offerings_info_text_pattern_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **text_pattern** | **str**| Text pattern to search for (minimum of 3 characters length). | 

### Return type

[**List[PortfolioActivations]**](PortfolioActivations.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Offerings |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_get**
> OfferingMetadataResponse offerings_offering_id_get(offering_id)

Find offering by ID

Responds with an offering matching the offeringId.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferingsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id

    try:
        # Find offering by ID
        api_response = api_instance.offerings_offering_id_get(offering_id)
        print("The response of OfferingsApi->offerings_offering_id_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingsApi->offerings_offering_id_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 

### Return type

[**OfferingMetadataResponse**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | offering |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_offering_id_patch**
> OfferingMetadataResponse offerings_offering_id_patch(offering_id, offering)

Update offering

Updates the offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering import Offering
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferingsApi(api_client)
    offering_id = 'offering_id_example' # str | offering's id
    offering = openapi_client.Offering() # Offering | 

    try:
        # Update offering
        api_response = api_instance.offerings_offering_id_patch(offering_id, offering)
        print("The response of OfferingsApi->offerings_offering_id_patch:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingsApi->offerings_offering_id_patch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_id** | **str**| offering&#39;s id | 
 **offering** | [**Offering**](Offering.md)|  | 

### Return type

[**OfferingMetadataResponse**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | offering updated |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_past_get**
> List[OfferingMetadataResponse] offerings_past_get()

Find past offerings

Responds with past offerings for your organisation.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferingsApi(api_client)

    try:
        # Find past offerings
        api_response = api_instance.offerings_past_get()
        print("The response of OfferingsApi->offerings_past_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingsApi->offerings_past_get: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[OfferingMetadataResponse]**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | past offerings |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_post**
> OfferingMetadataResponse offerings_post(offering_required)

Create offering

Creates a new offering.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.offering_metadata_response import OfferingMetadataResponse
from openapi_client.models.offering_required import OfferingRequired
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferingsApi(api_client)
    offering_required = openapi_client.OfferingRequired() # OfferingRequired | 

    try:
        # Create offering
        api_response = api_instance.offerings_post(offering_required)
        print("The response of OfferingsApi->offerings_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingsApi->offerings_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **offering_required** | [**OfferingRequired**](OfferingRequired.md)|  | 

### Return type

[**OfferingMetadataResponse**](OfferingMetadataResponse.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | offering created |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |
**404** | Not Found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **offerings_summary_get**
> List[PortfolioActivations] offerings_summary_get(top=top, orderby=orderby, filter=filter)

Offerings summary

Responds with a summary of all offerings for your organisation.

### Example

* Api Key Authentication (Authorization):

```python
import openapi_client
from openapi_client.models.portfolio_activations import PortfolioActivations
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.iqualify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.iqualify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Authorization
configuration.api_key['Authorization'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Authorization'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.OfferingsApi(api_client)
    top = '50' # str | Returns only the first n results. (optional) (default to '50')
    orderby = 'orderby_example' # str | Sorts the results. (optional)
    filter = 'filter_example' # str | Filters the results, based on a Boolean condition. (optional)

    try:
        # Offerings summary
        api_response = api_instance.offerings_summary_get(top=top, orderby=orderby, filter=filter)
        print("The response of OfferingsApi->offerings_summary_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling OfferingsApi->offerings_summary_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **top** | **str**| Returns only the first n results. | [optional] [default to &#39;50&#39;]
 **orderby** | **str**| Sorts the results. | [optional] 
 **filter** | **str**| Filters the results, based on a Boolean condition. | [optional] 

### Return type

[**List[PortfolioActivations]**](PortfolioActivations.md)

### Authorization

[Authorization](../README.md#Authorization)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | all offerings. |  -  |
**400** | Bad Request |  -  |
**401** | No authorization token was found. |  -  |
**403** | You are not allowed to access this resource. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

