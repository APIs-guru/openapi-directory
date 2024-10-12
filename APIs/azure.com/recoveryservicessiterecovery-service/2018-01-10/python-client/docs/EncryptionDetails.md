# EncryptionDetails

Encryption details for the fabric.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kek_cert_expiry_date** | **datetime** | The key encryption key certificate expiry date. | [optional] 
**kek_cert_thumbprint** | **str** | The key encryption key certificate thumbprint. | [optional] 
**kek_state** | **str** | The key encryption key state for the Vmm. | [optional] 

## Example

```python
from openapi_client.models.encryption_details import EncryptionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of EncryptionDetails from a JSON string
encryption_details_instance = EncryptionDetails.from_json(json)
# print the JSON string representation of the object
print(EncryptionDetails.to_json())

# convert the object into a dict
encryption_details_dict = encryption_details_instance.to_dict()
# create an instance of EncryptionDetails from a dict
encryption_details_from_dict = EncryptionDetails.from_dict(encryption_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


