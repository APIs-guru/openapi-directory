# GoogleCloudApigeeV1Subscription

Pub/Sub subscription of an environment.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Full name of the Pub/Sub subcription. Use the following structure in your request: &#x60;subscription \&quot;projects/foo/subscription/bar\&quot;&#x60; | [optional] 

## Example

```python
from openapi_client.models.google_cloud_apigee_v1_subscription import GoogleCloudApigeeV1Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleCloudApigeeV1Subscription from a JSON string
google_cloud_apigee_v1_subscription_instance = GoogleCloudApigeeV1Subscription.from_json(json)
# print the JSON string representation of the object
print(GoogleCloudApigeeV1Subscription.to_json())

# convert the object into a dict
google_cloud_apigee_v1_subscription_dict = google_cloud_apigee_v1_subscription_instance.to_dict()
# create an instance of GoogleCloudApigeeV1Subscription from a dict
google_cloud_apigee_v1_subscription_from_dict = GoogleCloudApigeeV1Subscription.from_dict(google_cloud_apigee_v1_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


