# PowerPanel


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
**location** | [**NestedLocation**](NestedLocation.md) |  | [optional] 
**name** | **str** |  | 
**powerfeed_count** | **int** |  | [optional] [readonly] 
**site** | [**NestedSite**](NestedSite.md) |  | 
**tags** | [**List[NestedTag]**](NestedTag.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 

## Example

```python
from openapi_client.models.power_panel import PowerPanel

# TODO update the JSON string below
json = "{}"
# create an instance of PowerPanel from a JSON string
power_panel_instance = PowerPanel.from_json(json)
# print the JSON string representation of the object
print(PowerPanel.to_json())

# convert the object into a dict
power_panel_dict = power_panel_instance.to_dict()
# create an instance of PowerPanel from a dict
power_panel_from_dict = PowerPanel.from_dict(power_panel_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


