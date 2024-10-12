# RegexModelCreateObject

Model object for creating a regular expression entity model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The model name. | [optional] 
**regex_pattern** | **str** | The regular expression entity pattern. | [optional] 

## Example

```python
from openapi_client.models.regex_model_create_object import RegexModelCreateObject

# TODO update the JSON string below
json = "{}"
# create an instance of RegexModelCreateObject from a JSON string
regex_model_create_object_instance = RegexModelCreateObject.from_json(json)
# print the JSON string representation of the object
print(RegexModelCreateObject.to_json())

# convert the object into a dict
regex_model_create_object_dict = regex_model_create_object_instance.to_dict()
# create an instance of RegexModelCreateObject from a dict
regex_model_create_object_from_dict = RegexModelCreateObject.from_dict(regex_model_create_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


