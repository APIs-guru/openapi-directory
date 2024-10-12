# OBOtherFeeChargeDetailType

Other Fee/charge type which is not available in the standard code set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**fee_category** | [**OBFeeCategory1Code**](OBFeeCategory1Code.md) |  | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.ob_other_fee_charge_detail_type import OBOtherFeeChargeDetailType

# TODO update the JSON string below
json = "{}"
# create an instance of OBOtherFeeChargeDetailType from a JSON string
ob_other_fee_charge_detail_type_instance = OBOtherFeeChargeDetailType.from_json(json)
# print the JSON string representation of the object
print(OBOtherFeeChargeDetailType.to_json())

# convert the object into a dict
ob_other_fee_charge_detail_type_dict = ob_other_fee_charge_detail_type_instance.to_dict()
# create an instance of OBOtherFeeChargeDetailType from a dict
ob_other_fee_charge_detail_type_from_dict = OBOtherFeeChargeDetailType.from_dict(ob_other_fee_charge_detail_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


