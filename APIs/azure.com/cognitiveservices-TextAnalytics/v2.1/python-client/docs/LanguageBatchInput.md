# LanguageBatchInput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[LanguageInput]**](LanguageInput.md) |  | [optional] 

## Example

```python
from openapi_client.models.language_batch_input import LanguageBatchInput

# TODO update the JSON string below
json = "{}"
# create an instance of LanguageBatchInput from a JSON string
language_batch_input_instance = LanguageBatchInput.from_json(json)
# print the JSON string representation of the object
print(LanguageBatchInput.to_json())

# convert the object into a dict
language_batch_input_dict = language_batch_input_instance.to_dict()
# create an instance of LanguageBatchInput from a dict
language_batch_input_from_dict = LanguageBatchInput.from_dict(language_batch_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


