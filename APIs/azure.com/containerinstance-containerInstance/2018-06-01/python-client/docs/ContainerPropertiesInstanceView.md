# ContainerPropertiesInstanceView

The instance view of the container instance. Only valid in response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_state** | [**ContainerState**](ContainerState.md) |  | [optional] 
**events** | [**List[Event]**](Event.md) | The events of the container instance. | [optional] [readonly] 
**previous_state** | [**ContainerState**](ContainerState.md) |  | [optional] 
**restart_count** | **int** | The number of times that the container instance has been restarted. | [optional] [readonly] 

## Example

```python
from openapi_client.models.container_properties_instance_view import ContainerPropertiesInstanceView

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerPropertiesInstanceView from a JSON string
container_properties_instance_view_instance = ContainerPropertiesInstanceView.from_json(json)
# print the JSON string representation of the object
print(ContainerPropertiesInstanceView.to_json())

# convert the object into a dict
container_properties_instance_view_dict = container_properties_instance_view_instance.to_dict()
# create an instance of ContainerPropertiesInstanceView from a dict
container_properties_instance_view_from_dict = ContainerPropertiesInstanceView.from_dict(container_properties_instance_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


