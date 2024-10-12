# GoogleCloudRunV2ListRevisionsResponse

Response message containing a list of Revisions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token indicating there are more items than page_size. Use it in the next ListRevisions request to continue. | [optional] 
**revisions** | [**List[GoogleCloudRunV2Revision]**](GoogleCloudRunV2Revision.md) | The resulting list of Revisions. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_run_v2_list_revisions_response import GoogleCloudRunV2ListRevisionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRunV2ListRevisionsResponse from a JSON string
google_cloud_run_v2_list_revisions_response_instance = GoogleCloudRunV2ListRevisionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRunV2ListRevisionsResponse.to_json())

# convert the object into a dict
google_cloud_run_v2_list_revisions_response_dict = google_cloud_run_v2_list_revisions_response_instance.to_dict()
# create an instance of GoogleCloudRunV2ListRevisionsResponse from a dict
google_cloud_run_v2_list_revisions_response_from_dict = GoogleCloudRunV2ListRevisionsResponse.from_dict(google_cloud_run_v2_list_revisions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


