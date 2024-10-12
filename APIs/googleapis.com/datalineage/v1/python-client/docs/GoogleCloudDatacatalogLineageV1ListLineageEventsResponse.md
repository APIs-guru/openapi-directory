# GoogleCloudDatacatalogLineageV1ListLineageEventsResponse

Response message for ListLineageEvents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lineage_events** | [**List[GoogleCloudDatacatalogLineageV1LineageEvent]**](GoogleCloudDatacatalogLineageV1LineageEvent.md) | Lineage events from the specified project and location. | [optional] 
**next_page_token** | **str** | The token to specify as &#x60;page_token&#x60; in the next call to get the next page. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_list_lineage_events_response import GoogleCloudDatacatalogLineageV1ListLineageEventsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1ListLineageEventsResponse from a JSON string
google_cloud_datacatalog_lineage_v1_list_lineage_events_response_instance = GoogleCloudDatacatalogLineageV1ListLineageEventsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1ListLineageEventsResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_list_lineage_events_response_dict = google_cloud_datacatalog_lineage_v1_list_lineage_events_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1ListLineageEventsResponse from a dict
google_cloud_datacatalog_lineage_v1_list_lineage_events_response_from_dict = GoogleCloudDatacatalogLineageV1ListLineageEventsResponse.from_dict(google_cloud_datacatalog_lineage_v1_list_lineage_events_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


