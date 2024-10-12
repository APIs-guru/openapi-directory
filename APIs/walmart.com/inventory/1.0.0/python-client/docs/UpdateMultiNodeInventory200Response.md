# UpdateMultiNodeInventory200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**nodes** | [**List[UpdateMultiNodeInventory200ResponseNodesInner]**](UpdateMultiNodeInventory200ResponseNodesInner.md) |  | [optional] 
**sku** | **str** | An arbitrary alphanumeric unique ID, specified by the seller, which identifies each item. | [optional] 

## Example

```python
from openapi_client.models.update_multi_node_inventory200_response import UpdateMultiNodeInventory200Response

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateMultiNodeInventory200Response from a JSON string
update_multi_node_inventory200_response_instance = UpdateMultiNodeInventory200Response.from_json(json)
# print the JSON string representation of the object
print(UpdateMultiNodeInventory200Response.to_json())

# convert the object into a dict
update_multi_node_inventory200_response_dict = update_multi_node_inventory200_response_instance.to_dict()
# create an instance of UpdateMultiNodeInventory200Response from a dict
update_multi_node_inventory200_response_from_dict = UpdateMultiNodeInventory200Response.from_dict(update_multi_node_inventory200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


