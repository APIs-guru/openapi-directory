# CustomCanaryDeployment

CustomCanaryDeployment represents the custom canary deployment configuration.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**phase_configs** | [**List[PhaseConfig]**](PhaseConfig.md) | Required. Configuration for each phase in the canary deployment in the order executed. | [optional] 

## Example

```python
from openapi_client.models.custom_canary_deployment import CustomCanaryDeployment

# TODO update the JSON string below
json = "{}"
# create an instance of CustomCanaryDeployment from a JSON string
custom_canary_deployment_instance = CustomCanaryDeployment.from_json(json)
# print the JSON string representation of the object
print(CustomCanaryDeployment.to_json())

# convert the object into a dict
custom_canary_deployment_dict = custom_canary_deployment_instance.to_dict()
# create an instance of CustomCanaryDeployment from a dict
custom_canary_deployment_from_dict = CustomCanaryDeployment.from_dict(custom_canary_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


