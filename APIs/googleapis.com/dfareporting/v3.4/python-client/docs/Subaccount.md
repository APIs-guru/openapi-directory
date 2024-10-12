# Subaccount

Contains properties of a Campaign Manager subaccount.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | ID of the account that contains this subaccount. This is a read-only field that can be left blank. | [optional] 
**available_permission_ids** | **List[str]** | IDs of the available user role permissions for this subaccount. | [optional] 
**id** | **str** | ID of this subaccount. This is a read-only, auto-generated field. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#subaccount\&quot;. | [optional] 
**name** | **str** | Name of this subaccount. This is a required field. Must be less than 128 characters long and be unique among subaccounts of the same account. | [optional] 

## Example

```python
from openapi_client.models.subaccount import Subaccount

# TODO update the JSON string below
json = "{}"
# create an instance of Subaccount from a JSON string
subaccount_instance = Subaccount.from_json(json)
# print the JSON string representation of the object
print(Subaccount.to_json())

# convert the object into a dict
subaccount_dict = subaccount_instance.to_dict()
# create an instance of Subaccount from a dict
subaccount_from_dict = Subaccount.from_dict(subaccount_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


