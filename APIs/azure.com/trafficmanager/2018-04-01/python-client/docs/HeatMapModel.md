# HeatMapModel

Class representing a Traffic Manager HeatMap.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**HeatMapProperties**](HeatMapProperties.md) |  | [optional] 
**id** | **str** | Fully qualified resource Id for the resource. Ex - /subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/trafficManagerProfiles/{resourceName} | [optional] 
**name** | **str** | The name of the resource | [optional] 
**type** | **str** | The type of the resource. Ex- Microsoft.Network/trafficManagerProfiles. | [optional] 

## Example

```python
from openapi_client.models.heat_map_model import HeatMapModel

# TODO update the JSON string below
json = "{}"
# create an instance of HeatMapModel from a JSON string
heat_map_model_instance = HeatMapModel.from_json(json)
# print the JSON string representation of the object
print(HeatMapModel.to_json())

# convert the object into a dict
heat_map_model_dict = heat_map_model_instance.to_dict()
# create an instance of HeatMapModel from a dict
heat_map_model_from_dict = HeatMapModel.from_dict(heat_map_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


