# JsonTypeBean

The schema of a field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**configuration** | **Dict[str, object]** | If the field is a custom field, the configuration of the field. | [optional] [readonly] 
**custom** | **str** | If the field is a custom field, the URI of the field. | [optional] [readonly] 
**custom_id** | **int** | If the field is a custom field, the custom ID of the field. | [optional] [readonly] 
**items** | **str** | When the data type is an array, the name of the field items within the array. | [optional] [readonly] 
**system** | **str** | If the field is a system field, the name of the field. | [optional] [readonly] 
**type** | **str** | The data type of the field. | [readonly] 

## Example

```python
from openapi_client.models.json_type_bean import JsonTypeBean

# TODO update the JSON string below
json = "{}"
# create an instance of JsonTypeBean from a JSON string
json_type_bean_instance = JsonTypeBean.from_json(json)
# print the JSON string representation of the object
print(JsonTypeBean.to_json())

# convert the object into a dict
json_type_bean_dict = json_type_bean_instance.to_dict()
# create an instance of JsonTypeBean from a dict
json_type_bean_from_dict = JsonTypeBean.from_dict(json_type_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


