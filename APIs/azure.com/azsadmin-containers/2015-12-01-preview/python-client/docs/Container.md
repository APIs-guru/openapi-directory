# Container

Container properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**accountid** | **str** | The ID of the storage account. | [optional] [readonly] 
**accountname** | **str** | The name of storage account where the container locates. | [optional] [readonly] 
**container_state** | **str** | The current state of the container. | [optional] [readonly] 
**containerid** | **int** | The container ID. | [optional] [readonly] 
**containername** | **str** | Container name. | [optional] [readonly] 
**sharename** | **str** | The name of the share where the container locates. | [optional] [readonly] 
**used_bytes_in_primary_volume** | **int** | The used space, in bytes, of the container in the primary volume. | [optional] [readonly] 

## Example

```python
from openapi_client.models.container import Container

# TODO update the JSON string below
json = "{}"
# create an instance of Container from a JSON string
container_instance = Container.from_json(json)
# print the JSON string representation of the object
print(Container.to_json())

# convert the object into a dict
container_dict = container_instance.to_dict()
# create an instance of Container from a dict
container_from_dict = Container.from_dict(container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


