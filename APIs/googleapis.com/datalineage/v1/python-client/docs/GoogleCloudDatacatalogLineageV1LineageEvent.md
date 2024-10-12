# GoogleCloudDatacatalogLineageV1LineageEvent

A lineage event represents an operation on assets. Within the operation, the data flows from the source to the target defined in the links field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | Optional. The end of the transformation which resulted in this lineage event. For streaming scenarios, it should be the end of the period from which the lineage is being reported. | [optional] 
**links** | [**List[GoogleCloudDatacatalogLineageV1EventLink]**](GoogleCloudDatacatalogLineageV1EventLink.md) | Optional. List of source-target pairs. Can&#39;t contain more than 100 tuples. | [optional] 
**name** | **str** | Immutable. The resource name of the lineage event. Format: &#x60;projects/{project}/locations/{location}/processes/{process}/runs/{run}/lineageEvents/{lineage_event}&#x60;. Can be specified or auto-assigned. {lineage_event} must be not longer than 200 characters and only contain characters in a set: &#x60;a-zA-Z0-9_-:.&#x60; | [optional] 
**start_time** | **str** | Required. The beginning of the transformation which resulted in this lineage event. For streaming scenarios, it should be the beginning of the period from which the lineage is being reported. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_lineage_event import GoogleCloudDatacatalogLineageV1LineageEvent

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1LineageEvent from a JSON string
google_cloud_datacatalog_lineage_v1_lineage_event_instance = GoogleCloudDatacatalogLineageV1LineageEvent.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1LineageEvent.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_lineage_event_dict = google_cloud_datacatalog_lineage_v1_lineage_event_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1LineageEvent from a dict
google_cloud_datacatalog_lineage_v1_lineage_event_from_dict = GoogleCloudDatacatalogLineageV1LineageEvent.from_dict(google_cloud_datacatalog_lineage_v1_lineage_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


