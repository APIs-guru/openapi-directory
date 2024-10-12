# GoogleCloudDataplexV1EnvironmentSessionSpec

Configuration for sessions created for this environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enable_fast_startup** | **bool** | Optional. If True, this causes sessions to be pre-created and available for faster startup to enable interactive exploration use-cases. This defaults to False to avoid additional billed charges. These can only be set to True for the environment with name set to \&quot;default\&quot;, and with default configuration. | [optional] 
**max_idle_duration** | **str** | Optional. The idle time configuration of the session. The session will be auto-terminated at the end of this period. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_environment_session_spec import GoogleCloudDataplexV1EnvironmentSessionSpec

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1EnvironmentSessionSpec from a JSON string
google_cloud_dataplex_v1_environment_session_spec_instance = GoogleCloudDataplexV1EnvironmentSessionSpec.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1EnvironmentSessionSpec.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_environment_session_spec_dict = google_cloud_dataplex_v1_environment_session_spec_instance.to_dict()
# create an instance of GoogleCloudDataplexV1EnvironmentSessionSpec from a dict
google_cloud_dataplex_v1_environment_session_spec_from_dict = GoogleCloudDataplexV1EnvironmentSessionSpec.from_dict(google_cloud_dataplex_v1_environment_session_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


