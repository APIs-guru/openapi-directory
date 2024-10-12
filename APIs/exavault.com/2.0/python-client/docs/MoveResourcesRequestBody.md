# MoveResourcesRequestBody


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parent_resource** | **str** | Resource identifier of folder to move files/folders to. | 
**resources** | **List[str]** | Array containing file/folder paths to move. | 

## Example

```python
from openapi_client.models.move_resources_request_body import MoveResourcesRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of MoveResourcesRequestBody from a JSON string
move_resources_request_body_instance = MoveResourcesRequestBody.from_json(json)
# print the JSON string representation of the object
print(MoveResourcesRequestBody.to_json())

# convert the object into a dict
move_resources_request_body_dict = move_resources_request_body_instance.to_dict()
# create an instance of MoveResourcesRequestBody from a dict
move_resources_request_body_from_dict = MoveResourcesRequestBody.from_dict(move_resources_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


