# ContainerGroupListResult

The container group list response that contains the container group properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URI to fetch the next page of container groups. | [optional] 
**value** | [**List[ContainerGroup]**](ContainerGroup.md) | The list of container groups. | [optional] 

## Example

```python
from openapi_client.models.container_group_list_result import ContainerGroupListResult

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerGroupListResult from a JSON string
container_group_list_result_instance = ContainerGroupListResult.from_json(json)
# print the JSON string representation of the object
print(ContainerGroupListResult.to_json())

# convert the object into a dict
container_group_list_result_dict = container_group_list_result_instance.to_dict()
# create an instance of ContainerGroupListResult from a dict
container_group_list_result_from_dict = ContainerGroupListResult.from_dict(container_group_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


