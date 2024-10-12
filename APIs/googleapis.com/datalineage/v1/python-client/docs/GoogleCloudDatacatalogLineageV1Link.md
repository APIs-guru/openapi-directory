# GoogleCloudDatacatalogLineageV1Link

Links represent the data flow between **source** (upstream) and **target** (downstream) assets in transformation pipelines. Links are created when LineageEvents record data transformation between related assets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end_time** | **str** | The end of the last event establishing this link. | [optional] 
**name** | **str** | Output only. Immutable. The name of the link. Format: &#x60;projects/{project}/locations/{location}/links/{link}&#x60;. | [optional] [readonly] 
**source** | [**GoogleCloudDatacatalogLineageV1EntityReference**](GoogleCloudDatacatalogLineageV1EntityReference.md) |  | [optional] 
**start_time** | **str** | The start of the first event establishing this link. | [optional] 
**target** | [**GoogleCloudDatacatalogLineageV1EntityReference**](GoogleCloudDatacatalogLineageV1EntityReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_link import GoogleCloudDatacatalogLineageV1Link

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1Link from a JSON string
google_cloud_datacatalog_lineage_v1_link_instance = GoogleCloudDatacatalogLineageV1Link.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1Link.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_link_dict = google_cloud_datacatalog_lineage_v1_link_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1Link from a dict
google_cloud_datacatalog_lineage_v1_link_from_dict = GoogleCloudDatacatalogLineageV1Link.from_dict(google_cloud_datacatalog_lineage_v1_link_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


