# MatchedOffer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_sc** | **str** | ACTIVATED_STATEMENT_CREDIT- ready for redemption by the user. AVAILABLE- requires call to Activate Statement Credit Offer to make ready for redemption. | [optional] 
**currency_code** | **str** | ISO 4217 code in which the redeeming transaction must be made to qualify for the offer. | [optional] 
**discount** | **str** | The markdown represented by the offer, in absolute value or percentage. | [optional] 
**discount_type** | **str** | The kind of markdown represented by the offer. ABSOLUTE- fixed amount. PERCENTAGE- share of purchase. | [optional] 
**event_end_date** | **date** | Last day that redemption can be made. | [optional] 
**event_start_date** | **date** | First day that redemption can be made by any user, may not apply to the specified user. | [optional] 
**headline** | **str** | Brief details about the deal. | [optional] 
**language** | **str** | Tongue of offer display text. | [optional] 
**merchant** | [**Merchant**](Merchant.md) |  | [optional] 
**merchant_image_url** | **str** | Square picture of the retailer logo. | [optional] 
**offer_id** | **str** | System-wide identifier for the campaign, not intended for end-user display. | [optional] 
**offer_source** | **str** | Platform that made the offer available, not intended for end-user display. | [optional] 
**offer_type** | **str** | The kind of deal. POSTPAIDCREDIT- Statement Credit Offer, which is a discount that is automatically applied to the card linked to the user and utilized to make the purchase. | [optional] 
**price** | **str** | Reserved for future use. | [optional] 
**redemption_mode** | **str** | Type of credit made upon redemption of the offer- CASH, POINTS, or EITHER. | [optional] 
**short_description** | **str** | Summary of the deal, typically displayed beneath the headline in a list view. | [optional] 

## Example

```python
from openapi_client.models.matched_offer import MatchedOffer

# TODO update the JSON string below
json = "{}"
# create an instance of MatchedOffer from a JSON string
matched_offer_instance = MatchedOffer.from_json(json)
# print the JSON string representation of the object
print(MatchedOffer.to_json())

# convert the object into a dict
matched_offer_dict = matched_offer_instance.to_dict()
# create an instance of MatchedOffer from a dict
matched_offer_from_dict = MatchedOffer.from_dict(matched_offer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


