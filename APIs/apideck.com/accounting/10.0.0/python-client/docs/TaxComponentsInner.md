# TaxComponentsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compound** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**rate** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.tax_components_inner import TaxComponentsInner

# TODO update the JSON string below
json = "{}"
# create an instance of TaxComponentsInner from a JSON string
tax_components_inner_instance = TaxComponentsInner.from_json(json)
# print the JSON string representation of the object
print(TaxComponentsInner.to_json())

# convert the object into a dict
tax_components_inner_dict = tax_components_inner_instance.to_dict()
# create an instance of TaxComponentsInner from a dict
tax_components_inner_from_dict = TaxComponentsInner.from_dict(tax_components_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


