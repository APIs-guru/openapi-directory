# TaxClassCountries


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**code** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**states** | [**List[TaxClassStates]**](TaxClassStates.md) |  | [optional] 
**tax** | **float** |  | [optional] 
**tax_type** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.tax_class_countries import TaxClassCountries

# TODO update the JSON string below
json = "{}"
# create an instance of TaxClassCountries from a JSON string
tax_class_countries_instance = TaxClassCountries.from_json(json)
# print the JSON string representation of the object
print(TaxClassCountries.to_json())

# convert the object into a dict
tax_class_countries_dict = tax_class_countries_instance.to_dict()
# create an instance of TaxClassCountries from a dict
tax_class_countries_from_dict = TaxClassCountries.from_dict(tax_class_countries_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


