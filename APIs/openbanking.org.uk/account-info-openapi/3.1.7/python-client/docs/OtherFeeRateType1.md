# OtherFeeRateType1

Other fee rate type code which is not available in the standard code set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_fee_rate_type1 import OtherFeeRateType1

# TODO update the JSON string below
json = "{}"
# create an instance of OtherFeeRateType1 from a JSON string
other_fee_rate_type1_instance = OtherFeeRateType1.from_json(json)
# print the JSON string representation of the object
print(OtherFeeRateType1.to_json())

# convert the object into a dict
other_fee_rate_type1_dict = other_fee_rate_type1_instance.to_dict()
# create an instance of OtherFeeRateType1 from a dict
other_fee_rate_type1_from_dict = OtherFeeRateType1.from_dict(other_fee_rate_type1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


