# Deployment

Representation of a single script deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_config** | [**DeploymentConfig**](DeploymentConfig.md) |  | [optional] 
**deployment_id** | **str** | The deployment ID for this deployment. | [optional] 
**entry_points** | [**List[EntryPoint]**](EntryPoint.md) | The deployment&#39;s entry points. | [optional] 
**update_time** | **str** | Last modified date time stamp. | [optional] 

## Example

```python
from openapi_client.models.deployment import Deployment

# TODO update the JSON string below
json = "{}"
# create an instance of Deployment from a JSON string
deployment_instance = Deployment.from_json(json)
# print the JSON string representation of the object
print(Deployment.to_json())

# convert the object into a dict
deployment_dict = deployment_instance.to_dict()
# create an instance of Deployment from a dict
deployment_from_dict = Deployment.from_dict(deployment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


