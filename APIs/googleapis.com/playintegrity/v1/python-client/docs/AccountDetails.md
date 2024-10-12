# AccountDetails

Contains the account information such as the licensing status for the user in the scope.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_activity** | [**AccountActivity**](AccountActivity.md) |  | [optional] 
**app_licensing_verdict** | **str** | Required. Details about the licensing status of the user for the app in the scope. | [optional] 

## Example

```python
from openapi_client.models.account_details import AccountDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AccountDetails from a JSON string
account_details_instance = AccountDetails.from_json(json)
# print the JSON string representation of the object
print(AccountDetails.to_json())

# convert the object into a dict
account_details_dict = account_details_instance.to_dict()
# create an instance of AccountDetails from a dict
account_details_from_dict = AccountDetails.from_dict(account_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


