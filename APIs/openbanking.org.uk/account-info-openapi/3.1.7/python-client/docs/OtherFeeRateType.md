# OtherFeeRateType

Other fee rate type which is not available in the standard code set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_fee_rate_type import OtherFeeRateType

# TODO update the JSON string below
json = "{}"
# create an instance of OtherFeeRateType from a JSON string
other_fee_rate_type_instance = OtherFeeRateType.from_json(json)
# print the JSON string representation of the object
print(OtherFeeRateType.to_json())

# convert the object into a dict
other_fee_rate_type_dict = other_fee_rate_type_instance.to_dict()
# create an instance of OtherFeeRateType from a dict
other_fee_rate_type_from_dict = OtherFeeRateType.from_dict(other_fee_rate_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


