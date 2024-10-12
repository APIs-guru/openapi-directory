# TaxClassZipCodes


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**fields** | [**List[TaxClassZipCodesRange]**](TaxClassZipCodesRange.md) |  | [optional] 
**is_range** | **bool** |  | [optional] 
**range** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.tax_class_zip_codes import TaxClassZipCodes

# TODO update the JSON string below
json = "{}"
# create an instance of TaxClassZipCodes from a JSON string
tax_class_zip_codes_instance = TaxClassZipCodes.from_json(json)
# print the JSON string representation of the object
print(TaxClassZipCodes.to_json())

# convert the object into a dict
tax_class_zip_codes_dict = tax_class_zip_codes_instance.to_dict()
# create an instance of TaxClassZipCodes from a dict
tax_class_zip_codes_from_dict = TaxClassZipCodes.from_dict(tax_class_zip_codes_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


