# CodePushDeploymentMetricsGet200ResponseInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **int** |  | 
**downloaded** | **int** |  | [optional] 
**failed** | **int** |  | [optional] 
**installed** | **int** |  | [optional] 
**label** | **str** |  | 

## Example

```python
from openapi_client.models.code_push_deployment_metrics_get200_response_inner import CodePushDeploymentMetricsGet200ResponseInner

# TODO update the JSON string below
json = "{}"
# create an instance of CodePushDeploymentMetricsGet200ResponseInner from a JSON string
code_push_deployment_metrics_get200_response_inner_instance = CodePushDeploymentMetricsGet200ResponseInner.from_json(json)
# print the JSON string representation of the object
print(CodePushDeploymentMetricsGet200ResponseInner.to_json())

# convert the object into a dict
code_push_deployment_metrics_get200_response_inner_dict = code_push_deployment_metrics_get200_response_inner_instance.to_dict()
# create an instance of CodePushDeploymentMetricsGet200ResponseInner from a dict
code_push_deployment_metrics_get200_response_inner_from_dict = CodePushDeploymentMetricsGet200ResponseInner.from_dict(code_push_deployment_metrics_get200_response_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


