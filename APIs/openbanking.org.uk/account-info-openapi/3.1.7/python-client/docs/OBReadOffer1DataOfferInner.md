# OBReadOffer1DataOfferInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**account_id** | **str** | A unique and immutable identifier used to identify the account resource. This identifier has no meaning to the account owner. | 
**amount** | [**OBReadOffer1DataOfferInnerAmount**](OBReadOffer1DataOfferInnerAmount.md) |  | [optional] 
**description** | **str** | Further details of the offer. | [optional] 
**end_date_time** | **datetime** | Date and time at which the offer ends.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**fee** | [**OBReadOffer1DataOfferInnerFee**](OBReadOffer1DataOfferInnerFee.md) |  | [optional] 
**offer_id** | **str** | A unique and immutable identifier used to identify the offer resource. This identifier has no meaning to the account owner. | [optional] 
**offer_type** | **str** | Offer type, in a coded form. | [optional] 
**rate** | **str** | Rate associated with the offer type. | [optional] 
**start_date_time** | **datetime** | Date and time at which the offer starts.All dates in the JSON payloads are represented in ISO 8601 date-time format.  All date-time fields in responses must include the timezone. An example is below: 2017-04-05T10:43:07+00:00 | [optional] 
**term** | **str** | Further details of the term of the offer. | [optional] 
**url** | **str** | URL (Uniform Resource Locator) where documentation on the offer can be found | [optional] 
**value** | **int** | Value associated with the offer type. | [optional] 

## Example

```python
from openapi_client.models.ob_read_offer1_data_offer_inner import OBReadOffer1DataOfferInner

# TODO update the JSON string below
json = "{}"
# create an instance of OBReadOffer1DataOfferInner from a JSON string
ob_read_offer1_data_offer_inner_instance = OBReadOffer1DataOfferInner.from_json(json)
# print the JSON string representation of the object
print(OBReadOffer1DataOfferInner.to_json())

# convert the object into a dict
ob_read_offer1_data_offer_inner_dict = ob_read_offer1_data_offer_inner_instance.to_dict()
# create an instance of OBReadOffer1DataOfferInner from a dict
ob_read_offer1_data_offer_inner_from_dict = OBReadOffer1DataOfferInner.from_dict(ob_read_offer1_data_offer_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


