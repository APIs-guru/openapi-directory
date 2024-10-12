# CisLineType1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The cis line types&#39; description | [optional] 
**line_type** | **str** | The cis line types&#39; line type | [optional] 
**nominal_code** | [**NominalCode1**](NominalCode1.md) |  | [optional] 
**tax_treatment** | **str** | The cis line types&#39; tax treatment | [optional] 

## Example

```python
from openapi_client.models.cis_line_type1 import CisLineType1

# TODO update the JSON string below
json = "{}"
# create an instance of CisLineType1 from a JSON string
cis_line_type1_instance = CisLineType1.from_json(json)
# print the JSON string representation of the object
print(CisLineType1.to_json())

# convert the object into a dict
cis_line_type1_dict = cis_line_type1_instance.to_dict()
# create an instance of CisLineType1 from a dict
cis_line_type1_from_dict = CisLineType1.from_dict(cis_line_type1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


