# GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse

Response for ListDeveloperSubscriptions.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**developer_subscriptions** | [**List[GoogleCloudApigeeV1DeveloperSubscription]**](GoogleCloudApigeeV1DeveloperSubscription.md) | List of all subscriptions. | [optional] 
**next_start_key** | **str** | Value that can be sent as &#x60;startKey&#x60; to retrieve the next page of content. If this field is omitted, there are no subsequent pages. | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_list_developer_subscriptions_response import GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse from a JSON string
google_cloud_apigee_v1_list_developer_subscriptions_response_instance = GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse.to_json())

# convert the object into a dict
google_cloud_apigee_v1_list_developer_subscriptions_response_dict = google_cloud_apigee_v1_list_developer_subscriptions_response_instance.to_dict()
# create an instance of GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse from a dict
google_cloud_apigee_v1_list_developer_subscriptions_response_from_dict = GoogleCloudApigeeV1ListDeveloperSubscriptionsResponse.from_dict(google_cloud_apigee_v1_list_developer_subscriptions_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


