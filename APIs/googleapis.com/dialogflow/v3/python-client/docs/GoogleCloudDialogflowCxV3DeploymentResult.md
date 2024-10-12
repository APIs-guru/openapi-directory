# GoogleCloudDialogflowCxV3DeploymentResult

Result of the deployment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment_test_results** | **List[str]** | Results of test cases running before the deployment. Format: &#x60;projects//locations//agents//testCases//results/&#x60;. | [optional] 
**experiment** | **str** | The name of the experiment triggered by this deployment. Format: projects//locations//agents//environments//experiments/. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_cx_v3_deployment_result import GoogleCloudDialogflowCxV3DeploymentResult

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowCxV3DeploymentResult from a JSON string
google_cloud_dialogflow_cx_v3_deployment_result_instance = GoogleCloudDialogflowCxV3DeploymentResult.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowCxV3DeploymentResult.to_json())

# convert the object into a dict
google_cloud_dialogflow_cx_v3_deployment_result_dict = google_cloud_dialogflow_cx_v3_deployment_result_instance.to_dict()
# create an instance of GoogleCloudDialogflowCxV3DeploymentResult from a dict
google_cloud_dialogflow_cx_v3_deployment_result_from_dict = GoogleCloudDialogflowCxV3DeploymentResult.from_dict(google_cloud_dialogflow_cx_v3_deployment_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


