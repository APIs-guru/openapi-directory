# GoogleCloudDatacatalogLineageV1EventLink

A lineage between source and target entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**source** | [**GoogleCloudDatacatalogLineageV1EntityReference**](GoogleCloudDatacatalogLineageV1EntityReference.md) |  | [optional] 
**target** | [**GoogleCloudDatacatalogLineageV1EntityReference**](GoogleCloudDatacatalogLineageV1EntityReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_event_link import GoogleCloudDatacatalogLineageV1EventLink

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1EventLink from a JSON string
google_cloud_datacatalog_lineage_v1_event_link_instance = GoogleCloudDatacatalogLineageV1EventLink.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1EventLink.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_event_link_dict = google_cloud_datacatalog_lineage_v1_event_link_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1EventLink from a dict
google_cloud_datacatalog_lineage_v1_event_link_from_dict = GoogleCloudDatacatalogLineageV1EventLink.from_dict(google_cloud_datacatalog_lineage_v1_event_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


