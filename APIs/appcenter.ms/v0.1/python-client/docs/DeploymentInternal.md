# DeploymentInternal


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | [optional] 
**key** | **str** |  | [optional] 
**latest_release** | [**DeploymentInternalAllOfLatestRelease**](DeploymentInternalAllOfLatestRelease.md) |  | [optional] 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.deployment_internal import DeploymentInternal

# TODO update the JSON string below
json = "{}"
# create an instance of DeploymentInternal from a JSON string
deployment_internal_instance = DeploymentInternal.from_json(json)
# print the JSON string representation of the object
print(DeploymentInternal.to_json())

# convert the object into a dict
deployment_internal_dict = deployment_internal_instance.to_dict()
# create an instance of DeploymentInternal from a dict
deployment_internal_from_dict = DeploymentInternal.from_dict(deployment_internal_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


