# CapabilitySetting


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allowed_instances** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**enabled_by_default** | **bool** |  | [optional] 
**key** | **str** |  | [optional] 
**min_instances** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**options** | [**List[CapabilityOption]**](CapabilityOption.md) |  | [optional] 
**visible** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.capability_setting import CapabilitySetting

# TODO update the JSON string below
json = "{}"
# create an instance of CapabilitySetting from a JSON string
capability_setting_instance = CapabilitySetting.from_json(json)
# print the JSON string representation of the object
print(CapabilitySetting.to_json())

# convert the object into a dict
capability_setting_dict = capability_setting_instance.to_dict()
# create an instance of CapabilitySetting from a dict
capability_setting_from_dict = CapabilitySetting.from_dict(capability_setting_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


