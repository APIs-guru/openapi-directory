# MultiLanguageBatchInput

Contains a set of input documents to be analyzed by the service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**documents** | [**List[MultiLanguageInput]**](MultiLanguageInput.md) | The set of documents to process as part of this batch. | 

## Example

```python
from openapi_client.models.multi_language_batch_input import MultiLanguageBatchInput

# TODO update the JSON string below
json = "{}"
# create an instance of MultiLanguageBatchInput from a JSON string
multi_language_batch_input_instance = MultiLanguageBatchInput.from_json(json)
# print the JSON string representation of the object
print(MultiLanguageBatchInput.to_json())

# convert the object into a dict
multi_language_batch_input_dict = multi_language_batch_input_instance.to_dict()
# create an instance of MultiLanguageBatchInput from a dict
multi_language_batch_input_from_dict = MultiLanguageBatchInput.from_dict(multi_language_batch_input_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


