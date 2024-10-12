# Device


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Date/time of creation | 
**disabled** | **bool** | Whether device is disabled or not | [optional] 
**disabled_reason** | **str** | Reason explaining why device had been disabled | [optional] 
**id** | **str** |  | 
**push_provider** | **str** |  | 
**push_provider_name** | **str** |  | [optional] 
**user_id** | **str** |  | 

## Example

```python
from openapi_client.models.device import Device

# TODO update the JSON string below
json = "{}"
# create an instance of Device from a JSON string
device_instance = Device.from_json(json)
# print the JSON string representation of the object
print(Device.to_json())

# convert the object into a dict
device_dict = device_instance.to_dict()
# create an instance of Device from a dict
device_from_dict = Device.from_dict(device_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


