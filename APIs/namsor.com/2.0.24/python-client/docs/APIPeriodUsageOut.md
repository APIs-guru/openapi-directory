# APIPeriodUsageOut


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_period** | [**APIBillingPeriodUsageOut**](APIBillingPeriodUsageOut.md) |  | [optional] 
**overage_currency** | **str** | Currency of the overage amount. | [optional] 
**overage_excl_tax** | **float** | Overage amount including any tax. | [optional] 
**overage_incl_tax** | **float** | Overage amount including tax (if applicable). | [optional] 
**overage_quantity** | **int** | Quantity above monthly quota of the current subscritpion, in units. | [optional] 
**subscription** | [**APIPlanSubscriptionOut**](APIPlanSubscriptionOut.md) |  | [optional] 

## Example

```python
from openapi_client.models.api_period_usage_out import APIPeriodUsageOut

# TODO update the JSON string below
json = "{}"
# create an instance of APIPeriodUsageOut from a JSON string
api_period_usage_out_instance = APIPeriodUsageOut.from_json(json)
# print the JSON string representation of the object
print(APIPeriodUsageOut.to_json())

# convert the object into a dict
api_period_usage_out_dict = api_period_usage_out_instance.to_dict()
# create an instance of APIPeriodUsageOut from a dict
api_period_usage_out_from_dict = APIPeriodUsageOut.from_dict(api_period_usage_out_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


