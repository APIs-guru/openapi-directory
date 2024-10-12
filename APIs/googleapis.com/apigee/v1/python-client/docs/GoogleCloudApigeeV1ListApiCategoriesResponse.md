# GoogleCloudApigeeV1ListApiCategoriesResponse

The response for `ListApiCategoriesRequest`. Next ID: 6

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**data** | [**List[GoogleCloudApigeeV1ApiCategory]**](GoogleCloudApigeeV1ApiCategory.md) | The API category resources. | [optional] 
**error_code** | **str** | Unique error code for the request, if any. | [optional] 
**message** | **str** | Description of the operation. | [optional] 
**request_id** | **str** | Unique ID of the request. | [optional] 
**status** | **str** | Status of the operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_api_categories_response import GoogleCloudApigeeV1ListApiCategoriesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListApiCategoriesResponse from a JSON string
google_cloud_apigee_v1_list_api_categories_response_instance = GoogleCloudApigeeV1ListApiCategoriesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListApiCategoriesResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_api_categories_response_dict = google_cloud_apigee_v1_list_api_categories_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListApiCategoriesResponse from a dict
google_cloud_apigee_v1_list_api_categories_response_from_dict = GoogleCloudApigeeV1ListApiCategoriesResponse.from_dict(google_cloud_apigee_v1_list_api_categories_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


