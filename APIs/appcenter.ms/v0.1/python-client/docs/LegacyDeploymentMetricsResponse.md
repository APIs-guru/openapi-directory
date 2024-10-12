# LegacyDeploymentMetricsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metrics** | [**Dict[str, LegacyDeploymentMetricsResponseMetricsValue]**](LegacyDeploymentMetricsResponseMetricsValue.md) | Object containing a property named after each release label, which contains an object that contains that release&#39;s metrics. | [optional] 

## Example

```python
from openapi_client.models.legacy_deployment_metrics_response import LegacyDeploymentMetricsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyDeploymentMetricsResponse from a JSON string
legacy_deployment_metrics_response_instance = LegacyDeploymentMetricsResponse.from_json(json)
# print the JSON string representation of the object
print(LegacyDeploymentMetricsResponse.to_json())

# convert the object into a dict
legacy_deployment_metrics_response_dict = legacy_deployment_metrics_response_instance.to_dict()
# create an instance of LegacyDeploymentMetricsResponse from a dict
legacy_deployment_metrics_response_from_dict = LegacyDeploymentMetricsResponse.from_dict(legacy_deployment_metrics_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


