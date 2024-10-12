# WritablePowerPanel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**comments** | **str** |  | [optional] 
**created** | **datetime** |  | [optional] [readonly] 
**custom_fields** | **object** |  | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**location** | **int** |  | [optional] 
**name** | **str** |  | 
**powerfeed_count** | **int** |  | [optional] [readonly] 
**site** | **int** |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.writable_power_panel import WritablePowerPanel

# TODO update the JSON string below
json = "{}"
# create an instance of WritablePowerPanel from a JSON string
writable_power_panel_instance = WritablePowerPanel.from_json(json)
# print the JSON string representation of the object
print(WritablePowerPanel.to_json())

# convert the object into a dict
writable_power_panel_dict = writable_power_panel_instance.to_dict()
# create an instance of WritablePowerPanel from a dict
writable_power_panel_from_dict = WritablePowerPanel.from_dict(writable_power_panel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


