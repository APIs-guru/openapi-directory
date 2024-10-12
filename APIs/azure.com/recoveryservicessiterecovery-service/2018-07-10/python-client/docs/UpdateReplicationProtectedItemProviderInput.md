# UpdateReplicationProtectedItemProviderInput

Update replication protected item provider specific input.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**instance_type** | **str** | The class type. | [optional] 

## Example

```python
from openapi_client.models.update_replication_protected_item_provider_input import UpdateReplicationProtectedItemProviderInput

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateReplicationProtectedItemProviderInput from a JSON string
update_replication_protected_item_provider_input_instance = UpdateReplicationProtectedItemProviderInput.from_json(json)
# print the JSON string representation of the object
print(UpdateReplicationProtectedItemProviderInput.to_json())

# convert the object into a dict
update_replication_protected_item_provider_input_dict = update_replication_protected_item_provider_input_instance.to_dict()
# create an instance of UpdateReplicationProtectedItemProviderInput from a dict
update_replication_protected_item_provider_input_from_dict = UpdateReplicationProtectedItemProviderInput.from_dict(update_replication_protected_item_provider_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


