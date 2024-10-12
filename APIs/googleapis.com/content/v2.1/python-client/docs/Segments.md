# Segments

Dimensions according to which metrics are segmented in the response. Values of product dimensions, such as `offer_id`, reflect the state of a product at the time of the corresponding event, for example, impression or order. Segment fields cannot be selected in queries without also selecting at least one metric field. Values are only set for dimensions requested explicitly in the request's search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**brand** | **str** | Brand of the product. | [optional] 
**category_l1** | **str** | [Product category (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google&#39;s product taxonomy. | [optional] 
**category_l2** | **str** | [Product category (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google&#39;s product taxonomy. | [optional] 
**category_l3** | **str** | [Product category (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google&#39;s product taxonomy. | [optional] 
**category_l4** | **str** | [Product category (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google&#39;s product taxonomy. | [optional] 
**category_l5** | **str** | [Product category (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in Google&#39;s product taxonomy. | [optional] 
**currency_code** | **str** | Currency in which price metrics are represented, for example, if you select &#x60;ordered_item_sales_micros&#x60;, the returned value will be represented by this currency. | [optional] 
**custom_label0** | **str** | Custom label 0 for custom grouping of products. | [optional] 
**custom_label1** | **str** | Custom label 1 for custom grouping of products. | [optional] 
**custom_label2** | **str** | Custom label 2 for custom grouping of products. | [optional] 
**custom_label3** | **str** | Custom label 3 for custom grouping of products. | [optional] 
**custom_label4** | **str** | Custom label 4 for custom grouping of products. | [optional] 
**customer_country_code** | **str** | Code of the country where the customer is located at the time of the event. Represented in the ISO 3166 format. If the customer country cannot be determined, a special &#39;ZZ&#39; code is returned. | [optional] 
**var_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**offer_id** | **str** | Merchant-provided id of the product. | [optional] 
**product_type_l1** | **str** | [Product type (1st level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant&#39;s own product taxonomy. | [optional] 
**product_type_l2** | **str** | [Product type (2nd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant&#39;s own product taxonomy. | [optional] 
**product_type_l3** | **str** | [Product type (3rd level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant&#39;s own product taxonomy. | [optional] 
**product_type_l4** | **str** | [Product type (4th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant&#39;s own product taxonomy. | [optional] 
**product_type_l5** | **str** | [Product type (5th level)](https://developers.google.com/shopping-content/guides/reports/segmentation#category_and_product_type) in merchant&#39;s own product taxonomy. | [optional] 
**program** | **str** | Program to which metrics apply, for example, Free Product Listing. | [optional] 
**title** | **str** | Title of the product. | [optional] 
**week** | [**ModelDate**](ModelDate.md) |  | [optional] 

## Example

```python
from openapi_client.models.segments import Segments

# TODO update the JSON string below
json = "{}"
# create an instance of Segments from a JSON string
segments_instance = Segments.from_json(json)
# print the JSON string representation of the object
print(Segments.to_json())

# convert the object into a dict
segments_dict = segments_instance.to_dict()
# create an instance of Segments from a dict
segments_from_dict = Segments.from_dict(segments_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


