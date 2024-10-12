# OBOtherCodeType10


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**code** | **str** | The four letter Mnemonic used within an XML file to identify a code | [optional] 
**description** | **str** | Description to describe the purpose of the code | 
**name** | **str** | Long name associated with the code | 

## Example

```python
from openapi_client.models.ob_other_code_type10 import OBOtherCodeType10

# TODO update the JSON string below
json = "{}"
# create an instance of OBOtherCodeType10 from a JSON string
ob_other_code_type10_instance = OBOtherCodeType10.from_json(json)
# print the JSON string representation of the object
print(OBOtherCodeType10.to_json())

# convert the object into a dict
ob_other_code_type10_dict = ob_other_code_type10_instance.to_dict()
# create an instance of OBOtherCodeType10 from a dict
ob_other_code_type10_from_dict = OBOtherCodeType10.from_dict(ob_other_code_type10_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


