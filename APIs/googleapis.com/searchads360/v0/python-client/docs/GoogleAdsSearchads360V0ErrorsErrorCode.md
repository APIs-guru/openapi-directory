# GoogleAdsSearchads360V0ErrorsErrorCode

The error reason represented by type and enum.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authentication_error** | **str** | Indicates failure to properly authenticate user. | [optional] 
**authorization_error** | **str** | An error encountered when trying to authorize a user. | [optional] 
**custom_column_error** | **str** | The reasons for the custom column error | [optional] 
**date_error** | **str** | The reasons for the date error | [optional] 
**date_range_error** | **str** | The reasons for the date range error | [optional] 
**distinct_error** | **str** | The reasons for the distinct error | [optional] 
**header_error** | **str** | The reasons for the header error. | [optional] 
**internal_error** | **str** | An unexpected server-side error. | [optional] 
**invalid_parameter_error** | **str** | The reasons for invalid parameter errors. | [optional] 
**query_error** | **str** | An error with the query | [optional] 
**quota_error** | **str** | An error with the amount of quota remaining. | [optional] 
**request_error** | **str** | An error caused by the request | [optional] 
**size_limit_error** | **str** | The reasons for the size limit error | [optional] 

## Example

```python
from openapi_client.models.google_ads_searchads360_v0_errors_error_code import GoogleAdsSearchads360V0ErrorsErrorCode

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleAdsSearchads360V0ErrorsErrorCode from a JSON string
google_ads_searchads360_v0_errors_error_code_instance = GoogleAdsSearchads360V0ErrorsErrorCode.from_json(json)
# print the JSON string representation of the object
print(GoogleAdsSearchads360V0ErrorsErrorCode.to_json())

# convert the object into a dict
google_ads_searchads360_v0_errors_error_code_dict = google_ads_searchads360_v0_errors_error_code_instance.to_dict()
# create an instance of GoogleAdsSearchads360V0ErrorsErrorCode from a dict
google_ads_searchads360_v0_errors_error_code_from_dict = GoogleAdsSearchads360V0ErrorsErrorCode.from_dict(google_ads_searchads360_v0_errors_error_code_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


