# RegistryNameCheckRequest

A request to check whether the container registry name is available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the container registry. | 
**type** | **str** | The resource type of the container registry. This field must be set to \&quot;Microsoft.ContainerRegistry/registries\&quot;. | 

## Example

```python
from openapi_client.models.registry_name_check_request import RegistryNameCheckRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RegistryNameCheckRequest from a JSON string
registry_name_check_request_instance = RegistryNameCheckRequest.from_json(json)
# print the JSON string representation of the object
print(RegistryNameCheckRequest.to_json())

# convert the object into a dict
registry_name_check_request_dict = registry_name_check_request_instance.to_dict()
# create an instance of RegistryNameCheckRequest from a dict
registry_name_check_request_from_dict = RegistryNameCheckRequest.from_dict(registry_name_check_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


