# openapi_client.DevicesApi

All URIs are relative to *https://api.appstoreconnect.apple.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**devices_create_instance**](DevicesApi.md#devices_create_instance) | **POST** /v1/devices | 
[**devices_get_collection**](DevicesApi.md#devices_get_collection) | **GET** /v1/devices | 
[**devices_get_instance**](DevicesApi.md#devices_get_instance) | **GET** /v1/devices/{id} | 
[**devices_update_instance**](DevicesApi.md#devices_update_instance) | **PATCH** /v1/devices/{id} | 


# **devices_create_instance**
> DeviceResponse devices_create_instance(device_create_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.device_create_request import DeviceCreateRequest
from openapi_client.models.device_response import DeviceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DevicesApi(api_client)
    device_create_request = openapi_client.DeviceCreateRequest() # DeviceCreateRequest | Device representation

    try:
        api_response = api_instance.devices_create_instance(device_create_request)
        print("The response of DevicesApi->devices_create_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_create_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_create_request** | [**DeviceCreateRequest**](DeviceCreateRequest.md)| Device representation | 

### Return type

[**DeviceResponse**](DeviceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Single Device |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get_collection**
> DevicesResponse devices_get_collection(filter_name=filter_name, filter_platform=filter_platform, filter_status=filter_status, filter_udid=filter_udid, filter_id=filter_id, sort=sort, fields_devices=fields_devices, limit=limit)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.devices_response import DevicesResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DevicesApi(api_client)
    filter_name = ['filter_name_example'] # List[str] | filter by attribute 'name' (optional)
    filter_platform = ['filter_platform_example'] # List[str] | filter by attribute 'platform' (optional)
    filter_status = ['filter_status_example'] # List[str] | filter by attribute 'status' (optional)
    filter_udid = ['filter_udid_example'] # List[str] | filter by attribute 'udid' (optional)
    filter_id = ['filter_id_example'] # List[str] | filter by id(s) (optional)
    sort = ['sort_example'] # List[str] | comma-separated list of sort expressions; resources will be sorted as specified (optional)
    fields_devices = ['fields_devices_example'] # List[str] | the fields to include for returned resources of type devices (optional)
    limit = 56 # int | maximum resources per page (optional)

    try:
        api_response = api_instance.devices_get_collection(filter_name=filter_name, filter_platform=filter_platform, filter_status=filter_status, filter_udid=filter_udid, filter_id=filter_id, sort=sort, fields_devices=fields_devices, limit=limit)
        print("The response of DevicesApi->devices_get_collection:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_get_collection: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **filter_name** | [**List[str]**](str.md)| filter by attribute &#39;name&#39; | [optional] 
 **filter_platform** | [**List[str]**](str.md)| filter by attribute &#39;platform&#39; | [optional] 
 **filter_status** | [**List[str]**](str.md)| filter by attribute &#39;status&#39; | [optional] 
 **filter_udid** | [**List[str]**](str.md)| filter by attribute &#39;udid&#39; | [optional] 
 **filter_id** | [**List[str]**](str.md)| filter by id(s) | [optional] 
 **sort** | [**List[str]**](str.md)| comma-separated list of sort expressions; resources will be sorted as specified | [optional] 
 **fields_devices** | [**List[str]**](str.md)| the fields to include for returned resources of type devices | [optional] 
 **limit** | **int**| maximum resources per page | [optional] 

### Return type

[**DevicesResponse**](DevicesResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | List of Devices |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_get_instance**
> DeviceResponse devices_get_instance(id, fields_devices=fields_devices)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.device_response import DeviceResponse
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DevicesApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    fields_devices = ['fields_devices_example'] # List[str] | the fields to include for returned resources of type devices (optional)

    try:
        api_response = api_instance.devices_get_instance(id, fields_devices=fields_devices)
        print("The response of DevicesApi->devices_get_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_get_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **fields_devices** | [**List[str]**](str.md)| the fields to include for returned resources of type devices | [optional] 

### Return type

[**DeviceResponse**](DeviceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single Device |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **devices_update_instance**
> DeviceResponse devices_update_instance(id, device_update_request)



### Example

* Bearer (JWT) Authentication (itc-bearer-token):

```python
import openapi_client
from openapi_client.models.device_response import DeviceResponse
from openapi_client.models.device_update_request import DeviceUpdateRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.appstoreconnect.apple.com
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.appstoreconnect.apple.com"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure Bearer authorization (JWT): itc-bearer-token
configuration = openapi_client.Configuration(
    access_token = os.environ["BEARER_TOKEN"]
)

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DevicesApi(api_client)
    id = 'id_example' # str | the id of the requested resource
    device_update_request = openapi_client.DeviceUpdateRequest() # DeviceUpdateRequest | Device representation

    try:
        api_response = api_instance.devices_update_instance(id, device_update_request)
        print("The response of DevicesApi->devices_update_instance:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DevicesApi->devices_update_instance: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **str**| the id of the requested resource | 
 **device_update_request** | [**DeviceUpdateRequest**](DeviceUpdateRequest.md)| Device representation | 

### Return type

[**DeviceResponse**](DeviceResponse.md)

### Authorization

[itc-bearer-token](../README.md#itc-bearer-token)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Single Device |  -  |
**400** | Parameter error(s) |  -  |
**403** | Forbidden error |  -  |
**404** | Not found error |  -  |
**409** | Request entity error(s) |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

