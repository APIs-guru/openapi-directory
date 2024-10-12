# DeleteRetentionPolicy

The blob service properties for soft delete.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**days** | **int** | Indicates the number of days that the deleted blob should be retained. The minimum specified value can be 1 and the maximum value can be 365. | [optional] 
**enabled** | **bool** | Indicates whether DeleteRetentionPolicy is enabled for the Blob service. | [optional] 

## Example

```python
from openapi_client.models.delete_retention_policy import DeleteRetentionPolicy

# TODO update the JSON string below
json = "{}"
# create an instance of DeleteRetentionPolicy from a JSON string
delete_retention_policy_instance = DeleteRetentionPolicy.from_json(json)
# print the JSON string representation of the object
print(DeleteRetentionPolicy.to_json())

# convert the object into a dict
delete_retention_policy_dict = delete_retention_policy_instance.to_dict()
# create an instance of DeleteRetentionPolicy from a dict
delete_retention_policy_from_dict = DeleteRetentionPolicy.from_dict(delete_retention_policy_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


