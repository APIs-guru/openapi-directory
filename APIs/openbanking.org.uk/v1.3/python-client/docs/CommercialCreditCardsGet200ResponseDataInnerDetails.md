# CommercialCreditCardsGet200ResponseDataInnerDetails

Commercial Credit Card Group 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cc_sub_type** | **str** | CCC Subtype Code | 
**commercial_credit_card_item** | [**CommercialCreditCardsGet200ResponseDataInnerDetailsCommercialCreditCardItem**](CommercialCreditCardsGet200ResponseDataInnerDetailsCommercialCreditCardItem.md) |  | 

## Example

```python
from openapi_client.models.commercial_credit_cards_get200_response_data_inner_details import CommercialCreditCardsGet200ResponseDataInnerDetails

# TODO update the JSON string below
json = "{}"
# create an instance of CommercialCreditCardsGet200ResponseDataInnerDetails from a JSON string
commercial_credit_cards_get200_response_data_inner_details_instance = CommercialCreditCardsGet200ResponseDataInnerDetails.from_json(json)
# print the JSON string representation of the object
print(CommercialCreditCardsGet200ResponseDataInnerDetails.to_json())

# convert the object into a dict
commercial_credit_cards_get200_response_data_inner_details_dict = commercial_credit_cards_get200_response_data_inner_details_instance.to_dict()
# create an instance of CommercialCreditCardsGet200ResponseDataInnerDetails from a dict
commercial_credit_cards_get200_response_data_inner_details_from_dict = CommercialCreditCardsGet200ResponseDataInnerDetails.from_dict(commercial_credit_cards_get200_response_data_inner_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


