# GoogleCloudDatacatalogV1ListPolicyTagsResponse

Response message for ListPolicyTags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Pagination token of the next results page. Empty if there are no more results in the list. | [optional] 
**policy_tags** | [**List[GoogleCloudDatacatalogV1PolicyTag]**](GoogleCloudDatacatalogV1PolicyTag.md) | The policy tags that belong to the taxonomy. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_list_policy_tags_response import GoogleCloudDatacatalogV1ListPolicyTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ListPolicyTagsResponse from a JSON string
google_cloud_datacatalog_v1_list_policy_tags_response_instance = GoogleCloudDatacatalogV1ListPolicyTagsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ListPolicyTagsResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_list_policy_tags_response_dict = google_cloud_datacatalog_v1_list_policy_tags_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ListPolicyTagsResponse from a dict
google_cloud_datacatalog_v1_list_policy_tags_response_from_dict = GoogleCloudDatacatalogV1ListPolicyTagsResponse.from_dict(google_cloud_datacatalog_v1_list_policy_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


