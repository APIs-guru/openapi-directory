# OBOtherCodeType18

Other fee rate type which is not available in the standard code set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.ob_other_code_type18 import OBOtherCodeType18

# TODO update the JSON string below
json = "{}"
# create an instance of OBOtherCodeType18 from a JSON string
ob_other_code_type18_instance = OBOtherCodeType18.from_json(json)
# print the JSON string representation of the object
print(OBOtherCodeType18.to_json())

# convert the object into a dict
ob_other_code_type18_dict = ob_other_code_type18_instance.to_dict()
# create an instance of OBOtherCodeType18 from a dict
ob_other_code_type18_from_dict = OBOtherCodeType18.from_dict(ob_other_code_type18_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


