# EventTicketClass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_multiple_users_per_object** | **bool** | Deprecated. Use &#x60;multipleDevicesAndHoldersAllowedStatus&#x60; instead. | [optional] 
**callback_options** | [**CallbackOptions**](CallbackOptions.md) |  | [optional] 
**class_template_info** | [**ClassTemplateInfo**](ClassTemplateInfo.md) |  | [optional] 
**confirmation_code_label** | **str** | The label to use for the confirmation code value (&#x60;eventTicketObject.reservationInfo.confirmationCode&#x60;) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both &#x60;confirmationCodeLabel&#x60; and &#x60;customConfirmationCodeLabel&#x60; may not be set. If neither is set, the label will default to \&quot;Confirmation Code\&quot;, localized. If the confirmation code field is unset, this label will not be used. | [optional] 
**country_code** | **str** | Country code used to display the card&#39;s country (when the user is not in that country), as well as to display localized content when content is not available in the user&#39;s locale. | [optional] 
**custom_confirmation_code_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**custom_gate_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**custom_row_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**custom_seat_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**custom_section_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**date_time** | [**EventDateTime**](EventDateTime.md) |  | [optional] 
**enable_smart_tap** | **bool** | Identifies whether this class supports Smart Tap. The &#x60;redemptionIssuers&#x60; and object level &#x60;smartTapRedemptionLevel&#x60; fields must also be set up correctly in order for a pass to support Smart Tap. | [optional] 
**event_id** | **str** | The ID of the event. This ID should be unique for every event in an account. It is used to group tickets together if the user has saved multiple tickets for the same event. It can be at most 64 characters. If provided, the grouping will be stable. Be wary of unintentional collision to avoid grouping tickets that should not be grouped. If you use only one class per event, you can simply set this to the &#x60;classId&#x60; (with or without the issuer ID portion). If not provided, the platform will attempt to use other data to group tickets (potentially unstable). | [optional] 
**event_name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**fine_print** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**gate_label** | **str** | The label to use for the gate value (&#x60;eventTicketObject.seatInfo.gate&#x60;) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both &#x60;gateLabel&#x60; and &#x60;customGateLabel&#x60; may not be set. If neither is set, the label will default to \&quot;Gate\&quot;, localized. If the gate field is unset, this label will not be used. | [optional] 
**hero_image** | [**Image**](Image.md) |  | [optional] 
**hex_background_color** | **str** | The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as &#x60;#ffcc00&#x60;. You can also use the shorthand version of the RGB triplet which is #rgb, such as &#x60;#fc0&#x60;. | [optional] 
**homepage_uri** | [**Uri**](Uri.md) |  | [optional] 
**id** | **str** | Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, &#39;.&#39;, &#39;_&#39;, or &#39;-&#39;. | [optional] 
**image_modules_data** | [**List[ImageModuleData]**](ImageModuleData.md) | Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. | [optional] 
**info_module_data** | [**InfoModuleData**](InfoModuleData.md) |  | [optional] 
**issuer_name** | **str** | Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#eventTicketClass\&quot;&#x60;. | [optional] 
**links_module_data** | [**LinksModuleData**](LinksModuleData.md) |  | [optional] 
**localized_issuer_name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**locations** | [**List[LatLongPoint]**](LatLongPoint.md) | Note: This field is currently not supported to trigger geo notifications. | [optional] 
**logo** | [**Image**](Image.md) |  | [optional] 
**messages** | [**List[Message]**](Message.md) | An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. | [optional] 
**multiple_devices_and_holders_allowed_status** | **str** | Identifies whether multiple users and devices will save the same object referencing this class. | [optional] 
**redemption_issuers** | **List[str]** | Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The &#x60;enableSmartTap&#x60; and object level &#x60;smartTapRedemptionLevel&#x60; fields must also be set up correctly in order for a pass to support Smart Tap. | [optional] 
**review** | [**Review**](Review.md) |  | [optional] 
**review_status** | **str** | Required. The status of the class. This field can be set to &#x60;draft&#x60; or &#x60;underReview&#x60; using the insert, patch, or update API calls. Once the review state is changed from &#x60;draft&#x60; it may not be changed back to &#x60;draft&#x60;. You should keep this field to &#x60;draft&#x60; when the class is under development. A &#x60;draft&#x60; class cannot be used to create any object. You should set this field to &#x60;underReview&#x60; when you believe the class is ready for use. The platform will automatically set this field to &#x60;approved&#x60; and it can be immediately used to create or migrate objects. When updating an already &#x60;approved&#x60; class you should keep setting this field to &#x60;underReview&#x60;. | [optional] 
**row_label** | **str** | The label to use for the row value (&#x60;eventTicketObject.seatInfo.row&#x60;) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both &#x60;rowLabel&#x60; and &#x60;customRowLabel&#x60; may not be set. If neither is set, the label will default to \&quot;Row\&quot;, localized. If the row field is unset, this label will not be used. | [optional] 
**seat_label** | **str** | The label to use for the seat value (&#x60;eventTicketObject.seatInfo.seat&#x60;) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both &#x60;seatLabel&#x60; and &#x60;customSeatLabel&#x60; may not be set. If neither is set, the label will default to \&quot;Seat\&quot;, localized. If the seat field is unset, this label will not be used. | [optional] 
**section_label** | **str** | The label to use for the section value (&#x60;eventTicketObject.seatInfo.section&#x60;) on the card detail view. Each available option maps to a set of localized strings, so that translations are shown to the user based on their locale. Both &#x60;sectionLabel&#x60; and &#x60;customSectionLabel&#x60; may not be set. If neither is set, the label will default to \&quot;Section\&quot;, localized. If the section field is unset, this label will not be used. | [optional] 
**security_animation** | [**SecurityAnimation**](SecurityAnimation.md) |  | [optional] 
**text_modules_data** | [**List[TextModuleData]**](TextModuleData.md) | Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. | [optional] 
**venue** | [**EventVenue**](EventVenue.md) |  | [optional] 
**version** | **str** | Deprecated | [optional] 
**view_unlock_requirement** | **str** | View Unlock Requirement options for the event ticket. | [optional] 
**wide_logo** | [**Image**](Image.md) |  | [optional] 
**word_mark** | [**Image**](Image.md) |  | [optional] 

## Example

```python
from openapi_client.models.event_ticket_class import EventTicketClass

# TODO update the JSON string below
json = "{}"
# create an instance of EventTicketClass from a JSON string
event_ticket_class_instance = EventTicketClass.from_json(json)
# print the JSON string representation of the object
print(EventTicketClass.to_json())

# convert the object into a dict
event_ticket_class_dict = event_ticket_class_instance.to_dict()
# create an instance of EventTicketClass from a dict
event_ticket_class_from_dict = EventTicketClass.from_dict(event_ticket_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


