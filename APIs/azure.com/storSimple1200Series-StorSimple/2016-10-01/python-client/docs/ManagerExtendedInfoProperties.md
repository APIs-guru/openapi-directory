# ManagerExtendedInfoProperties

Properties of the ManagerExtendedInfo

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**algorithm** | **str** | Represents the encryption algorithm used to encrypt the other keys. None - if EncryptionKey is saved in plain text format. AlgorithmName - if encryption is used | 
**encryption_key** | **str** | Represents the CEK of the resource | [optional] 
**encryption_key_thumbprint** | **str** | Represents the Cert thumbprint that was used to encrypt the CEK | [optional] 
**integrity_key** | **str** | Represents the CIK of the resource | 
**portal_certificate_thumbprint** | **str** | Represents the portal thumbprint which can be used optionally to encrypt the entire data before storing it. | [optional] 
**version** | **str** | Represents the version of the ExtendedInfo object being persisted | [optional] 

## Example

```python
from openapi_client.models.manager_extended_info_properties import ManagerExtendedInfoProperties

# TODO update the JSON string below
json = "{}"
# create an instance of ManagerExtendedInfoProperties from a JSON string
manager_extended_info_properties_instance = ManagerExtendedInfoProperties.from_json(json)
# print the JSON string representation of the object
print(ManagerExtendedInfoProperties.to_json())

# convert the object into a dict
manager_extended_info_properties_dict = manager_extended_info_properties_instance.to_dict()
# create an instance of ManagerExtendedInfoProperties from a dict
manager_extended_info_properties_from_dict = ManagerExtendedInfoProperties.from_dict(manager_extended_info_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


