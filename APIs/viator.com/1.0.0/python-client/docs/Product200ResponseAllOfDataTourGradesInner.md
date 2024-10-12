# Product200ResponseAllOfDataTourGradesInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**currency_code** | **str** | **currency code** of the currency *this* product&#39;s tour grades prices are shown in | [optional] 
**default_language_code** | **str** | **language code** of the standard language for *this* tour grade | [optional] 
**grade_code** | **str** | **unique alphanumeric identifier** of *this* tour grade | [optional] 
**grade_departure_time** | **str** | **departure time** for *this* tour grade if available | [optional] 
**grade_description** | **str** | **natural-language description** of *this* tour grade | [optional] 
**grade_title** | **str** | **natural-language description** of *this* tour grade | [optional] 
**lang_services** | **Dict[str, str]** | **dictionary** of language service codes and their natural-language descriptors | [optional] 
**merchant_net_price_from** | **float** | Numeric &#39;from&#39; (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee; i.e. the merchant net rate  For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)  | [optional] 
**merchant_net_price_from_formatted** | **str** | Currency-formatted &#39;from&#39; (lowest possible) price that Viator will invoice the merchant for the sale of this product, excluding the transaction fee (i.e. the merchant net rate)  For more information, see: [Merchant pricing](#section/Key-concepts/Merchant-pricing)  | [optional] 
**price_from** | **float** | **numeric suggested retail price** for *this* tour grade - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**price_from_formatted** | **str** | **currency-formatted suggested retail price** for *this* tour grade - For more information, see: [Merchant pricing](#section/Merchant-APIs/Merchant-pricing)  | [optional] 
**sort_order** | **int** | **sort order** of *this* tour grade | [optional] 

## Example

```python
from openapi_client.models.product200_response_all_of_data_tour_grades_inner import Product200ResponseAllOfDataTourGradesInner

# TODO update the JSON string below
json = "{}"
# create an instance of Product200ResponseAllOfDataTourGradesInner from a JSON string
product200_response_all_of_data_tour_grades_inner_instance = Product200ResponseAllOfDataTourGradesInner.from_json(json)
# print the JSON string representation of the object
print(Product200ResponseAllOfDataTourGradesInner.to_json())

# convert the object into a dict
product200_response_all_of_data_tour_grades_inner_dict = product200_response_all_of_data_tour_grades_inner_instance.to_dict()
# create an instance of Product200ResponseAllOfDataTourGradesInner from a dict
product200_response_all_of_data_tour_grades_inner_from_dict = Product200ResponseAllOfDataTourGradesInner.from_dict(product200_response_all_of_data_tour_grades_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


