# GoogleCloudDocumentaiV1beta3PropertyMetadata

Metadata about a property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**field_extraction_metadata** | [**GoogleCloudDocumentaiV1beta3FieldExtractionMetadata**](GoogleCloudDocumentaiV1beta3FieldExtractionMetadata.md) |  | [optional] 
**inactive** | **bool** | Whether the property should be considered as \&quot;inactive\&quot;. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_property_metadata import GoogleCloudDocumentaiV1beta3PropertyMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3PropertyMetadata from a JSON string
google_cloud_documentai_v1beta3_property_metadata_instance = GoogleCloudDocumentaiV1beta3PropertyMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3PropertyMetadata.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_property_metadata_dict = google_cloud_documentai_v1beta3_property_metadata_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3PropertyMetadata from a dict
google_cloud_documentai_v1beta3_property_metadata_from_dict = GoogleCloudDocumentaiV1beta3PropertyMetadata.from_dict(google_cloud_documentai_v1beta3_property_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


