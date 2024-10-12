# DeviceIpBlock

A single device IP block

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**added_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**block** | **str** | An IP address block in CIDR notation eg: 34.68.194.64/29 | [optional] 
**form** | **str** | Whether this block is used by physical or virtual devices | [optional] 

## Example

```python
from openapi_client.models.device_ip_block import DeviceIpBlock

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceIpBlock from a JSON string
device_ip_block_instance = DeviceIpBlock.from_json(json)
# print the JSON string representation of the object
print(DeviceIpBlock.to_json())

# convert the object into a dict
device_ip_block_dict = device_ip_block_instance.to_dict()
# create an instance of DeviceIpBlock from a dict
device_ip_block_from_dict = DeviceIpBlock.from_dict(device_ip_block_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


