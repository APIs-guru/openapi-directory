# RemediationProperties

The remediation properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_on** | **datetime** | The time at which the remediation was created. | [optional] [readonly] 
**deployment_status** | [**RemediationDeploymentSummary**](RemediationDeploymentSummary.md) |  | [optional] 
**filters** | [**RemediationFilters**](RemediationFilters.md) |  | [optional] 
**last_updated_on** | **datetime** | The time at which the remediation was last updated. | [optional] [readonly] 
**policy_assignment_id** | **str** | The resource ID of the policy assignment that should be remediated. | [optional] 
**policy_definition_reference_id** | **str** | The policy definition reference ID of the individual definition that should be remediated. Required when the policy assignment being remediated assigns a policy set definition. | [optional] 
**provisioning_state** | **str** | The status of the remediation. | [optional] [readonly] 
**resource_discovery_mode** | **str** | The way resources to remediate are discovered. Defaults to ExistingNonCompliant if not specified. | [optional] 

## Example

```python
from openapi_client.models.remediation_properties import RemediationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of RemediationProperties from a JSON string
remediation_properties_instance = RemediationProperties.from_json(json)
# print the JSON string representation of the object
print(RemediationProperties.to_json())

# convert the object into a dict
remediation_properties_dict = remediation_properties_instance.to_dict()
# create an instance of RemediationProperties from a dict
remediation_properties_from_dict = RemediationProperties.from_dict(remediation_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


