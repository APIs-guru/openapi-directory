# GoogleCloudApigeeV1ListSecurityIncidentsResponse

Response for ListSecurityIncidents.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token that can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**security_incidents** | [**List[GoogleCloudApigeeV1SecurityIncident]**](GoogleCloudApigeeV1SecurityIncident.md) | List of security incidents in the organization | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_security_incidents_response import GoogleCloudApigeeV1ListSecurityIncidentsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListSecurityIncidentsResponse from a JSON string
google_cloud_apigee_v1_list_security_incidents_response_instance = GoogleCloudApigeeV1ListSecurityIncidentsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListSecurityIncidentsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_security_incidents_response_dict = google_cloud_apigee_v1_list_security_incidents_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListSecurityIncidentsResponse from a dict
google_cloud_apigee_v1_list_security_incidents_response_from_dict = GoogleCloudApigeeV1ListSecurityIncidentsResponse.from_dict(google_cloud_apigee_v1_list_security_incidents_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


