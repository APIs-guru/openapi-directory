# PredictionRequest

Represents the prediction request parameters.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dynamic_lists** | [**List[DynamicList]**](DynamicList.md) | The dynamically created list entities for this request. | [optional] 
**external_entities** | [**List[ExternalEntity]**](ExternalEntity.md) | The externally predicted entities for this request. | [optional] 
**options** | [**PredictionRequestOptions**](PredictionRequestOptions.md) |  | [optional] 
**query** | **str** | The query to predict. | 

## Example

```python
from openapi_client.models.prediction_request import PredictionRequest

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionRequest from a JSON string
prediction_request_instance = PredictionRequest.from_json(json)
# print the JSON string representation of the object
print(PredictionRequest.to_json())

# convert the object into a dict
prediction_request_dict = prediction_request_instance.to_dict()
# create an instance of PredictionRequest from a dict
prediction_request_from_dict = PredictionRequest.from_dict(prediction_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


