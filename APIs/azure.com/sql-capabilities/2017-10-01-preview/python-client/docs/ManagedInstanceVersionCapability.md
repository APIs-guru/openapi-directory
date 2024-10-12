# ManagedInstanceVersionCapability

The managed instance capability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The server version name. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_editions** | [**List[ManagedInstanceEditionCapability]**](ManagedInstanceEditionCapability.md) | The list of supported managed instance editions. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_version_capability import ManagedInstanceVersionCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceVersionCapability from a JSON string
managed_instance_version_capability_instance = ManagedInstanceVersionCapability.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceVersionCapability.to_json())

# convert the object into a dict
managed_instance_version_capability_dict = managed_instance_version_capability_instance.to_dict()
# create an instance of ManagedInstanceVersionCapability from a dict
managed_instance_version_capability_from_dict = ManagedInstanceVersionCapability.from_dict(managed_instance_version_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


