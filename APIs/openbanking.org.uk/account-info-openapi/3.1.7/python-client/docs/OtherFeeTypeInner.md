# OtherFeeTypeInner

Other fee type code which is not available in the standard code set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_fee_type_inner import OtherFeeTypeInner

# TODO update the JSON string below
json = "{}"
# create an instance of OtherFeeTypeInner from a JSON string
other_fee_type_inner_instance = OtherFeeTypeInner.from_json(json)
# print the JSON string representation of the object
print(OtherFeeTypeInner.to_json())

# convert the object into a dict
other_fee_type_inner_dict = other_fee_type_inner_instance.to_dict()
# create an instance of OtherFeeTypeInner from a dict
other_fee_type_inner_from_dict = OtherFeeTypeInner.from_dict(other_fee_type_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


