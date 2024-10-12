# VirtualApplication


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**physical_path** | **str** |  | [optional] 
**preload_enabled** | **bool** |  | [optional] 
**virtual_directories** | [**List[VirtualDirectory]**](VirtualDirectory.md) |  | [optional] 
**virtual_path** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.virtual_application import VirtualApplication

# TODO update the JSON string below
json = "{}"
# create an instance of VirtualApplication from a JSON string
virtual_application_instance = VirtualApplication.from_json(json)
# print the JSON string representation of the object
print(VirtualApplication.to_json())

# convert the object into a dict
virtual_application_dict = virtual_application_instance.to_dict()
# create an instance of VirtualApplication from a dict
virtual_application_from_dict = VirtualApplication.from_dict(virtual_application_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


