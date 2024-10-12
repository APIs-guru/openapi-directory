# Sales

Sales count query response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City | [optional] 
**counts** | **int** | Sales count | [optional] 
**cpo** | **int** | cpo sales count | [optional] 
**dom_stats** | [**SalesStats**](SalesStats.md) |  | [optional] 
**inventory_type** | **str** | inventory_type | [optional] 
**make** | **str** | Make | [optional] 
**miles_stats** | [**SalesStats**](SalesStats.md) |  | [optional] 
**model** | **str** | model | [optional] 
**non_cpo** | **int** | Non-cpo sales count | [optional] 
**price_stats** | [**SalesStats**](SalesStats.md) |  | [optional] 
**state** | **str** | State | [optional] 
**taxonomy_vin** | **str** | taxonomy_vin | [optional] 
**trim** | **str** | trim | [optional] 
**year** | **str** | year | [optional] 

## Example

```python
from openapi_client.models.sales import Sales

# TODO update the JSON string below
json = "{}"
# create an instance of Sales from a JSON string
sales_instance = Sales.from_json(json)
# print the JSON string representation of the object
print(Sales.to_json())

# convert the object into a dict
sales_dict = sales_instance.to_dict()
# create an instance of Sales from a dict
sales_from_dict = Sales.from_dict(sales_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


