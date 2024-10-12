# openapi_client.RevisionsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_revisions**](RevisionsApi.md#check_revisions) | **HEAD** /revisions | Requests the headers and status of the given resource.
[**get_revisions**](RevisionsApi.md#get_revisions) | **GET** /revisions | Gets a list of key-value revisions.


# **check_revisions**
> check_revisions(api_version, key=key, label=label, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)

Requests the headers and status of the given resource.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RevisionsApi(api_client)
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    key = 'key_example' # str | A filter used to match keys. (optional)
    label = 'label_example' # str | A filter used to match labels (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    after = 'after_example' # str | Instructs the server to return elements that appear after the element referred to by the specified token. (optional)
    accept_datetime = 'accept_datetime_example' # str | Requests the server to respond with the state of the resource at the specified time. (optional)
    select = ['select_example'] # List[str] | Used to select what fields are present in the returned resource(s). (optional)

    try:
        # Requests the headers and status of the given resource.
        api_instance.check_revisions(api_version, key=key, label=label, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)
    except Exception as e:
        print("Exception when calling RevisionsApi->check_revisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **key** | **str**| A filter used to match keys. | [optional] 
 **label** | **str**| A filter used to match labels | [optional] 
 **sync_token** | **str**| Used to guarantee real-time consistency between requests. | [optional] 
 **after** | **str**| Instructs the server to return elements that appear after the element referred to by the specified token. | [optional] 
 **accept_datetime** | **str**| Requests the server to respond with the state of the resource at the specified time. | [optional] 
 **select** | [**List[str]**](str.md)| Used to select what fields are present in the returned resource(s). | [optional] 

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
**200** | Success |  * Sync-Token - Enables real-time consistency between requests by providing the returned value in the next request made to the server. <br>  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_revisions**
> KeyValueListResult get_revisions(api_version, key=key, label=label, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)

Gets a list of key-value revisions.

### Example


```python
import openapi_client
from openapi_client.models.key_value_list_result import KeyValueListResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://azure.local
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://azure.local"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.RevisionsApi(api_client)
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    key = 'key_example' # str | A filter used to match keys. (optional)
    label = 'label_example' # str | A filter used to match labels (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    after = 'after_example' # str | Instructs the server to return elements that appear after the element referred to by the specified token. (optional)
    accept_datetime = 'accept_datetime_example' # str | Requests the server to respond with the state of the resource at the specified time. (optional)
    select = ['select_example'] # List[str] | Used to select what fields are present in the returned resource(s). (optional)

    try:
        # Gets a list of key-value revisions.
        api_response = api_instance.get_revisions(api_version, key=key, label=label, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)
        print("The response of RevisionsApi->get_revisions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RevisionsApi->get_revisions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **key** | **str**| A filter used to match keys. | [optional] 
 **label** | **str**| A filter used to match labels | [optional] 
 **sync_token** | **str**| Used to guarantee real-time consistency between requests. | [optional] 
 **after** | **str**| Instructs the server to return elements that appear after the element referred to by the specified token. | [optional] 
 **accept_datetime** | **str**| Requests the server to respond with the state of the resource at the specified time. | [optional] 
 **select** | [**List[str]**](str.md)| Used to select what fields are present in the returned resource(s). | [optional] 

### Return type

[**KeyValueListResult**](KeyValueListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.microsoft.appconfig.kvset+json, application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Sync-Token - Enables real-time consistency between requests by providing the returned value in the next request made to the server. <br>  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

