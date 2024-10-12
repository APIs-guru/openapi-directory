# InstancePoolEditionCapability

The instance pool capability

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The instance pool version name. | [optional] [readonly] 
**reason** | **str** | The reason for the capability not being available. | [optional] 
**status** | **str** | The status of the capability. | [optional] [readonly] 
**supported_families** | [**List[InstancePoolFamilyCapability]**](InstancePoolFamilyCapability.md) | The supported families. | [optional] [readonly] 

## Example

```python
from openapi_client.models.instance_pool_edition_capability import InstancePoolEditionCapability

# TODO update the JSON string below
json = "{}"
# create an instance of InstancePoolEditionCapability from a JSON string
instance_pool_edition_capability_instance = InstancePoolEditionCapability.from_json(json)
# print the JSON string representation of the object
print(InstancePoolEditionCapability.to_json())

# convert the object into a dict
instance_pool_edition_capability_dict = instance_pool_edition_capability_instance.to_dict()
# create an instance of InstancePoolEditionCapability from a dict
instance_pool_edition_capability_from_dict = InstancePoolEditionCapability.from_dict(instance_pool_edition_capability_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


