# NotificationContactTemplate


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available** | **bool** |  | [optional] 
**config_string** | **str** |  | [optional] 
**contact_type** | **str** |  | [optional] 
**description** | **str** |  | [optional] 
**escalation_timeout** | **str** |  | [optional] 
**has_children** | **bool** |  | [optional] 
**id** | **str** |  | [optional] 
**links** | [**NotificationContactTemplateLinks**](NotificationContactTemplateLinks.md) |  | [optional] 
**maximum_retries** | **int** |  | [optional] 
**minimum_acknowledgements** | **int** |  | [optional] 
**name** | **str** |  | [optional] 
**notify_when_instance_ended** | **bool** |  | [optional] 
**path** | **str** |  | [optional] 
**plug_in_name** | **str** |  | [optional] 
**retry_interval** | **str** |  | [optional] 
**web_exception** | [**WebException**](WebException.md) |  | [optional] 
**web_id** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification_contact_template import NotificationContactTemplate

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationContactTemplate from a JSON string
notification_contact_template_instance = NotificationContactTemplate.from_json(json)
# print the JSON string representation of the object
print(NotificationContactTemplate.to_json())

# convert the object into a dict
notification_contact_template_dict = notification_contact_template_instance.to_dict()
# create an instance of NotificationContactTemplate from a dict
notification_contact_template_from_dict = NotificationContactTemplate.from_dict(notification_contact_template_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


