# PriceSheetProperties

The properties of the price sheet.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**billing_period_id** | **str** | The id of the billing period resource that the usage belongs to. | [optional] [readonly] 
**currency_code** | **str** | Currency Code | [optional] [readonly] 
**included_quantity** | **float** | Included quality for an offer | [optional] [readonly] 
**meter_details** | [**MeterDetails**](MeterDetails.md) |  | [optional] 
**meter_id** | **str** | The meter id (GUID) | [optional] [readonly] 
**part_number** | **str** | Part Number | [optional] [readonly] 
**unit_of_measure** | **str** | Unit of measure | [optional] [readonly] 
**unit_price** | **float** | Unit Price | [optional] [readonly] 

## Example

```python
from openapi_client.models.price_sheet_properties import PriceSheetProperties

# TODO update the JSON string below
json = "{}"
# create an instance of PriceSheetProperties from a JSON string
price_sheet_properties_instance = PriceSheetProperties.from_json(json)
# print the JSON string representation of the object
print(PriceSheetProperties.to_json())

# convert the object into a dict
price_sheet_properties_dict = price_sheet_properties_instance.to_dict()
# create an instance of PriceSheetProperties from a dict
price_sheet_properties_from_dict = PriceSheetProperties.from_dict(price_sheet_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


