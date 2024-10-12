# GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest

Request for BatchUpdateSecurityIncident.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**requests** | [**List[GoogleCloudApigeeV1UpdateSecurityIncidentRequest]**](GoogleCloudApigeeV1UpdateSecurityIncidentRequest.md) | Optional. Required. The request message specifying the resources to update. A maximum of 1000 can be modified in a batch. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_batch_update_security_incidents_request import GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest from a JSON string
google_cloud_apigee_v1_batch_update_security_incidents_request_instance = GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_batch_update_security_incidents_request_dict = google_cloud_apigee_v1_batch_update_security_incidents_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest from a dict
google_cloud_apigee_v1_batch_update_security_incidents_request_from_dict = GoogleCloudApigeeV1BatchUpdateSecurityIncidentsRequest.from_dict(google_cloud_apigee_v1_batch_update_security_incidents_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


