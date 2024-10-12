# KaclsKeyMetadata

Metadata for private keys managed by an external key access control list service. For details about managing key access, see [Google Workspace CSE API Reference](https://developers.google.com/workspace/cse/reference).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kacls_data** | **str** | Opaque data generated and used by the key access control list service. Maximum size: 8 KiB. | [optional] 
**kacls_uri** | **str** | The URI of the key access control list service that manages the private key. | [optional] 

## Example

```python
from openapi_client.models.kacls_key_metadata import KaclsKeyMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of KaclsKeyMetadata from a JSON string
kacls_key_metadata_instance = KaclsKeyMetadata.from_json(json)
# print the JSON string representation of the object
print(KaclsKeyMetadata.to_json())

# convert the object into a dict
kacls_key_metadata_dict = kacls_key_metadata_instance.to_dict()
# create an instance of KaclsKeyMetadata from a dict
kacls_key_metadata_from_dict = KaclsKeyMetadata.from_dict(kacls_key_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


