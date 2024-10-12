# Product200ResponseAllOfDataMerchantTermsAndConditionsCancellationFromTourDateInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**day_range_max** | **int** | **number** of days prior to the tour start date that *this* policy window begins | [optional] 
**day_range_min** | **int** | **number** of days prior to the tour start date that *this* policy window ends | [optional] 
**percentage_refundable** | **int** | **percentage** of total price refundable if cancelled within *this* time window | [optional] 
**policy_end_timestamp** | **int** | Usually shows the Unix timestamp giving the exact time the policy ends. &#x60;null&#x60; in /product as no booking has yet been made. | [optional] 
**policy_start_timestamp** | **int** | Usually shows the Unix timestamp giving the exact time the policy commences. &#x60;null&#x60; in /product as no booking has yet been made. | [optional] 

## Example

```python
from openapi_client.models.product200_response_all_of_data_merchant_terms_and_conditions_cancellation_from_tour_date_inner import Product200ResponseAllOfDataMerchantTermsAndConditionsCancellationFromTourDateInner

# TODO update the JSON string below
json = "{}"
# create an instance of Product200ResponseAllOfDataMerchantTermsAndConditionsCancellationFromTourDateInner from a JSON string
product200_response_all_of_data_merchant_terms_and_conditions_cancellation_from_tour_date_inner_instance = Product200ResponseAllOfDataMerchantTermsAndConditionsCancellationFromTourDateInner.from_json(json)
# print the JSON string representation of the object
print(Product200ResponseAllOfDataMerchantTermsAndConditionsCancellationFromTourDateInner.to_json())

# convert the object into a dict
product200_response_all_of_data_merchant_terms_and_conditions_cancellation_from_tour_date_inner_dict = product200_response_all_of_data_merchant_terms_and_conditions_cancellation_from_tour_date_inner_instance.to_dict()
# create an instance of Product200ResponseAllOfDataMerchantTermsAndConditionsCancellationFromTourDateInner from a dict
product200_response_all_of_data_merchant_terms_and_conditions_cancellation_from_tour_date_inner_from_dict = Product200ResponseAllOfDataMerchantTermsAndConditionsCancellationFromTourDateInner.from_dict(product200_response_all_of_data_merchant_terms_and_conditions_cancellation_from_tour_date_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


