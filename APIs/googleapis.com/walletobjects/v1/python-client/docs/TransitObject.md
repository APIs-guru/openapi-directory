# TransitObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_status** | [**ActivationStatus**](ActivationStatus.md) |  | [optional] 
**app_link_data** | [**AppLinkData**](AppLinkData.md) |  | [optional] 
**barcode** | [**Barcode**](Barcode.md) |  | [optional] 
**class_id** | **str** | Required. The class associated with this object. The class must be of the same type as this object, must already exist, and must be approved. Class IDs should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. | [optional] 
**class_reference** | [**TransitClass**](TransitClass.md) |  | [optional] 
**concession_category** | **str** | The concession category for the ticket. | [optional] 
**custom_concession_category** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**custom_ticket_status** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**device_context** | [**DeviceContext**](DeviceContext.md) |  | [optional] 
**disable_expiration_notification** | **bool** | Indicates if notifications should explicitly be suppressed. If this field is set to true, regardless of the &#x60;messages&#x60; field, expiration notifications to the user will be suppressed. By default, this field is set to false. Currently, this can only be set for offers. | [optional] 
**grouping_info** | [**GroupingInfo**](GroupingInfo.md) |  | [optional] 
**has_linked_device** | **bool** | Whether this object is currently linked to a single device. This field is set by the platform when a user saves the object, linking it to their device. Intended for use by select partners. Contact support for additional information. | [optional] 
**has_users** | **bool** | Indicates if the object has users. This field is set by the platform. | [optional] 
**hero_image** | [**Image**](Image.md) |  | [optional] 
**hex_background_color** | **str** | The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as &#x60;#ffcc00&#x60;. You can also use the shorthand version of the RGB triplet which is #rgb, such as &#x60;#fc0&#x60;. | [optional] 
**id** | **str** | Required. The unique identifier for an object. This ID must be unique across all objects from an issuer. This value should follow the format issuer ID.identifier where the former is issued by Google and latter is chosen by you. The unique identifier should only include alphanumeric characters, &#39;.&#39;, &#39;_&#39;, or &#39;-&#39;. | [optional] 
**image_modules_data** | [**List[ImageModuleData]**](ImageModuleData.md) | Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. | [optional] 
**info_module_data** | [**InfoModuleData**](InfoModuleData.md) |  | [optional] 
**links_module_data** | [**LinksModuleData**](LinksModuleData.md) |  | [optional] 
**locations** | [**List[LatLongPoint]**](LatLongPoint.md) | Note: This field is currently not supported to trigger geo notifications. | [optional] 
**messages** | [**List[Message]**](Message.md) | An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. | [optional] 
**pass_constraints** | [**PassConstraints**](PassConstraints.md) |  | [optional] 
**passenger_names** | **str** | The name(s) of the passengers the ticket is assigned to. The above &#x60;passengerType&#x60; field is meant to give Google context on this field. | [optional] 
**passenger_type** | **str** | The number of passengers. | [optional] 
**purchase_details** | [**PurchaseDetails**](PurchaseDetails.md) |  | [optional] 
**rotating_barcode** | [**RotatingBarcode**](RotatingBarcode.md) |  | [optional] 
**smart_tap_redemption_value** | **str** | The value that will be transmitted to a Smart Tap certified terminal over NFC for this object. The class level fields &#x60;enableSmartTap&#x60; and &#x60;redemptionIssuers&#x60; must also be set up correctly in order for the pass to support Smart Tap. Only ASCII characters are supported. | [optional] 
**state** | **str** | Required. The state of the object. This field is used to determine how an object is displayed in the app. For example, an &#x60;inactive&#x60; object is moved to the \&quot;Expired passes\&quot; section. | [optional] 
**text_modules_data** | [**List[TextModuleData]**](TextModuleData.md) | Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. | [optional] 
**ticket_leg** | [**TicketLeg**](TicketLeg.md) |  | [optional] 
**ticket_legs** | [**List[TicketLeg]**](TicketLeg.md) | Each ticket may contain one or more legs. Each leg contains departure and arrival information along with boarding and seating information. If only one leg is to be specified then use the &#x60;ticketLeg&#x60; field instead. Both &#x60;ticketLeg&#x60; and &#x60;ticketLegs&#x60; may not be set. | [optional] 
**ticket_number** | **str** | The number of the ticket. This is a unique identifier for the ticket in the transit operator&#39;s system. | [optional] 
**ticket_restrictions** | [**TicketRestrictions**](TicketRestrictions.md) |  | [optional] 
**ticket_status** | **str** | The status of the ticket. For states which affect display, use the &#x60;state&#x60; field instead. | [optional] 
**trip_id** | **str** | This id is used to group tickets together if the user has saved multiple tickets for the same trip. | [optional] 
**trip_type** | **str** | Required. The type of trip this transit object represents. Used to determine the pass title and/or which symbol to use between the origin and destination. | [optional] 
**valid_time_interval** | [**TimeInterval**](TimeInterval.md) |  | [optional] 
**version** | **str** | Deprecated | [optional] 

## Example

```python
from openapi_client.models.transit_object import TransitObject

# TODO update the JSON string below
json = "{}"
# create an instance of TransitObject from a JSON string
transit_object_instance = TransitObject.from_json(json)
# print the JSON string representation of the object
print(TransitObject.to_json())

# convert the object into a dict
transit_object_dict = transit_object_instance.to_dict()
# create an instance of TransitObject from a dict
transit_object_from_dict = TransitObject.from_dict(transit_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


