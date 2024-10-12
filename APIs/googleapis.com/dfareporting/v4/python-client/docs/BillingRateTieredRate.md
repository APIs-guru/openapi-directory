# BillingRateTieredRate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**high_value** | **str** | The maximum for this tier range. | [optional] 
**low_value** | **str** | The minimum for this tier range. | [optional] 
**rate_in_micros** | **str** | Rate in micros for this tier. | [optional] 

## Example

```python
from openapi_client.models.billing_rate_tiered_rate import BillingRateTieredRate

# TODO update the JSON string below
json = "{}"
# create an instance of BillingRateTieredRate from a JSON string
billing_rate_tiered_rate_instance = BillingRateTieredRate.from_json(json)
# print the JSON string representation of the object
print(BillingRateTieredRate.to_json())

# convert the object into a dict
billing_rate_tiered_rate_dict = billing_rate_tiered_rate_instance.to_dict()
# create an instance of BillingRateTieredRate from a dict
billing_rate_tiered_rate_from_dict = BillingRateTieredRate.from_dict(billing_rate_tiered_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


