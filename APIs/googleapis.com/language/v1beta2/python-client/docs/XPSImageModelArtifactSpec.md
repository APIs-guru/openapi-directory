# XPSImageModelArtifactSpec

Stores the locations and related metadata of the model artifacts. Populated for uCAIP requests only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**checkpoint_artifact** | [**XPSModelArtifactItem**](XPSModelArtifactItem.md) |  | [optional] 
**export_artifact** | [**List[XPSModelArtifactItem]**](XPSModelArtifactItem.md) | The model binary files in different formats for model export. | [optional] 
**label_gcs_uri** | **str** | GCS uri of decoded labels file for model export &#39;dict.txt&#39;. | [optional] 
**serving_artifact** | [**XPSModelArtifactItem**](XPSModelArtifactItem.md) |  | [optional] 
**tf_js_binary_gcs_prefix** | **str** | GCS uri prefix of Tensorflow JavaScript binary files &#39;groupX-shardXofX.bin&#39; Deprecated. | [optional] 
**tf_lite_metadata_gcs_uri** | **str** | GCS uri of Tensorflow Lite metadata &#39;tflite_metadata.json&#39;. | [optional] 

## Example

```python
from openapi_client.models.xps_image_model_artifact_spec import XPSImageModelArtifactSpec

# TODO update the JSON string below
json = "{}"
# create an instance of XPSImageModelArtifactSpec from a JSON string
xps_image_model_artifact_spec_instance = XPSImageModelArtifactSpec.from_json(json)
# print the JSON string representation of the object
print(XPSImageModelArtifactSpec.to_json())

# convert the object into a dict
xps_image_model_artifact_spec_dict = xps_image_model_artifact_spec_instance.to_dict()
# create an instance of XPSImageModelArtifactSpec from a dict
xps_image_model_artifact_spec_from_dict = XPSImageModelArtifactSpec.from_dict(xps_image_model_artifact_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


