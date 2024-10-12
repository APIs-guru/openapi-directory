# CisLine1


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cis_deduction** | **float** | The cis lines&#39; cis deduction | [optional] 
**cis_line_type** | **str** | The cis lines&#39; cis line type | [optional] 
**description** | **str** | The cis lines&#39; description | [optional] 
**generated** | **datetime** | The cis lines&#39; generated | [optional] 
**gross_pay** | **float** | The cis lines&#39; gross pay | [optional] 
**nominal_code_key** | **str** | The cis lines&#39; nominal code key | [optional] 
**pay_frequency** | **str** | The cis lines&#39; pay frequency | [optional] 
**tax_month** | **int** | The cis lines&#39; tax month | [optional] 
**tax_period** | **int** | The cis lines&#39; tax period | [optional] 
**tax_treatment** | **str** | The cis lines&#39; tax treatment | [optional] 
**tax_year** | **int** | The cis lines&#39; tax year | [optional] 
**uom** | **str** | The cis lines&#39; u o m | [optional] 
**unit_rate** | **float** | The cis lines&#39; unit rate | [optional] 
**units** | **float** | The cis lines&#39; units | [optional] 
**vat** | **float** | The cis lines&#39; v a t | [optional] 

## Example

```python
from openapi_client.models.cis_line1 import CisLine1

# TODO update the JSON string below
json = "{}"
# create an instance of CisLine1 from a JSON string
cis_line1_instance = CisLine1.from_json(json)
# print the JSON string representation of the object
print(CisLine1.to_json())

# convert the object into a dict
cis_line1_dict = cis_line1_instance.to_dict()
# create an instance of CisLine1 from a dict
cis_line1_from_dict = CisLine1.from_dict(cis_line1_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


