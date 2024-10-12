# GoogleCloudChannelV1ConditionalOverride

Specifies the override to conditionally apply.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**adjustment** | [**GoogleCloudChannelV1RepricingAdjustment**](GoogleCloudChannelV1RepricingAdjustment.md) |  | [optional] 
**rebilling_basis** | **str** | Required. The RebillingBasis to use for the applied override. Shows the relative cost based on your repricing costs. | [optional] 
**repricing_condition** | [**GoogleCloudChannelV1RepricingCondition**](GoogleCloudChannelV1RepricingCondition.md) |  | [optional] 

## Example

```python
from openapi_client.models.google_cloud_channel_v1_conditional_override import GoogleCloudChannelV1ConditionalOverride

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudChannelV1ConditionalOverride from a JSON string
google_cloud_channel_v1_conditional_override_instance = GoogleCloudChannelV1ConditionalOverride.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudChannelV1ConditionalOverride.to_json())

# convert the object into a dict
google_cloud_channel_v1_conditional_override_dict = google_cloud_channel_v1_conditional_override_instance.to_dict()
# create an instance of GoogleCloudChannelV1ConditionalOverride from a dict
google_cloud_channel_v1_conditional_override_from_dict = GoogleCloudChannelV1ConditionalOverride.from_dict(google_cloud_channel_v1_conditional_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


