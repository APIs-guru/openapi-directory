# FabricProperties

Fabric properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bcdr_state** | **str** | BCDR state of the fabric. | [optional] 
**custom_details** | [**FabricSpecificDetails**](FabricSpecificDetails.md) |  | [optional] 
**encryption_details** | [**EncryptionDetails**](EncryptionDetails.md) |  | [optional] 
**friendly_name** | **str** | Friendly name of the fabric. | [optional] 
**health** | **str** | Health of fabric. | [optional] 
**health_error_details** | [**List[HealthError]**](HealthError.md) | Fabric health error details. | [optional] 
**internal_identifier** | **str** | Dra Registration Id. | [optional] 
**rollover_encryption_details** | [**EncryptionDetails**](EncryptionDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.fabric_properties import FabricProperties

# TODO update the JSON string below
json = "{}"
# create an instance of FabricProperties from a JSON string
fabric_properties_instance = FabricProperties.from_json(json)
# print the JSON string representation of the object
print(FabricProperties.to_json())

# convert the object into a dict
fabric_properties_dict = fabric_properties_instance.to_dict()
# create an instance of FabricProperties from a dict
fabric_properties_from_dict = FabricProperties.from_dict(fabric_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


