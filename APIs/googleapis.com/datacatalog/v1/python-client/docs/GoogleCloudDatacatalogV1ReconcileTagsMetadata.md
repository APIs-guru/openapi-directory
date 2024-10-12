# GoogleCloudDatacatalogV1ReconcileTagsMetadata

Long-running operation metadata message returned by the ReconcileTags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**errors** | [**Dict[str, Status]**](Status.md) | Maps the name of each tagged column (or empty string for a sole entry) to tagging operation status. | [optional] 
**state** | **str** | State of the reconciliation operation. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_reconcile_tags_metadata import GoogleCloudDatacatalogV1ReconcileTagsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ReconcileTagsMetadata from a JSON string
google_cloud_datacatalog_v1_reconcile_tags_metadata_instance = GoogleCloudDatacatalogV1ReconcileTagsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ReconcileTagsMetadata.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_reconcile_tags_metadata_dict = google_cloud_datacatalog_v1_reconcile_tags_metadata_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ReconcileTagsMetadata from a dict
google_cloud_datacatalog_v1_reconcile_tags_metadata_from_dict = GoogleCloudDatacatalogV1ReconcileTagsMetadata.from_dict(google_cloud_datacatalog_v1_reconcile_tags_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


