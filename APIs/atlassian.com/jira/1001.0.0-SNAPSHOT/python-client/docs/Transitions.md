# Transitions

List of issue transitions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**expand** | **str** | Expand options that include additional transitions details in the response. | [optional] [readonly] 
**transitions** | [**List[IssueTransition]**](IssueTransition.md) | List of issue transitions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.transitions import Transitions

# TODO update the JSON string below
json = "{}"
# create an instance of Transitions from a JSON string
transitions_instance = Transitions.from_json(json)
# print the JSON string representation of the object
print(Transitions.to_json())

# convert the object into a dict
transitions_dict = transitions_instance.to_dict()
# create an instance of Transitions from a dict
transitions_from_dict = Transitions.from_dict(transitions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


