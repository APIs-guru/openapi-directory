# BillbeeInterfacesBillbeeAPIModelArticleApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**basic_attributes** | [**List[BillbeeInterfacesOrderMultiLanguageString]**](BillbeeInterfacesOrderMultiLanguageString.md) |  | [optional] 
**bill_of_material** | [**List[BillbeeInterfacesBillbeeAPIModelBomSubArticleApiModel]**](BillbeeInterfacesBillbeeAPIModelBomSubArticleApiModel.md) |  | [optional] 
**category1** | [**BillbeeInterfacesBillbeeAPIModelArticleCategoryApiModel**](BillbeeInterfacesBillbeeAPIModelArticleCategoryApiModel.md) |  | [optional] 
**category2** | [**BillbeeInterfacesBillbeeAPIModelArticleCategoryApiModel**](BillbeeInterfacesBillbeeAPIModelArticleCategoryApiModel.md) |  | [optional] 
**category3** | [**BillbeeInterfacesBillbeeAPIModelArticleCategoryApiModel**](BillbeeInterfacesBillbeeAPIModelArticleCategoryApiModel.md) |  | [optional] 
**condition** | **int** |  | [optional] 
**cost_price** | **float** |  | [optional] 
**country_of_origin** | **str** |  | [optional] 
**custom_fields** | [**List[BillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldValueModel]**](BillbeeInterfacesBillbeeAPIModelArticleApiCustomFieldValueModel.md) |  | [optional] 
**delivery_time** | **int** |  | [optional] 
**description** | [**List[BillbeeInterfacesOrderMultiLanguageString]**](BillbeeInterfacesOrderMultiLanguageString.md) |  | [optional] 
**ean** | **str** |  | [optional] 
**export_description** | **str** |  | [optional] 
**export_description_multi_language** | [**List[BillbeeInterfacesOrderMultiLanguageString]**](BillbeeInterfacesOrderMultiLanguageString.md) |  | [optional] 
**height_cm** | **float** |  | [optional] 
**id** | **int** |  | [optional] 
**images** | [**List[BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel]**](BillbeeInterfacesBillbeeAPIModelArticleImageRelationApiModel.md) |  | [optional] 
**invoice_text** | [**List[BillbeeInterfacesOrderMultiLanguageString]**](BillbeeInterfacesOrderMultiLanguageString.md) |  | [optional] 
**is_customizable** | **bool** |  | 
**is_deactivated** | **bool** |  | [optional] 
**is_digital** | **bool** |  | 
**length_cm** | **float** |  | [optional] 
**low_stock** | **bool** |  | [optional] [readonly] 
**manufacturer** | **str** |  | [optional] 
**materials** | [**List[BillbeeInterfacesOrderMultiLanguageString]**](BillbeeInterfacesOrderMultiLanguageString.md) |  | [optional] 
**occasion** | **int** |  | [optional] 
**price** | **float** |  | 
**recipient** | **int** |  | [optional] 
**sku** | **str** |  | [optional] 
**shipping_product_id** | **int** |  | [optional] 
**short_description** | [**List[BillbeeInterfacesOrderMultiLanguageString]**](BillbeeInterfacesOrderMultiLanguageString.md) |  | [optional] 
**sold_amount** | **float** |  | [optional] 
**sold_amount_last30_days** | **float** |  | [optional] 
**sold_sum_gross** | **float** |  | [optional] 
**sold_sum_gross_last30_days** | **float** |  | [optional] 
**sold_sum_net** | **float** |  | [optional] 
**sold_sum_net_last30_days** | **float** |  | [optional] 
**sources** | [**List[BillbeeInterfacesBillbeeAPIModelArticleSourceApiModel]**](BillbeeInterfacesBillbeeAPIModelArticleSourceApiModel.md) |  | [optional] 
**stock_code** | **str** |  | [optional] 
**stock_current** | **float** |  | [optional] 
**stock_desired** | **float** |  | [optional] 
**stock_reduce_items_per_sale** | **float** |  | [optional] 
**stock_warning** | **float** |  | [optional] 
**stocks** | [**List[BillbeeInterfacesBillbeeAPIModelStockArticleApiModel]**](BillbeeInterfacesBillbeeAPIModelStockArticleApiModel.md) |  | [optional] 
**tags** | [**List[BillbeeInterfacesOrderMultiLanguageString]**](BillbeeInterfacesOrderMultiLanguageString.md) |  | [optional] 
**taric_number** | **str** |  | [optional] 
**title** | [**List[BillbeeInterfacesOrderMultiLanguageString]**](BillbeeInterfacesOrderMultiLanguageString.md) |  | [optional] 
**type** | **int** |  | 
**unit** | **int** |  | [optional] 
**units_per_item** | **float** |  | [optional] 
**vat1_rate** | **float** |  | 
**vat2_rate** | **float** |  | 
**vat_index** | **int** |  | 
**weight** | **int** |  | [optional] 
**weight_net** | **int** |  | [optional] 
**width_cm** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_article_api_model import BillbeeInterfacesBillbeeAPIModelArticleApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelArticleApiModel from a JSON string
billbee_interfaces_billbee_api_model_article_api_model_instance = BillbeeInterfacesBillbeeAPIModelArticleApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelArticleApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_article_api_model_dict = billbee_interfaces_billbee_api_model_article_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelArticleApiModel from a dict
billbee_interfaces_billbee_api_model_article_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelArticleApiModel.from_dict(billbee_interfaces_billbee_api_model_article_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


