# GoogleCloudApigeeV1GenerateDownloadUrlResponse

Response for GenerateDownloadUrl method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_uri** | **str** | The Google Cloud Storage signed URL that can be used to download the Archive zip file. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_generate_download_url_response import GoogleCloudApigeeV1GenerateDownloadUrlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1GenerateDownloadUrlResponse from a JSON string
google_cloud_apigee_v1_generate_download_url_response_instance = GoogleCloudApigeeV1GenerateDownloadUrlResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1GenerateDownloadUrlResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_generate_download_url_response_dict = google_cloud_apigee_v1_generate_download_url_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1GenerateDownloadUrlResponse from a dict
google_cloud_apigee_v1_generate_download_url_response_from_dict = GoogleCloudApigeeV1GenerateDownloadUrlResponse.from_dict(google_cloud_apigee_v1_generate_download_url_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


