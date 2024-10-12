# GoogleCloudDatacatalogV1beta1ListTagsResponse

Response message for ListTags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results. It is set to empty if no items remain in results. | [optional] 
**tags** | [**List[GoogleCloudDatacatalogV1beta1Tag]**](GoogleCloudDatacatalogV1beta1Tag.md) | Tag details. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1beta1_list_tags_response import GoogleCloudDatacatalogV1beta1ListTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1beta1ListTagsResponse from a JSON string
google_cloud_datacatalog_v1beta1_list_tags_response_instance = GoogleCloudDatacatalogV1beta1ListTagsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1beta1ListTagsResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1beta1_list_tags_response_dict = google_cloud_datacatalog_v1beta1_list_tags_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1beta1ListTagsResponse from a dict
google_cloud_datacatalog_v1beta1_list_tags_response_from_dict = GoogleCloudDatacatalogV1beta1ListTagsResponse.from_dict(google_cloud_datacatalog_v1beta1_list_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


