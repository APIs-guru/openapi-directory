# BillingPeriodProperties

The properties of the billing period.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_period_end_date** | **date** | The end of the date range covered by the billing period. | [optional] [readonly] 
**billing_period_start_date** | **date** | The start of the date range covered by the billing period. | [optional] [readonly] 
**invoice_ids** | **List[str]** | Array of invoice ids that associated with. | [optional] [readonly] 

## Example

```python
from openapi_client.models.billing_period_properties import BillingPeriodProperties

# TODO update the JSON string below
json = "{}"
# create an instance of BillingPeriodProperties from a JSON string
billing_period_properties_instance = BillingPeriodProperties.from_json(json)
# print the JSON string representation of the object
print(BillingPeriodProperties.to_json())

# convert the object into a dict
billing_period_properties_dict = billing_period_properties_instance.to_dict()
# create an instance of BillingPeriodProperties from a dict
billing_period_properties_from_dict = BillingPeriodProperties.from_dict(billing_period_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


