# ProductView

Product fields. Values are only set for fields requested explicitly in the request's search query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**aggregated_destination_status** | **str** | Aggregated destination status. | [optional] 
**availability** | **str** | Availability of the product. | [optional] 
**brand** | **str** | Brand of the product. | [optional] 
**category_l1** | **str** | First level of the product category in [Google&#39;s product taxonomy](https://support.google.com/merchants/answer/6324436). | [optional] 
**category_l2** | **str** | Second level of the product category in [Google&#39;s product taxonomy](https://support.google.com/merchants/answer/6324436). | [optional] 
**category_l3** | **str** | Third level of the product category in [Google&#39;s product taxonomy](https://support.google.com/merchants/answer/6324436). | [optional] 
**category_l4** | **str** | Fourth level of the product category in [Google&#39;s product taxonomy](https://support.google.com/merchants/answer/6324436). | [optional] 
**category_l5** | **str** | Fifth level of the product category in [Google&#39;s product taxonomy](https://support.google.com/merchants/answer/6324436). | [optional] 
**channel** | **str** | Channel of the product (online versus local). | [optional] 
**condition** | **str** | Condition of the product. | [optional] 
**creation_time** | **str** | The time the merchant created the product in timestamp seconds. | [optional] 
**currency_code** | **str** | Product price currency code (for example, ISO 4217). Absent if product price is not available. | [optional] 
**expiration_date** | [**ModelDate**](ModelDate.md) |  | [optional] 
**gtin** | **List[str]** | GTIN of the product. | [optional] 
**id** | **str** | The REST ID of the product, in the form of channel:contentLanguage:targetCountry:offerId. Content API methods that operate on products take this as their productId parameter. Should always be included in the SELECT clause. | [optional] 
**item_group_id** | **str** | Item group ID provided by the merchant for grouping variants together. | [optional] 
**item_issues** | [**List[ProductViewItemIssue]**](ProductViewItemIssue.md) | List of item issues for the product. | [optional] 
**language_code** | **str** | Language code of the product in BCP 47 format. | [optional] 
**offer_id** | **str** | Merchant-provided id of the product. | [optional] 
**price_micros** | **str** | Product price specified as micros (1 millionth of a standard unit, 1 USD &#x3D; 1000000 micros) in the product currency. Absent in case the information about the price of the product is not available. | [optional] 
**product_type_l1** | **str** | First level of the product type in merchant&#39;s own [product taxonomy](https://support.google.com/merchants/answer/6324436). | [optional] 
**product_type_l2** | **str** | Second level of the product type in merchant&#39;s own [product taxonomy](https://support.google.com/merchants/answer/6324436). | [optional] 
**product_type_l3** | **str** | Third level of the product type in merchant&#39;s own [product taxonomy](https://support.google.com/merchants/answer/6324436). | [optional] 
**product_type_l4** | **str** | Fourth level of the product type in merchant&#39;s own [product taxonomy](https://support.google.com/merchants/answer/6324436). | [optional] 
**product_type_l5** | **str** | Fifth level of the product type in merchant&#39;s own [product taxonomy](https://support.google.com/merchants/answer/6324436). | [optional] 
**shipping_label** | **str** | The normalized shipping label specified in the feed | [optional] 
**title** | **str** | Title of the product. | [optional] 

## Example

```python
from openapi_client.models.product_view import ProductView

# TODO update the JSON string below
json = "{}"
# create an instance of ProductView from a JSON string
product_view_instance = ProductView.from_json(json)
# print the JSON string representation of the object
print(ProductView.to_json())

# convert the object into a dict
product_view_dict = product_view_instance.to_dict()
# create an instance of ProductView from a dict
product_view_from_dict = ProductView.from_dict(product_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


