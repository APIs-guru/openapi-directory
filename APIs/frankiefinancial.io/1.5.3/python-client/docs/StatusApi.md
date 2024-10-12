# openapi_client.StatusApi

All URIs are relative to *https://api.demo.frankiefinancial.io/compliance/v1.2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**status_check**](StatusApi.md#status_check) | **GET** /ruok | Service Status


# **status_check**
> PuppyObject status_check(asking_nicely=asking_nicely)

Service Status

Simple check to see if the service is running smoothly.

### Example


```python
import openapi_client
from openapi_client.models.puppy_object import PuppyObject
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.demo.frankiefinancial.io/compliance/v1.2
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.demo.frankiefinancial.io/compliance/v1.2"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.StatusApi(api_client)
    asking_nicely = True # bool | If set to true, the request is being made politely.  (optional)

    try:
        # Service Status
        api_response = api_instance.status_check(asking_nicely=asking_nicely)
        print("The response of StatusApi->status_check:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StatusApi->status_check: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **asking_nicely** | **bool**| If set to true, the request is being made politely.  | [optional] 

### Return type

[**PuppyObject**](PuppyObject.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The system is fine. No issues, and everyone gets a puppy. But only if a Customer ID is supplied, otherwise, no puppy for you. Also, try asking nicely. |  -  |
**500** | The system is presently unavailable, or running in a severely degraded state. Check the error message for details |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

