# GetOrders


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**List[Metadata]**](Metadata.md) |  | 
**orders** | [**List[Order]**](Order.md) |  | 

## Example

```python
from openapi_client.models.get_orders import GetOrders

# TODO update the JSON string below
json = "{}"
# create an instance of GetOrders from a JSON string
get_orders_instance = GetOrders.from_json(json)
# print the JSON string representation of the object
print(GetOrders.to_json())

# convert the object into a dict
get_orders_dict = get_orders_instance.to_dict()
# create an instance of GetOrders from a dict
get_orders_from_dict = GetOrders.from_dict(get_orders_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


