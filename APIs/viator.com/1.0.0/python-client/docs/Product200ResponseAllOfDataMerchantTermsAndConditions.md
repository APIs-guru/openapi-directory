# Product200ResponseAllOfDataMerchantTermsAndConditions


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**amount_refundable** | **int** | Usually shows the total amount refundable if the cancellation is processed now. &#x60;null&#x60; in /product as no booking has been made. | [optional] 
**cancellation_from_tour_date** | [**List[Product200ResponseAllOfDataMerchantTermsAndConditionsCancellationFromTourDateInner]**](Product200ResponseAllOfDataMerchantTermsAndConditionsCancellationFromTourDateInner.md) |  | [optional] 
**merchant_terms_and_conditions_type** | **int** | **numeric identifier** for the merchant terms and conditions type for *this* product | [optional] 
**terms_and_conditions** | **str** | **natural-language description** of the terms and conditions for *this* product | [optional] 

## Example

```python
from openapi_client.models.product200_response_all_of_data_merchant_terms_and_conditions import Product200ResponseAllOfDataMerchantTermsAndConditions

# TODO update the JSON string below
json = "{}"
# create an instance of Product200ResponseAllOfDataMerchantTermsAndConditions from a JSON string
product200_response_all_of_data_merchant_terms_and_conditions_instance = Product200ResponseAllOfDataMerchantTermsAndConditions.from_json(json)
# print the JSON string representation of the object
print(Product200ResponseAllOfDataMerchantTermsAndConditions.to_json())

# convert the object into a dict
product200_response_all_of_data_merchant_terms_and_conditions_dict = product200_response_all_of_data_merchant_terms_and_conditions_instance.to_dict()
# create an instance of Product200ResponseAllOfDataMerchantTermsAndConditions from a dict
product200_response_all_of_data_merchant_terms_and_conditions_from_dict = Product200ResponseAllOfDataMerchantTermsAndConditions.from_dict(product200_response_all_of_data_merchant_terms_and_conditions_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


