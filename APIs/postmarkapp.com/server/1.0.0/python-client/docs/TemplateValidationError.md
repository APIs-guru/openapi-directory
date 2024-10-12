# TemplateValidationError


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**character_position** | **int** |  | [optional] 
**line** | **int** |  | [optional] 
**message** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.template_validation_error import TemplateValidationError

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateValidationError from a JSON string
template_validation_error_instance = TemplateValidationError.from_json(json)
# print the JSON string representation of the object
print(TemplateValidationError.to_json())

# convert the object into a dict
template_validation_error_dict = template_validation_error_instance.to_dict()
# create an instance of TemplateValidationError from a dict
template_validation_error_from_dict = TemplateValidationError.from_dict(template_validation_error_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


