# openapi_client.SmOwnersForKeyApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_pii_sm_owners_for_key_2**](SmOwnersForKeyApi.md#get_network_pii_sm_owners_for_key_2) | **GET** /networks/{networkId}/pii/smOwnersForKey | Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier


# **get_network_pii_sm_owners_for_key_2**
> object get_network_pii_sm_owners_for_key_2(network_id, username=username, email=email, mac=mac, serial=serial, imei=imei, bluetooth_mac=bluetooth_mac)

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier

Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier. These owner IDs can be used with the Systems Manager API endpoints to retrieve owner details. Exactly one identifier will be accepted.  ## ALTERNATE PATH  ``` /organizations/{organizationId}/pii/smOwnersForKey ```

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
    api_instance = openapi_client.SmOwnersForKeyApi(api_client)
    network_id = 'network_id_example' # str | 
    username = 'username_example' # str | The username of a Systems Manager user (optional)
    email = 'email_example' # str | The email of a network user account or a Systems Manager device (optional)
    mac = 'mac_example' # str | The MAC of a network client device or a Systems Manager device (optional)
    serial = 'serial_example' # str | The serial of a Systems Manager device (optional)
    imei = 'imei_example' # str | The IMEI of a Systems Manager device (optional)
    bluetooth_mac = 'bluetooth_mac_example' # str | The MAC of a Bluetooth client (optional)

    try:
        # Given a piece of Personally Identifiable Information (PII), return the Systems Manager owner ID(s) associated with that identifier
        api_response = api_instance.get_network_pii_sm_owners_for_key_2(network_id, username=username, email=email, mac=mac, serial=serial, imei=imei, bluetooth_mac=bluetooth_mac)
        print("The response of SmOwnersForKeyApi->get_network_pii_sm_owners_for_key_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SmOwnersForKeyApi->get_network_pii_sm_owners_for_key_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **username** | **str**| The username of a Systems Manager user | [optional] 
 **email** | **str**| The email of a network user account or a Systems Manager device | [optional] 
 **mac** | **str**| The MAC of a network client device or a Systems Manager device | [optional] 
 **serial** | **str**| The serial of a Systems Manager device | [optional] 
 **imei** | **str**| The IMEI of a Systems Manager device | [optional] 
 **bluetooth_mac** | **str**| The MAC of a Bluetooth client | [optional] 

### Return type

**object**

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

