# ContainerGroup

A container group.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource id. | [optional] [readonly] 
**location** | **str** | The resource location. | 
**name** | **str** | The resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | The resource tags. | [optional] 
**type** | **str** | The resource type. | [optional] [readonly] 
**properties** | [**ContainerGroupAllOfProperties**](ContainerGroupAllOfProperties.md) |  | 

## Example

```python
from openapi_client.models.container_group import ContainerGroup

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerGroup from a JSON string
container_group_instance = ContainerGroup.from_json(json)
# print the JSON string representation of the object
print(ContainerGroup.to_json())

# convert the object into a dict
container_group_dict = container_group_instance.to_dict()
# create an instance of ContainerGroup from a dict
container_group_from_dict = ContainerGroup.from_dict(container_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


