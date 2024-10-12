# ManagedInstanceEditionCapability

The managed server capability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The managed server version name. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_families** | [**List[ManagedInstanceFamilyCapability]**](ManagedInstanceFamilyCapability.md) | The supported families. | [optional] [readonly] 

## Example

```python
from openapi_client.models.managed_instance_edition_capability import ManagedInstanceEditionCapability

# TODO update the JSON string below
json = "{}"
# create an instance of ManagedInstanceEditionCapability from a JSON string
managed_instance_edition_capability_instance = ManagedInstanceEditionCapability.from_json(json)
# print the JSON string representation of the object
print(ManagedInstanceEditionCapability.to_json())

# convert the object into a dict
managed_instance_edition_capability_dict = managed_instance_edition_capability_instance.to_dict()
# create an instance of ManagedInstanceEditionCapability from a dict
managed_instance_edition_capability_from_dict = ManagedInstanceEditionCapability.from_dict(managed_instance_edition_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


