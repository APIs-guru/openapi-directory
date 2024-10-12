# ComposeDeploymentStatusInfo

Information about a Service Fabric compose deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_name** | **str** | The name of the application, including the &#39;fabric:&#39; URI scheme. | [optional] 
**name** | **str** | The name of the deployment. | [optional] 
**status** | [**ComposeDeploymentStatus**](ComposeDeploymentStatus.md) |  | [optional] 
**status_details** | **str** | The status details of compose deployment including failure message. | [optional] 

## Example

```python
from openapi_client.models.compose_deployment_status_info import ComposeDeploymentStatusInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ComposeDeploymentStatusInfo from a JSON string
compose_deployment_status_info_instance = ComposeDeploymentStatusInfo.from_json(json)
# print the JSON string representation of the object
print(ComposeDeploymentStatusInfo.to_json())

# convert the object into a dict
compose_deployment_status_info_dict = compose_deployment_status_info_instance.to_dict()
# create an instance of ComposeDeploymentStatusInfo from a dict
compose_deployment_status_info_from_dict = ComposeDeploymentStatusInfo.from_dict(compose_deployment_status_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


