# ConditionalColumnSetValue

Options to configure rule type ConditionalColumnSetValue. The rule is used to transform the data which is being replicated/migrated. The rule filter field can refer to one or more entities. The rule scope can be one of: Column.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**custom_features** | **Dict[str, object]** | Optional. Custom engine specific features. | [optional] 
**source_numeric_filter** | [**SourceNumericFilter**](SourceNumericFilter.md) |  | [optional] 
**source_text_filter** | [**SourceTextFilter**](SourceTextFilter.md) |  | [optional] 
**value_transformation** | [**ValueTransformation**](ValueTransformation.md) |  | [optional] 

## Example

```python
from openapi_client.models.conditional_column_set_value import ConditionalColumnSetValue

# TODO update the JSON string below
json = "{}"
# create an instance of ConditionalColumnSetValue from a JSON string
conditional_column_set_value_instance = ConditionalColumnSetValue.from_json(json)
# print the JSON string representation of the object
print(ConditionalColumnSetValue.to_json())

# convert the object into a dict
conditional_column_set_value_dict = conditional_column_set_value_instance.to_dict()
# create an instance of ConditionalColumnSetValue from a dict
conditional_column_set_value_from_dict = ConditionalColumnSetValue.from_dict(conditional_column_set_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


