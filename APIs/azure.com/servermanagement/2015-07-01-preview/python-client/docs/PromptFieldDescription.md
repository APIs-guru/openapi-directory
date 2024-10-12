# PromptFieldDescription

Field description for the implementation of PSHostUserInterface.Prompt.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**help_message** | **str** | The help message of the prompt. | [optional] 
**label** | **str** | The label text of the prompt. | [optional] 
**name** | **str** | The name of the prompt. | [optional] 
**prompt_field_type** | **str** |  | [optional] 
**prompt_field_type_is_list** | **bool** | When set to &#39;true&#39; the prompt field type is a list of values. | [optional] 

## Example

```python
from openapi_client.models.prompt_field_description import PromptFieldDescription

# TODO update the JSON string below
json = "{}"
# create an instance of PromptFieldDescription from a JSON string
prompt_field_description_instance = PromptFieldDescription.from_json(json)
# print the JSON string representation of the object
print(PromptFieldDescription.to_json())

# convert the object into a dict
prompt_field_description_dict = prompt_field_description_instance.to_dict()
# create an instance of PromptFieldDescription from a dict
prompt_field_description_from_dict = PromptFieldDescription.from_dict(prompt_field_description_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


