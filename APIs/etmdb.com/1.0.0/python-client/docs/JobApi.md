# openapi_client.JobApi

All URIs are relative to *https://etmdb.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**job_search_read**](JobApi.md#job_search_read) | **GET** /api/v1/job/search/{job_title} | Return job details search result
[**job_searchall_read**](JobApi.md#job_searchall_read) | **GET** /api/v1/job/searchall/{company_name} | Return job details search result


# **job_search_read**
> job_search_read(job_title)

Return job details search result

Return job details search result  ### Response Class (Status 200)  * __{job_title}__: Used as a key word to search jobs,  For more details on how job are listed [see here][ref]. [ref]: https://etmdb.com/en/job-list/-updated_date

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://etmdb.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://etmdb.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobApi(api_client)
    job_title = 'job_title_example' # str | 

    try:
        # Return job details search result
        api_instance.job_search_read(job_title)
    except Exception as e:
        print("Exception when calling JobApi->job_search_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **job_title** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **job_searchall_read**
> job_searchall_read(company_name)

Return job details search result

Return job details search result  ### Response Class (Status 200)  * __{company_name}__: Used as a key word to search jobs,  For more details on how job are listed [see here][ref]. [ref]: https://etmdb.com/en/job-list/-updated_date

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://etmdb.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://etmdb.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.JobApi(api_client)
    company_name = 'company_name_example' # str | 

    try:
        # Return job details search result
        api_instance.job_searchall_read(company_name)
    except Exception as e:
        print("Exception when calling JobApi->job_searchall_read: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **company_name** | **str**|  | 

### Return type

void (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** |  |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

