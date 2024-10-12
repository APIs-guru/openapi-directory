# DeployActionParameters

Parameters for deploy action

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**parameters** | **str** | Deployment parameters, value in JToken | [optional] 
**version** | **str** | Generic Version object | [optional] 

## Example

```python
from openapi_client.models.deploy_action_parameters import DeployActionParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DeployActionParameters from a JSON string
deploy_action_parameters_instance = DeployActionParameters.from_json(json)
# print the JSON string representation of the object
print(DeployActionParameters.to_json())

# convert the object into a dict
deploy_action_parameters_dict = deploy_action_parameters_instance.to_dict()
# create an instance of DeployActionParameters from a dict
deploy_action_parameters_from_dict = DeployActionParameters.from_dict(deploy_action_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


