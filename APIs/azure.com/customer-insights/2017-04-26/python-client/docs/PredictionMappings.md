# PredictionMappings

Definition of the link mapping of prediction.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**grade** | **str** | The grade of the link mapping. | 
**reason** | **str** | The reason of the link mapping. | 
**score** | **str** | The score of the link mapping. | 

## Example

```python
from openapi_client.models.prediction_mappings import PredictionMappings

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionMappings from a JSON string
prediction_mappings_instance = PredictionMappings.from_json(json)
# print the JSON string representation of the object
print(PredictionMappings.to_json())

# convert the object into a dict
prediction_mappings_dict = prediction_mappings_instance.to_dict()
# create an instance of PredictionMappings from a dict
prediction_mappings_from_dict = PredictionMappings.from_dict(prediction_mappings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


