# TierBandSetInner1

The group of tiers or bands for which credit interest can be applied.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**calculation_method** | **str** | Methods of calculating interest | [optional] 
**destination** | **str** | Describes whether accrued interest is payable only to the PCA or to another bank account | [optional] 
**notes** | **List[str]** | Optional additional notes to supplement the Tier Band Set details | [optional] 
**tier_band** | [**List[TierBandInner1]**](TierBandInner1.md) | Tier Band Details | 
**tier_band_method** | **str** | The methodology of how credit interest is charged. It can be:-  1. Banded Interest rates are banded. i.e. Increasing rate on whole balance as balance increases.  2. Tiered Interest rates are tiered. i.e. increasing rate for each tier as balance increases, but interest paid on tier fixed for that tier and not on whole balance.  3. Whole The same interest rate is applied irrespective of the PCA balance | 

## Example

```python
from openapi_client.models.tier_band_set_inner1 import TierBandSetInner1

# TODO update the JSON string below
json = "{}"
# create an instance of TierBandSetInner1 from a JSON string
tier_band_set_inner1_instance = TierBandSetInner1.from_json(json)
# print the JSON string representation of the object
print(TierBandSetInner1.to_json())

# convert the object into a dict
tier_band_set_inner1_dict = tier_band_set_inner1_instance.to_dict()
# create an instance of TierBandSetInner1 from a dict
tier_band_set_inner1_from_dict = TierBandSetInner1.from_dict(tier_band_set_inner1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


