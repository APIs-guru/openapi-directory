# PredictionResourceFormat

The prediction resource format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**Prediction**](Prediction.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.prediction_resource_format import PredictionResourceFormat

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionResourceFormat from a JSON string
prediction_resource_format_instance = PredictionResourceFormat.from_json(json)
# print the JSON string representation of the object
print(PredictionResourceFormat.to_json())

# convert the object into a dict
prediction_resource_format_dict = prediction_resource_format_instance.to_dict()
# create an instance of PredictionResourceFormat from a dict
prediction_resource_format_from_dict = PredictionResourceFormat.from_dict(prediction_resource_format_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


