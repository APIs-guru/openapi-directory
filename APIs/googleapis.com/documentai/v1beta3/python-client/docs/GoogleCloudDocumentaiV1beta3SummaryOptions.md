# GoogleCloudDocumentaiV1beta3SummaryOptions

Metadata for document summarization.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**format** | **str** | The format the summary should be in. | [optional] 
**length** | **str** | How long the summary should be. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_documentai_v1beta3_summary_options import GoogleCloudDocumentaiV1beta3SummaryOptions

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDocumentaiV1beta3SummaryOptions from a JSON string
google_cloud_documentai_v1beta3_summary_options_instance = GoogleCloudDocumentaiV1beta3SummaryOptions.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDocumentaiV1beta3SummaryOptions.to_json())

# convert the object into a dict
google_cloud_documentai_v1beta3_summary_options_dict = google_cloud_documentai_v1beta3_summary_options_instance.to_dict()
# create an instance of GoogleCloudDocumentaiV1beta3SummaryOptions from a dict
google_cloud_documentai_v1beta3_summary_options_from_dict = GoogleCloudDocumentaiV1beta3SummaryOptions.from_dict(google_cloud_documentai_v1beta3_summary_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


