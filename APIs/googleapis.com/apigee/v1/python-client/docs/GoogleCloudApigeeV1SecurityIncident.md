# GoogleCloudApigeeV1SecurityIncident

Represents an SecurityIncident resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detection_types** | **List[str]** | Output only. Detection types which are part of the incident. Examples: Flooder, OAuth Abuser, Static Content Scraper, Anomaly Detection. | [optional] [readonly] 
**display_name** | **str** | Optional. Display name of the security incident. | [optional] 
**first_detected_time** | **str** | Output only. The time when events associated with the incident were first detected. | [optional] [readonly] 
**last_detected_time** | **str** | Output only. The time when events associated with the incident were last detected. | [optional] [readonly] 
**last_observability_change_time** | **str** | Output only. The time when the incident observability was last changed. | [optional] [readonly] 
**name** | **str** | Immutable. Name of the security incident resource. Format: organizations/{org}/environments/{environment}/securityIncidents/{incident} Example: organizations/apigee-org/environments/dev/securityIncidents/1234-5678-9101-1111 | [optional] 
**observability** | **str** | Optional. Indicates if the user archived this incident. | [optional] 
**risk_level** | **str** | Output only. Risk level of the incident. | [optional] [readonly] 
**traffic_count** | **str** | Total traffic detected as part of the incident. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_security_incident import GoogleCloudApigeeV1SecurityIncident

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1SecurityIncident from a JSON string
google_cloud_apigee_v1_security_incident_instance = GoogleCloudApigeeV1SecurityIncident.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1SecurityIncident.to_json())

# convert the object into a dict
google_cloud_apigee_v1_security_incident_dict = google_cloud_apigee_v1_security_incident_instance.to_dict()
# create an instance of GoogleCloudApigeeV1SecurityIncident from a dict
google_cloud_apigee_v1_security_incident_from_dict = GoogleCloudApigeeV1SecurityIncident.from_dict(google_cloud_apigee_v1_security_incident_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


