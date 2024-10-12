# OtherFeeType

Other Fee/charge type which is not available in the standard code set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**fee_category** | **str** | Categorisation of fees and charges into standard categories. | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.other_fee_type import OtherFeeType

# TODO update the JSON string below
json = "{}"
# create an instance of OtherFeeType from a JSON string
other_fee_type_instance = OtherFeeType.from_json(json)
# print the JSON string representation of the object
print(OtherFeeType.to_json())

# convert the object into a dict
other_fee_type_dict = other_fee_type_instance.to_dict()
# create an instance of OtherFeeType from a dict
other_fee_type_from_dict = OtherFeeType.from_dict(other_fee_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


