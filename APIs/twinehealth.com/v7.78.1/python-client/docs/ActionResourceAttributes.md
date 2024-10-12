# ActionResourceAttributes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**thread** | **str** |  | [optional] 
**adherence** | [**ActionResourceAttributesAdherence**](ActionResourceAttributesAdherence.md) |  | [optional] 
**details** | **Dict[str, object]** |  | [optional] 
**effective_from** | **str** |  | 
**effective_to** | **str** |  | [optional] 
**frequency_goal** | [**ActionResourceAttributesFrequencyGoal**](ActionResourceAttributesFrequencyGoal.md) |  | [optional] 
**identifiers** | [**List[Identifier]**](Identifier.md) |  | [optional] 
**intake** | **Dict[str, object]** |  | [optional] 
**metric_required** | **bool** |  | [optional] 
**metrics** | [**List[ActionMetric]**](ActionMetric.md) |  | [optional] 
**static_title** | **str** |  | [optional] [readonly] 
**title** | **str** |  | 
**tracking** | **bool** |  | [optional] 
**type** | **str** |  | 
**windows** | [**List[ActionWindow]**](ActionWindow.md) |  | [optional] 

## Example

```python
from openapi_client.models.action_resource_attributes import ActionResourceAttributes

# TODO update the JSON string below
json = "{}"
# create an instance of ActionResourceAttributes from a JSON string
action_resource_attributes_instance = ActionResourceAttributes.from_json(json)
# print the JSON string representation of the object
print(ActionResourceAttributes.to_json())

# convert the object into a dict
action_resource_attributes_dict = action_resource_attributes_instance.to_dict()
# create an instance of ActionResourceAttributes from a dict
action_resource_attributes_from_dict = ActionResourceAttributes.from_dict(action_resource_attributes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


