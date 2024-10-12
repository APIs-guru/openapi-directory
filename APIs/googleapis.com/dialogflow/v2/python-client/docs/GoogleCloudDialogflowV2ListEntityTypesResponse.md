# GoogleCloudDialogflowV2ListEntityTypesResponse

The response message for EntityTypes.ListEntityTypes.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_types** | [**List[GoogleCloudDialogflowV2EntityType]**](GoogleCloudDialogflowV2EntityType.md) | The list of agent entity types. There will be a maximum number of items returned based on the page_size field in the request. | [optional] 
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dialogflow_v2_list_entity_types_response import GoogleCloudDialogflowV2ListEntityTypesResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDialogflowV2ListEntityTypesResponse from a JSON string
google_cloud_dialogflow_v2_list_entity_types_response_instance = GoogleCloudDialogflowV2ListEntityTypesResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDialogflowV2ListEntityTypesResponse.to_json())

# convert the object into a dict
google_cloud_dialogflow_v2_list_entity_types_response_dict = google_cloud_dialogflow_v2_list_entity_types_response_instance.to_dict()
# create an instance of GoogleCloudDialogflowV2ListEntityTypesResponse from a dict
google_cloud_dialogflow_v2_list_entity_types_response_from_dict = GoogleCloudDialogflowV2ListEntityTypesResponse.from_dict(google_cloud_dialogflow_v2_list_entity_types_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


