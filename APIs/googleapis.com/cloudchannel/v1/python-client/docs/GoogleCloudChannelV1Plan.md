# GoogleCloudChannelV1Plan

The payment plan for the Offer. Describes how to make a payment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_account** | **str** | Reseller Billing account to charge after an offer transaction. Only present for Google Cloud offers. | [optional] 
**payment_cycle** | [**GoogleCloudChannelV1Period**](GoogleCloudChannelV1Period.md) |  | [optional] 
**payment_plan** | **str** | Describes how a reseller will be billed. | [optional] 
**payment_type** | **str** | Specifies when the payment needs to happen. | [optional] 
**trial_period** | [**GoogleCloudChannelV1Period**](GoogleCloudChannelV1Period.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_plan import GoogleCloudChannelV1Plan

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1Plan from a JSON string
google_cloud_channel_v1_plan_instance = GoogleCloudChannelV1Plan.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1Plan.to_json())

# convert the object into a dict
google_cloud_channel_v1_plan_dict = google_cloud_channel_v1_plan_instance.to_dict()
# create an instance of GoogleCloudChannelV1Plan from a dict
google_cloud_channel_v1_plan_from_dict = GoogleCloudChannelV1Plan.from_dict(google_cloud_channel_v1_plan_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


