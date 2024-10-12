# CodePushDeploymentsPromoteRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** |  | [optional] 
**is_disabled** | **bool** |  | [optional] 
**is_mandatory** | **bool** |  | [optional] 
**rollout** | **int** |  | [optional] 
**target_binary_range** | **str** |  | [optional] 
**label** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.code_push_deployments_promote_request import CodePushDeploymentsPromoteRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CodePushDeploymentsPromoteRequest from a JSON string
code_push_deployments_promote_request_instance = CodePushDeploymentsPromoteRequest.from_json(json)
# print the JSON string representation of the object
print(CodePushDeploymentsPromoteRequest.to_json())

# convert the object into a dict
code_push_deployments_promote_request_dict = code_push_deployments_promote_request_instance.to_dict()
# create an instance of CodePushDeploymentsPromoteRequest from a dict
code_push_deployments_promote_request_from_dict = CodePushDeploymentsPromoteRequest.from_dict(code_push_deployments_promote_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


