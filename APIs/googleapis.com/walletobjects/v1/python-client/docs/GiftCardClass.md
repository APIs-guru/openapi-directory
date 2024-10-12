# GiftCardClass


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_barcode_redemption** | **bool** | Determines whether the merchant supports gift card redemption using barcode. If true, app displays a barcode for the gift card on the Gift card details screen. If false, a barcode is not displayed. | [optional] 
**allow_multiple_users_per_object** | **bool** | Deprecated. Use &#x60;multipleDevicesAndHoldersAllowedStatus&#x60; instead. | [optional] 
**callback_options** | [**CallbackOptions**](CallbackOptions.md) |  | [optional] 
**card_number_label** | **str** | The label to display for the card number, such as \&quot;Card Number\&quot;. | [optional] 
**class_template_info** | [**ClassTemplateInfo**](ClassTemplateInfo.md) |  | [optional] 
**country_code** | **str** | Country code used to display the card&#39;s country (when the user is not in that country), as well as to display localized content when content is not available in the user&#39;s locale. | [optional] 
**enable_smart_tap** | **bool** | Identifies whether this class supports Smart Tap. The &#x60;redemptionIssuers&#x60; and object level &#x60;smartTapRedemptionLevel&#x60; fields must also be set up correctly in order for a pass to support Smart Tap. | [optional] 
**event_number_label** | **str** | The label to display for event number, such as \&quot;Target Event #\&quot;. | [optional] 
**hero_image** | [**Image**](Image.md) |  | [optional] 
**hex_background_color** | **str** | The background color for the card. If not set the dominant color of the hero image is used, and if no hero image is set, the dominant color of the logo is used. The format is #rrggbb where rrggbb is a hex RGB triplet, such as &#x60;#ffcc00&#x60;. You can also use the shorthand version of the RGB triplet which is #rgb, such as &#x60;#fc0&#x60;. | [optional] 
**homepage_uri** | [**Uri**](Uri.md) |  | [optional] 
**id** | **str** | Required. The unique identifier for a class. This ID must be unique across all classes from an issuer. This value should follow the format issuer ID. identifier where the former is issued by Google and latter is chosen by you. Your unique identifier should only include alphanumeric characters, &#39;.&#39;, &#39;_&#39;, or &#39;-&#39;. | [optional] 
**image_modules_data** | [**List[ImageModuleData]**](ImageModuleData.md) | Image module data. The maximum number of these fields displayed is 1 from object level and 1 for class object level. | [optional] 
**info_module_data** | [**InfoModuleData**](InfoModuleData.md) |  | [optional] 
**issuer_name** | **str** | Required. The issuer name. Recommended maximum length is 20 characters to ensure full string is displayed on smaller screens. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string &#x60;\&quot;walletobjects#giftCardClass\&quot;&#x60;. | [optional] 
**links_module_data** | [**LinksModuleData**](LinksModuleData.md) |  | [optional] 
**localized_card_number_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**localized_event_number_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**localized_issuer_name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**localized_merchant_name** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**localized_pin_label** | [**LocalizedString**](LocalizedString.md) |  | [optional] 
**locations** | [**List[LatLongPoint]**](LatLongPoint.md) | Note: This field is currently not supported to trigger geo notifications. | [optional] 
**merchant_name** | **str** | Merchant name, such as \&quot;Adam&#39;s Apparel\&quot;. The app may display an ellipsis after the first 20 characters to ensure full string is displayed on smaller screens. | [optional] 
**messages** | [**List[Message]**](Message.md) | An array of messages displayed in the app. All users of this object will receive its associated messages. The maximum number of these fields is 10. | [optional] 
**multiple_devices_and_holders_allowed_status** | **str** | Identifies whether multiple users and devices will save the same object referencing this class. | [optional] 
**pin_label** | **str** | The label to display for the PIN, such as \&quot;4-digit PIN\&quot;. | [optional] 
**program_logo** | [**Image**](Image.md) |  | [optional] 
**redemption_issuers** | **List[str]** | Identifies which redemption issuers can redeem the pass over Smart Tap. Redemption issuers are identified by their issuer ID. Redemption issuers must have at least one Smart Tap key configured. The &#x60;enableSmartTap&#x60; and object level &#x60;smartTapRedemptionLevel&#x60; fields must also be set up correctly in order for a pass to support Smart Tap. | [optional] 
**review** | [**Review**](Review.md) |  | [optional] 
**review_status** | **str** | Required. The status of the class. This field can be set to &#x60;draft&#x60; or &#x60;underReview&#x60; using the insert, patch, or update API calls. Once the review state is changed from &#x60;draft&#x60; it may not be changed back to &#x60;draft&#x60;. You should keep this field to &#x60;draft&#x60; when the class is under development. A &#x60;draft&#x60; class cannot be used to create any object. You should set this field to &#x60;underReview&#x60; when you believe the class is ready for use. The platform will automatically set this field to &#x60;approved&#x60; and it can be immediately used to create or migrate objects. When updating an already &#x60;approved&#x60; class you should keep setting this field to &#x60;underReview&#x60;. | [optional] 
**security_animation** | [**SecurityAnimation**](SecurityAnimation.md) |  | [optional] 
**text_modules_data** | [**List[TextModuleData]**](TextModuleData.md) | Text module data. If text module data is also defined on the class, both will be displayed. The maximum number of these fields displayed is 10 from the object and 10 from the class. | [optional] 
**version** | **str** | Deprecated | [optional] 
**view_unlock_requirement** | **str** | View Unlock Requirement options for the gift card. | [optional] 
**wide_program_logo** | [**Image**](Image.md) |  | [optional] 
**word_mark** | [**Image**](Image.md) |  | [optional] 

## Example

```python
from openapi_client.models.gift_card_class import GiftCardClass

# TODO update the JSON string below
json = "{}"
# create an instance of GiftCardClass from a JSON string
gift_card_class_instance = GiftCardClass.from_json(json)
# print the JSON string representation of the object
print(GiftCardClass.to_json())

# convert the object into a dict
gift_card_class_dict = gift_card_class_instance.to_dict()
# create an instance of GiftCardClass from a dict
gift_card_class_from_dict = GiftCardClass.from_dict(gift_card_class_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


