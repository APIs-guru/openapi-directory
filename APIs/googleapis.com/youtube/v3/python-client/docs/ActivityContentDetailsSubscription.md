# ActivityContentDetailsSubscription

Information about a channel that a user subscribed to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**resource_id** | [**ResourceId**](ResourceId.md) |  | [optional] 

## Example

```python
from openapi_client.models.activity_content_details_subscription import ActivityContentDetailsSubscription

# TODO update the JSON string below
json = "{}"
# create an instance of ActivityContentDetailsSubscription from a JSON string
activity_content_details_subscription_instance = ActivityContentDetailsSubscription.from_json(json)
# print the JSON string representation of the object
print(ActivityContentDetailsSubscription.to_json())

# convert the object into a dict
activity_content_details_subscription_dict = activity_content_details_subscription_instance.to_dict()
# create an instance of ActivityContentDetailsSubscription from a dict
activity_content_details_subscription_from_dict = ActivityContentDetailsSubscription.from_dict(activity_content_details_subscription_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


