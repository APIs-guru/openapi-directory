# Freight


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**eta** | **datetime** | Estimated time of arrival | [optional] 
**additional_info** | **str** | Aditional information for the courier | 
**charged_amount** | **int** | Shipment cost. Must be informed in cents. No commas or periods are accepeted. For example one dollar should be informed as 100. Same as $1,2345.67 must be informed solely as 1234567 | 
**cross_docking_time** | **int** | Time it will take to manufacture, prepare or setup this product. Time must be provided in seconds. For example 1 day should be informed as 86400. This time will be included in the product ETA informed to the customer | 
**default_amount** | **int** | Default value of this shippment. | 
**scheduled_period** | **str** | Scheduled period | [optional] 
**transit_time** | **int** | Deliver time in seconds. Time must be provided in seconds. For example 1 day should be informed as 86400. This time will be included in the product ETA informed to the customer | 
**type** | **str** | Freight type | [optional] 

## Example

```python
from openapi_client.models.freight import Freight

# TODO update the JSON string below
json = "{}"
# create an instance of Freight from a JSON string
freight_instance = Freight.from_json(json)
# print the JSON string representation of the object
print(Freight.to_json())

# convert the object into a dict
freight_dict = freight_instance.to_dict()
# create an instance of Freight from a dict
freight_from_dict = Freight.from_dict(freight_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


