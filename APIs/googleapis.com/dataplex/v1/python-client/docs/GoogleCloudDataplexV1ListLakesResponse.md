# GoogleCloudDataplexV1ListLakesResponse

List lakes response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lakes** | [**List[GoogleCloudDataplexV1Lake]**](GoogleCloudDataplexV1Lake.md) | Lakes under the given parent location. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**unreachable_locations** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_lakes_response import GoogleCloudDataplexV1ListLakesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListLakesResponse from a JSON string
google_cloud_dataplex_v1_list_lakes_response_instance = GoogleCloudDataplexV1ListLakesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListLakesResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_lakes_response_dict = google_cloud_dataplex_v1_list_lakes_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListLakesResponse from a dict
google_cloud_dataplex_v1_list_lakes_response_from_dict = GoogleCloudDataplexV1ListLakesResponse.from_dict(google_cloud_dataplex_v1_list_lakes_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


