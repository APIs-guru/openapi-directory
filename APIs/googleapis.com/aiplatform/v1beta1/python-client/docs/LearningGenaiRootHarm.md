# LearningGenaiRootHarm


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**contextual_dangerous** | **bool** | Please do not use, this is still under development. | [optional] 
**csam** | **bool** |  | [optional] 
**fringe** | **bool** |  | [optional] 
**grail_image_harm_type** | [**LearningGenaiRootHarmGrailImageHarmType**](LearningGenaiRootHarmGrailImageHarmType.md) |  | [optional] 
**grail_text_harm_type** | [**LearningGenaiRootHarmGrailTextHarmType**](LearningGenaiRootHarmGrailTextHarmType.md) |  | [optional] 
**image_csam** | **bool** |  | [optional] 
**image_pedo** | **bool** |  | [optional] 
**image_porn** | **bool** | Image signals | [optional] 
**image_violence** | **bool** |  | [optional] 
**pqc** | **bool** |  | [optional] 
**safetycat** | [**LearningGenaiRootHarmSafetyCatCategories**](LearningGenaiRootHarmSafetyCatCategories.md) |  | [optional] 
**spii** | [**LearningGenaiRootHarmSpiiFilter**](LearningGenaiRootHarmSpiiFilter.md) |  | [optional] 
**threshold** | **float** |  | [optional] 
**video_frame_csam** | **bool** |  | [optional] 
**video_frame_pedo** | **bool** |  | [optional] 
**video_frame_porn** | **bool** | Video frame signals | [optional] 
**video_frame_violence** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_harm import LearningGenaiRootHarm

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootHarm from a JSON string
learning_genai_root_harm_instance = LearningGenaiRootHarm.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootHarm.to_json())

# convert the object into a dict
learning_genai_root_harm_dict = learning_genai_root_harm_instance.to_dict()
# create an instance of LearningGenaiRootHarm from a dict
learning_genai_root_harm_from_dict = LearningGenaiRootHarm.from_dict(learning_genai_root_harm_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


