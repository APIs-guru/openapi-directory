# PriceAccuracyView

A price accuracy view. Covers the price accuracy reports functionality in pre-v3.0 API versions. For more information, refer to [Price Accuracy report](https://support.google.com/hotelprices/answer/6318506).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | Resource name should be in the format &#x60;accounts/{account_id}/priceAccuracyViews/{report_date}&#x60;. | [optional] 
**results** | [**List[PriceAccuracyRow]**](PriceAccuracyRow.md) | The list of rows that match the query. | [optional] 

## Example

```python
from openapi_client.models.price_accuracy_view import PriceAccuracyView

# TODO update the JSON string below
json = "{}"
# create an instance of PriceAccuracyView from a JSON string
price_accuracy_view_instance = PriceAccuracyView.from_json(json)
# print the JSON string representation of the object
print(PriceAccuracyView.to_json())

# convert the object into a dict
price_accuracy_view_dict = price_accuracy_view_instance.to_dict()
# create an instance of PriceAccuracyView from a dict
price_accuracy_view_from_dict = PriceAccuracyView.from_dict(price_accuracy_view_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


