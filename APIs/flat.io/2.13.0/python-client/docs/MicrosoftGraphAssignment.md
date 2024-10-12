# MicrosoftGraphAssignment

A Microsoft Teams asignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alternate_link** | **str** | Absolute link to this assignement in the Microsoft Teams web UI | [optional] 
**categories** | **List[str]** | List of categories where this assignment is published under | [optional] 
**id** | **str** | Identifier of the assignement assigned by Microsoft Teams | [optional] 
**state** | **str** | State of the assignment | [optional] 

## Example

```python
from openapi_client.models.microsoft_graph_assignment import MicrosoftGraphAssignment

# TODO update the JSON string below
json = "{}"
# create an instance of MicrosoftGraphAssignment from a JSON string
microsoft_graph_assignment_instance = MicrosoftGraphAssignment.from_json(json)
# print the JSON string representation of the object
print(MicrosoftGraphAssignment.to_json())

# convert the object into a dict
microsoft_graph_assignment_dict = microsoft_graph_assignment_instance.to_dict()
# create an instance of MicrosoftGraphAssignment from a dict
microsoft_graph_assignment_from_dict = MicrosoftGraphAssignment.from_dict(microsoft_graph_assignment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


