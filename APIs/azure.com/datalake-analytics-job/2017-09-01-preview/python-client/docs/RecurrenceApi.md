# openapi_client.RecurrenceApi

All URIs are relative to *https://azure.local*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recurrence_get**](RecurrenceApi.md#recurrence_get) | **GET** /recurrences/{recurrenceIdentity} | 
[**recurrence_list**](RecurrenceApi.md#recurrence_list) | **GET** /recurrences | 


# **recurrence_get**
> JobRecurrenceInformation recurrence_get(recurrence_identity, api_version, start_date_time=start_date_time, end_date_time=end_date_time)



Gets the recurrence information for the specified recurrence ID.

### Example


```python
import openapi_client
from openapi_client.models.job_recurrence_information import JobRecurrenceInformation
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
    api_instance = openapi_client.RecurrenceApi(api_client)
    recurrence_identity = 'recurrence_identity_example' # str | Recurrence ID.
    api_version = 'api_version_example' # str | Client Api Version.
    start_date_time = '2013-10-20T19:20:30+01:00' # datetime | The start date for when to get the recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. (optional)
    end_date_time = '2013-10-20T19:20:30+01:00' # datetime | The end date for when to get recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. (optional)

    try:
        api_response = api_instance.recurrence_get(recurrence_identity, api_version, start_date_time=start_date_time, end_date_time=end_date_time)
        print("The response of RecurrenceApi->recurrence_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecurrenceApi->recurrence_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **recurrence_identity** | **str**| Recurrence ID. | 
 **api_version** | **str**| Client Api Version. | 
 **start_date_time** | **datetime**| The start date for when to get the recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. | [optional] 
 **end_date_time** | **datetime**| The end date for when to get recurrence and aggregate its data. The startDateTime and endDateTime can be no more than 30 days apart. | [optional] 

### Return type

[**JobRecurrenceInformation**](JobRecurrenceInformation.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved details of the specified pipeline. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recurrence_list**
> JobRecurrenceInformationListResult recurrence_list(api_version, start_date_time=start_date_time, end_date_time=end_date_time)



Lists all recurrences.

### Example


```python
import openapi_client
from openapi_client.models.job_recurrence_information_list_result import JobRecurrenceInformationListResult
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
    api_instance = openapi_client.RecurrenceApi(api_client)
    api_version = 'api_version_example' # str | Client Api Version.
    start_date_time = '2013-10-20T19:20:30+01:00' # datetime | The start date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart. (optional)
    end_date_time = '2013-10-20T19:20:30+01:00' # datetime | The end date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart. (optional)

    try:
        api_response = api_instance.recurrence_list(api_version, start_date_time=start_date_time, end_date_time=end_date_time)
        print("The response of RecurrenceApi->recurrence_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RecurrenceApi->recurrence_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **api_version** | **str**| Client Api Version. | 
 **start_date_time** | **datetime**| The start date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart. | [optional] 
 **end_date_time** | **datetime**| The end date for when to get the list of recurrences. The startDateTime and endDateTime can be no more than 30 days apart. | [optional] 

### Return type

[**JobRecurrenceInformationListResult**](JobRecurrenceInformationListResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successfully retrieved the list of recurrences. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

