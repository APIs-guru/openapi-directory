# PagerDutyNotificationEndpoint


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
**client_url** | **str** |  | [optional] 
**routing_key** | **str** |  | 

## Example

```python
from openapi_client.models.pager_duty_notification_endpoint import PagerDutyNotificationEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of PagerDutyNotificationEndpoint from a JSON string
pager_duty_notification_endpoint_instance = PagerDutyNotificationEndpoint.from_json(json)
# print the JSON string representation of the object
print(PagerDutyNotificationEndpoint.to_json())

# convert the object into a dict
pager_duty_notification_endpoint_dict = pager_duty_notification_endpoint_instance.to_dict()
# create an instance of PagerDutyNotificationEndpoint from a dict
pager_duty_notification_endpoint_from_dict = PagerDutyNotificationEndpoint.from_dict(pager_duty_notification_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


