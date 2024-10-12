# NetworkInfo

Device network info.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**imei** | **str** | IMEI number of the GSM device. For example, A1000031212. | [optional] 
**meid** | **str** | MEID number of the CDMA device. For example, A00000292788E1. | [optional] 
**network_operator_name** | **str** | Alphabetic name of current registered operator. For example, Vodafone. | [optional] 
**telephony_infos** | [**List[TelephonyInfo]**](TelephonyInfo.md) | Provides telephony information associated with each SIM card on the device. Only supported on fully managed devices starting from Android API level 23. | [optional] 
**wifi_mac_address** | **str** | Wi-Fi MAC address of the device. For example, 7c:11:11:11:11:11. | [optional] 

## Example

```python
from openapi_client.models.network_info import NetworkInfo

# TODO update the JSON string below
json = "{}"
# create an instance of NetworkInfo from a JSON string
network_info_instance = NetworkInfo.from_json(json)
# print the JSON string representation of the object
print(NetworkInfo.to_json())

# convert the object into a dict
network_info_dict = network_info_instance.to_dict()
# create an instance of NetworkInfo from a dict
network_info_from_dict = NetworkInfo.from_dict(network_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


