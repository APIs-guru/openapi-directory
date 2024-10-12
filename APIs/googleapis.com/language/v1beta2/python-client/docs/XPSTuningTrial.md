# XPSTuningTrial

Metrics for a tuning job generated, will get forwarded to Stackdriver as model tuning logs. Setting this as a standalone message out of CreateModelMetadata to avoid confusion as we expose this message only to users.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**model_structure** | [**XPSTablesModelStructure**](XPSTablesModelStructure.md) |  | [optional] 
**training_objective_point** | [**XPSTrainingObjectivePoint**](XPSTrainingObjectivePoint.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_tuning_trial import XPSTuningTrial

# TODO update the JSON string below
json = "{}"
# create an instance of XPSTuningTrial from a JSON string
xps_tuning_trial_instance = XPSTuningTrial.from_json(json)
# print the JSON string representation of the object
print(XPSTuningTrial.to_json())

# convert the object into a dict
xps_tuning_trial_dict = xps_tuning_trial_instance.to_dict()
# create an instance of XPSTuningTrial from a dict
xps_tuning_trial_from_dict = XPSTuningTrial.from_dict(xps_tuning_trial_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


