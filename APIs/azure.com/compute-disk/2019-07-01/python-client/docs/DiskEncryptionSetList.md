# DiskEncryptionSetList

The List disk encryption set operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The uri to fetch the next page of disk encryption sets. Call ListNext() with this to fetch the next page of disk encryption sets. | [optional] 
**value** | [**List[DiskEncryptionSet]**](DiskEncryptionSet.md) | A list of disk encryption sets. | 

## Example

```python
from openapi_client.models.disk_encryption_set_list import DiskEncryptionSetList

# TODO update the JSON string below
json = "{}"
# create an instance of DiskEncryptionSetList from a JSON string
disk_encryption_set_list_instance = DiskEncryptionSetList.from_json(json)
# print the JSON string representation of the object
print(DiskEncryptionSetList.to_json())

# convert the object into a dict
disk_encryption_set_list_dict = disk_encryption_set_list_instance.to_dict()
# create an instance of DiskEncryptionSetList from a dict
disk_encryption_set_list_from_dict = DiskEncryptionSetList.from_dict(disk_encryption_set_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


