# GenericObject

Generic Object Next ID: 121

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_link_data** | [**AppLinkData**](AppLinkData.md) |  | [optional] 
**barcode** | [**Barcode**](Barcode.md) |  | [optional] 
**card_title** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**class_id** | **str** | Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format &#x60;issuerID.identifier&#x60; where &#x60;issuerID&#x60; is issued by Google and &#x60;identifier&#x60; is chosen by you. | [optional] 
**generic_type** | **str** | Specify which &#x60;GenericType&#x60; the card belongs to. | [optional] 
**grouping_info** | [**GroupingInfo**](GroupingInfo.md) |  | [optional] 
**has_users** | **bool** | Indicates if the object has users. This field is set by the platform. | [optional] 
**header** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**hero_image** | [**Image**](Image.md) |  | [optional] 
**hex_background_color** | **str** | The background color for the card. If not set, the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used and if logo is not set, a color would be chosen by Google. | [optional] 
**id** | **str** | Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value needs to follow the format &#x60;issuerID.identifier&#x60; where &#x60;issuerID&#x60; is issued by Google and &#x60;identifier&#x60; is chosen by you. The unique identifier can only include alphanumeric characters, &#x60;.&#x60;, &#x60;_&#x60;, or &#x60;-&#x60;. | [optional] 
**image_modules_data** | [**List[ImageModuleData]**](ImageModuleData.md) | Image module data. Only one of the image from class and one from object level will be rendered when both set. | [optional] 
**links_module_data** | [**LinksModuleData**](LinksModuleData.md) |  | [optional] 
**logo** | [**Image**](Image.md) |  | [optional] 
**notifications** | [**Notifications**](Notifications.md) |  | [optional] 
**pass_constraints** | [**PassConstraints**](PassConstraints.md) |  | [optional] 
**rotating_barcode** | [**RotatingBarcode**](RotatingBarcode.md) |  | [optional] 
**smart_tap_redemption_value** | **str** | The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields &#x60;enableSmartTap&#x60; and &#x60;redemptionIssuers&#x60; must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. | [optional] 
**state** | **str** | The state of the object. This field is used to determine how an object is displayed in the app. For example, an &#x60;inactive&#x60; object is moved to the \&quot;Expired passes\&quot; section. If this is not provided, the object would be considered &#x60;ACTIVE&#x60;. | [optional] 
**subheader** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**text_modules_data** | [**List[TextModuleData]**](TextModuleData.md) | Text module data. If &#x60;textModulesData&#x60; is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from class and 10 from object. | [optional] 
**valid_time_interval** | [**TimeInterval**](TimeInterval.md) |  | [optional] 
**wide_logo** | [**Image**](Image.md) |  | [optional] 

## Example

```python
from openapi_client.models.generic_object import GenericObject

# TODO update the JSON string below
json = "{}"
# create an instance of GenericObject from a JSON string
generic_object_instance = GenericObject.from_json(json)
# print the JSON string representation of the object
print(GenericObject.to_json())

# convert the object into a dict
generic_object_dict = generic_object_instance.to_dict()
# create an instance of GenericObject from a dict
generic_object_from_dict = GenericObject.from_dict(generic_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


