# LearningGenaiRootFilterMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**confidence** | **str** | Filter confidence. | [optional] 
**debug_info** | [**LearningGenaiRootFilterMetadataFilterDebugInfo**](LearningGenaiRootFilterMetadataFilterDebugInfo.md) |  | [optional] 
**fallback** | **str** | A fallback message chosen by the applied filter. | [optional] 
**info** | **str** | Additional info for the filter. | [optional] 
**name** | **str** | Name of the filter that triggered. | [optional] 
**reason** | **str** | Filter reason. | [optional] 
**text** | **str** | The input query or generated response that is getting filtered. | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_filter_metadata import LearningGenaiRootFilterMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootFilterMetadata from a JSON string
learning_genai_root_filter_metadata_instance = LearningGenaiRootFilterMetadata.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootFilterMetadata.to_json())

# convert the object into a dict
learning_genai_root_filter_metadata_dict = learning_genai_root_filter_metadata_instance.to_dict()
# create an instance of LearningGenaiRootFilterMetadata from a dict
learning_genai_root_filter_metadata_from_dict = LearningGenaiRootFilterMetadata.from_dict(learning_genai_root_filter_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


