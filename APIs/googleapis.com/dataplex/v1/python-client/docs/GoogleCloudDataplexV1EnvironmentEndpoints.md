# GoogleCloudDataplexV1EnvironmentEndpoints

URI Endpoints to access sessions associated with the Environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**notebooks** | **str** | Output only. URI to serve notebook APIs | [optional] [readonly] 
**sql** | **str** | Output only. URI to serve SQL APIs | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_dataplex_v1_environment_endpoints import GoogleCloudDataplexV1EnvironmentEndpoints

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudDataplexV1EnvironmentEndpoints from a JSON string
google_cloud_dataplex_v1_environment_endpoints_instance = GoogleCloudDataplexV1EnvironmentEndpoints.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudDataplexV1EnvironmentEndpoints.to_json())

# convert the object into a dict
google_cloud_dataplex_v1_environment_endpoints_dict = google_cloud_dataplex_v1_environment_endpoints_instance.to_dict()
# create an instance of GoogleCloudDataplexV1EnvironmentEndpoints from a dict
google_cloud_dataplex_v1_environment_endpoints_from_dict = GoogleCloudDataplexV1EnvironmentEndpoints.from_dict(google_cloud_dataplex_v1_environment_endpoints_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


