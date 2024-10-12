# AccountWarning

Alerts for user account warning events.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** | Required. The email of the user that this event belongs to. | [optional] 
**login_details** | [**LoginDetails**](LoginDetails.md) |  | [optional] 

## Example

```python
from openapi_client.models.account_warning import AccountWarning

# TODO update the JSON string below
json = "{}"
# create an instance of AccountWarning from a JSON string
account_warning_instance = AccountWarning.from_json(json)
# print the JSON string representation of the object
print(AccountWarning.to_json())

# convert the object into a dict
account_warning_dict = account_warning_instance.to_dict()
# create an instance of AccountWarning from a dict
account_warning_from_dict = AccountWarning.from_dict(account_warning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


