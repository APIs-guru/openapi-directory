# GoogleCloudDialogflowCxV3DeployFlowRequest

The request message for Environments.DeployFlow.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**flow_version** | **str** | Required. The flow version to deploy. Format: &#x60;projects//locations//agents// flows//versions/&#x60;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_deploy_flow_request import GoogleCloudDialogflowCxV3DeployFlowRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3DeployFlowRequest from a JSON string
google_cloud_dialogflow_cx_v3_deploy_flow_request_instance = GoogleCloudDialogflowCxV3DeployFlowRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3DeployFlowRequest.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_deploy_flow_request_dict = google_cloud_dialogflow_cx_v3_deploy_flow_request_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3DeployFlowRequest from a dict
google_cloud_dialogflow_cx_v3_deploy_flow_request_from_dict = GoogleCloudDialogflowCxV3DeployFlowRequest.from_dict(google_cloud_dialogflow_cx_v3_deploy_flow_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


