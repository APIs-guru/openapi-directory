# CanaryDeployment

CanaryDeployment represents the canary deployment configuration

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentages** | **List[int]** | Required. The percentage based deployments that will occur as a part of a &#x60;Rollout&#x60;. List is expected in ascending order and each integer n is 0 &lt;&#x3D; n &lt; 100. | [optional] 
**postdeploy** | [**Postdeploy**](Postdeploy.md) |  | [optional] 
**predeploy** | [**Predeploy**](Predeploy.md) |  | [optional] 
**verify** | **bool** | Whether to run verify tests after each percentage deployment. | [optional] 

## Example

```python
from openapi_client.models.canary_deployment import CanaryDeployment

# TODO update the JSON string below
json = "{}"
# create an instance of CanaryDeployment from a JSON string
canary_deployment_instance = CanaryDeployment.from_json(json)
# print the JSON string representation of the object
print(CanaryDeployment.to_json())

# convert the object into a dict
canary_deployment_dict = canary_deployment_instance.to_dict()
# create an instance of CanaryDeployment from a dict
canary_deployment_from_dict = CanaryDeployment.from_dict(canary_deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


