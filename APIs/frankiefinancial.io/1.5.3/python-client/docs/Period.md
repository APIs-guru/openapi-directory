# Period

Rates, by period, for the uploaded bill

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**controlled_load1** | [**RateValue**](RateValue.md) |  | [optional] 
**controlled_load2** | [**RateValue**](RateValue.md) |  | [optional] 
**off_peak** | [**RateValue**](RateValue.md) |  | [optional] 
**off_peak_step1** | [**RateValue**](RateValue.md) |  | [optional] 
**off_peak_step2** | [**RateValue**](RateValue.md) |  | [optional] 
**peak** | [**RateValue**](RateValue.md) |  | [optional] 
**peak_step1** | [**RateValue**](RateValue.md) |  | [optional] 
**peak_step2** | [**RateValue**](RateValue.md) |  | [optional] 
**peak_step3** | [**RateValue**](RateValue.md) |  | [optional] 
**shoulder** | [**RateValue**](RateValue.md) |  | [optional] 
**supply_charge** | [**RateValue**](RateValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.period import Period

# TODO update the JSON string below
json = "{}"
# create an instance of Period from a JSON string
period_instance = Period.from_json(json)
# print the JSON string representation of the object
print(Period.to_json())

# convert the object into a dict
period_dict = period_instance.to_dict()
# create an instance of Period from a dict
period_from_dict = Period.from_dict(period_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


