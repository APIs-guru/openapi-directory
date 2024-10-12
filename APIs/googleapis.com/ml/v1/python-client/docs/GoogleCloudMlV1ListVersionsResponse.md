# GoogleCloudMlV1ListVersionsResponse

Response message for the ListVersions method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Optional. Pass this token as the &#x60;page_token&#x60; field of the request for a subsequent call. | [optional] 
**versions** | [**List[GoogleCloudMlV1Version]**](GoogleCloudMlV1Version.md) | The list of versions. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_ml_v1_list_versions_response import GoogleCloudMlV1ListVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudMlV1ListVersionsResponse from a JSON string
google_cloud_ml_v1_list_versions_response_instance = GoogleCloudMlV1ListVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudMlV1ListVersionsResponse.to_json())

# convert the object into a dict
google_cloud_ml_v1_list_versions_response_dict = google_cloud_ml_v1_list_versions_response_instance.to_dict()
# create an instance of GoogleCloudMlV1ListVersionsResponse from a dict
google_cloud_ml_v1_list_versions_response_from_dict = GoogleCloudMlV1ListVersionsResponse.from_dict(google_cloud_ml_v1_list_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


