# GoogleCloudDataplexV1Environment

Environment represents a user-visible compute infrastructure for analytics within a lake.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Environment creation time. | [optional] [readonly] 
**description** | **str** | Optional. Description of the environment. | [optional] 
**display_name** | **str** | Optional. User friendly display name. | [optional] 
**endpoints** | [**GoogleCloudDataplexV1EnvironmentEndpoints**](GoogleCloudDataplexV1EnvironmentEndpoints.md) |  | [optional] 
**infrastructure_spec** | [**GoogleCloudDataplexV1EnvironmentInfrastructureSpec**](GoogleCloudDataplexV1EnvironmentInfrastructureSpec.md) |  | [optional] 
**labels** | **Dict[str, str]** | Optional. User defined labels for the environment. | [optional] 
**name** | **str** | Output only. The relative resource name of the environment, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id} | [optional] [readonly] 
**session_spec** | [**GoogleCloudDataplexV1EnvironmentSessionSpec**](GoogleCloudDataplexV1EnvironmentSessionSpec.md) |  | [optional] 
**session_status** | [**GoogleCloudDataplexV1EnvironmentSessionStatus**](GoogleCloudDataplexV1EnvironmentSessionStatus.md) |  | [optional] 
**state** | **str** | Output only. Current state of the environment. | [optional] [readonly] 
**uid** | **str** | Output only. System generated globally unique ID for the environment. This ID will be different if the environment is deleted and re-created with the same name. | [optional] [readonly] 
**update_time** | **str** | Output only. The time when the environment was last updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_environment import GoogleCloudDataplexV1Environment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Environment from a JSON string
google_cloud_dataplex_v1_environment_instance = GoogleCloudDataplexV1Environment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Environment.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_environment_dict = google_cloud_dataplex_v1_environment_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Environment from a dict
google_cloud_dataplex_v1_environment_from_dict = GoogleCloudDataplexV1Environment.from_dict(google_cloud_dataplex_v1_environment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


