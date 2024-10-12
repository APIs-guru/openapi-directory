# GoogleCloudDatacatalogLineageV1EntityReference

The soft reference to everything you can attach a lineage event to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fully_qualified_name** | **str** | Required. [Fully Qualified Name (FQN)](https://cloud.google.com/data-catalog/docs/fully-qualified-names) of the entity. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_lineage_v1_entity_reference import GoogleCloudDatacatalogLineageV1EntityReference

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogLineageV1EntityReference from a JSON string
google_cloud_datacatalog_lineage_v1_entity_reference_instance = GoogleCloudDatacatalogLineageV1EntityReference.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogLineageV1EntityReference.to_json())

# convert the object into a dict
google_cloud_datacatalog_lineage_v1_entity_reference_dict = google_cloud_datacatalog_lineage_v1_entity_reference_instance.to_dict()
# create an instance of GoogleCloudDatacatalogLineageV1EntityReference from a dict
google_cloud_datacatalog_lineage_v1_entity_reference_from_dict = GoogleCloudDatacatalogLineageV1EntityReference.from_dict(google_cloud_datacatalog_lineage_v1_entity_reference_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


