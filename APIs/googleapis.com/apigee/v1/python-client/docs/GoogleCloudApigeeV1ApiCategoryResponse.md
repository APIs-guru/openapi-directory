# GoogleCloudApigeeV1ApiCategoryResponse

The API category resource wrapped with response status, error_code, etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**GoogleCloudApigeeV1ApiCategory**](GoogleCloudApigeeV1ApiCategory.md) |  | [optional] 
**error_code** | **str** | Unique error code for the request, if any. | [optional] 
**message** | **str** | Description of the operation. | [optional] 
**request_id** | **str** | Unique ID of the request. | [optional] 
**status** | **str** | Status of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_api_category_response import GoogleCloudApigeeV1ApiCategoryResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ApiCategoryResponse from a JSON string
google_cloud_apigee_v1_api_category_response_instance = GoogleCloudApigeeV1ApiCategoryResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ApiCategoryResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_api_category_response_dict = google_cloud_apigee_v1_api_category_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ApiCategoryResponse from a dict
google_cloud_apigee_v1_api_category_response_from_dict = GoogleCloudApigeeV1ApiCategoryResponse.from_dict(google_cloud_apigee_v1_api_category_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


