# TaxClassStates


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**code** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**tax** | **float** |  | [optional] 
**tax_type** | **int** |  | [optional] 
**zip_codes** | [**List[TaxClassZipCodes]**](TaxClassZipCodes.md) |  | [optional] 

## Example

```python
from openapi_client.models.tax_class_states import TaxClassStates

# TODO update the JSON string below
json = "{}"
# create an instance of TaxClassStates from a JSON string
tax_class_states_instance = TaxClassStates.from_json(json)
# print the JSON string representation of the object
print(TaxClassStates.to_json())

# convert the object into a dict
tax_class_states_dict = tax_class_states_instance.to_dict()
# create an instance of TaxClassStates from a dict
tax_class_states_from_dict = TaxClassStates.from_dict(tax_class_states_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


