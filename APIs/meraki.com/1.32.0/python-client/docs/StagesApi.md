# openapi_client.StagesApi

All URIs are relative to *https://api.meraki.com/api/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_network_firmware_upgrades_staged_stages_3**](StagesApi.md#get_network_firmware_upgrades_staged_stages_3) | **GET** /networks/{networkId}/firmwareUpgrades/staged/stages | Order of Staged Upgrade Groups in a network
[**update_network_firmware_upgrades_staged_stages_3**](StagesApi.md#update_network_firmware_upgrades_staged_stages_3) | **PUT** /networks/{networkId}/firmwareUpgrades/staged/stages | Assign Staged Upgrade Group order in the sequence.


# **get_network_firmware_upgrades_staged_stages_3**
> List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner] get_network_firmware_upgrades_staged_stages_3(network_id)

Order of Staged Upgrade Groups in a network

Order of Staged Upgrade Groups in a network

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_stages200_response_inner import GetNetworkFirmwareUpgradesStagedStages200ResponseInner
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
    api_instance = openapi_client.StagesApi(api_client)
    network_id = 'network_id_example' # str | 

    try:
        # Order of Staged Upgrade Groups in a network
        api_response = api_instance.get_network_firmware_upgrades_staged_stages_3(network_id)
        print("The response of StagesApi->get_network_firmware_upgrades_staged_stages_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagesApi->get_network_firmware_upgrades_staged_stages_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 

### Return type

[**List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner]**](GetNetworkFirmwareUpgradesStagedStages200ResponseInner.md)

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

# **update_network_firmware_upgrades_staged_stages_3**
> List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner] update_network_firmware_upgrades_staged_stages_3(network_id, update_network_firmware_upgrades_staged_stages_request=update_network_firmware_upgrades_staged_stages_request)

Assign Staged Upgrade Group order in the sequence.

Assign Staged Upgrade Group order in the sequence.

### Example

* Api Key Authentication (meraki_api_key):

```python
import openapi_client
from openapi_client.models.get_network_firmware_upgrades_staged_stages200_response_inner import GetNetworkFirmwareUpgradesStagedStages200ResponseInner
from openapi_client.models.update_network_firmware_upgrades_staged_stages_request import UpdateNetworkFirmwareUpgradesStagedStagesRequest
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
    api_instance = openapi_client.StagesApi(api_client)
    network_id = 'network_id_example' # str | 
    update_network_firmware_upgrades_staged_stages_request = openapi_client.UpdateNetworkFirmwareUpgradesStagedStagesRequest() # UpdateNetworkFirmwareUpgradesStagedStagesRequest |  (optional)

    try:
        # Assign Staged Upgrade Group order in the sequence.
        api_response = api_instance.update_network_firmware_upgrades_staged_stages_3(network_id, update_network_firmware_upgrades_staged_stages_request=update_network_firmware_upgrades_staged_stages_request)
        print("The response of StagesApi->update_network_firmware_upgrades_staged_stages_3:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling StagesApi->update_network_firmware_upgrades_staged_stages_3: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **network_id** | **str**|  | 
 **update_network_firmware_upgrades_staged_stages_request** | [**UpdateNetworkFirmwareUpgradesStagedStagesRequest**](UpdateNetworkFirmwareUpgradesStagedStagesRequest.md)|  | [optional] 

### Return type

[**List[GetNetworkFirmwareUpgradesStagedStages200ResponseInner]**](GetNetworkFirmwareUpgradesStagedStages200ResponseInner.md)

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

