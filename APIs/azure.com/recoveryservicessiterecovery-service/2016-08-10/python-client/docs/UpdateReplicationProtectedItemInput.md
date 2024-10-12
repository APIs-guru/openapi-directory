# UpdateReplicationProtectedItemInput

Update replication protected item input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**UpdateReplicationProtectedItemInputProperties**](UpdateReplicationProtectedItemInputProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.update_replication_protected_item_input import UpdateReplicationProtectedItemInput

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateReplicationProtectedItemInput from a JSON string
update_replication_protected_item_input_instance = UpdateReplicationProtectedItemInput.from_json(json)
# print the JSON string representation of the object
print(UpdateReplicationProtectedItemInput.to_json())

# convert the object into a dict
update_replication_protected_item_input_dict = update_replication_protected_item_input_instance.to_dict()
# create an instance of UpdateReplicationProtectedItemInput from a dict
update_replication_protected_item_input_from_dict = UpdateReplicationProtectedItemInput.from_dict(update_replication_protected_item_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


