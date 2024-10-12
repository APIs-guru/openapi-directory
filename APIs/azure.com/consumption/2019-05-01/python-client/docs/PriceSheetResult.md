# PriceSheetResult

An pricesheet resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**PriceSheetModel**](PriceSheetModel.md) |  | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.price_sheet_result import PriceSheetResult

# TODO update the JSON string below
json = "{}"
# create an instance of PriceSheetResult from a JSON string
price_sheet_result_instance = PriceSheetResult.from_json(json)
# print the JSON string representation of the object
print(PriceSheetResult.to_json())

# convert the object into a dict
price_sheet_result_dict = price_sheet_result_instance.to_dict()
# create an instance of PriceSheetResult from a dict
price_sheet_result_from_dict = PriceSheetResult.from_dict(price_sheet_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


