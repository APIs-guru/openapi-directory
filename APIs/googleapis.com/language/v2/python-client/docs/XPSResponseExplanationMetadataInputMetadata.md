# XPSResponseExplanationMetadataInputMetadata

Metadata of the input of a feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input_tensor_name** | **str** | Name of the input tensor for this model. Only needed in train response. | [optional] 
**modality** | **str** | Modality of the feature. Valid values are: numeric, image. Defaults to numeric. | [optional] 
**visualization_config** | [**XPSVisualization**](XPSVisualization.md) |  | [optional] 

## Example

```python
from openapi_client.models.xps_response_explanation_metadata_input_metadata import XPSResponseExplanationMetadataInputMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of XPSResponseExplanationMetadataInputMetadata from a JSON string
xps_response_explanation_metadata_input_metadata_instance = XPSResponseExplanationMetadataInputMetadata.from_json(json)
# print the JSON string representation of the object
print(XPSResponseExplanationMetadataInputMetadata.to_json())

# convert the object into a dict
xps_response_explanation_metadata_input_metadata_dict = xps_response_explanation_metadata_input_metadata_instance.to_dict()
# create an instance of XPSResponseExplanationMetadataInputMetadata from a dict
xps_response_explanation_metadata_input_metadata_from_dict = XPSResponseExplanationMetadataInputMetadata.from_dict(xps_response_explanation_metadata_input_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


