# GoogleCloudDataplexV1Session

Represents an active analyze session running for a user.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. Session start time. | [optional] [readonly] 
**name** | **str** | Output only. The relative resource name of the content, of the form: projects/{project_id}/locations/{location_id}/lakes/{lake_id}/environment/{environment_id}/sessions/{session_id} | [optional] [readonly] 
**state** | **str** | Output only. State of Session | [optional] [readonly] 
**user_id** | **str** | Output only. Email of user running the session. | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_session import GoogleCloudDataplexV1Session

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1Session from a JSON string
google_cloud_dataplex_v1_session_instance = GoogleCloudDataplexV1Session.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1Session.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_session_dict = google_cloud_dataplex_v1_session_instance.to_dict()
# create an instance of GoogleCloudDataplexV1Session from a dict
google_cloud_dataplex_v1_session_from_dict = GoogleCloudDataplexV1Session.from_dict(google_cloud_dataplex_v1_session_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


