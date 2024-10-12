# GoogleCloudDiscoveryengineV1ImportUserEventsMetadata

Metadata related to the progress of the Import operation. This is returned by the google.longrunning.Operation.metadata field.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Operation create time. | [optional] 
**failure_count** | **str** | Count of entries that encountered errors while processing. | [optional] 
**success_count** | **str** | Count of entries that were processed successfully. | [optional] 
**update_time** | **str** | Operation last update time. If the operation is done, this is also the finish time. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_discoveryengine_v1_import_user_events_metadata import GoogleCloudDiscoveryengineV1ImportUserEventsMetadata

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDiscoveryengineV1ImportUserEventsMetadata from a JSON string
google_cloud_discoveryengine_v1_import_user_events_metadata_instance = GoogleCloudDiscoveryengineV1ImportUserEventsMetadata.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDiscoveryengineV1ImportUserEventsMetadata.to_json())

# convert the object into a dict
google_cloud_discoveryengine_v1_import_user_events_metadata_dict = google_cloud_discoveryengine_v1_import_user_events_metadata_instance.to_dict()
# create an instance of GoogleCloudDiscoveryengineV1ImportUserEventsMetadata from a dict
google_cloud_discoveryengine_v1_import_user_events_metadata_from_dict = GoogleCloudDiscoveryengineV1ImportUserEventsMetadata.from_dict(google_cloud_discoveryengine_v1_import_user_events_metadata_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


