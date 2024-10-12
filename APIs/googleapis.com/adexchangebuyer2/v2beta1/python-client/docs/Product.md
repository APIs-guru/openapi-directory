# Product

A product is a segment of inventory that a seller wants to sell. It is associated with certain terms and targeting information which helps the buyer know more about the inventory.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**available_end_time** | **str** | The proposed end time for the deal. The field will be truncated to the order of seconds during serving. | [optional] 
**available_start_time** | **str** | Inventory availability dates. The start time will be truncated to seconds during serving. Thus, a field specified as 3:23:34.456 (HH:mm:ss.SSS) will be truncated to 3:23:34 when serving. | [optional] 
**create_time** | **str** | Creation time. | [optional] 
**creator_contacts** | [**List[ContactInformation]**](ContactInformation.md) | Optional contact information for the creator of this product. | [optional] 
**display_name** | **str** | The display name for this product as set by the seller. | [optional] 
**has_creator_signed_off** | **bool** | If the creator has already signed off on the product, then the buyer can finalize the deal by accepting the product as is. When copying to a proposal, if any of the terms are changed, then auto_finalize is automatically set to false. | [optional] 
**product_id** | **str** | The unique ID for the product. | [optional] 
**product_revision** | **str** | The revision number of the product (auto-assigned by Marketplace). | [optional] 
**publisher_profile_id** | **str** | An ID which can be used by the Publisher Profile API to get more information about the seller that created this product. | [optional] 
**seller** | [**Seller**](Seller.md) |  | [optional] 
**syndication_product** | **str** | The syndication product associated with the deal. | [optional] 
**targeting_criterion** | [**List[TargetingCriteria]**](TargetingCriteria.md) | Targeting that is shared between the buyer and the seller. Each targeting criterion has a specified key and for each key there is a list of inclusion value or exclusion values. | [optional] 
**terms** | [**DealTerms**](DealTerms.md) |  | [optional] 
**update_time** | **str** | Time of last update. | [optional] 
**web_property_code** | **str** | The web-property code for the seller. This needs to be copied as is when adding a new deal to a proposal. | [optional] 

## Example

```python
from openapi_client.models.product import Product

# TODO update the JSON string below
json = "{}"
# create an instance of Product from a JSON string
product_instance = Product.from_json(json)
# print the JSON string representation of the object
print(Product.to_json())

# convert the object into a dict
product_dict = product_instance.to_dict()
# create an instance of Product from a dict
product_from_dict = Product.from_dict(product_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


