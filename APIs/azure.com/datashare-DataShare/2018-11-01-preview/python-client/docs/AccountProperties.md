# AccountProperties

Account property bag.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Time at which the account was created. | [optional] [readonly] 
**provisioning_state** | **str** | Provisioning state of the Account | [optional] [readonly] 
**user_email** | **str** | Email of the user who created the resource | [optional] [readonly] 
**user_name** | **str** | Name of the user who created the resource | [optional] [readonly] 

## Example

```python
from openapi_client.models.account_properties import AccountProperties

# TODO update the JSON string below
json = "{}"
# create an instance of AccountProperties from a JSON string
account_properties_instance = AccountProperties.from_json(json)
# print the JSON string representation of the object
print(AccountProperties.to_json())

# convert the object into a dict
account_properties_dict = account_properties_instance.to_dict()
# create an instance of AccountProperties from a dict
account_properties_from_dict = AccountProperties.from_dict(account_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


