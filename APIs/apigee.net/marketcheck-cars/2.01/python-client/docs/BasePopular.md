# BasePopular

Single popular car in array

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** | City | [optional] 
**counts** | **str** | Number of sold listings of this model | [optional] 
**dom_stats** | [**SalesStats**](SalesStats.md) |  | [optional] 
**inventory_type** | **str** | Inventory type | [optional] 
**make** | **str** | Make name | [optional] 
**miles_stats** | [**SalesStats**](SalesStats.md) |  | [optional] 
**model** | **str** | Model name | [optional] 
**price_stats** | [**SalesStats**](SalesStats.md) |  | [optional] 
**state** | **str** | State | [optional] 

## Example

```python
from openapi_client.models.base_popular import BasePopular

# TODO update the JSON string below
json = "{}"
# create an instance of BasePopular from a JSON string
base_popular_instance = BasePopular.from_json(json)
# print the JSON string representation of the object
print(BasePopular.to_json())

# convert the object into a dict
base_popular_dict = base_popular_instance.to_dict()
# create an instance of BasePopular from a dict
base_popular_from_dict = BasePopular.from_dict(base_popular_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


