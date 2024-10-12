# BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_refundable** | **str** | **currency-formatted** amount that will be refunded if the cancellation is processed now. | [optional] 
**cancellation_from_tour_date** | [**List[BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditionsCancellationFromTourDateInner]**](BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditionsCancellationFromTourDateInner.md) | **array** of cancellation policy objects | [optional] 
**terms_and_conditions** | **str** | **natural-language description** of the terms and conditions for *this* product | [optional] 

## Example

```python
from openapi_client.models.booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions import BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditions

# TODO update the JSON string below
json = "{}"
# create an instance of BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditions from a JSON string
booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions_instance = BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditions.from_json(json)
# print the JSON string representation of the object
print(BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditions.to_json())

# convert the object into a dict
booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions_dict = booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions_instance.to_dict()
# create an instance of BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditions from a dict
booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions_from_dict = BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditions.from_dict(booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


