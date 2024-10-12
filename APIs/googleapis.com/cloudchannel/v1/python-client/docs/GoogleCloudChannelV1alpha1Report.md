# GoogleCloudChannelV1alpha1Report

The ID and description of a report that was used to generate report data. For example, \"Google Cloud Daily Spend\", \"Google Workspace License Activity\", etc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**columns** | [**List[GoogleCloudChannelV1alpha1Column]**](GoogleCloudChannelV1alpha1Column.md) | The list of columns included in the report. This defines the schema of the report results. | [optional] 
**description** | **str** | A description of other aspects of the report, such as the products it supports. | [optional] 
**display_name** | **str** | A human-readable name for this report. | [optional] 
**name** | **str** | Required. The report&#39;s resource name. Specifies the account and report used to generate report data. The report_id identifier is a UID (for example, &#x60;613bf59q&#x60;). Name uses the format: accounts/{account_id}/reports/{report_id} | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_report import GoogleCloudChannelV1alpha1Report

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1Report from a JSON string
google_cloud_channel_v1alpha1_report_instance = GoogleCloudChannelV1alpha1Report.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1Report.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_report_dict = google_cloud_channel_v1alpha1_report_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1Report from a dict
google_cloud_channel_v1alpha1_report_from_dict = GoogleCloudChannelV1alpha1Report.from_dict(google_cloud_channel_v1alpha1_report_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


