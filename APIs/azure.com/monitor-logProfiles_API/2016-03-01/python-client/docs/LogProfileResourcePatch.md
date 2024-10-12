# LogProfileResourcePatch

The log profile resource for patch operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**LogProfileProperties**](LogProfileProperties.md) |  | [optional] 
**tags** | **object** | Resource tags | [optional] 

## Example

```python
from openapi_client.models.log_profile_resource_patch import LogProfileResourcePatch

# TODO update the JSON string below
json = "{}"
# create an instance of LogProfileResourcePatch from a JSON string
log_profile_resource_patch_instance = LogProfileResourcePatch.from_json(json)
# print the JSON string representation of the object
print(LogProfileResourcePatch.to_json())

# convert the object into a dict
log_profile_resource_patch_dict = log_profile_resource_patch_instance.to_dict()
# create an instance of LogProfileResourcePatch from a dict
log_profile_resource_patch_from_dict = LogProfileResourcePatch.from_dict(log_profile_resource_patch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


