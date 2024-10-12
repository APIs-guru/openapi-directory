# XPSResponseExplanationMetadata


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inputs** | [**Dict[str, XPSResponseExplanationMetadataInputMetadata]**](XPSResponseExplanationMetadataInputMetadata.md) | Metadata of the input. | [optional] 
**outputs** | [**Dict[str, XPSResponseExplanationMetadataOutputMetadata]**](XPSResponseExplanationMetadataOutputMetadata.md) | Metadata of the output. | [optional] 

## Example

```python
from openapi_client.models.xps_response_explanation_metadata import XPSResponseExplanationMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of XPSResponseExplanationMetadata from a JSON string
xps_response_explanation_metadata_instance = XPSResponseExplanationMetadata.from_json(json)
# print the JSON string representation of the object
print(XPSResponseExplanationMetadata.to_json())

# convert the object into a dict
xps_response_explanation_metadata_dict = xps_response_explanation_metadata_instance.to_dict()
# create an instance of XPSResponseExplanationMetadata from a dict
xps_response_explanation_metadata_from_dict = XPSResponseExplanationMetadata.from_dict(xps_response_explanation_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


