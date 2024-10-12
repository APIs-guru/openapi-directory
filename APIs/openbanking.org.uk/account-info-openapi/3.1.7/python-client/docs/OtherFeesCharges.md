# OtherFeesCharges

Contains details of fees and charges which are not associated with either borrowing or features/benefits

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fee_charge_cap** | [**List[FeeChargeCapInner1]**](FeeChargeCapInner1.md) | Details about any caps (maximum charges) that apply to a particular fee/charge | [optional] 
**fee_charge_detail** | [**List[FeeChargeDetailInner1]**](FeeChargeDetailInner1.md) | Other fees/charges details | 

## Example

```python
from openapi_client.models.other_fees_charges import OtherFeesCharges

# TODO update the JSON string below
json = "{}"
# create an instance of OtherFeesCharges from a JSON string
other_fees_charges_instance = OtherFeesCharges.from_json(json)
# print the JSON string representation of the object
print(OtherFeesCharges.to_json())

# convert the object into a dict
other_fees_charges_dict = other_fees_charges_instance.to_dict()
# create an instance of OtherFeesCharges from a dict
other_fees_charges_from_dict = OtherFeesCharges.from_dict(other_fees_charges_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


