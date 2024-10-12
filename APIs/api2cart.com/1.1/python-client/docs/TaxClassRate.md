# TaxClassRate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**address** | **List[str]** |  | [optional] 
**cities** | **List[str]** |  | [optional] 
**countries** | [**List[TaxClassCountries]**](TaxClassCountries.md) |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**tax** | **float** |  | [optional] 
**tax_based_on** | **str** |  | [optional] 
**tax_type** | **int** |  | [optional] 
**zip_codes** | [**List[TaxClassZipCodes]**](TaxClassZipCodes.md) |  | [optional] 

## Example

```python
from openapi_client.models.tax_class_rate import TaxClassRate

# TODO update the JSON string below
json = "{}"
# create an instance of TaxClassRate from a JSON string
tax_class_rate_instance = TaxClassRate.from_json(json)
# print the JSON string representation of the object
print(TaxClassRate.to_json())

# convert the object into a dict
tax_class_rate_dict = tax_class_rate_instance.to_dict()
# create an instance of TaxClassRate from a dict
tax_class_rate_from_dict = TaxClassRate.from_dict(tax_class_rate_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


