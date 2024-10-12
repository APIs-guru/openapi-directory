# McfDataRowsInnerInner

A union object representing a dimension or metric value. Only one of \"primitiveValue\" or \"conversionPathValue\" attribute will be populated.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**conversion_path_value** | [**List[McfDataRowsInnerInnerConversionPathValueInner]**](McfDataRowsInnerInnerConversionPathValueInner.md) | A conversion path dimension value, containing a list of interactions with their attributes. | [optional] 
**primitive_value** | **str** | A primitive dimension value. A primitive metric value. | [optional] 

## Example

```python
from openapi_client.models.mcf_data_rows_inner_inner import McfDataRowsInnerInner

# TODO update the JSON string below
json = "{}"
# create an instance of McfDataRowsInnerInner from a JSON string
mcf_data_rows_inner_inner_instance = McfDataRowsInnerInner.from_json(json)
# print the JSON string representation of the object
print(McfDataRowsInnerInner.to_json())

# convert the object into a dict
mcf_data_rows_inner_inner_dict = mcf_data_rows_inner_inner_instance.to_dict()
# create an instance of McfDataRowsInnerInner from a dict
mcf_data_rows_inner_inner_from_dict = McfDataRowsInnerInner.from_dict(mcf_data_rows_inner_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


