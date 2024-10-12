# DeploymentParametersDnsLabelPrefix


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **str** | Unique DNS Name for the Public IP used to access the Virtual Machine. | 

## Example

```python
from openapi_client.models.deployment_parameters_dns_label_prefix import DeploymentParametersDnsLabelPrefix

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentParametersDnsLabelPrefix from a JSON string
deployment_parameters_dns_label_prefix_instance = DeploymentParametersDnsLabelPrefix.from_json(json)
# print the JSON string representation of the object
print(DeploymentParametersDnsLabelPrefix.to_json())

# convert the object into a dict
deployment_parameters_dns_label_prefix_dict = deployment_parameters_dns_label_prefix_instance.to_dict()
# create an instance of DeploymentParametersDnsLabelPrefix from a dict
deployment_parameters_dns_label_prefix_from_dict = DeploymentParametersDnsLabelPrefix.from_dict(deployment_parameters_dns_label_prefix_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


