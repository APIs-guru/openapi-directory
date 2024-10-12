# openapi_client.AlertsApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_alerts_uuid_get**](AlertsApi.md#api_public_v1_alerts_uuid_get) | **GET** /api-public/v1/alerts/{uuid} | Retrieve alert details.


# **api_public_v1_alerts_uuid_get**
> GetAlertResponse api_public_v1_alerts_uuid_get(x_vo_api_id, x_vo_api_key, uuid)

Retrieve alert details.

Retrieve the details of an alert that was sent VictorOps by you.  This API may be called a maximum of 60 times per minute. 

### Example


```python
import openapi_client
from openapi_client.models.get_alert_response import GetAlertResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.victorops.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.victorops.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.AlertsApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    uuid = 'uuid_example' # str | The VictorOps uuid of the alert

    try:
        # Retrieve alert details.
        api_response = api_instance.api_public_v1_alerts_uuid_get(x_vo_api_id, x_vo_api_key, uuid)
        print("The response of AlertsApi->api_public_v1_alerts_uuid_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling AlertsApi->api_public_v1_alerts_uuid_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **uuid** | **str**| The VictorOps uuid of the alert | 

### Return type

[**GetAlertResponse**](GetAlertResponse.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | The alert, if found.  |  -  |
**400** | Problem with the request arguments.  The response payload may include an error message. |  -  |
**401** | Authentication parameters missing |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**404** | User not found |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

