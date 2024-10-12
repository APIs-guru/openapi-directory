# DeploymentInfo

Resource provider deployment information

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**action_plan_instance_resource_id** | **str** | The identifier of the latest action plan instance resource. | [optional] 
**e_tag** | **str** | entity tag | [optional] 
**parameters** | **str** | The latest deployment parameters as JToken | [optional] 
**version** | **str** | The product version | [optional] 

## Example

```python
from openapi_client.models.deployment_info import DeploymentInfo

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentInfo from a JSON string
deployment_info_instance = DeploymentInfo.from_json(json)
# print the JSON string representation of the object
print(DeploymentInfo.to_json())

# convert the object into a dict
deployment_info_dict = deployment_info_instance.to_dict()
# create an instance of DeploymentInfo from a dict
deployment_info_from_dict = DeploymentInfo.from_dict(deployment_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


