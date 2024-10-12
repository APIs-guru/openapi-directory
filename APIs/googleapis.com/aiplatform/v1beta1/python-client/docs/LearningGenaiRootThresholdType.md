# LearningGenaiRootThresholdType

The type of score that bundled with a threshold, and will not be attending the final score calculation. How each score type uses the threshold can be implementation details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**score_type** | **str** |  | [optional] 
**threshold** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_threshold_type import LearningGenaiRootThresholdType

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootThresholdType from a JSON string
learning_genai_root_threshold_type_instance = LearningGenaiRootThresholdType.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootThresholdType.to_json())

# convert the object into a dict
learning_genai_root_threshold_type_dict = learning_genai_root_threshold_type_instance.to_dict()
# create an instance of LearningGenaiRootThresholdType from a dict
learning_genai_root_threshold_type_from_dict = LearningGenaiRootThresholdType.from_dict(learning_genai_root_threshold_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


