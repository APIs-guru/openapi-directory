# MoveProjectRequest

The request sent to MoveProject method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination_parent** | **str** | Required. The new parent to move the Project under. | [optional] 

## Example

```python
from openapi_client.models.move_project_request import MoveProjectRequest

# TODO update the JSON string below
json = "{}"
# create an instance of MoveProjectRequest from a JSON string
move_project_request_instance = MoveProjectRequest.from_json(json)
# print the JSON string representation of the object
print(MoveProjectRequest.to_json())

# convert the object into a dict
move_project_request_dict = move_project_request_instance.to_dict()
# create an instance of MoveProjectRequest from a dict
move_project_request_from_dict = MoveProjectRequest.from_dict(move_project_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


