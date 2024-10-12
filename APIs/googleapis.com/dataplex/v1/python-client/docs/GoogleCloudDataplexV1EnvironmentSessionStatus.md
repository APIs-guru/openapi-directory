# GoogleCloudDataplexV1EnvironmentSessionStatus

Status of sessions created for this environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active** | **bool** | Output only. Queries over sessions to mark whether the environment is currently active or not | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_environment_session_status import GoogleCloudDataplexV1EnvironmentSessionStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1EnvironmentSessionStatus from a JSON string
google_cloud_dataplex_v1_environment_session_status_instance = GoogleCloudDataplexV1EnvironmentSessionStatus.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1EnvironmentSessionStatus.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_environment_session_status_dict = google_cloud_dataplex_v1_environment_session_status_instance.to_dict()
# create an instance of GoogleCloudDataplexV1EnvironmentSessionStatus from a dict
google_cloud_dataplex_v1_environment_session_status_from_dict = GoogleCloudDataplexV1EnvironmentSessionStatus.from_dict(google_cloud_dataplex_v1_environment_session_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


