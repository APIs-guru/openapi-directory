# DeploymentWhatIfSettings

Deployment What-If operation settings.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**result_format** | **str** | The format of the What-If results | [optional] 

## Example

```python
from openapi_client.models.deployment_what_if_settings import DeploymentWhatIfSettings

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentWhatIfSettings from a JSON string
deployment_what_if_settings_instance = DeploymentWhatIfSettings.from_json(json)
# print the JSON string representation of the object
print(DeploymentWhatIfSettings.to_json())

# convert the object into a dict
deployment_what_if_settings_dict = deployment_what_if_settings_instance.to_dict()
# create an instance of DeploymentWhatIfSettings from a dict
deployment_what_if_settings_from_dict = DeploymentWhatIfSettings.from_dict(deployment_what_if_settings_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


