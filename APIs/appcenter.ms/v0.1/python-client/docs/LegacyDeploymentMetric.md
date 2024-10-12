# LegacyDeploymentMetric


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **int** | The number of devices that have this release installed currently | 
**downloaded** | **int** | The number of times this release has been downloaded | [optional] 
**failed** | **int** | The number of times this release has failed to be installed on a device | [optional] 
**installed** | **int** | The number of times this release has been installed on a device | [optional] 

## Example

```python
from openapi_client.models.legacy_deployment_metric import LegacyDeploymentMetric

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyDeploymentMetric from a JSON string
legacy_deployment_metric_instance = LegacyDeploymentMetric.from_json(json)
# print the JSON string representation of the object
print(LegacyDeploymentMetric.to_json())

# convert the object into a dict
legacy_deployment_metric_dict = legacy_deployment_metric_instance.to_dict()
# create an instance of LegacyDeploymentMetric from a dict
legacy_deployment_metric_from_dict = LegacyDeploymentMetric.from_dict(legacy_deployment_metric_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


