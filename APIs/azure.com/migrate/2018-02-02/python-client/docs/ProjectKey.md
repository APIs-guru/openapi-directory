# ProjectKey

ID and Key for Migration Project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**workspace_id** | **str** | ID of Migration Project. | [optional] [readonly] 
**workspace_key** | **str** | Key of Migration Project. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_key import ProjectKey

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectKey from a JSON string
project_key_instance = ProjectKey.from_json(json)
# print the JSON string representation of the object
print(ProjectKey.to_json())

# convert the object into a dict
project_key_dict = project_key_instance.to_dict()
# create an instance of ProjectKey from a dict
project_key_from_dict = ProjectKey.from_dict(project_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


