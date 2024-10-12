# DeviceFeatures


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ftp_banner** | **str** |  | [optional] [default to '']
**hostname** | **str** |  | [optional] [default to '']
**http_response** | **str** |  | [optional] [default to '']
**https_response** | **str** |  | [optional] [default to '']
**nic_mac** | **str** |  | [optional] [default to '']
**snmp_sysdescr** | **str** |  | [optional] [default to '']
**snmp_sysoid** | **str** |  | [optional] [default to '']
**telnet_banner** | **str** |  | [optional] [default to '']
**upnp_response** | **str** |  | [optional] [default to '']

## Example

```python
from openapi_client.models.device_features import DeviceFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceFeatures from a JSON string
device_features_instance = DeviceFeatures.from_json(json)
# print the JSON string representation of the object
print(DeviceFeatures.to_json())

# convert the object into a dict
device_features_dict = device_features_instance.to_dict()
# create an instance of DeviceFeatures from a dict
device_features_from_dict = DeviceFeatures.from_dict(device_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


