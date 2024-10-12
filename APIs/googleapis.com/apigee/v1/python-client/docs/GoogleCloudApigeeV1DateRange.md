# GoogleCloudApigeeV1DateRange

Date range of the data to export.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | **str** | Required. End date (exclusive) of the data to export in the format &#x60;yyyy-mm-dd&#x60;. The date range ends at 00:00:00 UTC on the end date- which will not be in the output. | [optional] 
**start** | **str** | Required. Start date of the data to export in the format &#x60;yyyy-mm-dd&#x60;. The date range begins at 00:00:00 UTC on the start date. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_date_range import GoogleCloudApigeeV1DateRange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1DateRange from a JSON string
google_cloud_apigee_v1_date_range_instance = GoogleCloudApigeeV1DateRange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1DateRange.to_json())

# convert the object into a dict
google_cloud_apigee_v1_date_range_dict = google_cloud_apigee_v1_date_range_instance.to_dict()
# create an instance of GoogleCloudApigeeV1DateRange from a dict
google_cloud_apigee_v1_date_range_from_dict = GoogleCloudApigeeV1DateRange.from_dict(google_cloud_apigee_v1_date_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


