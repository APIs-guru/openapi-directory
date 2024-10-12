# DeploymentResourceCollection

Object that includes an array of App resources and a possible link for next set

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | URL client should use to fetch the next page (per server side paging).  It&#39;s null for now, added for future use. | [optional] 
**value** | [**List[DeploymentResource]**](DeploymentResource.md) | Collection of Deployment resources | [optional] 

## Example

```python
from openapi_client.models.deployment_resource_collection import DeploymentResourceCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentResourceCollection from a JSON string
deployment_resource_collection_instance = DeploymentResourceCollection.from_json(json)
# print the JSON string representation of the object
print(DeploymentResourceCollection.to_json())

# convert the object into a dict
deployment_resource_collection_dict = deployment_resource_collection_instance.to_dict()
# create an instance of DeploymentResourceCollection from a dict
deployment_resource_collection_from_dict = DeploymentResourceCollection.from_dict(deployment_resource_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


