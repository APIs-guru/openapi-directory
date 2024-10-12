# VirtualDirectory


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**physical_path** | **str** |  | [optional] 
**virtual_path** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.virtual_directory import VirtualDirectory

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualDirectory from a JSON string
virtual_directory_instance = VirtualDirectory.from_json(json)
# print the JSON string representation of the object
print(VirtualDirectory.to_json())

# convert the object into a dict
virtual_directory_dict = virtual_directory_instance.to_dict()
# create an instance of VirtualDirectory from a dict
virtual_directory_from_dict = VirtualDirectory.from_dict(virtual_directory_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


