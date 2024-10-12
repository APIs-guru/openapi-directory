# GoogleCloudDataplexV1ListEntitiesResponse

List metadata entities response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entities** | [**List[GoogleCloudDataplexV1Entity]**](GoogleCloudDataplexV1Entity.md) | Entities in the specified parent zone. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no remaining results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_list_entities_response import GoogleCloudDataplexV1ListEntitiesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1ListEntitiesResponse from a JSON string
google_cloud_dataplex_v1_list_entities_response_instance = GoogleCloudDataplexV1ListEntitiesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1ListEntitiesResponse.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_list_entities_response_dict = google_cloud_dataplex_v1_list_entities_response_instance.to_dict()
# create an instance of GoogleCloudDataplexV1ListEntitiesResponse from a dict
google_cloud_dataplex_v1_list_entities_response_from_dict = GoogleCloudDataplexV1ListEntitiesResponse.from_dict(google_cloud_dataplex_v1_list_entities_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


