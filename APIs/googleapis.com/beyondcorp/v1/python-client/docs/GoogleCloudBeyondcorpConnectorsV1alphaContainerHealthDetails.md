# GoogleCloudBeyondcorpConnectorsV1alphaContainerHealthDetails

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
from openapi_client.models.google_cloud_beyondcorp_connectors_v1alpha_container_health_details import GoogleCloudBeyondcorpConnectorsV1alphaContainerHealthDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpConnectorsV1alphaContainerHealthDetails from a JSON string
google_cloud_beyondcorp_connectors_v1alpha_container_health_details_instance = GoogleCloudBeyondcorpConnectorsV1alphaContainerHealthDetails.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpConnectorsV1alphaContainerHealthDetails.to_json())

# convert the object into a dict
google_cloud_beyondcorp_connectors_v1alpha_container_health_details_dict = google_cloud_beyondcorp_connectors_v1alpha_container_health_details_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpConnectorsV1alphaContainerHealthDetails from a dict
google_cloud_beyondcorp_connectors_v1alpha_container_health_details_from_dict = GoogleCloudBeyondcorpConnectorsV1alphaContainerHealthDetails.from_dict(google_cloud_beyondcorp_connectors_v1alpha_container_health_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


