# openapi_client.RollbacksApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_network_firmware_upgrades_rollback_2**](RollbacksApi.md#create_network_firmware_upgrades_rollback_2) | **POST** /networks/{networkId}/firmwareUpgrades/rollbacks | Rollback a Firmware Upgrade For A Network


# **create_network_firmware_upgrades_rollback_2**
> CreateNetworkFirmwareUpgradesRollback200Response create_network_firmware_upgrades_rollback_2(network_id, create_network_firmware_upgrades_rollback_request)

Rollback a Firmware Upgrade For A Network

Rollback a Firmware Upgrade For A Network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.create_network_firmware_upgrades_rollback200_response import CreateNetworkFirmwareUpgradesRollback200Response
from openapi_client.models.create_network_firmware_upgrades_rollback_request import CreateNetworkFirmwareUpgradesRollbackRequest
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
    api_instance = openapi_client.RollbacksApi(api_client)
    network_id = 'network_id_example' # str | 
    create_network_firmware_upgrades_rollback_request = openapi_client.CreateNetworkFirmwareUpgradesRollbackRequest() # CreateNetworkFirmwareUpgradesRollbackRequest | 

    try:
        # Rollback a Firmware Upgrade For A Network
        api_response = api_instance.create_network_firmware_upgrades_rollback_2(network_id, create_network_firmware_upgrades_rollback_request)
        print("The response of RollbacksApi->create_network_firmware_upgrades_rollback_2:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling RollbacksApi->create_network_firmware_upgrades_rollback_2: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **create_network_firmware_upgrades_rollback_request** | [**CreateNetworkFirmwareUpgradesRollbackRequest**](CreateNetworkFirmwareUpgradesRollbackRequest.md)|  | 

### Return type

[**CreateNetworkFirmwareUpgradesRollback200Response**](CreateNetworkFirmwareUpgradesRollback200Response.md)

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

