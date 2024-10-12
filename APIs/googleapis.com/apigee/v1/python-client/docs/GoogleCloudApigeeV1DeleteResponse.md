# GoogleCloudApigeeV1DeleteResponse

Response for certain delete operations.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error_code** | **str** | Unique error code for the request, if any. | [optional] 
**gcp_resource** | **str** | Google Cloud name of deleted resource. | [optional] 
**message** | **str** | Description of the operation. | [optional] 
**request_id** | **str** | Unique ID of the request. | [optional] 
**status** | **str** | Status of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_delete_response import GoogleCloudApigeeV1DeleteResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DeleteResponse from a JSON string
google_cloud_apigee_v1_delete_response_instance = GoogleCloudApigeeV1DeleteResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DeleteResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_delete_response_dict = google_cloud_apigee_v1_delete_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DeleteResponse from a dict
google_cloud_apigee_v1_delete_response_from_dict = GoogleCloudApigeeV1DeleteResponse.from_dict(google_cloud_apigee_v1_delete_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


