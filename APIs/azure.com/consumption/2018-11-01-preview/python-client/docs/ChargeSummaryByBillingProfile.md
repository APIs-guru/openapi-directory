# ChargeSummaryByBillingProfile

A charge summary resource by billing profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**ChargeSummaryProperties**](ChargeSummaryProperties.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.charge_summary_by_billing_profile import ChargeSummaryByBillingProfile

# TODO update the JSON string below
json = "{}"
# create an instance of ChargeSummaryByBillingProfile from a JSON string
charge_summary_by_billing_profile_instance = ChargeSummaryByBillingProfile.from_json(json)
# print the JSON string representation of the object
print(ChargeSummaryByBillingProfile.to_json())

# convert the object into a dict
charge_summary_by_billing_profile_dict = charge_summary_by_billing_profile_instance.to_dict()
# create an instance of ChargeSummaryByBillingProfile from a dict
charge_summary_by_billing_profile_from_dict = ChargeSummaryByBillingProfile.from_dict(charge_summary_by_billing_profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


