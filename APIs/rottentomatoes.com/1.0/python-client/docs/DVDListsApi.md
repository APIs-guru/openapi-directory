# openapi_client.DVDListsApi

All URIs are relative to *http://api.rottentomatoes.com/api/public/v1.0*

Method | HTTP request | Description
------------- | ------------- | -------------
[**current_release_dvds_dvd_lists**](DVDListsApi.md#current_release_dvds_dvd_lists) | **GET** /lists/dvds/current_releases.json | 
[**new_release_dvds_dvd_lists**](DVDListsApi.md#new_release_dvds_dvd_lists) | **GET** /lists/dvds/new_releases.json | 
[**top_rentals_dvd_lists**](DVDListsApi.md#top_rentals_dvd_lists) | **GET** /lists/dvds/top_rentals.json | 
[**upcoming_dvds_dvd_lists**](DVDListsApi.md#upcoming_dvds_dvd_lists) | **GET** /lists/dvds/upcoming.json | 


# **current_release_dvds_dvd_lists**
> current_release_dvds_dvd_lists(page_limit=page_limit, page=page, country=country)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.rottentomatoes.com/api/public/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.rottentomatoes.com/api/public/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DVDListsApi(api_client)
    page_limit = '16' # str | The amount of new release dvds to show per page (optional) (default to '16')
    page = '1' # str | The selected page of current DVD releases (optional) (default to '1')
    country = 'us' # str | Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. (optional) (default to 'us')

    try:
        api_instance.current_release_dvds_dvd_lists(page_limit=page_limit, page=page, country=country)
    except Exception as e:
        print("Exception when calling DVDListsApi->current_release_dvds_dvd_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| The amount of new release dvds to show per page | [optional] [default to &#39;16&#39;]
 **page** | **str**| The selected page of current DVD releases | [optional] [default to &#39;1&#39;]
 **country** | **str**| Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. | [optional] [default to &#39;us&#39;]

### Return type

void (empty response body)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **new_release_dvds_dvd_lists**
> new_release_dvds_dvd_lists(page_limit=page_limit, page=page, country=country)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.rottentomatoes.com/api/public/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.rottentomatoes.com/api/public/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DVDListsApi(api_client)
    page_limit = '16' # str | The amount of new release dvds to show per page (optional) (default to '16')
    page = '1' # str | The selected page of new release DVDs (optional) (default to '1')
    country = 'us' # str | Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. (optional) (default to 'us')

    try:
        api_instance.new_release_dvds_dvd_lists(page_limit=page_limit, page=page, country=country)
    except Exception as e:
        print("Exception when calling DVDListsApi->new_release_dvds_dvd_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| The amount of new release dvds to show per page | [optional] [default to &#39;16&#39;]
 **page** | **str**| The selected page of new release DVDs | [optional] [default to &#39;1&#39;]
 **country** | **str**| Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. | [optional] [default to &#39;us&#39;]

### Return type

void (empty response body)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **top_rentals_dvd_lists**
> top_rentals_dvd_lists(limit=limit, country=country)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.rottentomatoes.com/api/public/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.rottentomatoes.com/api/public/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DVDListsApi(api_client)
    limit = '10' # str | Limits the number of top rentals returned (optional) (default to '10')
    country = 'us' # str | Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. (optional) (default to 'us')

    try:
        api_instance.top_rentals_dvd_lists(limit=limit, country=country)
    except Exception as e:
        print("Exception when calling DVDListsApi->top_rentals_dvd_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **str**| Limits the number of top rentals returned | [optional] [default to &#39;10&#39;]
 **country** | **str**| Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. | [optional] [default to &#39;us&#39;]

### Return type

void (empty response body)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **upcoming_dvds_dvd_lists**
> upcoming_dvds_dvd_lists(page_limit=page_limit, page=page, country=country)



### Example

* Api Key Authentication (key):

```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.rottentomatoes.com/api/public/v1.0
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.rottentomatoes.com/api/public/v1.0"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: key
configuration.api_key['key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DVDListsApi(api_client)
    page_limit = '16' # str | The amount of upcoming dvds to show per page (optional) (default to '16')
    page = '1' # str | The selected page of upcoming DVDs (optional) (default to '1')
    country = 'us' # str | Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. (optional) (default to 'us')

    try:
        api_instance.upcoming_dvds_dvd_lists(page_limit=page_limit, page=page, country=country)
    except Exception as e:
        print("Exception when calling DVDListsApi->upcoming_dvds_dvd_lists: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **page_limit** | **str**| The amount of upcoming dvds to show per page | [optional] [default to &#39;16&#39;]
 **page** | **str**| The selected page of upcoming DVDs | [optional] [default to &#39;1&#39;]
 **country** | **str**| Provides localized data for the selected country (ISO 3166-1 alpha-2) if available. Otherwise, returns US data. | [optional] [default to &#39;us&#39;]

### Return type

void (empty response body)

### Authorization

[key](../README.md#key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  -  |
**400** | Bad Request |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

