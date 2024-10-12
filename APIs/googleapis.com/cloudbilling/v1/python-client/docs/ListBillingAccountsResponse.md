# ListBillingAccountsResponse

Response message for `ListBillingAccounts`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_accounts** | [**List[BillingAccount]**](BillingAccount.md) | A list of billing accounts. | [optional] 
**next_page_token** | **str** | A token to retrieve the next page of results. To retrieve the next page, call &#x60;ListBillingAccounts&#x60; again with the &#x60;page_token&#x60; field set to this value. This field is empty if there are no more results to retrieve. | [optional] 

## Example

```python
from openapi_client.models.list_billing_accounts_response import ListBillingAccountsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBillingAccountsResponse from a JSON string
list_billing_accounts_response_instance = ListBillingAccountsResponse.from_json(json)
# print the JSON string representation of the object
print(ListBillingAccountsResponse.to_json())

# convert the object into a dict
list_billing_accounts_response_dict = list_billing_accounts_response_instance.to_dict()
# create an instance of ListBillingAccountsResponse from a dict
list_billing_accounts_response_from_dict = ListBillingAccountsResponse.from_dict(list_billing_accounts_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


