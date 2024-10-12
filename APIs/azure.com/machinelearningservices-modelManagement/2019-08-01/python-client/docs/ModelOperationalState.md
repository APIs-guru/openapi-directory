# ModelOperationalState

The operational state of the Model.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_summary** | [**DeploymentSummary**](DeploymentSummary.md) |  | [optional] 
**end_time** | **str** | The deployment end time. | [optional] 
**start_time** | **str** | The deployment start time. | [optional] 

## Example

```python
from openapi_client.models.model_operational_state import ModelOperationalState

# TODO update the JSON string below
json = "{}"
# create an instance of ModelOperationalState from a JSON string
model_operational_state_instance = ModelOperationalState.from_json(json)
# print the JSON string representation of the object
print(ModelOperationalState.to_json())

# convert the object into a dict
model_operational_state_dict = model_operational_state_instance.to_dict()
# create an instance of ModelOperationalState from a dict
model_operational_state_from_dict = ModelOperationalState.from_dict(model_operational_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


