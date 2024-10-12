# UpdateMultiNodeInventoryRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**inventories** | [**UpdateMultiNodeInventoryRequestInventories**](UpdateMultiNodeInventoryRequestInventories.md) |  | 

## Example

```python
from openapi_client.models.update_multi_node_inventory_request import UpdateMultiNodeInventoryRequest

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMultiNodeInventoryRequest from a JSON string
update_multi_node_inventory_request_instance = UpdateMultiNodeInventoryRequest.from_json(json)
# print the JSON string representation of the object
print(UpdateMultiNodeInventoryRequest.to_json())

# convert the object into a dict
update_multi_node_inventory_request_dict = update_multi_node_inventory_request_instance.to_dict()
# create an instance of UpdateMultiNodeInventoryRequest from a dict
update_multi_node_inventory_request_from_dict = UpdateMultiNodeInventoryRequest.from_dict(update_multi_node_inventory_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


