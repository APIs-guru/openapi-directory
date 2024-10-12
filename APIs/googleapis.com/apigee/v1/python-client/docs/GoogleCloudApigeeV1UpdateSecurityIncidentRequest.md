# GoogleCloudApigeeV1UpdateSecurityIncidentRequest

Request for UpdateSecurityIncident.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**security_incident** | [**GoogleCloudApigeeV1SecurityIncident**](GoogleCloudApigeeV1SecurityIncident.md) |  | [optional] 
**update_mask** | **str** | Required. The list of fields to update. Allowed fields are: LINT.IfChange(allowed_update_fields_comment) - observability LINT.ThenChange() | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_update_security_incident_request import GoogleCloudApigeeV1UpdateSecurityIncidentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1UpdateSecurityIncidentRequest from a JSON string
google_cloud_apigee_v1_update_security_incident_request_instance = GoogleCloudApigeeV1UpdateSecurityIncidentRequest.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1UpdateSecurityIncidentRequest.to_json())

# convert the object into a dict
google_cloud_apigee_v1_update_security_incident_request_dict = google_cloud_apigee_v1_update_security_incident_request_instance.to_dict()
# create an instance of GoogleCloudApigeeV1UpdateSecurityIncidentRequest from a dict
google_cloud_apigee_v1_update_security_incident_request_from_dict = GoogleCloudApigeeV1UpdateSecurityIncidentRequest.from_dict(google_cloud_apigee_v1_update_security_incident_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


