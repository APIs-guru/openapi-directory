# HTTPNotificationEndpoint


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
**auth_method** | **str** |  | 
**content_template** | **str** |  | [optional] 
**headers** | **Dict[str, str]** | Customized headers. | [optional] 
**method** | **str** |  | 
**password** | **str** |  | [optional] 
**token** | **str** |  | [optional] 
**url** | **str** |  | 
**username** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.http_notification_endpoint import HTTPNotificationEndpoint

# TODO update the JSON string below
json = "{}"
# create an instance of HTTPNotificationEndpoint from a JSON string
http_notification_endpoint_instance = HTTPNotificationEndpoint.from_json(json)
# print the JSON string representation of the object
print(HTTPNotificationEndpoint.to_json())

# convert the object into a dict
http_notification_endpoint_dict = http_notification_endpoint_instance.to_dict()
# create an instance of HTTPNotificationEndpoint from a dict
http_notification_endpoint_from_dict = HTTPNotificationEndpoint.from_dict(http_notification_endpoint_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


