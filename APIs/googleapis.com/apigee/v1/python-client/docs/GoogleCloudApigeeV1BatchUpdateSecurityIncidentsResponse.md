# GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse

Response for BatchUpdateSecurityIncident.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**security_incidents** | [**List[GoogleCloudApigeeV1SecurityIncident]**](GoogleCloudApigeeV1SecurityIncident.md) | Output only. Updated security incidents | [optional] [readonly] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_batch_update_security_incidents_response import GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse from a JSON string
google_cloud_apigee_v1_batch_update_security_incidents_response_instance = GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_batch_update_security_incidents_response_dict = google_cloud_apigee_v1_batch_update_security_incidents_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse from a dict
google_cloud_apigee_v1_batch_update_security_incidents_response_from_dict = GoogleCloudApigeeV1BatchUpdateSecurityIncidentsResponse.from_dict(google_cloud_apigee_v1_batch_update_security_incidents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


