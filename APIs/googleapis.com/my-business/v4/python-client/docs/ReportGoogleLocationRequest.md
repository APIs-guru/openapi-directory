# ReportGoogleLocationRequest

Request message for reporting a GoogleLocation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**location_group_name** | **str** | Optional. The resource name of the location group that this Google Location is being reported for, in the format &#x60;accounts/{account_id}&#x60;. | [optional] 
**report_reason_bad_location** | **str** | The reason for which the user is reporting this location when the issue is with the location itself. | [optional] 
**report_reason_bad_recommendation** | **str** | The reason for which the user is reporting this location when the issue is with the recommendation. This report is useful if the location has been recommended to the Business Profile account. | [optional] 
**report_reason_elaboration** | **str** | Optional. A text entry for elaborating on the reason for which the user is reporting this location. The maximum length is 512 characters. | [optional] 
**report_reason_language_code** | **str** | Optional. The BCP 47 code of language used in &#x60;report_reason_elaboration&#x60;. | [optional] 

## Example

```python
from openapi_client.models.report_google_location_request import ReportGoogleLocationRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReportGoogleLocationRequest from a JSON string
report_google_location_request_instance = ReportGoogleLocationRequest.from_json(json)
# print the JSON string representation of the object
print(ReportGoogleLocationRequest.to_json())

# convert the object into a dict
report_google_location_request_dict = report_google_location_request_instance.to_dict()
# create an instance of ReportGoogleLocationRequest from a dict
report_google_location_request_from_dict = ReportGoogleLocationRequest.from_dict(report_google_location_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


