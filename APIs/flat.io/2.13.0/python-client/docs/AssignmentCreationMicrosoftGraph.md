# AssignmentCreationMicrosoftGraph

Microsoft Graph options for this assignment

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**categories** | **List[str]** | List of categories this assignment belongs to | [optional] 

## Example

```python
from openapi_client.models.assignment_creation_microsoft_graph import AssignmentCreationMicrosoftGraph

# TODO update the JSON string below
json = "{}"
# create an instance of AssignmentCreationMicrosoftGraph from a JSON string
assignment_creation_microsoft_graph_instance = AssignmentCreationMicrosoftGraph.from_json(json)
# print the JSON string representation of the object
print(AssignmentCreationMicrosoftGraph.to_json())

# convert the object into a dict
assignment_creation_microsoft_graph_dict = assignment_creation_microsoft_graph_instance.to_dict()
# create an instance of AssignmentCreationMicrosoftGraph from a dict
assignment_creation_microsoft_graph_from_dict = AssignmentCreationMicrosoftGraph.from_dict(assignment_creation_microsoft_graph_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


