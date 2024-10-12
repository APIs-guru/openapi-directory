# LearningGenaiRootGroundingMetadataCitation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_index** | **int** | Index in the prediction output where the citation ends (exclusive). Must be &gt; start_index and &lt; len(output). | [optional] 
**fact_index** | **int** | Index of the fact supporting this claim. Should be within the range of the &#x60;world_facts&#x60; in the GenerateResponse. | [optional] 
**score** | **float** | Confidence score of this entailment. Value is [0,1] with 1 is the most confidence. | [optional] 
**start_index** | **int** | Index in the prediction output where the citation starts (inclusive). Must be &gt;&#x3D; 0 and &lt; end_index. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_grounding_metadata_citation import LearningGenaiRootGroundingMetadataCitation

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootGroundingMetadataCitation from a JSON string
learning_genai_root_grounding_metadata_citation_instance = LearningGenaiRootGroundingMetadataCitation.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootGroundingMetadataCitation.to_json())

# convert the object into a dict
learning_genai_root_grounding_metadata_citation_dict = learning_genai_root_grounding_metadata_citation_instance.to_dict()
# create an instance of LearningGenaiRootGroundingMetadataCitation from a dict
learning_genai_root_grounding_metadata_citation_from_dict = LearningGenaiRootGroundingMetadataCitation.from_dict(learning_genai_root_grounding_metadata_citation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


