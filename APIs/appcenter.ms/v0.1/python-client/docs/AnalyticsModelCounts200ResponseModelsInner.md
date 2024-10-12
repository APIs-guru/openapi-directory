# AnalyticsModelCounts200ResponseModelsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Count current of model. | [optional] 
**model_name** | **str** | Model&#39;s name. | [optional] 
**previous_count** | **int** | Count of previous model. | [optional] 

## Example

```python
from openapi_client.models.analytics_model_counts200_response_models_inner import AnalyticsModelCounts200ResponseModelsInner

# TODO update the JSON string below
json = "{}"
# create an instance of AnalyticsModelCounts200ResponseModelsInner from a JSON string
analytics_model_counts200_response_models_inner_instance = AnalyticsModelCounts200ResponseModelsInner.from_json(json)
# print the JSON string representation of the object
print(AnalyticsModelCounts200ResponseModelsInner.to_json())

# convert the object into a dict
analytics_model_counts200_response_models_inner_dict = analytics_model_counts200_response_models_inner_instance.to_dict()
# create an instance of AnalyticsModelCounts200ResponseModelsInner from a dict
analytics_model_counts200_response_models_inner_from_dict = AnalyticsModelCounts200ResponseModelsInner.from_dict(analytics_model_counts200_response_models_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


