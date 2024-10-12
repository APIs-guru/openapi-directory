# OrderHistoryFields


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | Creation date of the order history | [optional] 
**id** | **int** | Unique identifier of the Order History | [optional] 
**message** | **str** | Message of the Order History | [optional] 

## Example

```python
from openapi_client.models.order_history_fields import OrderHistoryFields

# TODO update the JSON string below
json = "{}"
# create an instance of OrderHistoryFields from a JSON string
order_history_fields_instance = OrderHistoryFields.from_json(json)
# print the JSON string representation of the object
print(OrderHistoryFields.to_json())

# convert the object into a dict
order_history_fields_dict = order_history_fields_instance.to_dict()
# create an instance of OrderHistoryFields from a dict
order_history_fields_from_dict = OrderHistoryFields.from_dict(order_history_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


