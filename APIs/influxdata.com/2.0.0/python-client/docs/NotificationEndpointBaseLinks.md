# NotificationEndpointBaseLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **str** | URI of resource. | [optional] [readonly] 
**members** | **str** | URI of resource. | [optional] [readonly] 
**owners** | **str** | URI of resource. | [optional] [readonly] 
**var_self** | **str** | URI of resource. | [optional] [readonly] 

## Example

```python
from openapi_client.models.notification_endpoint_base_links import NotificationEndpointBaseLinks

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationEndpointBaseLinks from a JSON string
notification_endpoint_base_links_instance = NotificationEndpointBaseLinks.from_json(json)
# print the JSON string representation of the object
print(NotificationEndpointBaseLinks.to_json())

# convert the object into a dict
notification_endpoint_base_links_dict = notification_endpoint_base_links_instance.to_dict()
# create an instance of NotificationEndpointBaseLinks from a dict
notification_endpoint_base_links_from_dict = NotificationEndpointBaseLinks.from_dict(notification_endpoint_base_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


