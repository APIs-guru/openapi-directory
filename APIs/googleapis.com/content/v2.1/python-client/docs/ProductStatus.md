# ProductStatus

The status of a product, that is, information about a product computed asynchronously.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**creation_date** | **str** | Date on which the item has been created, in ISO 8601 format. | [optional] 
**destination_statuses** | [**List[ProductStatusDestinationStatus]**](ProductStatusDestinationStatus.md) | The intended destinations for the product. | [optional] 
**google_expiration_date** | **str** | Date on which the item expires in Google Shopping, in ISO 8601 format. | [optional] 
**item_level_issues** | [**List[ProductStatusItemLevelIssue]**](ProductStatusItemLevelIssue.md) | A list of all issues associated with the product. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;&#x60;content#productStatus&#x60;\&quot; | [optional] 
**last_update_date** | **str** | Date on which the item has been last updated, in ISO 8601 format. | [optional] 
**link** | **str** | The link to the product. | [optional] 
**product_id** | **str** | The ID of the product for which status is reported. | [optional] 
**title** | **str** | The title of the product. | [optional] 

## Example

```python
from openapi_client.models.product_status import ProductStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ProductStatus from a JSON string
product_status_instance = ProductStatus.from_json(json)
# print the JSON string representation of the object
print(ProductStatus.to_json())

# convert the object into a dict
product_status_dict = product_status_instance.to_dict()
# create an instance of ProductStatus from a dict
product_status_from_dict = ProductStatus.from_dict(product_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


