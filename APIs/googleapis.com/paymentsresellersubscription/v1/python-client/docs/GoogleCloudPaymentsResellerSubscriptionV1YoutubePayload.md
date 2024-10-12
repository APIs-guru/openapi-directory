# GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload

Payload specific to Youtube products.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**access_end_time** | **str** | Output only. The access expiration time for this line item. | [optional] [readonly] 
**partner_eligibility_ids** | **List[str]** | The list of eligibility_ids which are applicable for the line item. | [optional] 
**partner_plan_type** | **str** | Optional. Specifies the plan type offered to the end user by the partner. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_payments_reseller_subscription_v1_youtube_payload import GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload from a JSON string
google_cloud_payments_reseller_subscription_v1_youtube_payload_instance = GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload.to_json())

# convert the object into a dict
google_cloud_payments_reseller_subscription_v1_youtube_payload_dict = google_cloud_payments_reseller_subscription_v1_youtube_payload_instance.to_dict()
# create an instance of GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload from a dict
google_cloud_payments_reseller_subscription_v1_youtube_payload_from_dict = GoogleCloudPaymentsResellerSubscriptionV1YoutubePayload.from_dict(google_cloud_payments_reseller_subscription_v1_youtube_payload_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


