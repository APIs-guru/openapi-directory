# GoogleCloudDatalabelingV1beta1TextMetadata

Metadata for the text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_code** | **str** | The language of this text, as a [BCP-47](https://www.rfc-editor.org/rfc/bcp/bcp47.txt). Default value is en-US. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_text_metadata import GoogleCloudDatalabelingV1beta1TextMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1TextMetadata from a JSON string
google_cloud_datalabeling_v1beta1_text_metadata_instance = GoogleCloudDatalabelingV1beta1TextMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1TextMetadata.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_text_metadata_dict = google_cloud_datalabeling_v1beta1_text_metadata_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1TextMetadata from a dict
google_cloud_datalabeling_v1beta1_text_metadata_from_dict = GoogleCloudDatalabelingV1beta1TextMetadata.from_dict(google_cloud_datalabeling_v1beta1_text_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


