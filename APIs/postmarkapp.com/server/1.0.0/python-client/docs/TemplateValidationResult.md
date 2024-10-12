# TemplateValidationResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content_is_valid** | **bool** |  | [optional] 
**rendered_content** | **str** |  | [optional] 
**validation_errors** | [**List[TemplateValidationError]**](TemplateValidationError.md) |  | [optional] 

## Example

```python
from openapi_client.models.template_validation_result import TemplateValidationResult

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateValidationResult from a JSON string
template_validation_result_instance = TemplateValidationResult.from_json(json)
# print the JSON string representation of the object
print(TemplateValidationResult.to_json())

# convert the object into a dict
template_validation_result_dict = template_validation_result_instance.to_dict()
# create an instance of TemplateValidationResult from a dict
template_validation_result_from_dict = TemplateValidationResult.from_dict(template_validation_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


