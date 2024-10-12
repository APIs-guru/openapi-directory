# Warehouse

A warehouse

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Timestamp that indicates when the warehouse was created | [optional] [readonly] 
**is_default** | **bool** | Designates which single warehouse is the default on the account | [optional] [default to False]
**name** | **str** | Name of the warehouse | [optional] 
**origin_address** | [**Address**](Address.md) | The origin address of the warehouse | [optional] 
**return_address** | [**Address**](Address.md) | The return address associated with the warehouse | [optional] 
**warehouse_id** | **str** | A string that uniquely identifies the warehouse | [optional] [readonly] 

## Example

```python
from openapi_client.models.warehouse import Warehouse

# TODO update the JSON string below
json = "{}"
# create an instance of Warehouse from a JSON string
warehouse_instance = Warehouse.from_json(json)
# print the JSON string representation of the object
print(Warehouse.to_json())

# convert the object into a dict
warehouse_dict = warehouse_instance.to_dict()
# create an instance of Warehouse from a dict
warehouse_from_dict = Warehouse.from_dict(warehouse_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


