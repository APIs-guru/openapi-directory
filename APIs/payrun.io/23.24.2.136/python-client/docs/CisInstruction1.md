# CisInstruction1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cis_line_tag** | **str** | The cis instructions&#39; cis line tag | [optional] 
**cis_line_type** | **str** | The cis instructions&#39; cis line type | [optional] 
**description** | **str** | The cis instructions&#39; description | [optional] 
**pay_frequency** | **str** | The cis instructions&#39; pay frequency | [optional] 
**period_end** | **int** | The cis instructions&#39; period end | [optional] 
**period_start** | **int** | The cis instructions&#39; period start | [optional] 
**tax_year_end** | **int** | The cis instructions&#39; tax year end | [optional] 
**tax_year_start** | **int** | The cis instructions&#39; tax year start | [optional] 
**uom** | **str** | The cis instructions&#39; u o m | [optional] 
**units** | **float** | The cis instructions&#39; units | [optional] 
**vat** | **float** | The cis instructions&#39; v a t | [optional] 
**value** | **float** | The cis instructions&#39; value | [optional] 

## Example

```python
from openapi_client.models.cis_instruction1 import CisInstruction1

# TODO update the JSON string below
json = "{}"
# create an instance of CisInstruction1 from a JSON string
cis_instruction1_instance = CisInstruction1.from_json(json)
# print the JSON string representation of the object
print(CisInstruction1.to_json())

# convert the object into a dict
cis_instruction1_dict = cis_instruction1_instance.to_dict()
# create an instance of CisInstruction1 from a dict
cis_instruction1_from_dict = CisInstruction1.from_dict(cis_instruction1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


