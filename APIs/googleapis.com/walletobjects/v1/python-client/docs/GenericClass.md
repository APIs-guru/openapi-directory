# GenericClass

Generic Class

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callback_options** | [**CallbackOptions**](CallbackOptions.md) |  | [optional] 
**class_template_info** | [**ClassTemplateInfo**](ClassTemplateInfo.md) |  | [optional] 
**enable_smart_tap** | **bool** | Available only to Smart Tap enabled partners. Contact support for additional guidance. | [optional] 
**id** | **str** | Required. The unique identifier for the class. This ID must be unique across all from an issuer. This value needs to follow the format &#x60;issuerID.identifier&#x60; where &#x60;issuerID&#x60; is issued by Google and &#x60;identifier&#x60; is chosen by you. The unique identifier can only include alphanumeric characters, &#x60;.&#x60;, &#x60;_&#x60;, or &#x60;-&#x60;. | [optional] 
**image_modules_data** | [**List[ImageModuleData]**](ImageModuleData.md) | Image module data. If &#x60;imageModulesData&#x60; is also defined on the object, both will be displayed. Only one of the image from class and one from object level will be rendered when both set. | [optional] 
**links_module_data** | [**LinksModuleData**](LinksModuleData.md) |  | [optional] 
**messages** | [**List[Message]**](Message.md) | An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. | [optional] 
**multiple_devices_and_holders_allowed_status** | **str** | Identifies whether multiple users and devices will save the same object referencing this class. | [optional] 
**redemption_issuers** | **List[str]** | Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The &#x60;enableSmartTap&#x60; and object level &#x60;smartTapRedemptionLevel&#x60; fields must also be set up correctly in order for a pass to support Smart Tap. | [optional] 
**security_animation** | [**SecurityAnimation**](SecurityAnimation.md) |  | [optional] 
**text_modules_data** | [**List[TextModuleData]**](TextModuleData.md) | Text module data. If &#x60;textModulesData&#x60; is also defined on the object, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. | [optional] 
**view_unlock_requirement** | **str** | View Unlock Requirement options for the generic pass. | [optional] 

## Example

```python
from openapi_client.models.generic_class import GenericClass

# TODO update the JSON string below
json = "{}"
# create an instance of GenericClass from a JSON string
generic_class_instance = GenericClass.from_json(json)
# print the JSON string representation of the object
print(GenericClass.to_json())

# convert the object into a dict
generic_class_dict = generic_class_instance.to_dict()
# create an instance of GenericClass from a dict
generic_class_from_dict = GenericClass.from_dict(generic_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


