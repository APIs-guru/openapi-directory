# PackageItemDTO

The PackageItemDTO Class. Contains relevant fields of PackageItem DTO by masking actual Package entity's fields in application.             

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**article_id** | **int** | Refer to ArticleId in Article table in DB.              | 
**article_name** | **str** | Name of the article(Addon) in a particular package.              read only              | [optional] 
**article_number** | **int** | Number assigned the article(Addon) in a particular package.              read only              | [optional] 
**article_price** | **float** | Price of the article determined from that package. Price of a same article can be varied from package to package.              | [optional] 
**end_order** | **int** | Number of the installment this article is available to.              | [optional] 
**is_include_service_in_charge** | **bool** | Is Included in service charge  | [optional] 
**measure_unit** | **str** |  | [optional] 
**number_of_items** | **float** | How many article(Addon) is available for that package from that type.              | [optional] 
**start_order** | **int** | Number of the installment this article is available from.              | [optional] 

## Example

```python
from openapi_client.models.package_item_dto import PackageItemDTO

# TODO update the JSON string below
json = "{}"
# create an instance of PackageItemDTO from a JSON string
package_item_dto_instance = PackageItemDTO.from_json(json)
# print the JSON string representation of the object
print(PackageItemDTO.to_json())

# convert the object into a dict
package_item_dto_dict = package_item_dto_instance.to_dict()
# create an instance of PackageItemDTO from a dict
package_item_dto_from_dict = PackageItemDTO.from_dict(package_item_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


