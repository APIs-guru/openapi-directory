# OfferDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | ISO 4217 code in which the redeeming transaction must be made to qualify for the offer. | [optional] 
**detail_postpaid_credit_offer** | [**DetailPostpaidCreditOffer**](DetailPostpaidCreditOffer.md) |  | [optional] 
**event_end_date** | **date** | Last day that redemption can be made. | [optional] 
**event_start_date** | **date** | First day that redemption can be made by any user, may not apply to the specified user. | [optional] 
**headline** | **str** | Brief details about the deal. | [optional] 
**language** | **str** | Tongue of offer display text. | [optional] 
**link_out** | **object** | Deprecated. | [optional] 
**long_description** | **str** | Explanation of the deal, typically displayed beneath the headline in a detail view. Often the same as the ShortDescription. | [optional] 
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**offer_display** | [**OfferDisplay**](OfferDisplay.md) |  | [optional] 
**offer_id** | **str** | System-wide identifier for the campaign, not intended for end-user display. | [optional] 
**offer_media** | [**OfferMedia**](OfferMedia.md) |  | [optional] 
**offer_source** | **str** | Platform that made the offer available, not intended for end-user display. | [optional] 
**offer_type** | **str** | The kind of deal. POSTPAIDCREDIT- Statement Credit Offer, which is a discount that is automatically applied to the card linked to the user and utilized to make the purchase. | [optional] 
**offer_url** | **object** | Deprecated. | [optional] 
**redemption_mode** | **str** | Type of credit made upon redemption of the offer- CASH, POINTS, or EITHER. | [optional] 
**redemption_type** | **str** | Where a purchase may be made to qualify for the offer- INSTORE, ONLINE, or ONLINE-INSTORE (either). | [optional] 
**short_description** | **str** | Summary of the deal, typically displayed beneath the headline in a list view. | [optional] 

## Example

```python
from openapi_client.models.offer_details import OfferDetails

# TODO update the JSON string below
json = "{}"
# create an instance of OfferDetails from a JSON string
offer_details_instance = OfferDetails.from_json(json)
# print the JSON string representation of the object
print(OfferDetails.to_json())

# convert the object into a dict
offer_details_dict = offer_details_instance.to_dict()
# create an instance of OfferDetails from a dict
offer_details_from_dict = OfferDetails.from_dict(offer_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


