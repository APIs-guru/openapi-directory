# StorageDomainProperties

The storage domain properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encryption_key** | [**AsymmetricEncryptedSecret**](AsymmetricEncryptedSecret.md) |  | [optional] 
**encryption_status** | **str** | The encryption status \&quot;Enabled | Disabled\&quot;. | 
**storage_account_credential_ids** | **List[str]** | The storage account credentials. | 

## Example

```python
from openapi_client.models.storage_domain_properties import StorageDomainProperties

# TODO update the JSON string below
json = "{}"
# create an instance of StorageDomainProperties from a JSON string
storage_domain_properties_instance = StorageDomainProperties.from_json(json)
# print the JSON string representation of the object
print(StorageDomainProperties.to_json())

# convert the object into a dict
storage_domain_properties_dict = storage_domain_properties_instance.to_dict()
# create an instance of StorageDomainProperties from a dict
storage_domain_properties_from_dict = StorageDomainProperties.from_dict(storage_domain_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


