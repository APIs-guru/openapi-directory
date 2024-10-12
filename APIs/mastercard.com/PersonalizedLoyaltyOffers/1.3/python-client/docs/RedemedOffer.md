# RedemedOffer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_date** | **date** | Day on which the offer became ready for redemption. | [optional] 
**activation_id** | **str** | Distinct identifier for the offer being available for redemption by the user, not intended for end-user display. | [optional] 
**currency_code** | **str** | ISO 4217 code in which the redeeming transaction must be made to qualify for the offer. | [optional] 
**detail_postpaid_credit_offer** | [**DetailPostpaidCreditOffer**](DetailPostpaidCreditOffer.md) |  | [optional] 
**event_end_date** | **date** | Last day that redemption can be made. | [optional] 
**event_start_date** | **date** | First day that redemption can be made. | [optional] 
**headline** | **str** | Brief details about the deal. | [optional] 
**language** | **str** | Tongue of offer display text. | [optional] 
**linkout_url** | **str** | Deprecated, disregard. | [optional] 
**long_description** | **str** | Explanation of the deal, typically displayed beneath the headline in a detail view. Often the same as the ShortDescription. | [optional] 
**max_user_redemptions** | **int** | The number of times that the cardholder may take advantage of this offer. | [optional] 
**merchant** | [**RedemedOfferMerchant**](RedemedOfferMerchant.md) |  | [optional] 
**offer_display** | [**OfferDisplay**](OfferDisplay.md) |  | [optional] 
**offer_id** | **str** | System-wide identifier for the campaign, not intended for end-user display. | [optional] 
**offer_media** | [**OfferMedia**](OfferMedia.md) |  | [optional] 
**offer_source** | **str** | Platform that made the offer available, not intended for end-user display. | [optional] 
**offer_type** | **str** | The kind of deal. POSTPAIDCREDIT- Statement Credit Offer, which is a discount that is automatically applied to the card linked to the user and utilized to make the purchase. | [optional] 
**offer_url** | **str** | Deprecated, disregard. | [optional] 
**redemption_mode** | **str** | Type of credit made upon redemption of the offer- CASH, POINTS, or EITHER. | [optional] 
**redemption_type** | **str** | Where a purchase may be made to qualify for the offer- INSTORE, ONLINE, or ONLINE-INSTORE (either). | [optional] 
**short_description** | **str** | Summary of the deal, typically displayed beneath the headline in a list view. | [optional] 
**transactions** | [**Transaction**](Transaction.md) |  | [optional] 

## Example

```python
from openapi_client.models.redemed_offer import RedemedOffer

# TODO update the JSON string below
json = "{}"
# create an instance of RedemedOffer from a JSON string
redemed_offer_instance = RedemedOffer.from_json(json)
# print the JSON string representation of the object
print(RedemedOffer.to_json())

# convert the object into a dict
redemed_offer_dict = redemed_offer_instance.to_dict()
# create an instance of RedemedOffer from a dict
redemed_offer_from_dict = RedemedOffer.from_dict(redemed_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


