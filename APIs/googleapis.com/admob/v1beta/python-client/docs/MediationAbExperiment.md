# MediationAbExperiment

The mediation A/B experiment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**control_mediation_lines** | [**List[MediationAbExperimentExperimentMediationLine]**](MediationAbExperimentExperimentMediationLine.md) | Output only. The experiment mediation lines for control. They are inherited from the parent mediation group. It is an output only field. | [optional] [readonly] 
**display_name** | **str** | The display name for the mediation A/B experiment. | [optional] 
**end_time** | **str** | Output only. The time at which the experiment was ended or target to end (in UTC). | [optional] [readonly] 
**experiment_id** | **str** | Output only. Unique identifier for the mediation A/B experiment. It is an output only property. | [optional] [readonly] 
**mediation_group_id** | **str** | Output only. The mediation group id this experiment belongs to. This can be used for filtering the experiments in the list experiments API. | [optional] [readonly] 
**name** | **str** | Resource name for this experiment. The format is accounts/{publisher_id}/ mediationGroups/{mediation_group_id}/mediationAbExperiment/ {mediation_group_experiment_id}. For example: accounts/pub-9876543210987654/mediationGroups/0123456789/ mediationAbExperiment/12345 | [optional] 
**start_time** | **str** | Output only. The time at which the experiment was started (in UTC). | [optional] [readonly] 
**state** | **str** | Output only. The state of the experiment. It is an output only field. | [optional] [readonly] 
**treatment_mediation_lines** | [**List[MediationAbExperimentExperimentMediationLine]**](MediationAbExperimentExperimentMediationLine.md) | The experiment mediation lines created for the treatment. They will be used for serving when the experiment status is RUNNING. | [optional] 
**treatment_traffic_percentage** | **str** | The percentage of the mediation A/B experiment traffic that will be send to the treatment (variant B). The remainder is sent to the control (variant A). The percentage is expressed as an integer in the inclusive range of [1,99]. See https://support.google.com/admob/answer/9572326 for details. | [optional] 
**variant_leader** | **str** | Output only. The variant leader for the experiment according to some key metrics. | [optional] [readonly] 

## Example

```python
from openapi_client.models.mediation_ab_experiment import MediationAbExperiment

# TODO update the JSON string below
json = "{}"
# create an instance of MediationAbExperiment from a JSON string
mediation_ab_experiment_instance = MediationAbExperiment.from_json(json)
# print the JSON string representation of the object
print(MediationAbExperiment.to_json())

# convert the object into a dict
mediation_ab_experiment_dict = mediation_ab_experiment_instance.to_dict()
# create an instance of MediationAbExperiment from a dict
mediation_ab_experiment_from_dict = MediationAbExperiment.from_dict(mediation_ab_experiment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


