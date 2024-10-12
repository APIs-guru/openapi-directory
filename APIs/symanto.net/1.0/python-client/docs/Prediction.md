# Prediction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prediction** | **str** | the predicted label. | 
**probability** | **float** | the probability of the predicted label. | 

## Example

```python
from openapi_client.models.prediction import Prediction

# TODO update the JSON string below
json = "{}"
# create an instance of Prediction from a JSON string
prediction_instance = Prediction.from_json(json)
# print the JSON string representation of the object
print(Prediction.to_json())

# convert the object into a dict
prediction_dict = prediction_instance.to_dict()
# create an instance of Prediction from a dict
prediction_from_dict = Prediction.from_dict(prediction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


