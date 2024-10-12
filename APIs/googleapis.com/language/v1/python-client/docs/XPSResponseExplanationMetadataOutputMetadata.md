# XPSResponseExplanationMetadataOutputMetadata

Metadata of the prediction output to be explained.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**output_tensor_name** | **str** | Name of the output tensor. Only needed in train response. | [optional] 

## Example

```python
from openapi_client.models.xps_response_explanation_metadata_output_metadata import XPSResponseExplanationMetadataOutputMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of XPSResponseExplanationMetadataOutputMetadata from a JSON string
xps_response_explanation_metadata_output_metadata_instance = XPSResponseExplanationMetadataOutputMetadata.from_json(json)
# print the JSON string representation of the object
print(XPSResponseExplanationMetadataOutputMetadata.to_json())

# convert the object into a dict
xps_response_explanation_metadata_output_metadata_dict = xps_response_explanation_metadata_output_metadata_instance.to_dict()
# create an instance of XPSResponseExplanationMetadataOutputMetadata from a dict
xps_response_explanation_metadata_output_metadata_from_dict = XPSResponseExplanationMetadataOutputMetadata.from_dict(xps_response_explanation_metadata_output_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


