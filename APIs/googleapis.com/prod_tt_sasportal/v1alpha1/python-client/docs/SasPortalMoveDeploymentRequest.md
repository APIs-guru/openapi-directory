# SasPortalMoveDeploymentRequest

Request for MoveDeployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**destination** | **str** | Required. The name of the new parent resource node or customer to reparent the deployment under. | [optional] 

## Example

```python
from openapi_client.models.sas_portal_move_deployment_request import SasPortalMoveDeploymentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of SasPortalMoveDeploymentRequest from a JSON string
sas_portal_move_deployment_request_instance = SasPortalMoveDeploymentRequest.from_json(json)
# print the JSON string representation of the object
print(SasPortalMoveDeploymentRequest.to_json())

# convert the object into a dict
sas_portal_move_deployment_request_dict = sas_portal_move_deployment_request_instance.to_dict()
# create an instance of SasPortalMoveDeploymentRequest from a dict
sas_portal_move_deployment_request_from_dict = SasPortalMoveDeploymentRequest.from_dict(sas_portal_move_deployment_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


