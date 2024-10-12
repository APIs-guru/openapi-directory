# PredictionResponse

Represents the prediction response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prediction** | [**Prediction**](Prediction.md) |  | 
**query** | **str** | The query used in the prediction. | 

## Example

```python
from openapi_client.models.prediction_response import PredictionResponse

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionResponse from a JSON string
prediction_response_instance = PredictionResponse.from_json(json)
# print the JSON string representation of the object
print(PredictionResponse.to_json())

# convert the object into a dict
prediction_response_dict = prediction_response_instance.to_dict()
# create an instance of PredictionResponse from a dict
prediction_response_from_dict = PredictionResponse.from_dict(prediction_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


