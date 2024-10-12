# GoogleCloudDatalabelingV1beta1TextPayload

Container of information about a piece of text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**text_content** | **str** | Text content. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datalabeling_v1beta1_text_payload import GoogleCloudDatalabelingV1beta1TextPayload

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatalabelingV1beta1TextPayload from a JSON string
google_cloud_datalabeling_v1beta1_text_payload_instance = GoogleCloudDatalabelingV1beta1TextPayload.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatalabelingV1beta1TextPayload.to_json())

# convert the object into a dict
google_cloud_datalabeling_v1beta1_text_payload_dict = google_cloud_datalabeling_v1beta1_text_payload_instance.to_dict()
# create an instance of GoogleCloudDatalabelingV1beta1TextPayload from a dict
google_cloud_datalabeling_v1beta1_text_payload_from_dict = GoogleCloudDatalabelingV1beta1TextPayload.from_dict(google_cloud_datalabeling_v1beta1_text_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


