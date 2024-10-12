# BillingPeriodsListResult

Result of listing billing periods. It contains a list of available billing periods in reverse chronological order.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**value** | [**List[BillingPeriod]**](BillingPeriod.md) | The list of billing periods. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_periods_list_result import BillingPeriodsListResult

# TODO update the JSON string below
json = "{}"
# create an instance of BillingPeriodsListResult from a JSON string
billing_periods_list_result_instance = BillingPeriodsListResult.from_json(json)
# print the JSON string representation of the object
print(BillingPeriodsListResult.to_json())

# convert the object into a dict
billing_periods_list_result_dict = billing_periods_list_result_instance.to_dict()
# create an instance of BillingPeriodsListResult from a dict
billing_periods_list_result_from_dict = BillingPeriodsListResult.from_dict(billing_periods_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


