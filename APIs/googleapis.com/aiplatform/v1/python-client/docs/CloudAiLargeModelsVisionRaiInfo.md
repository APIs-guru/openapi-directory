# CloudAiLargeModelsVisionRaiInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**rai_categories** | **List[str]** | List of rai categories&#39; information to return | [optional] 
**scores** | **List[float]** | List of rai scores mapping to the rai categories. Rounded to 1 decimal place. | [optional] 

## Example

```python
from openapi_client.models.cloud_ai_large_models_vision_rai_info import CloudAiLargeModelsVisionRaiInfo

# TODO update the JSON string below
json = "{}"
# create an instance of CloudAiLargeModelsVisionRaiInfo from a JSON string
cloud_ai_large_models_vision_rai_info_instance = CloudAiLargeModelsVisionRaiInfo.from_json(json)
# print the JSON string representation of the object
print(CloudAiLargeModelsVisionRaiInfo.to_json())

# convert the object into a dict
cloud_ai_large_models_vision_rai_info_dict = cloud_ai_large_models_vision_rai_info_instance.to_dict()
# create an instance of CloudAiLargeModelsVisionRaiInfo from a dict
cloud_ai_large_models_vision_rai_info_from_dict = CloudAiLargeModelsVisionRaiInfo.from_dict(cloud_ai_large_models_vision_rai_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


