# BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditionsCancellationFromTourDateInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_range_max** | **int** | **number** of days prior to the tour start date that *this* policy window begins. &#x60;null&#x60; signifies open-endedness | [optional] 
**day_range_min** | **int** | **number** of days prior to the tour start date that *this* policy window ends | [optional] 
**percentage_refundable** | **int** | **percentage** of total price refundable if cancelled within *this* time window | [optional] 
**policy_end_timestamp** | **int** | **Unix timestamp** giving the exact time the policy ends | [optional] 
**policy_start_timestamp** | **int** | **Unix timestamp** giving the exact time the policy commences | [optional] 

## Example

```python
from openapi_client.models.booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions_cancellation_from_tour_date_inner import BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditionsCancellationFromTourDateInner

# TODO update the JSON string below
json = "{}"
# create an instance of BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditionsCancellationFromTourDateInner from a JSON string
booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions_cancellation_from_tour_date_inner_instance = BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditionsCancellationFromTourDateInner.from_json(json)
# print the JSON string representation of the object
print(BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditionsCancellationFromTourDateInner.to_json())

# convert the object into a dict
booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions_cancellation_from_tour_date_inner_dict = booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions_cancellation_from_tour_date_inner_instance.to_dict()
# create an instance of BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditionsCancellationFromTourDateInner from a dict
booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions_cancellation_from_tour_date_inner_from_dict = BookingBook200ResponseAllOfDataItemSummariesInnerMerchantTermsAndConditionsCancellationFromTourDateInner.from_dict(booking_book200_response_all_of_data_item_summaries_inner_merchant_terms_and_conditions_cancellation_from_tour_date_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


