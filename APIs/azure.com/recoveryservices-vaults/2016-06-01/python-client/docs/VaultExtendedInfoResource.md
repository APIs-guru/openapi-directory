# VaultExtendedInfoResource

Vault extended information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**VaultExtendedInfo**](VaultExtendedInfo.md) |  | [optional] 
**e_tag** | **str** | Optional ETag. | [optional] 
**id** | **str** | Resource Id represents the complete path to the resource. | [optional] [readonly] 
**name** | **str** | Resource name associated with the resource. | [optional] [readonly] 
**type** | **str** | Resource type represents the complete path of the form Namespace/ResourceType/ResourceType/... | [optional] [readonly] 

## Example

```python
from openapi_client.models.vault_extended_info_resource import VaultExtendedInfoResource

# TODO update the JSON string below
json = "{}"
# create an instance of VaultExtendedInfoResource from a JSON string
vault_extended_info_resource_instance = VaultExtendedInfoResource.from_json(json)
# print the JSON string representation of the object
print(VaultExtendedInfoResource.to_json())

# convert the object into a dict
vault_extended_info_resource_dict = vault_extended_info_resource_instance.to_dict()
# create an instance of VaultExtendedInfoResource from a dict
vault_extended_info_resource_from_dict = VaultExtendedInfoResource.from_dict(vault_extended_info_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


