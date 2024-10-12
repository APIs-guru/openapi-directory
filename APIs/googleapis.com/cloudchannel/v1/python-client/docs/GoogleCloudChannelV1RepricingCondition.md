# GoogleCloudChannelV1RepricingCondition

Represents the various repricing conditions you can use for a conditional override.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**sku_group_condition** | [**GoogleCloudChannelV1SkuGroupCondition**](GoogleCloudChannelV1SkuGroupCondition.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_repricing_condition import GoogleCloudChannelV1RepricingCondition

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1RepricingCondition from a JSON string
google_cloud_channel_v1_repricing_condition_instance = GoogleCloudChannelV1RepricingCondition.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1RepricingCondition.to_json())

# convert the object into a dict
google_cloud_channel_v1_repricing_condition_dict = google_cloud_channel_v1_repricing_condition_instance.to_dict()
# create an instance of GoogleCloudChannelV1RepricingCondition from a dict
google_cloud_channel_v1_repricing_condition_from_dict = GoogleCloudChannelV1RepricingCondition.from_dict(google_cloud_channel_v1_repricing_condition_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


