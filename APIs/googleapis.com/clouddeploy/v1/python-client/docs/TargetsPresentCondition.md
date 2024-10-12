# TargetsPresentCondition

`TargetsPresentCondition` contains information on any Targets referenced in the Delivery Pipeline that do not actually exist.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**missing_targets** | **List[str]** | The list of Target names that do not exist. For example, &#x60;projects/{project_id}/locations/{location_name}/targets/{target_name}&#x60;. | [optional] 
**status** | **bool** | True if there aren&#39;t any missing Targets. | [optional] 
**update_time** | **str** | Last time the condition was updated. | [optional] 

## Example

```python
from openapi_client.models.targets_present_condition import TargetsPresentCondition

# TODO update the JSON string below
json = "{}"
# create an instance of TargetsPresentCondition from a JSON string
targets_present_condition_instance = TargetsPresentCondition.from_json(json)
# print the JSON string representation of the object
print(TargetsPresentCondition.to_json())

# convert the object into a dict
targets_present_condition_dict = targets_present_condition_instance.to_dict()
# create an instance of TargetsPresentCondition from a dict
targets_present_condition_from_dict = TargetsPresentCondition.from_dict(targets_present_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


