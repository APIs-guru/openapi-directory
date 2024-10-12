# RegexModelUpdateObject

Model object for updating a regular expression entity model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The model name. | [optional] 
**regex_pattern** | **str** | The regular expression entity pattern. | [optional] 

## Example

```python
from openapi_client.models.regex_model_update_object import RegexModelUpdateObject

# TODO update the JSON string below
json = "{}"
# create an instance of RegexModelUpdateObject from a JSON string
regex_model_update_object_instance = RegexModelUpdateObject.from_json(json)
# print the JSON string representation of the object
print(RegexModelUpdateObject.to_json())

# convert the object into a dict
regex_model_update_object_dict = regex_model_update_object_instance.to_dict()
# create an instance of RegexModelUpdateObject from a dict
regex_model_update_object_from_dict = RegexModelUpdateObject.from_dict(regex_model_update_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


