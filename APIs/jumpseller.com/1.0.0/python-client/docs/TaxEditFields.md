# TaxEditFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **int** | Unique identifier of the category of the Tax | [optional] 
**country** | **str** | Country where the Tax applies | [optional] 
**fixed** | **bool** | True if the tax has a fixed valued amount | [optional] [default to False]
**name** | **str** | Name that identifies tax | [optional] 
**region** | **str** | Region where the Tax applies | [optional] 
**shipping** | **bool** | True if the tax should be applied to shipping costs | [optional] [default to False]
**tax** | **float** | Tax value for the given Tax | [optional] 

## Example

```python
from openapi_client.models.tax_edit_fields import TaxEditFields

# TODO update the JSON string below
json = "{}"
# create an instance of TaxEditFields from a JSON string
tax_edit_fields_instance = TaxEditFields.from_json(json)
# print the JSON string representation of the object
print(TaxEditFields.to_json())

# convert the object into a dict
tax_edit_fields_dict = tax_edit_fields_instance.to_dict()
# create an instance of TaxEditFields from a dict
tax_edit_fields_from_dict = TaxEditFields.from_dict(tax_edit_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


