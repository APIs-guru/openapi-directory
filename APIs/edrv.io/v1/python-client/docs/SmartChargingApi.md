# openapi_client.SmartChargingApi

All URIs are relative to *http://api.edrv.io*

Method | HTTP request | Description
------------- | ------------- | -------------
[**deletechargingschedule**](SmartChargingApi.md#deletechargingschedule) | **DELETE** /v1/commands/chargingschedule | 
[**setchargingschedule**](SmartChargingApi.md#setchargingschedule) | **POST** /v1/commands/chargingschedule | 


# **deletechargingschedule**
> Setchargingschedule201Response deletechargingschedule(deletechargingschedule_request)



Delete a smart charging schedule

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.deletechargingschedule_request import DeletechargingscheduleRequest
from openapi_client.models.setchargingschedule201_response import Setchargingschedule201Response
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SmartChargingApi(api_client)
    deletechargingschedule_request = openapi_client.DeletechargingscheduleRequest() # DeletechargingscheduleRequest | 

    try:
        api_response = api_instance.deletechargingschedule(deletechargingschedule_request)
        print("The response of SmartChargingApi->deletechargingschedule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartChargingApi->deletechargingschedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **deletechargingschedule_request** | [**DeletechargingscheduleRequest**](DeletechargingscheduleRequest.md)|  | 

### Return type

[**Setchargingschedule201Response**](Setchargingschedule201Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A successful response |  -  |
**400** | Schedule not found |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **setchargingschedule**
> Setchargingschedule201Response setchargingschedule(setchargingschedule_request)



Set one of charging power or current of a specific chargestation connector

### Example

* OAuth Authentication (oauth2):

```python
import openapi_client
from openapi_client.models.setchargingschedule201_response import Setchargingschedule201Response
from openapi_client.models.setchargingschedule_request import SetchargingscheduleRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://api.edrv.io
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "http://api.edrv.io"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

configuration.access_token = os.environ["ACCESS_TOKEN"]

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.SmartChargingApi(api_client)
    setchargingschedule_request = openapi_client.SetchargingscheduleRequest() # SetchargingscheduleRequest | 

    try:
        api_response = api_instance.setchargingschedule(setchargingschedule_request)
        print("The response of SmartChargingApi->setchargingschedule:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmartChargingApi->setchargingschedule: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **setchargingschedule_request** | [**SetchargingscheduleRequest**](SetchargingscheduleRequest.md)|  | 

### Return type

[**Setchargingschedule201Response**](Setchargingschedule201Response.md)

### Authorization

[oauth2](../README.md#oauth2)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | A successful response |  -  |
**400** | A failure response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

