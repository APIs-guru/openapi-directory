# ErrorsGroupModelCounts200ResponseModelsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_count** | **int** | count of errors in a model | [optional] 
**model_code** | **str** | model code | [optional] 
**model_name** | **str** | model name | [optional] 

## Example

```python
from openapi_client.models.errors_group_model_counts200_response_models_inner import ErrorsGroupModelCounts200ResponseModelsInner

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsGroupModelCounts200ResponseModelsInner from a JSON string
errors_group_model_counts200_response_models_inner_instance = ErrorsGroupModelCounts200ResponseModelsInner.from_json(json)
# print the JSON string representation of the object
print(ErrorsGroupModelCounts200ResponseModelsInner.to_json())

# convert the object into a dict
errors_group_model_counts200_response_models_inner_dict = errors_group_model_counts200_response_models_inner_instance.to_dict()
# create an instance of ErrorsGroupModelCounts200ResponseModelsInner from a dict
errors_group_model_counts200_response_models_inner_from_dict = ErrorsGroupModelCounts200ResponseModelsInner.from_dict(errors_group_model_counts200_response_models_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


