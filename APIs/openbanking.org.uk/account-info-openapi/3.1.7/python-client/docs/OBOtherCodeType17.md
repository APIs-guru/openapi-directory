# OBOtherCodeType17

Other calculation frequency which is not available in standard code set.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.ob_other_code_type17 import OBOtherCodeType17

# TODO update the JSON string below
json = "{}"
# create an instance of OBOtherCodeType17 from a JSON string
ob_other_code_type17_instance = OBOtherCodeType17.from_json(json)
# print the JSON string representation of the object
print(OBOtherCodeType17.to_json())

# convert the object into a dict
ob_other_code_type17_dict = ob_other_code_type17_instance.to_dict()
# create an instance of OBOtherCodeType17 from a dict
ob_other_code_type17_from_dict = OBOtherCodeType17.from_dict(ob_other_code_type17_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


