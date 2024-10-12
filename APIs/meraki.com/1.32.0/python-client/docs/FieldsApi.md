# openapi_client.FieldsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**update_network_sm_devices_fields_2**](FieldsApi.md#update_network_sm_devices_fields_2) | **PUT** /networks/{networkId}/sm/devices/fields | Modify the fields of a device


# **update_network_sm_devices_fields_2**
> List[UpdateNetworkSmDevicesFields200ResponseInner] update_network_sm_devices_fields_2(network_id, update_network_sm_devices_fields_request)

Modify the fields of a device

Modify the fields of a device

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.update_network_sm_devices_fields200_response_inner import UpdateNetworkSmDevicesFields200ResponseInner
from openapi_client.models.update_network_sm_devices_fields_request import UpdateNetworkSmDevicesFieldsRequest
from openapi_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to https://api.meraki.com/api/v1
# See configuration.py for a list of all supported configuration parameters.
configuration = openapi_client.Configuration(
    host = "https://api.meraki.com/api/v1"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: meraki_api_key
configuration.api_key['meraki_api_key'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['meraki_api_key'] = 'Bearer'

# Enter a context with an instance of the API client
with openapi_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = openapi_client.FieldsApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_sm_devices_fields_request = openapi_client.UpdateNetworkSmDevicesFieldsRequest() # UpdateNetworkSmDevicesFieldsRequest | 

    try:
        # Modify the fields of a device
        api_response = api_instance.update_network_sm_devices_fields_2(network_id, update_network_sm_devices_fields_request)
        print("The response of FieldsApi->update_network_sm_devices_fields_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling FieldsApi->update_network_sm_devices_fields_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_sm_devices_fields_request** | [**UpdateNetworkSmDevicesFieldsRequest**](UpdateNetworkSmDevicesFieldsRequest.md)|  | 

### Return type

[**List[UpdateNetworkSmDevicesFields200ResponseInner]**](UpdateNetworkSmDevicesFields200ResponseInner.md)

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

