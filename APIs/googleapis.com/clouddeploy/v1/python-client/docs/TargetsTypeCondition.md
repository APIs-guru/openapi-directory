# TargetsTypeCondition

TargetsTypeCondition contains information on whether the Targets defined in the Delivery Pipeline are of the same type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_details** | **str** | Human readable error message. | [optional] 
**status** | **bool** | True if the targets are all a comparable type. For example this is true if all targets are GKE clusters. This is false if some targets are Cloud Run targets and others are GKE clusters. | [optional] 

## Example

```python
from openapi_client.models.targets_type_condition import TargetsTypeCondition

# TODO update the JSON string below
json = "{}"
# create an instance of TargetsTypeCondition from a JSON string
targets_type_condition_instance = TargetsTypeCondition.from_json(json)
# print the JSON string representation of the object
print(TargetsTypeCondition.to_json())

# convert the object into a dict
targets_type_condition_dict = targets_type_condition_instance.to_dict()
# create an instance of TargetsTypeCondition from a dict
targets_type_condition_from_dict = TargetsTypeCondition.from_dict(targets_type_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


