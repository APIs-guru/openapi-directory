# BillingInformationSearchResultsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | The Account ID | [optional] 
**account_name** | **str** | The Account Name | [optional] 
**billing_internal_account_id** | **str** | The Billing Internal Account ID | [optional] 
**build_plan** | **str** | The ID of the Build Billing Plan | [optional] 
**test_plan** | **str** | The ID of the Test Billing Plan | [optional] 

## Example

```python
from openapi_client.models.billing_information_search_results_inner import BillingInformationSearchResultsInner

# TODO update the JSON string below
json = "{}"
# create an instance of BillingInformationSearchResultsInner from a JSON string
billing_information_search_results_inner_instance = BillingInformationSearchResultsInner.from_json(json)
# print the JSON string representation of the object
print(BillingInformationSearchResultsInner.to_json())

# convert the object into a dict
billing_information_search_results_inner_dict = billing_information_search_results_inner_instance.to_dict()
# create an instance of BillingInformationSearchResultsInner from a dict
billing_information_search_results_inner_from_dict = BillingInformationSearchResultsInner.from_dict(billing_information_search_results_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


