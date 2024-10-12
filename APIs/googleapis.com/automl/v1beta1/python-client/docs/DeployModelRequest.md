# DeployModelRequest

Request message for AutoMl.DeployModel.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image_classification_model_deployment_metadata** | [**ImageClassificationModelDeploymentMetadata**](ImageClassificationModelDeploymentMetadata.md) |  | [optional] 
**image_object_detection_model_deployment_metadata** | [**ImageObjectDetectionModelDeploymentMetadata**](ImageObjectDetectionModelDeploymentMetadata.md) |  | [optional] 

## Example

```python
from openapi_client.models.deploy_model_request import DeployModelRequest

# TODO update the JSON string below
json = "{}"
# create an instance of DeployModelRequest from a JSON string
deploy_model_request_instance = DeployModelRequest.from_json(json)
# print the JSON string representation of the object
print(DeployModelRequest.to_json())

# convert the object into a dict
deploy_model_request_dict = deploy_model_request_instance.to_dict()
# create an instance of DeployModelRequest from a dict
deploy_model_request_from_dict = DeployModelRequest.from_dict(deploy_model_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


