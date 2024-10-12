# ModelField

Details of a field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contexts_count** | **int** | Number of contexts where the field is used. | [optional] 
**description** | **str** | The description of the field. | [optional] 
**id** | **str** | The ID of the field. | 
**is_locked** | **bool** | Whether the field is locked. | [optional] 
**is_unscreenable** | **bool** | Whether the field is shown on screen or not. | [optional] 
**key** | **str** | The key of the field. | [optional] 
**last_used** | [**FieldLastUsed**](FieldLastUsed.md) |  | [optional] 
**name** | **str** | The name of the field. | 
**projects_count** | **int** | Number of projects where the field is used. | [optional] 
**var_schema** | [**JsonTypeBean**](JsonTypeBean.md) |  | 
**screens_count** | **int** | Number of screens where the field is used. | [optional] 
**searcher_key** | **str** | The searcher key of the field. Returned for custom fields. | [optional] 

## Example

```python
from openapi_client.models.model_field import ModelField

# TODO update the JSON string below
json = "{}"
# create an instance of ModelField from a JSON string
model_field_instance = ModelField.from_json(json)
# print the JSON string representation of the object
print(ModelField.to_json())

# convert the object into a dict
model_field_dict = model_field_instance.to_dict()
# create an instance of ModelField from a dict
model_field_from_dict = ModelField.from_dict(model_field_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


