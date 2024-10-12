# CsePrivateKeyMetadata

Metadata for a private key instance.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hardware_key_metadata** | [**HardwareKeyMetadata**](HardwareKeyMetadata.md) |  | [optional] 
**kacls_key_metadata** | [**KaclsKeyMetadata**](KaclsKeyMetadata.md) |  | [optional] 
**private_key_metadata_id** | **str** | Output only. The immutable ID for the private key metadata instance. | [optional] [readonly] 

## Example

```python
from openapi_client.models.cse_private_key_metadata import CsePrivateKeyMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of CsePrivateKeyMetadata from a JSON string
cse_private_key_metadata_instance = CsePrivateKeyMetadata.from_json(json)
# print the JSON string representation of the object
print(CsePrivateKeyMetadata.to_json())

# convert the object into a dict
cse_private_key_metadata_dict = cse_private_key_metadata_instance.to_dict()
# create an instance of CsePrivateKeyMetadata from a dict
cse_private_key_metadata_from_dict = CsePrivateKeyMetadata.from_dict(cse_private_key_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


