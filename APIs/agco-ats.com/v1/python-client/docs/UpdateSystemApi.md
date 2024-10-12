# openapi_client.UpdateSystemApi

All URIs are relative to *https://secure.agco-ats.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**update_system_get_cached_files**](UpdateSystemApi.md#update_system_get_cached_files) | **GET** /api/v2/Clients/{ClientID}/CachedFiles | Get a list of Cached Files installed on the client Machine.
[**update_system_get_checkin**](UpdateSystemApi.md#update_system_get_checkin) | **GET** /api/v2/UpdateSystem | Checks the Client ID into the Update System.


# **update_system_get_cached_files**
> List[str] update_system_get_cached_files(client_id, expired)

Get a list of Cached Files installed on the client Machine.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateSystemApi(api_client)
    client_id = 'client_id_example' # str | The ClientID of the Client
    expired = True # bool | Only Expired Files (true|false)

    try:
        # Get a list of Cached Files installed on the client Machine.
        api_response = api_instance.update_system_get_cached_files(client_id, expired)
        print("The response of UpdateSystemApi->update_system_get_cached_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateSystemApi->update_system_get_cached_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| The ClientID of the Client | 
 **expired** | **bool**| Only Expired Files (true|false) | 

### Return type

**List[str]**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **update_system_get_checkin**
> UpdateSystemModelsCheckinResult update_system_get_checkin(client_id, preview, run_all_inventories=run_all_inventories)

Checks the Client ID into the Update System.

No Documentation Found.

### Example


```python
import openapi_client
from openapi_client.models.update_system_models_checkin_result import UpdateSystemModelsCheckinResult
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://secure.agco-ats.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://secure.agco-ats.com"
)


# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.UpdateSystemApi(api_client)
    client_id = 'client_id_example' # str | The Client ID to check-in.  If this is a new client ID it will be added to Clients.
    preview = True # bool | Get Pkgs w\\o updating Datetimes(true|false)
    run_all_inventories = True # bool | Force return inventories. Defaults to false. (optional)

    try:
        # Checks the Client ID into the Update System.
        api_response = api_instance.update_system_get_checkin(client_id, preview, run_all_inventories=run_all_inventories)
        print("The response of UpdateSystemApi->update_system_get_checkin:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling UpdateSystemApi->update_system_get_checkin: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **client_id** | **str**| The Client ID to check-in.  If this is a new client ID it will be added to Clients. | 
 **preview** | **bool**| Get Pkgs w\\o updating Datetimes(true|false) | 
 **run_all_inventories** | **bool**| Force return inventories. Defaults to false. | [optional] 

### Return type

[**UpdateSystemModelsCheckinResult**](UpdateSystemModelsCheckinResult.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json, application/xml, text/json, text/xml

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |
**0** | API Error Response |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

