# XPSVideoModelArtifactSpec


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**export_artifact** | [**List[XPSModelArtifactItem]**](XPSModelArtifactItem.md) | The model binary files in different formats for model export. | [optional] 
**serving_artifact** | [**XPSModelArtifactItem**](XPSModelArtifactItem.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_video_model_artifact_spec import XPSVideoModelArtifactSpec

# TODO update the JSON string below
json = "{}"
# create an instance of XPSVideoModelArtifactSpec from a JSON string
xps_video_model_artifact_spec_instance = XPSVideoModelArtifactSpec.from_json(json)
# print the JSON string representation of the object
print(XPSVideoModelArtifactSpec.to_json())

# convert the object into a dict
xps_video_model_artifact_spec_dict = xps_video_model_artifact_spec_instance.to_dict()
# create an instance of XPSVideoModelArtifactSpec from a dict
xps_video_model_artifact_spec_from_dict = XPSVideoModelArtifactSpec.from_dict(xps_video_model_artifact_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


