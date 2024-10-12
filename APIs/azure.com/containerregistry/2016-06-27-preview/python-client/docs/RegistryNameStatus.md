# RegistryNameStatus

The result of a request to check the availability of a container registry name.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**message** | **str** | If any, the error message that provides more detail for the reason that the name is not available. | [optional] 
**name_available** | **bool** | The value that indicates whether the name is available. | [optional] 
**reason** | **str** | If any, the reason that the name is not available. | [optional] 

## Example

```python
from openapi_client.models.registry_name_status import RegistryNameStatus

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryNameStatus from a JSON string
registry_name_status_instance = RegistryNameStatus.from_json(json)
# print the JSON string representation of the object
print(RegistryNameStatus.to_json())

# convert the object into a dict
registry_name_status_dict = registry_name_status_instance.to_dict()
# create an instance of RegistryNameStatus from a dict
registry_name_status_from_dict = RegistryNameStatus.from_dict(registry_name_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


