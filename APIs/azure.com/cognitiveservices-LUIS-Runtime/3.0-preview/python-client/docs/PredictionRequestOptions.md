# PredictionRequestOptions

The custom options for the prediction request.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**datetime_reference** | **datetime** | The reference DateTime used for predicting datetime entities. | [optional] 
**override_predictions** | **bool** | Whether to make the external entities resolution override the predictions if an overlap occurs. | [optional] 

## Example

```python
from openapi_client.models.prediction_request_options import PredictionRequestOptions

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionRequestOptions from a JSON string
prediction_request_options_instance = PredictionRequestOptions.from_json(json)
# print the JSON string representation of the object
print(PredictionRequestOptions.to_json())

# convert the object into a dict
prediction_request_options_dict = prediction_request_options_instance.to_dict()
# create an instance of PredictionRequestOptions from a dict
prediction_request_options_from_dict = PredictionRequestOptions.from_dict(prediction_request_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


