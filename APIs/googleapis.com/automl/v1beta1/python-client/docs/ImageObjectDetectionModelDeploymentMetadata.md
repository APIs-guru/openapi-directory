# ImageObjectDetectionModelDeploymentMetadata

Model deployment metadata specific to Image Object Detection.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**node_count** | **str** | Input only. The number of nodes to deploy the model on. A node is an abstraction of a machine resource, which can handle online prediction QPS as given in the model&#39;s qps_per_node. Must be between 1 and 100, inclusive on both ends. | [optional] 

## Example

```python
from openapi_client.models.image_object_detection_model_deployment_metadata import ImageObjectDetectionModelDeploymentMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of ImageObjectDetectionModelDeploymentMetadata from a JSON string
image_object_detection_model_deployment_metadata_instance = ImageObjectDetectionModelDeploymentMetadata.from_json(json)
# print the JSON string representation of the object
print(ImageObjectDetectionModelDeploymentMetadata.to_json())

# convert the object into a dict
image_object_detection_model_deployment_metadata_dict = image_object_detection_model_deployment_metadata_instance.to_dict()
# create an instance of ImageObjectDetectionModelDeploymentMetadata from a dict
image_object_detection_model_deployment_metadata_from_dict = ImageObjectDetectionModelDeploymentMetadata.from_dict(image_object_detection_model_deployment_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


