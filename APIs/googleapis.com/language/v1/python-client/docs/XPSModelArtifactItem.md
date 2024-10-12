# XPSModelArtifactItem

A single model artifact item.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**artifact_format** | **str** | The model artifact format. | [optional] 
**gcs_uri** | **str** | The Google Cloud Storage (GCS) uri that stores the model binary files. | [optional] 

## Example

```python
from openapi_client.models.xps_model_artifact_item import XPSModelArtifactItem

# TODO update the JSON string below
json = "{}"
# create an instance of XPSModelArtifactItem from a JSON string
xps_model_artifact_item_instance = XPSModelArtifactItem.from_json(json)
# print the JSON string representation of the object
print(XPSModelArtifactItem.to_json())

# convert the object into a dict
xps_model_artifact_item_dict = xps_model_artifact_item_instance.to_dict()
# create an instance of XPSModelArtifactItem from a dict
xps_model_artifact_item_from_dict = XPSModelArtifactItem.from_dict(xps_model_artifact_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


