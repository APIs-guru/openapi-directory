# GoogleCloudApigeeV1ListSecurityReportsResponse

The response for SecurityReports.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | If the number of security reports exceeded the page size requested, the token can be used to fetch the next page in a subsequent call. If the response is the last page and there are no more reports to return this field is left empty. | [optional] 
**security_reports** | [**List[GoogleCloudApigeeV1SecurityReport]**](GoogleCloudApigeeV1SecurityReport.md) | The security reports belong to requested resource name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_security_reports_response import GoogleCloudApigeeV1ListSecurityReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListSecurityReportsResponse from a JSON string
google_cloud_apigee_v1_list_security_reports_response_instance = GoogleCloudApigeeV1ListSecurityReportsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListSecurityReportsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_security_reports_response_dict = google_cloud_apigee_v1_list_security_reports_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListSecurityReportsResponse from a dict
google_cloud_apigee_v1_list_security_reports_response_from_dict = GoogleCloudApigeeV1ListSecurityReportsResponse.from_dict(google_cloud_apigee_v1_list_security_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


