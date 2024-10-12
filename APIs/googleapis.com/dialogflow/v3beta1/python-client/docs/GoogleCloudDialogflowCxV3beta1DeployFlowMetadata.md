# GoogleCloudDialogflowCxV3beta1DeployFlowMetadata

Metadata returned for the Environments.DeployFlow long running operation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**test_errors** | [**List[GoogleCloudDialogflowCxV3beta1TestError]**](GoogleCloudDialogflowCxV3beta1TestError.md) | Errors of running deployment tests. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3beta1_deploy_flow_metadata import GoogleCloudDialogflowCxV3beta1DeployFlowMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3beta1DeployFlowMetadata from a JSON string
google_cloud_dialogflow_cx_v3beta1_deploy_flow_metadata_instance = GoogleCloudDialogflowCxV3beta1DeployFlowMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3beta1DeployFlowMetadata.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3beta1_deploy_flow_metadata_dict = google_cloud_dialogflow_cx_v3beta1_deploy_flow_metadata_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3beta1DeployFlowMetadata from a dict
google_cloud_dialogflow_cx_v3beta1_deploy_flow_metadata_from_dict = GoogleCloudDialogflowCxV3beta1DeployFlowMetadata.from_dict(google_cloud_dialogflow_cx_v3beta1_deploy_flow_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


