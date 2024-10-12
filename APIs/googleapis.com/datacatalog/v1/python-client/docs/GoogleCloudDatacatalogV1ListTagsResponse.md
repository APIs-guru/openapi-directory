# GoogleCloudDatacatalogV1ListTagsResponse

Response message for ListTags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token of the next results page. Empty if there are no more items in results. | [optional] 
**tags** | [**List[GoogleCloudDatacatalogV1Tag]**](GoogleCloudDatacatalogV1Tag.md) | Tag details. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_list_tags_response import GoogleCloudDatacatalogV1ListTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ListTagsResponse from a JSON string
google_cloud_datacatalog_v1_list_tags_response_instance = GoogleCloudDatacatalogV1ListTagsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ListTagsResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_list_tags_response_dict = google_cloud_datacatalog_v1_list_tags_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ListTagsResponse from a dict
google_cloud_datacatalog_v1_list_tags_response_from_dict = GoogleCloudDatacatalogV1ListTagsResponse.from_dict(google_cloud_datacatalog_v1_list_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


