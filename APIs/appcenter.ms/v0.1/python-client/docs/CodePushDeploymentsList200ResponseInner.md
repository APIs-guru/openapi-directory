# CodePushDeploymentsList200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** |  | [optional] 
**latest_release** | [**CodePushDeploymentsList200ResponseInnerLatestRelease**](CodePushDeploymentsList200ResponseInnerLatestRelease.md) |  | [optional] 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.code_push_deployments_list200_response_inner import CodePushDeploymentsList200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of CodePushDeploymentsList200ResponseInner from a JSON string
code_push_deployments_list200_response_inner_instance = CodePushDeploymentsList200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(CodePushDeploymentsList200ResponseInner.to_json())

# convert the object into a dict
code_push_deployments_list200_response_inner_dict = code_push_deployments_list200_response_inner_instance.to_dict()
# create an instance of CodePushDeploymentsList200ResponseInner from a dict
code_push_deployments_list200_response_inner_from_dict = CodePushDeploymentsList200ResponseInner.from_dict(code_push_deployments_list200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


