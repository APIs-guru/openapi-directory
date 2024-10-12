# ContainerList

Collection of all the containers on the Data Box Edge/Gateway device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] [readonly] 
**value** | [**List[Container]**](Container.md) | The list of containers. | [optional] [readonly] 

## Example

```python
from openapi_client.models.container_list import ContainerList

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerList from a JSON string
container_list_instance = ContainerList.from_json(json)
# print the JSON string representation of the object
print(ContainerList.to_json())

# convert the object into a dict
container_list_dict = container_list_instance.to_dict()
# create an instance of ContainerList from a dict
container_list_from_dict = ContainerList.from_dict(container_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


