# LearningGenaiRootGroundingMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**citations** | [**List[LearningGenaiRootGroundingMetadataCitation]**](LearningGenaiRootGroundingMetadataCitation.md) |  | [optional] 
**grounding_cancelled** | **bool** | True if grounding is cancelled, for example, no facts being retrieved. | [optional] 
**search_queries** | **List[str]** |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_grounding_metadata import LearningGenaiRootGroundingMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootGroundingMetadata from a JSON string
learning_genai_root_grounding_metadata_instance = LearningGenaiRootGroundingMetadata.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootGroundingMetadata.to_json())

# convert the object into a dict
learning_genai_root_grounding_metadata_dict = learning_genai_root_grounding_metadata_instance.to_dict()
# create an instance of LearningGenaiRootGroundingMetadata from a dict
learning_genai_root_grounding_metadata_from_dict = LearningGenaiRootGroundingMetadata.from_dict(learning_genai_root_grounding_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


