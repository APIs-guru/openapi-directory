# LotProperties

The lot properties.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**closed_balance** | [**Amount**](Amount.md) |  | [optional] 
**expiration_date** | **datetime** | Expiration date. | [optional] [readonly] 
**original_amount** | [**Amount**](Amount.md) |  | [optional] 
**po_number** | **str** | PO number. | [optional] [readonly] 
**source** | **str** | Lot source. | [optional] [readonly] 
**start_date** | **datetime** | Start date. | [optional] [readonly] 

## Example

```python
from openapi_client.models.lot_properties import LotProperties

# TODO update the JSON string below
json = "{}"
# create an instance of LotProperties from a JSON string
lot_properties_instance = LotProperties.from_json(json)
# print the JSON string representation of the object
print(LotProperties.to_json())

# convert the object into a dict
lot_properties_dict = lot_properties_instance.to_dict()
# create an instance of LotProperties from a dict
lot_properties_from_dict = LotProperties.from_dict(lot_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


