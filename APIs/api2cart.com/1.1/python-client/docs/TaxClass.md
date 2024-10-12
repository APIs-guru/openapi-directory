# TaxClass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**avail** | **bool** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**tax** | **float** |  | [optional] 
**tax_rates** | [**List[TaxClassRate]**](TaxClassRate.md) |  | [optional] 
**tax_type** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.tax_class import TaxClass

# TODO update the JSON string below
json = "{}"
# create an instance of TaxClass from a JSON string
tax_class_instance = TaxClass.from_json(json)
# print the JSON string representation of the object
print(TaxClass.to_json())

# convert the object into a dict
tax_class_dict = tax_class_instance.to_dict()
# create an instance of TaxClass from a dict
tax_class_from_dict = TaxClass.from_dict(tax_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


