# AccountSuspensionWarning

A warning that the customer's account is about to be suspended.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**appeal_window** | **str** | The amount of time remaining to appeal an imminent suspension. After this window has elapsed, the account will be suspended. Only populated if the account suspension is in WARNING state. | [optional] 
**state** | **str** | Account suspension warning state. | [optional] 
**suspension_details** | [**List[AccountSuspensionDetails]**](AccountSuspensionDetails.md) | Details about why an account is being suspended. | [optional] 

## Example

```python
from openapi_client.models.account_suspension_warning import AccountSuspensionWarning

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSuspensionWarning from a JSON string
account_suspension_warning_instance = AccountSuspensionWarning.from_json(json)
# print the JSON string representation of the object
print(AccountSuspensionWarning.to_json())

# convert the object into a dict
account_suspension_warning_dict = account_suspension_warning_instance.to_dict()
# create an instance of AccountSuspensionWarning from a dict
account_suspension_warning_from_dict = AccountSuspensionWarning.from_dict(account_suspension_warning_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


