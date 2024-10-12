# TransactionsSummaryProperties

The properties of the reservation transaction summary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_profile_id** | **str** | Billing Profile id to which this product belongs. | [optional] [readonly] 
**billing_profile_name** | **str** | Billing Profile name to which this product belongs. | [optional] [readonly] 
**customer_display_name** | **str** | Display name of customer to which this product belongs. | [optional] [readonly] 
**customer_id** | **str** | Customer id to which this product belongs. | [optional] [readonly] 
**var_date** | **datetime** | The date of reservation transaction. | [optional] [readonly] 
**invoice** | **str** | Invoice number or &#39;pending&#39; if not invoiced. | [optional] [readonly] 
**invoice_section_id** | **str** | Invoice section id to which this product belongs. | [optional] [readonly] 
**invoice_section_name** | **str** | Invoice section name to which this product belongs. | [optional] [readonly] 
**kind** | **str** | The kind of transaction. Choices are all and reservation. | [optional] 
**order_id** | **str** | The reservation order id. | [optional] [readonly] 
**order_name** | **str** | The reservation order name. | [optional] [readonly] 
**product_description** | **str** | Product description. | [optional] [readonly] 
**product_family** | **str** | The product family. | [optional] [readonly] 
**product_type** | **str** | The type of product. | [optional] [readonly] 
**product_type_id** | **str** | The product type id. | [optional] [readonly] 
**quantity** | **int** | Purchase quantity. | [optional] [readonly] 
**subscription_id** | **str** | The subscription id. | [optional] [readonly] 
**subscription_name** | **str** | The subscription name. | [optional] [readonly] 
**transaction_amount** | [**Amount**](Amount.md) |  | [optional] 
**transaction_type** | **str** | Transaction types. | [optional] 

## Example

```python
from openapi_client.models.transactions_summary_properties import TransactionsSummaryProperties

# TODO update the JSON string below
json = "{}"
# create an instance of TransactionsSummaryProperties from a JSON string
transactions_summary_properties_instance = TransactionsSummaryProperties.from_json(json)
# print the JSON string representation of the object
print(TransactionsSummaryProperties.to_json())

# convert the object into a dict
transactions_summary_properties_dict = transactions_summary_properties_instance.to_dict()
# create an instance of TransactionsSummaryProperties from a dict
transactions_summary_properties_from_dict = TransactionsSummaryProperties.from_dict(transactions_summary_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


