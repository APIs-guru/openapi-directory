# CreateWarehouseRequestBody

A create warehouse request body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | Timestamp that indicates when the warehouse was created | [optional] [readonly] 
**is_default** | **bool** | Designates which single warehouse is the default on the account | [optional] [default to False]
**name** | **str** | Name of the warehouse | 
**origin_address** | [**Address**](Address.md) | The origin address of the warehouse | 
**return_address** | [**Address**](Address.md) | The return address associated with the warehouse | [optional] 
**warehouse_id** | **str** | A string that uniquely identifies the warehouse | [optional] [readonly] 

## Example

```python
from openapi_client.models.create_warehouse_request_body import CreateWarehouseRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWarehouseRequestBody from a JSON string
create_warehouse_request_body_instance = CreateWarehouseRequestBody.from_json(json)
# print the JSON string representation of the object
print(CreateWarehouseRequestBody.to_json())

# convert the object into a dict
create_warehouse_request_body_dict = create_warehouse_request_body_instance.to_dict()
# create an instance of CreateWarehouseRequestBody from a dict
create_warehouse_request_body_from_dict = CreateWarehouseRequestBody.from_dict(create_warehouse_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


