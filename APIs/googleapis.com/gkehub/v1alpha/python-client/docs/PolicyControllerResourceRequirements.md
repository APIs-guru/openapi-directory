# PolicyControllerResourceRequirements

ResourceRequirements describes the compute resource requirements.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**limits** | [**PolicyControllerResourceList**](PolicyControllerResourceList.md) |  | [optional] 
**requests** | [**PolicyControllerResourceList**](PolicyControllerResourceList.md) |  | [optional] 

## Example

```python
from openapi_client.models.policy_controller_resource_requirements import PolicyControllerResourceRequirements

# TODO update the JSON string below
json = "{}"
# create an instance of PolicyControllerResourceRequirements from a JSON string
policy_controller_resource_requirements_instance = PolicyControllerResourceRequirements.from_json(json)
# print the JSON string representation of the object
print(PolicyControllerResourceRequirements.to_json())

# convert the object into a dict
policy_controller_resource_requirements_dict = policy_controller_resource_requirements_instance.to_dict()
# create an instance of PolicyControllerResourceRequirements from a dict
policy_controller_resource_requirements_from_dict = PolicyControllerResourceRequirements.from_dict(policy_controller_resource_requirements_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


