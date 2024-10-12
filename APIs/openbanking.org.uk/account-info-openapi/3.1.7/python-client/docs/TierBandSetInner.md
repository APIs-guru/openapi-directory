# TierBandSetInner

The group of tiers or bands for which credit interest can be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculation_method** | **str** | Methods of calculating interest | [optional] 
**destination** | **str** | Describes whether accrued interest is payable only to the BCA or to another bank account | 
**notes** | **List[str]** | Optional additional notes to supplement the Tier Band Set details | [optional] 
**tier_band** | [**List[TierBandInner]**](TierBandInner.md) | Tier Band Details | 
**tier_band_method** | **str** | The methodology of how credit interest is paid/applied. It can be:-  1. Banded Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.  2. Tiered Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.  3. Whole The same interest rate is applied irrespective of the BCA balance | 

## Example

```python
from openapi_client.models.tier_band_set_inner import TierBandSetInner

# TODO update the JSON string below
json = "{}"
# create an instance of TierBandSetInner from a JSON string
tier_band_set_inner_instance = TierBandSetInner.from_json(json)
# print the JSON string representation of the object
print(TierBandSetInner.to_json())

# convert the object into a dict
tier_band_set_inner_dict = tier_band_set_inner_instance.to_dict()
# create an instance of TierBandSetInner from a dict
tier_band_set_inner_from_dict = TierBandSetInner.from_dict(tier_band_set_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


