# ChangeLog

Describes a change that a user has made to a resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | Account ID of the modified object. | [optional] 
**action** | **str** | Action which caused the change. | [optional] 
**change_time** | **datetime** |  | [optional] 
**field_name** | **str** | Field name of the object which changed. | [optional] 
**id** | **str** | ID of this change log. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#changeLog\&quot;. | [optional] 
**new_value** | **str** | New value of the object field. | [optional] 
**object_id** | **str** | ID of the object of this change log. The object could be a campaign, placement, ad, or other type. | [optional] 
**object_type** | **str** | Object type of the change log. | [optional] 
**old_value** | **str** | Old value of the object field. | [optional] 
**subaccount_id** | **str** | Subaccount ID of the modified object. | [optional] 
**transaction_id** | **str** | Transaction ID of this change log. When a single API call results in many changes, each change will have a separate ID in the change log but will share the same transactionId. | [optional] 
**user_profile_id** | **str** | ID of the user who modified the object. | [optional] 
**user_profile_name** | **str** | User profile name of the user who modified the object. | [optional] 

## Example

```python
from openapi_client.models.change_log import ChangeLog

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeLog from a JSON string
change_log_instance = ChangeLog.from_json(json)
# print the JSON string representation of the object
print(ChangeLog.to_json())

# convert the object into a dict
change_log_dict = change_log_instance.to_dict()
# create an instance of ChangeLog from a dict
change_log_from_dict = ChangeLog.from_dict(change_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


