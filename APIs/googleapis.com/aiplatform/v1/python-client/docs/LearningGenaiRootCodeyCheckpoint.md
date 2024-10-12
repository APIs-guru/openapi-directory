# LearningGenaiRootCodeyCheckpoint

Describes a sample at a checkpoint for post-processing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**codey_truncator_metadata** | [**LearningGenaiRootCodeyTruncatorMetadata**](LearningGenaiRootCodeyTruncatorMetadata.md) |  | [optional] 
**current_sample** | **str** | Current state of the sample after truncator. | [optional] 
**post_inference_step** | **str** | Postprocessor run that yielded this checkpoint. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_codey_checkpoint import LearningGenaiRootCodeyCheckpoint

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootCodeyCheckpoint from a JSON string
learning_genai_root_codey_checkpoint_instance = LearningGenaiRootCodeyCheckpoint.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootCodeyCheckpoint.to_json())

# convert the object into a dict
learning_genai_root_codey_checkpoint_dict = learning_genai_root_codey_checkpoint_instance.to_dict()
# create an instance of LearningGenaiRootCodeyCheckpoint from a dict
learning_genai_root_codey_checkpoint_from_dict = LearningGenaiRootCodeyCheckpoint.from_dict(learning_genai_root_codey_checkpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


