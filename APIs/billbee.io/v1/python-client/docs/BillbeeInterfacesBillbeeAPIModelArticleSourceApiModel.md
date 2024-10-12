# BillbeeInterfacesBillbeeAPIModelArticleSourceApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**api_account_id** | **int** |  | [optional] 
**api_account_name** | **str** |  | [optional] 
**custom** | **object** |  | [optional] 
**export_factor** | **float** |  | [optional] 
**id** | **int** |  | [optional] 
**source** | **str** |  | 
**source_id** | **str** |  | 
**stock_sync_inactive** | **bool** |  | [optional] 
**stock_sync_max** | **float** |  | [optional] 
**stock_sync_min** | **float** |  | [optional] 
**units_per_item** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_article_source_api_model import BillbeeInterfacesBillbeeAPIModelArticleSourceApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelArticleSourceApiModel from a JSON string
billbee_interfaces_billbee_api_model_article_source_api_model_instance = BillbeeInterfacesBillbeeAPIModelArticleSourceApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelArticleSourceApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_article_source_api_model_dict = billbee_interfaces_billbee_api_model_article_source_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelArticleSourceApiModel from a dict
billbee_interfaces_billbee_api_model_article_source_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelArticleSourceApiModel.from_dict(billbee_interfaces_billbee_api_model_article_source_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


