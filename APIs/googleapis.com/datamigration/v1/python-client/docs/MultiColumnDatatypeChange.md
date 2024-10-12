# MultiColumnDatatypeChange

Options to configure rule type MultiColumnDatatypeChange. The rule is used to change the data type and associated properties of multiple columns at once. The rule filter field can refer to one or more entities. The rule scope can be one of:Column. This rule requires additional filters to be specified beyond the basic rule filter field, which is the source data type, but the rule supports additional filtering capabilities such as the minimum and maximum field length. All additional filters which are specified are required to be met in order for the rule to be applied (logical AND between the fields).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Optional. Custom engine specific features. | [optional] 
**new_data_type** | **str** | Required. New data type. | [optional] 
**override_fractional_seconds_precision** | **int** | Optional. Column fractional seconds precision - used only for timestamp based datatypes - if not specified and relevant uses the source column fractional seconds precision. | [optional] 
**override_length** | **str** | Optional. Column length - e.g. varchar (50) - if not specified and relevant uses the source column length. | [optional] 
**override_precision** | **int** | Optional. Column precision - when relevant - if not specified and relevant uses the source column precision. | [optional] 
**override_scale** | **int** | Optional. Column scale - when relevant - if not specified and relevant uses the source column scale. | [optional] 
**source_data_type_filter** | **str** | Required. Filter on source data type. | [optional] 
**source_numeric_filter** | [**SourceNumericFilter**](SourceNumericFilter.md) |  | [optional] 
**source_text_filter** | [**SourceTextFilter**](SourceTextFilter.md) |  | [optional] 

## Example

```python
from openapi_client.models.multi_column_datatype_change import MultiColumnDatatypeChange

# TODO update the JSON string below
json = "{}"
# create an instance of MultiColumnDatatypeChange from a JSON string
multi_column_datatype_change_instance = MultiColumnDatatypeChange.from_json(json)
# print the JSON string representation of the object
print(MultiColumnDatatypeChange.to_json())

# convert the object into a dict
multi_column_datatype_change_dict = multi_column_datatype_change_instance.to_dict()
# create an instance of MultiColumnDatatypeChange from a dict
multi_column_datatype_change_from_dict = MultiColumnDatatypeChange.from_dict(multi_column_datatype_change_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


