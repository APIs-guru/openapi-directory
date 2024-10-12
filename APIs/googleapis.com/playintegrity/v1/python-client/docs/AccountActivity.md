# AccountActivity

(Restricted Access) Contains a signal helping apps differentiating between likely genuine and likely non-genuine user traffic.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activity_level** | **str** | Required. Indicates the activity level of the account. | [optional] 

## Example

```python
from openapi_client.models.account_activity import AccountActivity

# TODO update the JSON string below
json = "{}"
# create an instance of AccountActivity from a JSON string
account_activity_instance = AccountActivity.from_json(json)
# print the JSON string representation of the object
print(AccountActivity.to_json())

# convert the object into a dict
account_activity_dict = account_activity_instance.to_dict()
# create an instance of AccountActivity from a dict
account_activity_from_dict = AccountActivity.from_dict(account_activity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


