# BillingAccountListResult

Result of listing billing accounts.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[BillingAccount]**](BillingAccount.md) | The list of billing accounts. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_account_list_result import BillingAccountListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BillingAccountListResult from a JSON string
billing_account_list_result_instance = BillingAccountListResult.from_json(json)
# print the JSON string representation of the object
print(BillingAccountListResult.to_json())

# convert the object into a dict
billing_account_list_result_dict = billing_account_list_result_instance.to_dict()
# create an instance of BillingAccountListResult from a dict
billing_account_list_result_from_dict = BillingAccountListResult.from_dict(billing_account_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


