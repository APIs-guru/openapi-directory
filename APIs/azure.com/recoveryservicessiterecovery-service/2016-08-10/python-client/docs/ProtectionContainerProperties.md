# ProtectionContainerProperties

Protection profile custom data details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fabric_friendly_name** | **str** | Fabric friendly name. | [optional] 
**fabric_specific_details** | [**ProtectionContainerFabricSpecificDetails**](ProtectionContainerFabricSpecificDetails.md) |  | [optional] 
**fabric_type** | **str** | The fabric type. | [optional] 
**friendly_name** | **str** | The name. | [optional] 
**pairing_status** | **str** | The pairing status of this cloud. | [optional] 
**protected_item_count** | **int** | Number of protected PEs | [optional] 
**role** | **str** | The role of this cloud. | [optional] 

## Example

```python
from openapi_client.models.protection_container_properties import ProtectionContainerProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionContainerProperties from a JSON string
protection_container_properties_instance = ProtectionContainerProperties.from_json(json)
# print the JSON string representation of the object
print(ProtectionContainerProperties.to_json())

# convert the object into a dict
protection_container_properties_dict = protection_container_properties_instance.to_dict()
# create an instance of ProtectionContainerProperties from a dict
protection_container_properties_from_dict = ProtectionContainerProperties.from_dict(protection_container_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


