# MoveImpact

A message to group impacts of moving the target resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** | User friendly impact detail in a free form message. | [optional] 

## Example

```python
from openapi_client.models.move_impact import MoveImpact

# TODO update the JSON string below
json = "{}"
# create an instance of MoveImpact from a JSON string
move_impact_instance = MoveImpact.from_json(json)
# print the JSON string representation of the object
print(MoveImpact.to_json())

# convert the object into a dict
move_impact_dict = move_impact_instance.to_dict()
# create an instance of MoveImpact from a dict
move_impact_from_dict = MoveImpact.from_dict(move_impact_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


