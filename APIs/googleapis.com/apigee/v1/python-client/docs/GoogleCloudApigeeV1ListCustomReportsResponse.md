# GoogleCloudApigeeV1ListCustomReportsResponse

This message encapsulates a list of custom report definitions

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**qualifier** | [**List[GoogleCloudApigeeV1CustomReport]**](GoogleCloudApigeeV1CustomReport.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_custom_reports_response import GoogleCloudApigeeV1ListCustomReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListCustomReportsResponse from a JSON string
google_cloud_apigee_v1_list_custom_reports_response_instance = GoogleCloudApigeeV1ListCustomReportsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListCustomReportsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_custom_reports_response_dict = google_cloud_apigee_v1_list_custom_reports_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListCustomReportsResponse from a dict
google_cloud_apigee_v1_list_custom_reports_response_from_dict = GoogleCloudApigeeV1ListCustomReportsResponse.from_dict(google_cloud_apigee_v1_list_custom_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


