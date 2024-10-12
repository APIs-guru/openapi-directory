# openapi_client.ProjectApi

All URIs are relative to *https://api.botify.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_project_analyses**](ProjectApi.md#get_project_analyses) | **GET** /analyses/{username}/{project_slug} | List all analyses for a project
[**get_project_urls_aggs**](ProjectApi.md#get_project_urls_aggs) | **POST** /projects/{username}/{project_slug}/urls/aggs | Project Query aggregator
[**get_saved_filter**](ProjectApi.md#get_saved_filter) | **GET** /projects/{username}/{project_slug}/filters/{identifier} | Retrieves a specific saved filter&#39;s name, ID and filter value
[**get_saved_filters**](ProjectApi.md#get_saved_filters) | **GET** /projects/{username}/{project_slug}/filters | List all the project&#39;s saved filters (each filter&#39;s name, ID and filter value)
[**test_url_rewriting_rules**](ProjectApi.md#test_url_rewriting_rules) | **POST** /projects/{username}/{project_slug}/features/url_rewriting/rules_validator | Match and replace parts of a URL based on rules passed in POST data


# **get_project_analyses**
> GetProjectAnalyses200Response get_project_analyses(username, project_slug, page=page, size=size)

List all analyses for a project

List all analyses for a project

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.get_project_analyses200_response import GetProjectAnalyses200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    page = 56 # int | Page Number (optional)
    size = 56 # int | Page Size (optional)

    try:
        # List all analyses for a project
        api_response = api_instance.get_project_analyses(username, project_slug, page=page, size=size)
        print("The response of ProjectApi->get_project_analyses:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->get_project_analyses: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **page** | **int**| Page Number | [optional] 
 **size** | **int**| Page Size | [optional] 

### Return type

[**GetProjectAnalyses200Response**](GetProjectAnalyses200Response.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_urls_aggs**
> object get_project_urls_aggs(username, project_slug, area=area, last_analysis_slug=last_analysis_slug, nb_analyses=nb_analyses, urls_aggs_query=urls_aggs_query)

Project Query aggregator

Project Query aggregator. It accepts multiple queries that will be executed on all completed analyses in the project

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.urls_aggs_query import UrlsAggsQuery
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    area = current # str | Analysis context to execute the queries (optional) (default to current)
    last_analysis_slug = 'last_analysis_slug_example' # str | Last analysis on the trend (optional)
    nb_analyses = 20 # int | Max number of analysis to return (optional) (default to 20)
    urls_aggs_query = [openapi_client.UrlsAggsQuery()] # List[UrlsAggsQuery] |  (optional)

    try:
        # Project Query aggregator
        api_response = api_instance.get_project_urls_aggs(username, project_slug, area=area, last_analysis_slug=last_analysis_slug, nb_analyses=nb_analyses, urls_aggs_query=urls_aggs_query)
        print("The response of ProjectApi->get_project_urls_aggs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->get_project_urls_aggs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **area** | **str**| Analysis context to execute the queries | [optional] [default to current]
 **last_analysis_slug** | **str**| Last analysis on the trend | [optional] 
 **nb_analyses** | **int**| Max number of analysis to return | [optional] [default to 20]
 **urls_aggs_query** | [**List[UrlsAggsQuery]**](UrlsAggsQuery.md)|  | [optional] 

### Return type

**object**

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_saved_filter**
> ProjectSavedFilter get_saved_filter(username, project_slug, identifier)

Retrieves a specific saved filter's name, ID and filter value

Retrieves a specific saved filter's name, ID and filter value

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.project_saved_filter import ProjectSavedFilter
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    identifier = 'identifier_example' # str | Saved Filter's identifier

    try:
        # Retrieves a specific saved filter's name, ID and filter value
        api_response = api_instance.get_saved_filter(username, project_slug, identifier)
        print("The response of ProjectApi->get_saved_filter:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->get_saved_filter: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **identifier** | **str**| Saved Filter&#39;s identifier | 

### Return type

[**ProjectSavedFilter**](ProjectSavedFilter.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_saved_filters**
> GetSavedFilters200Response get_saved_filters(username, project_slug, page=page, size=size)

List all the project's saved filters (each filter's name, ID and filter value)

List all the project's saved filters (each filter's name, ID and filter value)

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.get_saved_filters200_response import GetSavedFilters200Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier
    page = 56 # int | Page Number (optional)
    size = 56 # int | Page Size (optional)

    try:
        # List all the project's saved filters (each filter's name, ID and filter value)
        api_response = api_instance.get_saved_filters(username, project_slug, page=page, size=size)
        print("The response of ProjectApi->get_saved_filters:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->get_saved_filters: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 
 **page** | **int**| Page Number | [optional] 
 **size** | **int**| Page Size | [optional] 

### Return type

[**GetSavedFilters200Response**](GetSavedFilters200Response.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **test_url_rewriting_rules**
> URLRewritingRulesSerializer test_url_rewriting_rules(username, project_slug)

Match and replace parts of a URL based on rules passed in POST data

Match and replace parts of a URL based on rules passed in POST data.

### Example

* Api Key Authentication (DjangoRestToken):

```python
import openapi_client
from openapi_client.models.url_rewriting_rules_serializer import URLRewritingRulesSerializer
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.botify.com/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.botify.com/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: DjangoRestToken
configuration.api_key['DjangoRestToken'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['DjangoRestToken'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ProjectApi(api_client)
    username = 'username_example' # str | User's identifier
    project_slug = 'project_slug_example' # str | Project's identifier

    try:
        # Match and replace parts of a URL based on rules passed in POST data
        api_response = api_instance.test_url_rewriting_rules(username, project_slug)
        print("The response of ProjectApi->test_url_rewriting_rules:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectApi->test_url_rewriting_rules: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **username** | **str**| User&#39;s identifier | 
 **project_slug** | **str**| Project&#39;s identifier | 

### Return type

[**URLRewritingRulesSerializer**](URLRewritingRulesSerializer.md)

### Authorization

[DjangoRestToken](../README.md#DjangoRestToken)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Successful operation |  -  |
**0** | error payload |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

