# GoogleCloudApigeeV1GenerateUploadUrlResponse

Response for GenerateUploadUrl method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**upload_uri** | **str** | The Google Cloud Storage signed URL that can be used to upload a new Archive zip file. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_generate_upload_url_response import GoogleCloudApigeeV1GenerateUploadUrlResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1GenerateUploadUrlResponse from a JSON string
google_cloud_apigee_v1_generate_upload_url_response_instance = GoogleCloudApigeeV1GenerateUploadUrlResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1GenerateUploadUrlResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_generate_upload_url_response_dict = google_cloud_apigee_v1_generate_upload_url_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1GenerateUploadUrlResponse from a dict
google_cloud_apigee_v1_generate_upload_url_response_from_dict = GoogleCloudApigeeV1GenerateUploadUrlResponse.from_dict(google_cloud_apigee_v1_generate_upload_url_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


