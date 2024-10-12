# GoogleCloudDocumentaiV1beta2TableBoundHint

A hint for a table bounding box on the page for table parsing.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bounding_box** | [**GoogleCloudDocumentaiV1beta2BoundingPoly**](GoogleCloudDocumentaiV1beta2BoundingPoly.md) |  | [optional] 
**page_number** | **int** | Optional. Page number for multi-paged inputs this hint applies to. If not provided, this hint will apply to all pages by default. This value is 1-based. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta2_table_bound_hint import GoogleCloudDocumentaiV1beta2TableBoundHint

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta2TableBoundHint from a JSON string
google_cloud_documentai_v1beta2_table_bound_hint_instance = GoogleCloudDocumentaiV1beta2TableBoundHint.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta2TableBoundHint.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta2_table_bound_hint_dict = google_cloud_documentai_v1beta2_table_bound_hint_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta2TableBoundHint from a dict
google_cloud_documentai_v1beta2_table_bound_hint_from_dict = GoogleCloudDocumentaiV1beta2TableBoundHint.from_dict(google_cloud_documentai_v1beta2_table_bound_hint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


