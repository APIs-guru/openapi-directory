# BillbeeInterfacesBillbeeAPIModelStockArticleApiModel


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**stock_code** | **str** |  | [optional] 
**stock_current** | **float** |  | [optional] 
**stock_desired** | **float** |  | [optional] 
**stock_id** | **int** |  | [optional] 
**stock_warning** | **float** |  | [optional] 
**unfulfilled_amount** | **float** |  | [optional] 

## Example

```python
from openapi_client.models.billbee_interfaces_billbee_api_model_stock_article_api_model import BillbeeInterfacesBillbeeAPIModelStockArticleApiModel

# TODO update the JSON string below
json = "{}"
# create an instance of BillbeeInterfacesBillbeeAPIModelStockArticleApiModel from a JSON string
billbee_interfaces_billbee_api_model_stock_article_api_model_instance = BillbeeInterfacesBillbeeAPIModelStockArticleApiModel.from_json(json)
# print the JSON string representation of the object
print(BillbeeInterfacesBillbeeAPIModelStockArticleApiModel.to_json())

# convert the object into a dict
billbee_interfaces_billbee_api_model_stock_article_api_model_dict = billbee_interfaces_billbee_api_model_stock_article_api_model_instance.to_dict()
# create an instance of BillbeeInterfacesBillbeeAPIModelStockArticleApiModel from a dict
billbee_interfaces_billbee_api_model_stock_article_api_model_from_dict = BillbeeInterfacesBillbeeAPIModelStockArticleApiModel.from_dict(billbee_interfaces_billbee_api_model_stock_article_api_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


