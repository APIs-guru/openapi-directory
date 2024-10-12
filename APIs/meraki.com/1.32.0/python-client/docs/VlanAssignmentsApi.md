# openapi_client.VlanAssignmentsApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_device_appliance_prefixes_delegated_vlan_assignments_3**](VlanAssignmentsApi.md#get_device_appliance_prefixes_delegated_vlan_assignments_3) | **GET** /devices/{serial}/appliance/prefixes/delegated/vlanAssignments | Return prefixes assigned to all IPv6 enabled VLANs on an appliance.


# **get_device_appliance_prefixes_delegated_vlan_assignments_3**
> List[object] get_device_appliance_prefixes_delegated_vlan_assignments_3(serial)

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

Return prefixes assigned to all IPv6 enabled VLANs on an appliance.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
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
    api_instance = openapi_client.VlanAssignmentsApi(api_client)
    serial = 'serial_example' # str | 

    try:
        # Return prefixes assigned to all IPv6 enabled VLANs on an appliance.
        api_response = api_instance.get_device_appliance_prefixes_delegated_vlan_assignments_3(serial)
        print("The response of VlanAssignmentsApi->get_device_appliance_prefixes_delegated_vlan_assignments_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling VlanAssignmentsApi->get_device_appliance_prefixes_delegated_vlan_assignments_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **serial** | **str**|  | 

### Return type

**List[object]**

### Authorization

[meraki_api_key](../README.md#meraki_api_key)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | Successful operation |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

