# ChangeFilterOwner

The account ID of the new owner.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The account ID of the new owner. | 

## Example

```python
from openapi_client.models.change_filter_owner import ChangeFilterOwner

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeFilterOwner from a JSON string
change_filter_owner_instance = ChangeFilterOwner.from_json(json)
# print the JSON string representation of the object
print(ChangeFilterOwner.to_json())

# convert the object into a dict
change_filter_owner_dict = change_filter_owner_instance.to_dict()
# create an instance of ChangeFilterOwner from a dict
change_filter_owner_from_dict = ChangeFilterOwner.from_dict(change_filter_owner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


