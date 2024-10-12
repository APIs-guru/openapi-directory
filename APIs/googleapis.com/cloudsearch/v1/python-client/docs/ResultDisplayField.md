# ResultDisplayField

Display Fields for Search Results

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | The display label for the property. | [optional] 
**operator_name** | **str** | The operator name of the property. | [optional] 
**var_property** | [**NamedProperty**](NamedProperty.md) |  | [optional] 

## Example

```python
from openapi_client.models.result_display_field import ResultDisplayField

# TODO update the JSON string below
json = "{}"
# create an instance of ResultDisplayField from a JSON string
result_display_field_instance = ResultDisplayField.from_json(json)
# print the JSON string representation of the object
print(ResultDisplayField.to_json())

# convert the object into a dict
result_display_field_dict = result_display_field_instance.to_dict()
# create an instance of ResultDisplayField from a dict
result_display_field_from_dict = ResultDisplayField.from_dict(result_display_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


