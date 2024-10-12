# ListWarehousesResponseBody

A warehouse list response body

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**warehouses** | [**List[Warehouse]**](Warehouse.md) | The array of warehouses returned by the API call | [readonly] 

## Example

```python
from openapi_client.models.list_warehouses_response_body import ListWarehousesResponseBody

# TODO update the JSON string below
json = "{}"
# create an instance of ListWarehousesResponseBody from a JSON string
list_warehouses_response_body_instance = ListWarehousesResponseBody.from_json(json)
# print the JSON string representation of the object
print(ListWarehousesResponseBody.to_json())

# convert the object into a dict
list_warehouses_response_body_dict = list_warehouses_response_body_instance.to_dict()
# create an instance of ListWarehousesResponseBody from a dict
list_warehouses_response_body_from_dict = ListWarehousesResponseBody.from_dict(list_warehouses_response_body_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


