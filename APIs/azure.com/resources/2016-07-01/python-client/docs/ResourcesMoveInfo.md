# ResourcesMoveInfo

Parameters of move resources.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resources** | **List[str]** | The ids of the resources. | [optional] 
**target_resource_group** | **str** | The target resource group. | [optional] 

## Example

```python
from openapi_client.models.resources_move_info import ResourcesMoveInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ResourcesMoveInfo from a JSON string
resources_move_info_instance = ResourcesMoveInfo.from_json(json)
# print the JSON string representation of the object
print(ResourcesMoveInfo.to_json())

# convert the object into a dict
resources_move_info_dict = resources_move_info_instance.to_dict()
# create an instance of ResourcesMoveInfo from a dict
resources_move_info_from_dict = ResourcesMoveInfo.from_dict(resources_move_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


