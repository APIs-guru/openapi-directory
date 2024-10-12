# LearningGenaiRootMetricOutput


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**debug** | **str** |  | [optional] 
**name** | **str** | Name of the metric. | [optional] 
**numeric_value** | **float** |  | [optional] 
**status** | [**UtilStatusProto**](UtilStatusProto.md) |  | [optional] 
**string_value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_metric_output import LearningGenaiRootMetricOutput

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootMetricOutput from a JSON string
learning_genai_root_metric_output_instance = LearningGenaiRootMetricOutput.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootMetricOutput.to_json())

# convert the object into a dict
learning_genai_root_metric_output_dict = learning_genai_root_metric_output_instance.to_dict()
# create an instance of LearningGenaiRootMetricOutput from a dict
learning_genai_root_metric_output_from_dict = LearningGenaiRootMetricOutput.from_dict(learning_genai_root_metric_output_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


