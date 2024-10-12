# GoogleCloudDatacatalogV1ReconcileTagsResponse

Long-running operation response message returned by ReconcileTags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_tags_count** | **str** | Number of tags created in the request. | [optional] 
**deleted_tags_count** | **str** | Number of tags deleted in the request. | [optional] 
**updated_tags_count** | **str** | Number of tags updated in the request. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_reconcile_tags_response import GoogleCloudDatacatalogV1ReconcileTagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ReconcileTagsResponse from a JSON string
google_cloud_datacatalog_v1_reconcile_tags_response_instance = GoogleCloudDatacatalogV1ReconcileTagsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ReconcileTagsResponse.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_reconcile_tags_response_dict = google_cloud_datacatalog_v1_reconcile_tags_response_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ReconcileTagsResponse from a dict
google_cloud_datacatalog_v1_reconcile_tags_response_from_dict = GoogleCloudDatacatalogV1ReconcileTagsResponse.from_dict(google_cloud_datacatalog_v1_reconcile_tags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


