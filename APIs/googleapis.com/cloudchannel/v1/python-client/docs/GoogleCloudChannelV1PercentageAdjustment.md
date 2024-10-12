# GoogleCloudChannelV1PercentageAdjustment

An adjustment that applies a flat markup or markdown to an entire bill.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage** | [**GoogleTypeDecimal**](GoogleTypeDecimal.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_percentage_adjustment import GoogleCloudChannelV1PercentageAdjustment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1PercentageAdjustment from a JSON string
google_cloud_channel_v1_percentage_adjustment_instance = GoogleCloudChannelV1PercentageAdjustment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1PercentageAdjustment.to_json())

# convert the object into a dict
google_cloud_channel_v1_percentage_adjustment_dict = google_cloud_channel_v1_percentage_adjustment_instance.to_dict()
# create an instance of GoogleCloudChannelV1PercentageAdjustment from a dict
google_cloud_channel_v1_percentage_adjustment_from_dict = GoogleCloudChannelV1PercentageAdjustment.from_dict(google_cloud_channel_v1_percentage_adjustment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


