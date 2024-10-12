# NotificationEndpointDiscriminator


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
**token** | **str** | Specifies the Telegram bot token. See https://core.telegram.org/bots#creating-a-new-bot . | 
**url** | **str** |  | 
**client_url** | **str** |  | [optional] 
**routing_key** | **str** |  | 
**auth_method** | **str** |  | 
**content_template** | **str** |  | [optional] 
**headers** | **Dict[str, str]** | Customized headers. | [optional] 
**method** | **str** |  | 
**password** | **str** |  | [optional] 
**username** | **str** |  | [optional] 
**channel** | **str** | ID of the telegram channel, a chat_id in https://core.telegram.org/bots/api#sendmessage . | 

## Example

```python
from openapi_client.models.notification_endpoint_discriminator import NotificationEndpointDiscriminator

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationEndpointDiscriminator from a JSON string
notification_endpoint_discriminator_instance = NotificationEndpointDiscriminator.from_json(json)
# print the JSON string representation of the object
print(NotificationEndpointDiscriminator.to_json())

# convert the object into a dict
notification_endpoint_discriminator_dict = notification_endpoint_discriminator_instance.to_dict()
# create an instance of NotificationEndpointDiscriminator from a dict
notification_endpoint_discriminator_from_dict = NotificationEndpointDiscriminator.from_dict(notification_endpoint_discriminator_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


