# DeploymentCollection

Collection of app deployments.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[Deployment]**](Deployment.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.deployment_collection import DeploymentCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentCollection from a JSON string
deployment_collection_instance = DeploymentCollection.from_json(json)
# print the JSON string representation of the object
print(DeploymentCollection.to_json())

# convert the object into a dict
deployment_collection_dict = deployment_collection_instance.to_dict()
# create an instance of DeploymentCollection from a dict
deployment_collection_from_dict = DeploymentCollection.from_dict(deployment_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


