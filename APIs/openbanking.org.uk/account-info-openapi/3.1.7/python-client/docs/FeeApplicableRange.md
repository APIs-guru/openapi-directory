# FeeApplicableRange

Range or amounts or rates for which the fee/charge applies

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**maximum_amount** | **str** | Maximum Amount on which fee is applicable (where it is expressed as an amount) | [optional] 
**maximum_rate** | **str** | Maximum rate on which fee/charge is applicable(where it is expressed as an rate) | [optional] 
**minimum_amount** | **str** | Minimum Amount on which fee/charge is applicable (where it is expressed as an amount) | [optional] 
**minimum_rate** | **str** | Minimum rate on which fee/charge is applicable(where it is expressed as an rate) | [optional] 

## Example

```python
from openapi_client.models.fee_applicable_range import FeeApplicableRange

# TODO update the JSON string below
json = "{}"
# create an instance of FeeApplicableRange from a JSON string
fee_applicable_range_instance = FeeApplicableRange.from_json(json)
# print the JSON string representation of the object
print(FeeApplicableRange.to_json())

# convert the object into a dict
fee_applicable_range_dict = fee_applicable_range_instance.to_dict()
# create an instance of FeeApplicableRange from a dict
fee_applicable_range_from_dict = FeeApplicableRange.from_dict(fee_applicable_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


