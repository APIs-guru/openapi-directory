# TemplateHashResult

Result of the request to calculate template hash. It contains a string of minified template and its hash.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**minified_template** | **str** | The minified template string. | [optional] 
**template_hash** | **str** | The template hash. | [optional] 

## Example

```python
from openapi_client.models.template_hash_result import TemplateHashResult

# TODO update the JSON string below
json = "{}"
# create an instance of TemplateHashResult from a JSON string
template_hash_result_instance = TemplateHashResult.from_json(json)
# print the JSON string representation of the object
print(TemplateHashResult.to_json())

# convert the object into a dict
template_hash_result_dict = template_hash_result_instance.to_dict()
# create an instance of TemplateHashResult from a dict
template_hash_result_from_dict = TemplateHashResult.from_dict(template_hash_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


