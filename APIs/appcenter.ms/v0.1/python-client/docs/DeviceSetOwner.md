# DeviceSetOwner

The owner of a device set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the account | [optional] 
**id** | **str** | Account ID | 
**name** | **str** | Name of the account | 
**type** | **str** | Type of account | 

## Example

```python
from openapi_client.models.device_set_owner import DeviceSetOwner

# TODO update the JSON string below
json = "{}"
# create an instance of DeviceSetOwner from a JSON string
device_set_owner_instance = DeviceSetOwner.from_json(json)
# print the JSON string representation of the object
print(DeviceSetOwner.to_json())

# convert the object into a dict
device_set_owner_dict = device_set_owner_instance.to_dict()
# create an instance of DeviceSetOwner from a dict
device_set_owner_from_dict = DeviceSetOwner.from_dict(device_set_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


