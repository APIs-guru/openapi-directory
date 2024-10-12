# LearningGenaiRootCodeyTruncatorMetadata

Metadata describing what was truncated at each checkpoint.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cutoff_index** | **int** | Index of the current sample that trims off truncated text. | [optional] 
**truncated_text** | **str** | Text that was truncated at a specific checkpoint. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_codey_truncator_metadata import LearningGenaiRootCodeyTruncatorMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootCodeyTruncatorMetadata from a JSON string
learning_genai_root_codey_truncator_metadata_instance = LearningGenaiRootCodeyTruncatorMetadata.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootCodeyTruncatorMetadata.to_json())

# convert the object into a dict
learning_genai_root_codey_truncator_metadata_dict = learning_genai_root_codey_truncator_metadata_instance.to_dict()
# create an instance of LearningGenaiRootCodeyTruncatorMetadata from a dict
learning_genai_root_codey_truncator_metadata_from_dict = LearningGenaiRootCodeyTruncatorMetadata.from_dict(learning_genai_root_codey_truncator_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


