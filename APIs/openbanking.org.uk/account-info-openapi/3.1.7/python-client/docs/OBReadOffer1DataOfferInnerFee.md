# OBReadOffer1DataOfferInnerFee

Fee associated with the offer type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount** | **str** | A number of monetary units specified in an active currency where the unit of currency is explicit and compliant with ISO 4217. | 
**currency** | **str** | A code allocated to a currency by a Maintenance Agency under an international identification scheme, as described in the latest edition of the international standard ISO 4217 \&quot;Codes for the representation of currencies and funds\&quot;. | 

## Example

```python
from openapi_client.models.ob_read_offer1_data_offer_inner_fee import OBReadOffer1DataOfferInnerFee

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadOffer1DataOfferInnerFee from a JSON string
ob_read_offer1_data_offer_inner_fee_instance = OBReadOffer1DataOfferInnerFee.from_json(json)
# print the JSON string representation of the object
print(OBReadOffer1DataOfferInnerFee.to_json())

# convert the object into a dict
ob_read_offer1_data_offer_inner_fee_dict = ob_read_offer1_data_offer_inner_fee_instance.to_dict()
# create an instance of OBReadOffer1DataOfferInnerFee from a dict
ob_read_offer1_data_offer_inner_fee_from_dict = OBReadOffer1DataOfferInnerFee.from_dict(ob_read_offer1_data_offer_inner_fee_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


