# PredictionSystemGeneratedEntities

System generated entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generated_interaction_types** | **List[str]** | Generated interaction types. | [optional] 
**generated_kpis** | **Dict[str, str]** | Generated KPIs. | [optional] 
**generated_links** | **List[str]** | Generated links. | [optional] 

## Example

```python
from openapi_client.models.prediction_system_generated_entities import PredictionSystemGeneratedEntities

# TODO update the JSON string below
json = "{}"
# create an instance of PredictionSystemGeneratedEntities from a JSON string
prediction_system_generated_entities_instance = PredictionSystemGeneratedEntities.from_json(json)
# print the JSON string representation of the object
print(PredictionSystemGeneratedEntities.to_json())

# convert the object into a dict
prediction_system_generated_entities_dict = prediction_system_generated_entities_instance.to_dict()
# create an instance of PredictionSystemGeneratedEntities from a dict
prediction_system_generated_entities_from_dict = PredictionSystemGeneratedEntities.from_dict(prediction_system_generated_entities_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


