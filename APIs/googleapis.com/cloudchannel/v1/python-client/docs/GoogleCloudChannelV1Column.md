# GoogleCloudChannelV1Column

The definition of a report column. Specifies the data properties in the corresponding position of the report rows.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**column_id** | **str** | The unique name of the column (for example, customer_domain, channel_partner, customer_cost). You can use column IDs in RunReportJobRequest.filter. To see all reports and their columns, call CloudChannelReportsService.ListReports. | [optional] 
**data_type** | **str** | The type of the values for this column. | [optional] 
**display_name** | **str** | The column&#39;s display name. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_column import GoogleCloudChannelV1Column

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1Column from a JSON string
google_cloud_channel_v1_column_instance = GoogleCloudChannelV1Column.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1Column.to_json())

# convert the object into a dict
google_cloud_channel_v1_column_dict = google_cloud_channel_v1_column_instance.to_dict()
# create an instance of GoogleCloudChannelV1Column from a dict
google_cloud_channel_v1_column_from_dict = GoogleCloudChannelV1Column.from_dict(google_cloud_channel_v1_column_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


