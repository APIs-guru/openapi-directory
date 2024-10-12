# GoogleCloudDataplexV1ListSessionsResponse

List sessions response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**sessions** | [**List[GoogleCloudDataplexV1Session]**](GoogleCloudDataplexV1Session.md) | Sessions under a given environment. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_sessions_response import GoogleCloudDataplexV1ListSessionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListSessionsResponse from a JSON string
google_cloud_dataplex_v1_list_sessions_response_instance = GoogleCloudDataplexV1ListSessionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListSessionsResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_sessions_response_dict = google_cloud_dataplex_v1_list_sessions_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListSessionsResponse from a dict
google_cloud_dataplex_v1_list_sessions_response_from_dict = GoogleCloudDataplexV1ListSessionsResponse.from_dict(google_cloud_dataplex_v1_list_sessions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


