# NotificationContactTemplateLinks


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**asset_server** | **str** |  | [optional] 
**notification_contact_templates** | **str** |  | [optional] 
**notification_plug_in** | **str** |  | [optional] 
**security** | **str** |  | [optional] 
**security_entries** | **str** |  | [optional] 
**var_self** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.notification_contact_template_links import NotificationContactTemplateLinks

# TODO update the JSON string below
json = "{}"
# create an instance of NotificationContactTemplateLinks from a JSON string
notification_contact_template_links_instance = NotificationContactTemplateLinks.from_json(json)
# print the JSON string representation of the object
print(NotificationContactTemplateLinks.to_json())

# convert the object into a dict
notification_contact_template_links_dict = notification_contact_template_links_instance.to_dict()
# create an instance of NotificationContactTemplateLinks from a dict
notification_contact_template_links_from_dict = NotificationContactTemplateLinks.from_dict(notification_contact_template_links_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


