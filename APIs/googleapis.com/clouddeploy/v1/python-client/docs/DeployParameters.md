# DeployParameters

DeployParameters contains deploy parameters information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**match_target_labels** | **Dict[str, str]** | Optional. Deploy parameters are applied to targets with match labels. If unspecified, deploy parameters are applied to all targets (including child targets of a multi-target). | [optional] 
**values** | **Dict[str, str]** | Required. Values are deploy parameters in key-value pairs. | [optional] 

## Example

```python
from openapi_client.models.deploy_parameters import DeployParameters

# TODO update the JSON string below
json = "{}"
# create an instance of DeployParameters from a JSON string
deploy_parameters_instance = DeployParameters.from_json(json)
# print the JSON string representation of the object
print(DeployParameters.to_json())

# convert the object into a dict
deploy_parameters_dict = deploy_parameters_instance.to_dict()
# create an instance of DeployParameters from a dict
deploy_parameters_from_dict = DeployParameters.from_dict(deploy_parameters_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


