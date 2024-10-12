# CustomField


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**choices** | **List[str]** | Comma-separated list of available choices (for selection fields) | [optional] 
**content_types** | **List[str]** |  | 
**created** | **datetime** |  | [optional] [readonly] 
**data_type** | **str** |  | [optional] [readonly] 
**default** | **object** | Default value for the field (must be a JSON value). Encapsulate strings with double quotes (e.g. \&quot;Foo\&quot;). | [optional] 
**description** | **str** |  | [optional] 
**display** | **str** |  | [optional] [readonly] 
**filter_logic** | [**FilterLogic**](FilterLogic.md) |  | [optional] 
**group_name** | **str** | Custom fields within the same group will be displayed together | [optional] 
**id** | **int** |  | [optional] [readonly] 
**label** | **str** | Name of the field as displayed to users (if not provided, the field&#39;s name will be used) | [optional] 
**last_updated** | **datetime** |  | [optional] [readonly] 
**name** | **str** | Internal field name | 
**object_type** | **str** |  | [optional] 
**required** | **bool** | If true, this field is required when creating new objects or editing an existing object. | [optional] 
**search_weight** | **int** | Weighting for search. Lower values are considered more important. Fields with a search weight of zero will be ignored. | [optional] 
**type** | [**Type1**](Type1.md) |  | 
**ui_visibility** | [**UiVisibility**](UiVisibility.md) |  | [optional] 
**url** | **str** |  | [optional] [readonly] 
**validation_maximum** | **int** | Maximum allowed value (for numeric fields) | [optional] 
**validation_minimum** | **int** | Minimum allowed value (for numeric fields) | [optional] 
**validation_regex** | **str** | Regular expression to enforce on text field values. Use ^ and $ to force matching of entire string. For example, &lt;code&gt;^[A-Z]{3}$&lt;/code&gt; will limit values to exactly three uppercase letters. | [optional] 
**weight** | **int** | Fields with higher weights appear lower in a form. | [optional] 

## Example

```python
from openapi_client.models.custom_field import CustomField

# TODO update the JSON string below
json = "{}"
# create an instance of CustomField from a JSON string
custom_field_instance = CustomField.from_json(json)
# print the JSON string representation of the object
print(CustomField.to_json())

# convert the object into a dict
custom_field_dict = custom_field_instance.to_dict()
# create an instance of CustomField from a dict
custom_field_from_dict = CustomField.from_dict(custom_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


