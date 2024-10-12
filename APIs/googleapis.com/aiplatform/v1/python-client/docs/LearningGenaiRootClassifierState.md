# LearningGenaiRootClassifierState

DataProviderOutput and MetricOutput can be saved between calls to the Classifier framework. For instance, you can run the query classifier, get outputs from those metrics, then use them in a result classifier as well. Example rule based on this idea: and_rules { rule { metric_name: 'query_safesearch_v2' ... } rule { metric_name: 'response_safesearch_v2' ... } }

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data_provider_output** | [**List[LearningGenaiRootDataProviderOutput]**](LearningGenaiRootDataProviderOutput.md) |  | [optional] 
**metric_output** | [**List[LearningGenaiRootMetricOutput]**](LearningGenaiRootMetricOutput.md) |  | [optional] 

## Example

```python
from openapi_client.models.learning_genai_root_classifier_state import LearningGenaiRootClassifierState

# TODO update the JSON string below
json = "{}"
# create an instance of LearningGenaiRootClassifierState from a JSON string
learning_genai_root_classifier_state_instance = LearningGenaiRootClassifierState.from_json(json)
# print the JSON string representation of the object
print(LearningGenaiRootClassifierState.to_json())

# convert the object into a dict
learning_genai_root_classifier_state_dict = learning_genai_root_classifier_state_instance.to_dict()
# create an instance of LearningGenaiRootClassifierState from a dict
learning_genai_root_classifier_state_from_dict = LearningGenaiRootClassifierState.from_dict(learning_genai_root_classifier_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


