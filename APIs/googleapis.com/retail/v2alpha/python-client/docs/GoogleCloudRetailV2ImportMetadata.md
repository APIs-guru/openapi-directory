# GoogleCloudRetailV2ImportMetadata

Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**failure_count** | **str** | Count of entries that encountered errors while processing. | [optional] 
**notification_pubsub_topic** | **str** | Pub/Sub topic for receiving notification. If this field is set, when the import is finished, a notification is sent to specified Pub/Sub topic. The message data is JSON string of a Operation. Format of the Pub/Sub topic is &#x60;projects/{project}/topics/{topic}&#x60;. | [optional] 
**request_id** | **str** | Deprecated. This field is never set. | [optional] 
**success_count** | **str** | Count of entries that were processed successfully. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_retail_v2_import_metadata import GoogleCloudRetailV2ImportMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudRetailV2ImportMetadata from a JSON string
google_cloud_retail_v2_import_metadata_instance = GoogleCloudRetailV2ImportMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudRetailV2ImportMetadata.to_json())

# convert the object into a dict
google_cloud_retail_v2_import_metadata_dict = google_cloud_retail_v2_import_metadata_instance.to_dict()
# create an instance of GoogleCloudRetailV2ImportMetadata from a dict
google_cloud_retail_v2_import_metadata_from_dict = GoogleCloudRetailV2ImportMetadata.from_dict(google_cloud_retail_v2_import_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


