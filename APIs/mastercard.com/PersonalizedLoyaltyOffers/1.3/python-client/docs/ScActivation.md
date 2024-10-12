# ScActivation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activation_date** | **date** | Day on which the offer became ready for redemption. | [optional] 
**activation_id** | **str** | Distinct identifier for the offer being available for redemption by the user, not intended for end-user display. | [optional] 
**cash_back** | **str** | Value earned upon fulfillment of offer conditions, not applicable to points activations. | [optional] 
**days_remaining** | **str** | Number of days until the offer expires. | [optional] 
**headline** | **str** | Brief details about the deal. | [optional] 
**merchant** | **str** | Display name for the retailer to which the offer applies. | [optional] 
**merchant_logo** | **str** | Square retailer brand image. | [optional] 
**offer_id** | **str** | System-wide identifier for the campaign, not intended for end-user display. | [optional] 
**points_earned** | **str** | Value earned upon fulfillment of offer conditions, not applicable to cash activations. | [optional] 
**redemption_end_date** | **date** | Last day on which a purchase will qualify for the offer. | [optional] 
**redemption_mode** | **str** | Type of credit made upon redemption of the offer- CASH or POINTS. | [optional] 
**remaining_spend** | **str** | Purchase amount still required to redeem the offer. | [optional] 
**short_description** | **str** | Summary of the deal, typically displayed beneath the headline in a list view. | [optional] 
**status** | **str** | Disposition of offer- ACTIVATED, REDEEMED, CREDIT_DECLINED. | [optional] 
**total_spend** | **str** | Count of purchases user made to redeem the offer. | [optional] 

## Example

```python
from openapi_client.models.sc_activation import ScActivation

# TODO update the JSON string below
json = "{}"
# create an instance of ScActivation from a JSON string
sc_activation_instance = ScActivation.from_json(json)
# print the JSON string representation of the object
print(ScActivation.to_json())

# convert the object into a dict
sc_activation_dict = sc_activation_instance.to_dict()
# create an instance of ScActivation from a dict
sc_activation_from_dict = ScActivation.from_dict(sc_activation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


