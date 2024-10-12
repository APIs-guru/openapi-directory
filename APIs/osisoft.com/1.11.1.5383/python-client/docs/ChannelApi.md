# openapi_client.ChannelApi

All URIs are relative to *https://devdata.osisoft.com/piwebapi*

Method | HTTP request | Description
------------- | ------------- | -------------
[**channel_instances**](ChannelApi.md#channel_instances) | **GET** /channels/instances | Retrieves a list of currently running channel instances.


# **channel_instances**
> ItemsChannelInstance channel_instances()

Retrieves a list of currently running channel instances.

### Example


```python
import openapi_client
from openapi_client.models.items_channel_instance import ItemsChannelInstance
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://devdata.osisoft.com/piwebapi
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://devdata.osisoft.com/piwebapi"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.ChannelApi(api_client)

    try:
        # Retrieves a list of currently running channel instances.
        api_response = api_instance.channel_instances()
        print("The response of ChannelApi->channel_instances:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ChannelApi->channel_instances: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ItemsChannelInstance**](ItemsChannelInstance.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, text/json, text/html, application/x-ms-application

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | A list of currently running channel instances. |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

