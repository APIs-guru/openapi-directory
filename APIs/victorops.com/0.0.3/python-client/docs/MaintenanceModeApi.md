# openapi_client.MaintenanceModeApi

All URIs are relative to *https://api.victorops.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**api_public_v1_maintenancemode_get**](MaintenanceModeApi.md#api_public_v1_maintenancemode_get) | **GET** /api-public/v1/maintenancemode | Get an organization&#39;s current maintenance mode state
[**api_public_v1_maintenancemode_maintenancemodeid_end_put**](MaintenanceModeApi.md#api_public_v1_maintenancemode_maintenancemodeid_end_put) | **PUT** /api-public/v1/maintenancemode/{maintenancemodeid}/end | End maintenance mode for routing keys
[**api_public_v1_maintenancemode_start_post**](MaintenanceModeApi.md#api_public_v1_maintenancemode_start_post) | **POST** /api-public/v1/maintenancemode/start | Start maintenance mode for routing keys


# **api_public_v1_maintenancemode_get**
> MaintenanceModeState api_public_v1_maintenancemode_get(x_vo_api_id, x_vo_api_key)

Get an organization's current maintenance mode state

### Example


```python
import openapi_client
from openapi_client.models.maintenance_mode_state import MaintenanceModeState
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
    api_instance = openapi_client.MaintenanceModeApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key

    try:
        # Get an organization's current maintenance mode state
        api_response = api_instance.api_public_v1_maintenancemode_get(x_vo_api_id, x_vo_api_key)
        print("The response of MaintenanceModeApi->api_public_v1_maintenancemode_get:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MaintenanceModeApi->api_public_v1_maintenancemode_get: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 

### Return type

[**MaintenanceModeState**](MaintenanceModeState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | maintenance mode state |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_maintenancemode_maintenancemodeid_end_put**
> MaintenanceModeState api_public_v1_maintenancemode_maintenancemodeid_end_put(x_vo_api_id, x_vo_api_key, maintenancemodeid)

End maintenance mode for routing keys

### Example


```python
import openapi_client
from openapi_client.models.maintenance_mode_state import MaintenanceModeState
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
    api_instance = openapi_client.MaintenanceModeApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    maintenancemodeid = 'maintenancemodeid_example' # str | The id of the maintenance mode found in the active maintenance mode object

    try:
        # End maintenance mode for routing keys
        api_response = api_instance.api_public_v1_maintenancemode_maintenancemodeid_end_put(x_vo_api_id, x_vo_api_key, maintenancemodeid)
        print("The response of MaintenanceModeApi->api_public_v1_maintenancemode_maintenancemodeid_end_put:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MaintenanceModeApi->api_public_v1_maintenancemode_maintenancemodeid_end_put: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **maintenancemodeid** | **str**| The id of the maintenance mode found in the active maintenance mode object | 

### Return type

[**MaintenanceModeState**](MaintenanceModeState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | maintenance mode state |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **api_public_v1_maintenancemode_start_post**
> MaintenanceModeState api_public_v1_maintenancemode_start_post(x_vo_api_id, x_vo_api_key, body)

Start maintenance mode for routing keys

### Example


```python
import openapi_client
from openapi_client.models.api_public_v1_maintenancemode_start_post_request import ApiPublicV1MaintenancemodeStartPostRequest
from openapi_client.models.maintenance_mode_state import MaintenanceModeState
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
    api_instance = openapi_client.MaintenanceModeApi(api_client)
    x_vo_api_id = 'x_vo_api_id_example' # str | Your API ID
    x_vo_api_key = 'x_vo_api_key_example' # str | Your API Key
    body = openapi_client.ApiPublicV1MaintenancemodeStartPostRequest() # ApiPublicV1MaintenancemodeStartPostRequest | the definition of the maintenance mode you want to start

    try:
        # Start maintenance mode for routing keys
        api_response = api_instance.api_public_v1_maintenancemode_start_post(x_vo_api_id, x_vo_api_key, body)
        print("The response of MaintenanceModeApi->api_public_v1_maintenancemode_start_post:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling MaintenanceModeApi->api_public_v1_maintenancemode_start_post: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **x_vo_api_id** | **str**| Your API ID | 
 **x_vo_api_key** | **str**| Your API Key | 
 **body** | [**ApiPublicV1MaintenancemodeStartPostRequest**](ApiPublicV1MaintenancemodeStartPostRequest.md)| the definition of the maintenance mode you want to start | 

### Return type

[**MaintenanceModeState**](MaintenanceModeState.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | maintenance mode state |  -  |
**403** | Authentication failed or rate-limit reached |  -  |
**409** | You have an active global maintanance mode and are attempting to start a second. You may only have a single Global maintenance mode at a time |  -  |
**420** | You have reached the limit of allowed active maintenance modes |  -  |
**500** | Internal Server Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

