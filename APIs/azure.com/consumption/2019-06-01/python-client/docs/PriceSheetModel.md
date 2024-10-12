# PriceSheetModel

price sheet result. It contains the pricesheet associated with billing period

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The link (url) to the next page of results. | [optional] [readonly] 
**pricesheets** | [**List[PriceSheetProperties]**](PriceSheetProperties.md) | Price sheet | [optional] [readonly] 

## Example

```python
from openapi_client.models.price_sheet_model import PriceSheetModel

# TODO update the JSON string below
json = "{}"
# create an instance of PriceSheetModel from a JSON string
price_sheet_model_instance = PriceSheetModel.from_json(json)
# print the JSON string representation of the object
print(PriceSheetModel.to_json())

# convert the object into a dict
price_sheet_model_dict = price_sheet_model_instance.to_dict()
# create an instance of PriceSheetModel from a dict
price_sheet_model_from_dict = PriceSheetModel.from_dict(price_sheet_model_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


