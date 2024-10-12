# LearningGenaiRootCodeyOutput

Top-level wrapper used to store all things codey-related.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codey_chat_metadata** | [**LearningGenaiRootCodeyChatMetadata**](LearningGenaiRootCodeyChatMetadata.md) |  | [optional] 
**codey_completion_metadata** | [**LearningGenaiRootCodeyCompletionMetadata**](LearningGenaiRootCodeyCompletionMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_codey_output import LearningGenaiRootCodeyOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootCodeyOutput from a JSON string
learning_genai_root_codey_output_instance = LearningGenaiRootCodeyOutput.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootCodeyOutput.to_json())

# convert the object into a dict
learning_genai_root_codey_output_dict = learning_genai_root_codey_output_instance.to_dict()
# create an instance of LearningGenaiRootCodeyOutput from a dict
learning_genai_root_codey_output_from_dict = LearningGenaiRootCodeyOutput.from_dict(learning_genai_root_codey_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


