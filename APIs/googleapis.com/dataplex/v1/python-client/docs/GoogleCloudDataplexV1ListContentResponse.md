# GoogleCloudDataplexV1ListContentResponse

List content response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | [**List[GoogleCloudDataplexV1Content]**](GoogleCloudDataplexV1Content.md) | Content under the given parent lake. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_content_response import GoogleCloudDataplexV1ListContentResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListContentResponse from a JSON string
google_cloud_dataplex_v1_list_content_response_instance = GoogleCloudDataplexV1ListContentResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListContentResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_content_response_dict = google_cloud_dataplex_v1_list_content_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListContentResponse from a dict
google_cloud_dataplex_v1_list_content_response_from_dict = GoogleCloudDataplexV1ListContentResponse.from_dict(google_cloud_dataplex_v1_list_content_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


