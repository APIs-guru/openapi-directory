# GoogleCloudChannelV1RepricingAdjustment

A type that represents the various adjustments you can apply to a bill.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**percentage_adjustment** | [**GoogleCloudChannelV1PercentageAdjustment**](GoogleCloudChannelV1PercentageAdjustment.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_repricing_adjustment import GoogleCloudChannelV1RepricingAdjustment

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1RepricingAdjustment from a JSON string
google_cloud_channel_v1_repricing_adjustment_instance = GoogleCloudChannelV1RepricingAdjustment.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1RepricingAdjustment.to_json())

# convert the object into a dict
google_cloud_channel_v1_repricing_adjustment_dict = google_cloud_channel_v1_repricing_adjustment_instance.to_dict()
# create an instance of GoogleCloudChannelV1RepricingAdjustment from a dict
google_cloud_channel_v1_repricing_adjustment_from_dict = GoogleCloudChannelV1RepricingAdjustment.from_dict(google_cloud_channel_v1_repricing_adjustment_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


