# UpdateWarehouseRequestBody

An update warehouse request body

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
from openapi_client.models.update_warehouse_request_body import UpdateWarehouseRequestBody

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateWarehouseRequestBody from a JSON string
update_warehouse_request_body_instance = UpdateWarehouseRequestBody.from_json(json)
# print the JSON string representation of the object
print(UpdateWarehouseRequestBody.to_json())

# convert the object into a dict
update_warehouse_request_body_dict = update_warehouse_request_body_instance.to_dict()
# create an instance of UpdateWarehouseRequestBody from a dict
update_warehouse_request_body_from_dict = UpdateWarehouseRequestBody.from_dict(update_warehouse_request_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


