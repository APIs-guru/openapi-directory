# ContainerInstanceView

Runtime information of a container instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_state** | [**ContainerState**](ContainerState.md) |  | [optional] 
**events** | [**List[ContainerEvent]**](ContainerEvent.md) | The events of this container instance. | [optional] 
**previous_state** | [**ContainerState**](ContainerState.md) |  | [optional] 
**restart_count** | **int** | The number of times the container has been restarted. | [optional] 

## Example

```python
from openapi_client.models.container_instance_view import ContainerInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerInstanceView from a JSON string
container_instance_view_instance = ContainerInstanceView.from_json(json)
# print the JSON string representation of the object
print(ContainerInstanceView.to_json())

# convert the object into a dict
container_instance_view_dict = container_instance_view_instance.to_dict()
# create an instance of ContainerInstanceView from a dict
container_instance_view_from_dict = ContainerInstanceView.from_dict(container_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


