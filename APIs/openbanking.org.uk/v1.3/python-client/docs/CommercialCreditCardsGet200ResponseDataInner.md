# CommercialCreditCardsGet200ResponseDataInner

Commercial Credit Card

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**benefits** | [**BusinessCurrentAccountBenefits**](BusinessCurrentAccountBenefits.md) |  | 
**description** | **str** | Product description | 
**details** | [**CommercialCreditCardsGet200ResponseDataInnerDetails**](CommercialCreditCardsGet200ResponseDataInnerDetails.md) |  | 
**eligibility** | [**BusinessCurrentAccountEligibility**](BusinessCurrentAccountEligibility.md) |  | 
**key_features** | **str** | Product key features | 
**organisation** | [**ATMOrganisation**](ATMOrganisation.md) |  | 
**other_key_features** | **str** | Additional Features of the card | [optional] 
**payment_holiday** | **bool** | Indicates whether a payment holiday is possible | 
**payment_holiday_description** | **str** | Detailed description on the payment holiday if available | [optional] 
**product_identifier** | **str** | Identifier within the parent organisation for the product. Must be unique in the organisation | 
**product_name** | **str** | Name of the Commercial Credit Card | 
**product_segment** | **List[str]** | Marketing or industry segment that the product is designed for | [optional] 
**product_type** | **str** | Descriptive code for the product category | 
**product_url** | **List[str]** | URL provided by the organisation which redirects to the product (on live products only). There might be more than one product at a given URL | 
**tsand_cs** | **List[str]** | URL provided by the parent organisation which redirects to the current T&amp;Cs. Only applies on live products | 

## Example

```python
from openapi_client.models.commercial_credit_cards_get200_response_data_inner import CommercialCreditCardsGet200ResponseDataInner

# TODO update the JSON string below
json = "{}"
# create an instance of CommercialCreditCardsGet200ResponseDataInner from a JSON string
commercial_credit_cards_get200_response_data_inner_instance = CommercialCreditCardsGet200ResponseDataInner.from_json(json)
# print the JSON string representation of the object
print(CommercialCreditCardsGet200ResponseDataInner.to_json())

# convert the object into a dict
commercial_credit_cards_get200_response_data_inner_dict = commercial_credit_cards_get200_response_data_inner_instance.to_dict()
# create an instance of CommercialCreditCardsGet200ResponseDataInner from a dict
commercial_credit_cards_get200_response_data_inner_from_dict = CommercialCreditCardsGet200ResponseDataInner.from_dict(commercial_credit_cards_get200_response_data_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


