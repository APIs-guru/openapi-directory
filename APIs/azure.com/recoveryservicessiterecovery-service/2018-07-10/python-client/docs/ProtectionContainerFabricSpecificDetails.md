# ProtectionContainerFabricSpecificDetails

Base class for fabric specific details of container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | Gets the class type. Overridden in derived classes. | [optional] [readonly] 

## Example

```python
from openapi_client.models.protection_container_fabric_specific_details import ProtectionContainerFabricSpecificDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ProtectionContainerFabricSpecificDetails from a JSON string
protection_container_fabric_specific_details_instance = ProtectionContainerFabricSpecificDetails.from_json(json)
# print the JSON string representation of the object
print(ProtectionContainerFabricSpecificDetails.to_json())

# convert the object into a dict
protection_container_fabric_specific_details_dict = protection_container_fabric_specific_details_instance.to_dict()
# create an instance of ProtectionContainerFabricSpecificDetails from a dict
protection_container_fabric_specific_details_from_dict = ProtectionContainerFabricSpecificDetails.from_dict(protection_container_fabric_specific_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


