# StorageProfile

The storage profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**storageaccounts** | [**List[StorageAccount]**](StorageAccount.md) | The list of storage accounts in the cluster. | [optional] 

## Example

```python
from openapi_client.models.storage_profile import StorageProfile

# TODO update the JSON string below
json = "{}"
# create an instance of StorageProfile from a JSON string
storage_profile_instance = StorageProfile.from_json(json)
# print the JSON string representation of the object
print(StorageProfile.to_json())

# convert the object into a dict
storage_profile_dict = storage_profile_instance.to_dict()
# create an instance of StorageProfile from a dict
storage_profile_from_dict = StorageProfile.from_dict(storage_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


