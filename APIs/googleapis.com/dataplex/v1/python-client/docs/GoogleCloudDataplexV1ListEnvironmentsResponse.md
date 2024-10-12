# GoogleCloudDataplexV1ListEnvironmentsResponse

List environments response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**environments** | [**List[GoogleCloudDataplexV1Environment]**](GoogleCloudDataplexV1Environment.md) | Environments under the given parent lake. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_environments_response import GoogleCloudDataplexV1ListEnvironmentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListEnvironmentsResponse from a JSON string
google_cloud_dataplex_v1_list_environments_response_instance = GoogleCloudDataplexV1ListEnvironmentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListEnvironmentsResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_environments_response_dict = google_cloud_dataplex_v1_list_environments_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListEnvironmentsResponse from a dict
google_cloud_dataplex_v1_list_environments_response_from_dict = GoogleCloudDataplexV1ListEnvironmentsResponse.from_dict(google_cloud_dataplex_v1_list_environments_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


