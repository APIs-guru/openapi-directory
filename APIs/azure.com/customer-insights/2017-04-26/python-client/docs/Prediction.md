# Prediction

The prediction definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**auto_analyze** | **bool** | Whether do auto analyze. | 
**description** | **Dict[str, str]** | Description of the prediction. | [optional] 
**display_name** | **Dict[str, str]** | Display name of the prediction. | [optional] 
**grades** | [**List[PredictionGradesInner]**](PredictionGradesInner.md) | The prediction grades. | [optional] 
**involved_interaction_types** | **List[str]** | Interaction types involved in the prediction. | [optional] 
**involved_kpi_types** | **List[str]** | KPI types involved in the prediction. | [optional] 
**involved_relationships** | **List[str]** | Relationships involved in the prediction. | [optional] 
**mappings** | [**PredictionMappings**](PredictionMappings.md) |  | 
**negative_outcome_expression** | **str** | Negative outcome expression. | 
**positive_outcome_expression** | **str** | Positive outcome expression. | 
**prediction_name** | **str** | Name of the prediction. | [optional] 
**primary_profile_type** | **str** | Primary profile type. | 
**provisioning_state** | [**ProvisioningState**](ProvisioningState.md) |  | [optional] 
**scope_expression** | **str** | Scope expression. | 
**score_label** | **str** | Score label. | 
**system_generated_entities** | [**PredictionSystemGeneratedEntities**](PredictionSystemGeneratedEntities.md) |  | [optional] 
**tenant_id** | **str** | The hub name. | [optional] [readonly] 

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


