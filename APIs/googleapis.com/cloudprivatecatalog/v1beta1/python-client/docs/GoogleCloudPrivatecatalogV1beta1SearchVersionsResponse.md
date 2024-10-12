# GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse

Response message for PrivateCatalog.SearchVersions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A pagination token returned from a previous call to SearchVersions that indicates from where the listing should continue. This field is optional. | [optional] 
**versions** | [**List[GoogleCloudPrivatecatalogV1beta1Version]**](GoogleCloudPrivatecatalogV1beta1Version.md) | The &#x60;Version&#x60; resources computed from the resource context. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_privatecatalog_v1beta1_search_versions_response import GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse from a JSON string
google_cloud_privatecatalog_v1beta1_search_versions_response_instance = GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse.to_json())

# convert the object into a dict
google_cloud_privatecatalog_v1beta1_search_versions_response_dict = google_cloud_privatecatalog_v1beta1_search_versions_response_instance.to_dict()
# create an instance of GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse from a dict
google_cloud_privatecatalog_v1beta1_search_versions_response_from_dict = GoogleCloudPrivatecatalogV1beta1SearchVersionsResponse.from_dict(google_cloud_privatecatalog_v1beta1_search_versions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


