# OfferObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_link_data** | [**AppLinkData**](AppLinkData.md) |  | [optional] 
**barcode** | [**Barcode**](Barcode.md) |  | [optional] 
**class_id** | **str** | Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. | [optional] 
**class_reference** | [**OfferClass**](OfferClass.md) |  | [optional] 
**disable_expiration_notification** | **bool** | Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the &#x60;messages&#x60; field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. | [optional] 
**grouping_info** | [**GroupingInfo**](GroupingInfo.md) |  | [optional] 
**has_linked_device** | **bool** | Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. | [optional] 
**has_users** | **bool** | Indicates if the object has users. This field is set by the platform. | [optional] 
**hero_image** | [**Image**](Image.md) |  | [optional] 
**id** | **str** | Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, &#39;.&#39;, &#39;_&#39;, or &#39;-&#39;. | [optional] 
**image_modules_data** | [**List[ImageModuleData]**](ImageModuleData.md) | Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. | [optional] 
**info_module_data** | [**InfoModuleData**](InfoModuleData.md) |  | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#offerObject\&quot;&#x60;. | [optional] 
**links_module_data** | [**LinksModuleData**](LinksModuleData.md) |  | [optional] 
**locations** | [**List[LatLongPoint]**](LatLongPoint.md) | Note: This field is currently not supported to trigger geo notifications. | [optional] 
**messages** | [**List[Message]**](Message.md) | An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. | [optional] 
**pass_constraints** | [**PassConstraints**](PassConstraints.md) |  | [optional] 
**rotating_barcode** | [**RotatingBarcode**](RotatingBarcode.md) |  | [optional] 
**smart_tap_redemption_value** | **str** | The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields &#x60;enableSmartTap&#x60; and &#x60;redemptionIssuers&#x60; must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. | [optional] 
**state** | **str** | Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an &#x60;inactive&#x60; object is moved to the \&quot;Expired passes\&quot; section. | [optional] 
**text_modules_data** | [**List[TextModuleData]**](TextModuleData.md) | Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. | [optional] 
**valid_time_interval** | [**TimeInterval**](TimeInterval.md) |  | [optional] 
**version** | **str** | Deprecated | [optional] 

## Example

```python
from openapi_client.models.offer_object import OfferObject

# TODO update the JSON string below
json = "{}"
# create an instance of OfferObject from a JSON string
offer_object_instance = OfferObject.from_json(json)
# print the JSON string representation of the object
print(OfferObject.to_json())

# convert the object into a dict
offer_object_dict = offer_object_instance.to_dict()
# create an instance of OfferObject from a dict
offer_object_from_dict = OfferObject.from_dict(offer_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


