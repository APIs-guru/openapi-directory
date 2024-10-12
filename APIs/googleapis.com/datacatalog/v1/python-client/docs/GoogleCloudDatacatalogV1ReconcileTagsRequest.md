# GoogleCloudDatacatalogV1ReconcileTagsRequest

Request message for ReconcileTags.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**force_delete_missing** | **bool** | If set to &#x60;true&#x60;, deletes entry tags related to a tag template not listed in the tags source from an entry. If set to &#x60;false&#x60;, unlisted tags are retained. | [optional] 
**tag_template** | **str** | Required. The name of the tag template, which is used for reconciliation. | [optional] 
**tags** | [**List[GoogleCloudDatacatalogV1Tag]**](GoogleCloudDatacatalogV1Tag.md) | A list of tags to apply to an entry. A tag can specify a tag template, which must be the template specified in the &#x60;ReconcileTagsRequest&#x60;. The sole entry and each of its columns must be mentioned at most once. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_datacatalog_v1_reconcile_tags_request import GoogleCloudDatacatalogV1ReconcileTagsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDatacatalogV1ReconcileTagsRequest from a JSON string
google_cloud_datacatalog_v1_reconcile_tags_request_instance = GoogleCloudDatacatalogV1ReconcileTagsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDatacatalogV1ReconcileTagsRequest.to_json())

# convert the object into a dict
google_cloud_datacatalog_v1_reconcile_tags_request_dict = google_cloud_datacatalog_v1_reconcile_tags_request_instance.to_dict()
# create an instance of GoogleCloudDatacatalogV1ReconcileTagsRequest from a dict
google_cloud_datacatalog_v1_reconcile_tags_request_from_dict = GoogleCloudDatacatalogV1ReconcileTagsRequest.from_dict(google_cloud_datacatalog_v1_reconcile_tags_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


