# RollbackApiDeploymentRequest

Request message for RollbackApiDeployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Required. The deployment being rolled back. | 
**revision_id** | **str** | Required. The revision ID to roll back to. It must be a revision of the same deployment.   Example: c7cfa2a8 | 

## Example

```python
from openapi_client.models.rollback_api_deployment_request import RollbackApiDeploymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of RollbackApiDeploymentRequest from a JSON string
rollback_api_deployment_request_instance = RollbackApiDeploymentRequest.from_json(json)
# print the JSON string representation of the object
print(RollbackApiDeploymentRequest.to_json())

# convert the object into a dict
rollback_api_deployment_request_dict = rollback_api_deployment_request_instance.to_dict()
# create an instance of RollbackApiDeploymentRequest from a dict
rollback_api_deployment_request_from_dict = RollbackApiDeploymentRequest.from_dict(rollback_api_deployment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


