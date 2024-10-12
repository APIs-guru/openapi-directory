# GoogleCloudDocumentaiV1DocumentPageDimension

Dimension for the page.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**height** | **float** | Page height. | [optional] 
**unit** | **str** | Dimension unit. | [optional] 
**width** | **float** | Page width. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1_document_page_dimension import GoogleCloudDocumentaiV1DocumentPageDimension

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1DocumentPageDimension from a JSON string
google_cloud_documentai_v1_document_page_dimension_instance = GoogleCloudDocumentaiV1DocumentPageDimension.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1DocumentPageDimension.to_json())

# convert the object into a dict
google_cloud_documentai_v1_document_page_dimension_dict = google_cloud_documentai_v1_document_page_dimension_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1DocumentPageDimension from a dict
google_cloud_documentai_v1_document_page_dimension_from_dict = GoogleCloudDocumentaiV1DocumentPageDimension.from_dict(google_cloud_documentai_v1_document_page_dimension_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


