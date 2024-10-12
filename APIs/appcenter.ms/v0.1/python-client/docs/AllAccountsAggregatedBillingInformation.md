# AllAccountsAggregatedBillingInformation

Aggregated Billing Information for a user an the organizations in which the user is an admin.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_billings** | [**BillingAggregatedInformationGetByApp200Response**](BillingAggregatedInformationGetByApp200Response.md) |  | [optional] 

## Example

```python
from openapi_client.models.all_accounts_aggregated_billing_information import AllAccountsAggregatedBillingInformation

# TODO update the JSON string below
json = "{}"
# create an instance of AllAccountsAggregatedBillingInformation from a JSON string
all_accounts_aggregated_billing_information_instance = AllAccountsAggregatedBillingInformation.from_json(json)
# print the JSON string representation of the object
print(AllAccountsAggregatedBillingInformation.to_json())

# convert the object into a dict
all_accounts_aggregated_billing_information_dict = all_accounts_aggregated_billing_information_instance.to_dict()
# create an instance of AllAccountsAggregatedBillingInformation from a dict
all_accounts_aggregated_billing_information_from_dict = AllAccountsAggregatedBillingInformation.from_dict(all_accounts_aggregated_billing_information_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


