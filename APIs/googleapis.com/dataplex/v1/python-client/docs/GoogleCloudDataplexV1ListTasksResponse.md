# GoogleCloudDataplexV1ListTasksResponse

List tasks response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**tasks** | [**List[GoogleCloudDataplexV1Task]**](GoogleCloudDataplexV1Task.md) | Tasks under the given parent lake. | [optional] 
**unreachable_locations** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_tasks_response import GoogleCloudDataplexV1ListTasksResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListTasksResponse from a JSON string
google_cloud_dataplex_v1_list_tasks_response_instance = GoogleCloudDataplexV1ListTasksResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListTasksResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_tasks_response_dict = google_cloud_dataplex_v1_list_tasks_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListTasksResponse from a dict
google_cloud_dataplex_v1_list_tasks_response_from_dict = GoogleCloudDataplexV1ListTasksResponse.from_dict(google_cloud_dataplex_v1_list_tasks_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


