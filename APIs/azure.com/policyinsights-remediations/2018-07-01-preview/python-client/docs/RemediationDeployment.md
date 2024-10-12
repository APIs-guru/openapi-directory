# RemediationDeployment

Details of a single deployment created by the remediation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_on** | **datetime** | The time at which the remediation was created. | [optional] [readonly] 
**deployment_id** | **str** | Resource ID of the template deployment that will remediate the resource. | [optional] [readonly] 
**error** | [**ErrorDefinition**](ErrorDefinition.md) |  | [optional] 
**last_updated_on** | **datetime** | The time at which the remediation deployment was last updated. | [optional] [readonly] 
**remediated_resource_id** | **str** | Resource ID of the resource that is being remediated by the deployment. | [optional] [readonly] 
**resource_location** | **str** | Location of the resource that is being remediated. | [optional] [readonly] 
**status** | **str** | Status of the remediation deployment. | [optional] [readonly] 

## Example

```python
from openapi_client.models.remediation_deployment import RemediationDeployment

# TODO update the JSON string below
json = "{}"
# create an instance of RemediationDeployment from a JSON string
remediation_deployment_instance = RemediationDeployment.from_json(json)
# print the JSON string representation of the object
print(RemediationDeployment.to_json())

# convert the object into a dict
remediation_deployment_dict = remediation_deployment_instance.to_dict()
# create an instance of RemediationDeployment from a dict
remediation_deployment_from_dict = RemediationDeployment.from_dict(remediation_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


