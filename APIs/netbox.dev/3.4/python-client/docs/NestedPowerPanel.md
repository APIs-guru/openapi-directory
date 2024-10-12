# NestedPowerPanel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display** | **str** |  | [optional] [readonly] 
**id** | **int** |  | [optional] [readonly] 
**name** | **str** |  | 
**powerfeed_count** | **int** |  | [optional] [readonly] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.nested_power_panel import NestedPowerPanel

# TODO update the JSON string below
json = "{}"
# create an instance of NestedPowerPanel from a JSON string
nested_power_panel_instance = NestedPowerPanel.from_json(json)
# print the JSON string representation of the object
print(NestedPowerPanel.to_json())

# convert the object into a dict
nested_power_panel_dict = nested_power_panel_instance.to_dict()
# create an instance of NestedPowerPanel from a dict
nested_power_panel_from_dict = NestedPowerPanel.from_dict(nested_power_panel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


