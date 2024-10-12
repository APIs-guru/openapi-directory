# openapi_client.DeviceApi

All URIs are relative to */api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**detect_device**](DeviceApi.md#detect_device) | **POST** /device/detect | Detect iot device by service banners and mac address


# **detect_device**
> DeviceInfo detect_device(device_features)

Detect iot device by service banners and mac address

Use device service banners and mac address captured by your network port scanner, vulnerability assessment or asset discovery tools to detect device maker, model and firmware information

### Example

* Api Key Authentication (api-key-header):

```python
import openapi_client
from openapi_client.models.device_features import DeviceFeatures
from openapi_client.models.device_info import DeviceInfo
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to /api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: api-key-header
configuration.api_key['api-key-header'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['api-key-header'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.DeviceApi(api_client)
    device_features = openapi_client.DeviceFeatures() # DeviceFeatures | 

    try:
        # Detect iot device by service banners and mac address
        api_response = api_instance.detect_device(device_features)
        print("The response of DeviceApi->detect_device:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling DeviceApi->detect_device: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **device_features** | [**DeviceFeatures**](DeviceFeatures.md)|  | 

### Return type

[**DeviceInfo**](DeviceInfo.md)

### Authorization

[api-key-header](../README.md#api-key-header)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful Response |  -  |
**422** | Validation Error |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

