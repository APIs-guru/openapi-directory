# GoogleCloudChannelV1alpha1DateRange

A representation of usage or invoice date ranges.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**invoice_end_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**invoice_start_date** | [**GoogleTypeDate**](GoogleTypeDate.md) |  | [optional] 
**usage_end_date_time** | [**GoogleTypeDateTime**](GoogleTypeDateTime.md) |  | [optional] 
**usage_start_date_time** | [**GoogleTypeDateTime**](GoogleTypeDateTime.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1alpha1_date_range import GoogleCloudChannelV1alpha1DateRange

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1alpha1DateRange from a JSON string
google_cloud_channel_v1alpha1_date_range_instance = GoogleCloudChannelV1alpha1DateRange.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1alpha1DateRange.to_json())

# convert the object into a dict
google_cloud_channel_v1alpha1_date_range_dict = google_cloud_channel_v1alpha1_date_range_instance.to_dict()
# create an instance of GoogleCloudChannelV1alpha1DateRange from a dict
google_cloud_channel_v1alpha1_date_range_from_dict = GoogleCloudChannelV1alpha1DateRange.from_dict(google_cloud_channel_v1alpha1_date_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


