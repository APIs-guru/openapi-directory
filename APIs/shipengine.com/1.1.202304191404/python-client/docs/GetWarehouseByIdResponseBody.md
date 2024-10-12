# GetWarehouseByIdResponseBody

A get warehouse by id response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Timestamp that indicates when the warehouse was created | [readonly] 
**is_default** | **bool** | Designates which single warehouse is the default on the account | [optional] [default to False]
**name** | **str** | Name of the warehouse | 
**origin_address** | [**Address**](Address.md) | The origin address of the warehouse | 
**return_address** | [**Address**](Address.md) | The return address associated with the warehouse | 
**warehouse_id** | **str** | A string that uniquely identifies the warehouse | [readonly] 

## Example

```python
from openapi_client.models.get_warehouse_by_id_response_body import GetWarehouseByIdResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of GetWarehouseByIdResponseBody from a JSON string
get_warehouse_by_id_response_body_instance = GetWarehouseByIdResponseBody.from_json(json)
# print the JSON string representation of the object
print(GetWarehouseByIdResponseBody.to_json())

# convert the object into a dict
get_warehouse_by_id_response_body_dict = get_warehouse_by_id_response_body_instance.to_dict()
# create an instance of GetWarehouseByIdResponseBody from a dict
get_warehouse_by_id_response_body_from_dict = GetWarehouseByIdResponseBody.from_dict(get_warehouse_by_id_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


