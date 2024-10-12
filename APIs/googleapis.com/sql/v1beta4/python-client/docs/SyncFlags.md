# SyncFlags

Initial sync flags for certain Cloud SQL APIs. Currently used for the MySQL external server initial dump.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the flag. | [optional] 
**value** | **str** | The value of the flag. This field must be omitted if the flag doesn&#39;t take a value. | [optional] 

## Example

```python
from openapi_client.models.sync_flags import SyncFlags

# TODO update the JSON string below
json = "{}"
# create an instance of SyncFlags from a JSON string
sync_flags_instance = SyncFlags.from_json(json)
# print the JSON string representation of the object
print(SyncFlags.to_json())

# convert the object into a dict
sync_flags_dict = sync_flags_instance.to_dict()
# create an instance of SyncFlags from a dict
sync_flags_from_dict = SyncFlags.from_dict(sync_flags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


