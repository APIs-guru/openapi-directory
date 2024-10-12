# openapi_client.EmailHistoryApi

All URIs are relative to *https://api.twinehealth.com/pub*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fetch_email_histories**](EmailHistoryApi.md#fetch_email_histories) | **GET** /email_history | List email histories
[**fetch_email_history**](EmailHistoryApi.md#fetch_email_history) | **GET** /email_history/{id} | Get an email history


# **fetch_email_histories**
> FetchEmailHistoriesResponse fetch_email_histories(filter_receiver=filter_receiver, filter_sender=filter_sender, filter_email_type=filter_email_type, sort=sort)

List email histories

Get a list of email histories

### Example


```python
import openapi_client
from openapi_client.models.fetch_email_histories_response import FetchEmailHistoriesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EmailHistoryApi(api_client)
    filter_receiver = 'filter_receiver_example' # str | Fitbit Plus user id of email recipient. Required if filter[sender] is not defined. (optional)
    filter_sender = 'filter_sender_example' # str | Fitbit Plus user id of email sender. Required if filter[receiver] is not defined. (optional)
    filter_email_type = 'filter_email_type_example' # str | Type of email (optional)
    sort = 'sort_example' # str | valid sorts:   * send_time - ascending by send_time   * -send_time - descending by send_time  (optional)

    try:
        # List email histories
        api_response = api_instance.fetch_email_histories(filter_receiver=filter_receiver, filter_sender=filter_sender, filter_email_type=filter_email_type, sort=sort)
        print("The response of EmailHistoryApi->fetch_email_histories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailHistoryApi->fetch_email_histories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_receiver** | **str**| Fitbit Plus user id of email recipient. Required if filter[sender] is not defined. | [optional] 
 **filter_sender** | **str**| Fitbit Plus user id of email sender. Required if filter[receiver] is not defined. | [optional] 
 **filter_email_type** | **str**| Type of email | [optional] 
 **sort** | **str**| valid sorts:   * send_time - ascending by send_time   * -send_time - descending by send_time  | [optional] 

### Return type

[**FetchEmailHistoriesResponse**](FetchEmailHistoriesResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |
**409** | Invalid Request |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fetch_email_history**
> FetchEmailHistoryResponse fetch_email_history(id)

Get an email history

Get an email history by id

### Example


```python
import openapi_client
from openapi_client.models.fetch_email_history_response import FetchEmailHistoryResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.twinehealth.com/pub
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.twinehealth.com/pub"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.EmailHistoryApi(api_client)
    id = 'id_example' # str | Email history identifier

    try:
        # Get an email history
        api_response = api_instance.fetch_email_history(id)
        print("The response of EmailHistoryApi->fetch_email_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling EmailHistoryApi->fetch_email_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| Email history identifier | 

### Return type

[**FetchEmailHistoryResponse**](FetchEmailHistoryResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/vnd.api+json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**401** | Unauthorized |  -  |
**403** | Forbidden |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

