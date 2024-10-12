# DeploymentExtendedFilter

Deployment filter.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**provisioning_state** | **str** | Gets or sets the provisioning state. | [optional] 

## Example

```python
from openapi_client.models.deployment_extended_filter import DeploymentExtendedFilter

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentExtendedFilter from a JSON string
deployment_extended_filter_instance = DeploymentExtendedFilter.from_json(json)
# print the JSON string representation of the object
print(DeploymentExtendedFilter.to_json())

# convert the object into a dict
deployment_extended_filter_dict = deployment_extended_filter_instance.to_dict()
# create an instance of DeploymentExtendedFilter from a dict
deployment_extended_filter_from_dict = DeploymentExtendedFilter.from_dict(deployment_extended_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


