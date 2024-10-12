# ContainerGroupAllOfPropertiesInstanceView

The instance view of the container group. Only valid in response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**events** | [**List[Event]**](Event.md) | The events of this container group. | [optional] [readonly] 
**state** | **str** | The state of the container group. Only valid in response. | [optional] [readonly] 

## Example

```python
from openapi_client.models.container_group_all_of_properties_instance_view import ContainerGroupAllOfPropertiesInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerGroupAllOfPropertiesInstanceView from a JSON string
container_group_all_of_properties_instance_view_instance = ContainerGroupAllOfPropertiesInstanceView.from_json(json)
# print the JSON string representation of the object
print(ContainerGroupAllOfPropertiesInstanceView.to_json())

# convert the object into a dict
container_group_all_of_properties_instance_view_dict = container_group_all_of_properties_instance_view_instance.to_dict()
# create an instance of ContainerGroupAllOfPropertiesInstanceView from a dict
container_group_all_of_properties_instance_view_from_dict = ContainerGroupAllOfPropertiesInstanceView.from_dict(container_group_all_of_properties_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


