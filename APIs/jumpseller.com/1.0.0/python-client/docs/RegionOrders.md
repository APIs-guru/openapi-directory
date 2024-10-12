# RegionOrders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**city** | **str** |  | [optional] 
**code** | **int** |  | [optional] 
**country** | **int** |  | [optional] 

## Example

```python
from openapi_client.models.region_orders import RegionOrders

# TODO update the JSON string below
json = "{}"
# create an instance of RegionOrders from a JSON string
region_orders_instance = RegionOrders.from_json(json)
# print the JSON string representation of the object
print(RegionOrders.to_json())

# convert the object into a dict
region_orders_dict = region_orders_instance.to_dict()
# create an instance of RegionOrders from a dict
region_orders_from_dict = RegionOrders.from_dict(region_orders_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


