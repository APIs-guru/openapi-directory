# Mount

Carries information about a particular disk mount inside a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**disk** | **str** | The name of the disk to mount, as specified in the resources section. | [optional] 
**path** | **str** | The path to mount the disk inside the container. | [optional] 
**read_only** | **bool** | If true, the disk is mounted read-only inside the container. | [optional] 

## Example

```python
from openapi_client.models.mount import Mount

# TODO update the JSON string below
json = "{}"
# create an instance of Mount from a JSON string
mount_instance = Mount.from_json(json)
# print the JSON string representation of the object
print(Mount.to_json())

# convert the object into a dict
mount_dict = mount_instance.to_dict()
# create an instance of Mount from a dict
mount_from_dict = Mount.from_dict(mount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


