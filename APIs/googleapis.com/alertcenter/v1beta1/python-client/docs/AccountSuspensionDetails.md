# AccountSuspensionDetails

Details about why an account is receiving an account suspension warning.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**abuse_reason** | **str** | The reason why this account is receiving an account suspension warning. | [optional] 
**product_name** | **str** | The name of the product being abused. This is restricted to only the following values: \&quot;Gmail\&quot; \&quot;Google Workspace\&quot; \&quot;Payments\&quot; \&quot;Voice\&quot; \&quot;YouTube\&quot; \&quot;Other\&quot; | [optional] 

## Example

```python
from openapi_client.models.account_suspension_details import AccountSuspensionDetails

# TODO update the JSON string below
json = "{}"
# create an instance of AccountSuspensionDetails from a JSON string
account_suspension_details_instance = AccountSuspensionDetails.from_json(json)
# print the JSON string representation of the object
print(AccountSuspensionDetails.to_json())

# convert the object into a dict
account_suspension_details_dict = account_suspension_details_instance.to_dict()
# create an instance of AccountSuspensionDetails from a dict
account_suspension_details_from_dict = AccountSuspensionDetails.from_dict(account_suspension_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


