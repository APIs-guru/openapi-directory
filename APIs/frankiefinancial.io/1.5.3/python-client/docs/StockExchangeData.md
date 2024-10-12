# StockExchangeData

If a company is listed, then this object will be populated with whatever data has been determined. 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approved_exchange** | **bool** |  | [optional] 
**exchange** | **str** |  | [optional] 
**exchange_ticker** | **str** |  | [optional] 
**supporting_document_links** | **List[str]** |  | [optional] 
**supporting_evidence_in_pdf** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.stock_exchange_data import StockExchangeData

# TODO update the JSON string below
json = "{}"
# create an instance of StockExchangeData from a JSON string
stock_exchange_data_instance = StockExchangeData.from_json(json)
# print the JSON string representation of the object
print(StockExchangeData.to_json())

# convert the object into a dict
stock_exchange_data_dict = stock_exchange_data_instance.to_dict()
# create an instance of StockExchangeData from a dict
stock_exchange_data_from_dict = StockExchangeData.from_dict(stock_exchange_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


