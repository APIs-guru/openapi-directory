# TaxFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category_id** | **int** | Unique identifier of the category of the Tax | [optional] 
**country** | **str** | Country name where the Tax applies | [optional] 
**fixed** | **bool** | True if the tax has a fixed valued amount | [optional] [default to False]
**id** | **int** | Unique identifier of the Tax | [optional] 
**name** | **str** | Name that identifies tax | [optional] 
**region** | **str** | Region name where the Tax applies | [optional] 
**shipping** | **bool** | True if the tax should be applied to shipping costs | [optional] [default to False]
**tax_amount** | **float** | Tax value for the given Tax | [optional] 

## Example

```python
from openapi_client.models.tax_fields import TaxFields

# TODO update the JSON string below
json = "{}"
# create an instance of TaxFields from a JSON string
tax_fields_instance = TaxFields.from_json(json)
# print the JSON string representation of the object
print(TaxFields.to_json())

# convert the object into a dict
tax_fields_dict = tax_fields_instance.to_dict()
# create an instance of TaxFields from a dict
tax_fields_from_dict = TaxFields.from_dict(tax_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


