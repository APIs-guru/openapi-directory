# ContainerHostMapping

Container host mapping object specifying the Container host resource ID and its associated Controller resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**container_host_resource_id** | **str** | ARM ID of the Container Host resource | [optional] 
**mapped_controller_resource_id** | **str** | ARM ID of the mapped Controller resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.container_host_mapping import ContainerHostMapping

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerHostMapping from a JSON string
container_host_mapping_instance = ContainerHostMapping.from_json(json)
# print the JSON string representation of the object
print(ContainerHostMapping.to_json())

# convert the object into a dict
container_host_mapping_dict = container_host_mapping_instance.to_dict()
# create an instance of ContainerHostMapping from a dict
container_host_mapping_from_dict = ContainerHostMapping.from_dict(container_host_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


