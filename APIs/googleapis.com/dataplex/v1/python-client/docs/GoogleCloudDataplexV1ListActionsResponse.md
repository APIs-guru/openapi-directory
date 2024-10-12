# GoogleCloudDataplexV1ListActionsResponse

List actions response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[GoogleCloudDataplexV1Action]**](GoogleCloudDataplexV1Action.md) | Actions under the given parent lake/zone/asset. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_actions_response import GoogleCloudDataplexV1ListActionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListActionsResponse from a JSON string
google_cloud_dataplex_v1_list_actions_response_instance = GoogleCloudDataplexV1ListActionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListActionsResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_actions_response_dict = google_cloud_dataplex_v1_list_actions_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListActionsResponse from a dict
google_cloud_dataplex_v1_list_actions_response_from_dict = GoogleCloudDataplexV1ListActionsResponse.from_dict(google_cloud_dataplex_v1_list_actions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


