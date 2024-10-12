# FieldComparison

Field that needs to be compared.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bool_value** | **bool** | Boolean value | [optional] 
**comparator** | **str** | Comparator to use for comparing the field value. | [optional] 
**int_value** | **str** | Integer value | [optional] 
**key** | **str** | Key of the field. | [optional] 
**string_value** | **str** | String value | [optional] 

## Example

```python
from openapi_client.models.field_comparison import FieldComparison

# TODO update the JSON string below
json = "{}"
# create an instance of FieldComparison from a JSON string
field_comparison_instance = FieldComparison.from_json(json)
# print the JSON string representation of the object
print(FieldComparison.to_json())

# convert the object into a dict
field_comparison_dict = field_comparison_instance.to_dict()
# create an instance of FieldComparison from a dict
field_comparison_from_dict = FieldComparison.from_dict(field_comparison_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


