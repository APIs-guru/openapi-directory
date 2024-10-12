# CodePushReleaseMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **int** |  | 
**downloaded** | **int** |  | [optional] 
**failed** | **int** |  | [optional] 
**installed** | **int** |  | [optional] 
**label** | **str** |  | 

## Example

```python
from openapi_client.models.code_push_release_metric import CodePushReleaseMetric

# TODO update the JSON string below
json = "{}"
# create an instance of CodePushReleaseMetric from a JSON string
code_push_release_metric_instance = CodePushReleaseMetric.from_json(json)
# print the JSON string representation of the object
print(CodePushReleaseMetric.to_json())

# convert the object into a dict
code_push_release_metric_dict = code_push_release_metric_instance.to_dict()
# create an instance of CodePushReleaseMetric from a dict
code_push_release_metric_from_dict = CodePushReleaseMetric.from_dict(code_push_release_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


