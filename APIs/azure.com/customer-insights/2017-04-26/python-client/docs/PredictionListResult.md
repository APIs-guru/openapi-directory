# PredictionListResult

The response of list predictions operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to the next set of results. | [optional] 
**value** | [**List[PredictionResourceFormat]**](PredictionResourceFormat.md) | Results of the list operation. | [optional] 

## Example

```python
from openapi_client.models.prediction_list_result import PredictionListResult

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionListResult from a JSON string
prediction_list_result_instance = PredictionListResult.from_json(json)
# print the JSON string representation of the object
print(PredictionListResult.to_json())

# convert the object into a dict
prediction_list_result_dict = prediction_list_result_instance.to_dict()
# create an instance of PredictionListResult from a dict
prediction_list_result_from_dict = PredictionListResult.from_dict(prediction_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


