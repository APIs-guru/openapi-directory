# GoogleCloudChannelV1Row

A row of report values.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**partition_key** | **str** | The key for the partition this row belongs to. This field is empty if the report is not partitioned. | [optional] 
**values** | [**List[GoogleCloudChannelV1ReportValue]**](GoogleCloudChannelV1ReportValue.md) | The list of values in the row. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_row import GoogleCloudChannelV1Row

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1Row from a JSON string
google_cloud_channel_v1_row_instance = GoogleCloudChannelV1Row.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1Row.to_json())

# convert the object into a dict
google_cloud_channel_v1_row_dict = google_cloud_channel_v1_row_instance.to_dict()
# create an instance of GoogleCloudChannelV1Row from a dict
google_cloud_channel_v1_row_from_dict = GoogleCloudChannelV1Row.from_dict(google_cloud_channel_v1_row_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


