# RedemedOfferMerchant


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**category** | **str** | The type of retailer to which the offer applies, not intended for end-user display. | [optional] 
**merchant_distance** | **float** | Reserved for future use. | [optional] 
**name** | **str** | Display name for the retailer to which the offer applies. | [optional] 
**store_locator_url** | **str** | Web page where retailer outlets can be found. | [optional] 
**website_url** | **str** | The internet address of the retailer. | [optional] 

## Example

```python
from openapi_client.models.redemed_offer_merchant import RedemedOfferMerchant

# TODO update the JSON string below
json = "{}"
# create an instance of RedemedOfferMerchant from a JSON string
redemed_offer_merchant_instance = RedemedOfferMerchant.from_json(json)
# print the JSON string representation of the object
print(RedemedOfferMerchant.to_json())

# convert the object into a dict
redemed_offer_merchant_dict = redemed_offer_merchant_instance.to_dict()
# create an instance of RedemedOfferMerchant from a dict
redemed_offer_merchant_from_dict = RedemedOfferMerchant.from_dict(redemed_offer_merchant_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


