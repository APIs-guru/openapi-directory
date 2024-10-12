# StopMediationAbExperimentRequest

Request to end the mediation A/B experiment and choose a winning variant.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**variant_choice** | **str** | The choice for the winning variant. | [optional] 

## Example

```python
from openapi_client.models.stop_mediation_ab_experiment_request import StopMediationAbExperimentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of StopMediationAbExperimentRequest from a JSON string
stop_mediation_ab_experiment_request_instance = StopMediationAbExperimentRequest.from_json(json)
# print the JSON string representation of the object
print(StopMediationAbExperimentRequest.to_json())

# convert the object into a dict
stop_mediation_ab_experiment_request_dict = stop_mediation_ab_experiment_request_instance.to_dict()
# create an instance of StopMediationAbExperimentRequest from a dict
stop_mediation_ab_experiment_request_from_dict = StopMediationAbExperimentRequest.from_dict(stop_mediation_ab_experiment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


