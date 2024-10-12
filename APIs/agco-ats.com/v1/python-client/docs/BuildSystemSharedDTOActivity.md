# BuildSystemSharedDTOActivity

A DTO for an IActivity

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_id** | **int** | The ID of the activity | [optional] 
**deleted** | **bool** |  | [optional] 
**name** | **str** | The name of the activity | [optional] 
**parameters** | [**List[BuildSystemSharedDTOParameter]**](BuildSystemSharedDTOParameter.md) | The parameters for this activity | [optional] [readonly] 
**steps** | [**List[BuildSystemSharedDTOActivityStep]**](BuildSystemSharedDTOActivityStep.md) | The steps which are performed for this activity | [optional] [readonly] 

## Example

```python
from openapi_client.models.build_system_shared_dto_activity import BuildSystemSharedDTOActivity

# TODO update the JSON string below
json = "{}"
# create an instance of BuildSystemSharedDTOActivity from a JSON string
build_system_shared_dto_activity_instance = BuildSystemSharedDTOActivity.from_json(json)
# print the JSON string representation of the object
print(BuildSystemSharedDTOActivity.to_json())

# convert the object into a dict
build_system_shared_dto_activity_dict = build_system_shared_dto_activity_instance.to_dict()
# create an instance of BuildSystemSharedDTOActivity from a dict
build_system_shared_dto_activity_from_dict = BuildSystemSharedDTOActivity.from_dict(build_system_shared_dto_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


