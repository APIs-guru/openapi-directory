# GoogleCloudAiplatformV1beta1UndeployModelOperationMetadata

Runtime operation information for EndpointService.UndeployModel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**generic_metadata** | [**GoogleCloudAiplatformV1beta1GenericOperationMetadata**](GoogleCloudAiplatformV1beta1GenericOperationMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_aiplatform_v1beta1_undeploy_model_operation_metadata import GoogleCloudAiplatformV1beta1UndeployModelOperationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudAiplatformV1beta1UndeployModelOperationMetadata from a JSON string
google_cloud_aiplatform_v1beta1_undeploy_model_operation_metadata_instance = GoogleCloudAiplatformV1beta1UndeployModelOperationMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudAiplatformV1beta1UndeployModelOperationMetadata.to_json())

# convert the object into a dict
google_cloud_aiplatform_v1beta1_undeploy_model_operation_metadata_dict = google_cloud_aiplatform_v1beta1_undeploy_model_operation_metadata_instance.to_dict()
# create an instance of GoogleCloudAiplatformV1beta1UndeployModelOperationMetadata from a dict
google_cloud_aiplatform_v1beta1_undeploy_model_operation_metadata_from_dict = GoogleCloudAiplatformV1beta1UndeployModelOperationMetadata.from_dict(google_cloud_aiplatform_v1beta1_undeploy_model_operation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


