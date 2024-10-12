# GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse

Response message for BeyondCorp.ListSubscriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | A token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**subscriptions** | [**List[GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription]**](GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaSubscription.md) | A list of BeyondCorp Subscriptions in the organization. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_list_subscriptions_response import GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse from a JSON string
google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_list_subscriptions_response_instance = GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse.to_json())

# convert the object into a dict
google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_list_subscriptions_response_dict = google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_list_subscriptions_response_instance.to_dict()
# create an instance of GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse from a dict
google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_list_subscriptions_response_from_dict = GoogleCloudBeyondcorpSaasplatformSubscriptionsV1alphaListSubscriptionsResponse.from_dict(google_cloud_beyondcorp_saasplatform_subscriptions_v1alpha_list_subscriptions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


