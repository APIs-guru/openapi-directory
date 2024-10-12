# SlackNotificationEndpoint


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** |  | [optional] [readonly] 
**description** | **str** | An optional description of the notification endpoint. | [optional] 
**id** | **str** |  | [optional] 
**labels** | [**List[Label]**](Label.md) |  | [optional] 
**links** | [**NotificationEndpointBaseLinks**](NotificationEndpointBaseLinks.md) |  | [optional] 
**name** | **str** |  | 
**org_id** | **str** |  | [optional] 
**status** | **str** | The status of the endpoint. | [optional] [default to 'active']
**type** | [**NotificationEndpointType**](NotificationEndpointType.md) |  | 
**updated_at** | **datetime** |  | [optional] [readonly] 
**user_id** | **str** |  | [optional] 
**token** | **str** | Specifies the API token string. Specify either &#x60;URL&#x60; or &#x60;Token&#x60;. | [optional] 
**url** | **str** | Specifies the URL of the Slack endpoint. Specify either &#x60;URL&#x60; or &#x60;Token&#x60;. | [optional] 

## Example

```python
from openapi_client.models.slack_notification_endpoint import SlackNotificationEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of SlackNotificationEndpoint from a JSON string
slack_notification_endpoint_instance = SlackNotificationEndpoint.from_json(json)
# print the JSON string representation of the object
print(SlackNotificationEndpoint.to_json())

# convert the object into a dict
slack_notification_endpoint_dict = slack_notification_endpoint_instance.to_dict()
# create an instance of SlackNotificationEndpoint from a dict
slack_notification_endpoint_from_dict = SlackNotificationEndpoint.from_dict(slack_notification_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


