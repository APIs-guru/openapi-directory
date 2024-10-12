# Subscription

[Developer Preview](https://developers.google.com/workspace/preview). A subscription to receive events about a Google Workspace resource. To learn more about subscriptions, see the [Google Workspace Events API overview](https://developers.google.com/workspace/events).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**authority** | **str** | Output only. The user who authorized the creation of the subscription. Format: &#x60;users/{user}&#x60; For Google Workspace users, the &#x60;{user}&#x60; value is the [&#x60;user.id&#x60;](https://developers.google.com/admin-sdk/directory/reference/rest/v1/users#User.FIELDS.ids) field from the Directory API. | [optional] [readonly] 
**create_time** | **str** | Output only. The time when the subscription is created. | [optional] [readonly] 
**etag** | **str** | Optional. This checksum is computed by the server based on the value of other fields, and might be sent on update requests to ensure the client has an up-to-date value before proceeding. | [optional] 
**event_types** | **List[str]** | Required. Immutable. Unordered list. Input for creating a subscription. Otherwise, output only. One or more types of events to receive about the target resource. Formatted according to the CloudEvents specification. The supported event types depend on the target resource of your subscription. For details, see [Supported Google Workspace events](https://developers.google.com/workspace/events/guides#supported-events). By default, you also receive events about the [lifecycle of your subscription](https://developers.google.com/workspace/events/guides/events-lifecycle). You don&#39;t need to specify lifecycle events for this field. If you specify an event type that doesn&#39;t exist for the target resource, the request returns an HTTP &#x60;400 Bad Request&#x60; status code. | [optional] 
**expire_time** | **str** | Non-empty default. The timestamp in UTC when the subscription expires. Always displayed on output, regardless of what was used on input. | [optional] 
**name** | **str** | Optional. Immutable. Identifier. Resource name of the subscription. Format: &#x60;subscriptions/{subscription}&#x60; | [optional] 
**notification_endpoint** | [**NotificationEndpoint**](NotificationEndpoint.md) |  | [optional] 
**payload_options** | [**PayloadOptions**](PayloadOptions.md) |  | [optional] 
**reconciling** | **bool** | Output only. If &#x60;true&#x60;, the subscription is in the process of being updated. | [optional] [readonly] 
**state** | **str** | Output only. The state of the subscription. Determines whether the subscription can receive events and deliver them to the notification endpoint. | [optional] [readonly] 
**suspension_reason** | **str** | Output only. The error that suspended the subscription. To reactivate the subscription, resolve the error and call the &#x60;ReactivateSubscription&#x60; method. | [optional] [readonly] 
**target_resource** | **str** | Required. Immutable. The Google Workspace resource that&#39;s monitored for events, formatted as the [full resource name](https://google.aip.dev/122#full-resource-names). To learn about target resources and the events that they support, see [Supported Google Workspace events](https://developers.google.com/workspace/events#supported-events). A user can only authorize your app to create one subscription for a given target resource. If your app tries to create another subscription with the same user credentials, the request returns an &#x60;ALREADY_EXISTS&#x60; error. | [optional] 
**ttl** | **str** | Input only. The time-to-live (TTL) or duration for the subscription. If unspecified or set to &#x60;0&#x60;, uses the maximum possible duration. | [optional] 
**uid** | **str** | Output only. System-assigned unique identifier for the subscription. | [optional] [readonly] 
**update_time** | **str** | Output only. The last time that the subscription is updated. | [optional] [readonly] 

## Example

```python
from openapi_client.models.subscription import Subscription

# TODO update the JSON string below
json = "{}"
# create an instance of Subscription from a JSON string
subscription_instance = Subscription.from_json(json)
# print the JSON string representation of the object
print(Subscription.to_json())

# convert the object into a dict
subscription_dict = subscription_instance.to_dict()
# create an instance of Subscription from a dict
subscription_from_dict = Subscription.from_dict(subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


