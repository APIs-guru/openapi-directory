# openapi_client.LabelsApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**check_labels**](LabelsApi.md#check_labels) | **HEAD** /labels | Requests the headers and status of the given resource.
[**get_labels**](LabelsApi.md#get_labels) | **GET** /labels | Gets a list of labels.


# **check_labels**
> check_labels(api_version, name=name, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)

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
    api_instance = openapi_client.LabelsApi(api_client)
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    name = 'name_example' # str | A filter for the name of the returned labels. (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    after = 'after_example' # str | Instructs the server to return elements that appear after the element referred to by the specified token. (optional)
    accept_datetime = 'accept_datetime_example' # str | Requests the server to respond with the state of the resource at the specified time. (optional)
    select = ['select_example'] # List[str] | Used to select what fields are present in the returned resource(s). (optional)

    try:
        # Requests the headers and status of the given resource.
        api_instance.check_labels(api_version, name=name, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)
    except Exception as e:
        print("Exception when calling LabelsApi->check_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **name** | **str**| A filter for the name of the returned labels. | [optional] 
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

# **get_labels**
> LabelListResult get_labels(api_version, name=name, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)

Gets a list of labels.

### Example


```python
import openapi_client
from openapi_client.models.label_list_result import LabelListResult
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
    api_instance = openapi_client.LabelsApi(api_client)
    api_version = 'api_version_example' # str | The API version to be used with the HTTP request.
    name = 'name_example' # str | A filter for the name of the returned labels. (optional)
    sync_token = 'sync_token_example' # str | Used to guarantee real-time consistency between requests. (optional)
    after = 'after_example' # str | Instructs the server to return elements that appear after the element referred to by the specified token. (optional)
    accept_datetime = 'accept_datetime_example' # str | Requests the server to respond with the state of the resource at the specified time. (optional)
    select = ['select_example'] # List[str] | Used to select what fields are present in the returned resource(s). (optional)

    try:
        # Gets a list of labels.
        api_response = api_instance.get_labels(api_version, name=name, sync_token=sync_token, after=after, accept_datetime=accept_datetime, select=select)
        print("The response of LabelsApi->get_labels:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling LabelsApi->get_labels: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| The API version to be used with the HTTP request. | 
 **name** | **str**| A filter for the name of the returned labels. | [optional] 
 **sync_token** | **str**| Used to guarantee real-time consistency between requests. | [optional] 
 **after** | **str**| Instructs the server to return elements that appear after the element referred to by the specified token. | [optional] 
 **accept_datetime** | **str**| Requests the server to respond with the state of the resource at the specified time. | [optional] 
 **select** | [**List[str]**](str.md)| Used to select what fields are present in the returned resource(s). | [optional] 

### Return type

[**LabelListResult**](LabelListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.microsoft.appconfig.labelset+json, application/json, application/problem+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Success |  * Sync-Token - Enables real-time consistency between requests by providing the returned value in the next request made to the server. <br>  |
**0** | Error response describing why the operation failed |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

