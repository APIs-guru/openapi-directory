# GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails

ContainerHealthDetails reflects the health details of a container.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**current_config_version** | **str** | The version of the current config. | [optional] 
**error_msg** | **str** | The latest error message. | [optional] 
**expected_config_version** | **str** | The version of the expected config. | [optional] 
**extended_status** | **Dict[str, str]** | The extended status. Such as ExitCode, StartedAt, FinishedAt, etc. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_appconnectors_v1_container_health_details import GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails from a JSON string
google_cloud_beyondcorp_appconnectors_v1_container_health_details_instance = GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails.to_json())

# convert the object into a dict
google_cloud_beyondcorp_appconnectors_v1_container_health_details_dict = google_cloud_beyondcorp_appconnectors_v1_container_health_details_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails from a dict
google_cloud_beyondcorp_appconnectors_v1_container_health_details_from_dict = GoogleCloudBeyondcorpAppconnectorsV1ContainerHealthDetails.from_dict(google_cloud_beyondcorp_appconnectors_v1_container_health_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


