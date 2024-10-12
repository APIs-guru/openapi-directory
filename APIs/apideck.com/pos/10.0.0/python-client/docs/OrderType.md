# OrderType


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **datetime** | The date and time when the object was created. | [optional] [readonly] 
**created_by** | **str** | The user who created the object. | [optional] [readonly] 
**default** | **bool** |  | [optional] 
**id** | **str** | A unique identifier for an object. | [optional] [readonly] 
**name** | **str** |  | [optional] 
**updated_at** | **datetime** | The date and time when the object was last updated. | [optional] [readonly] 
**updated_by** | **str** | The user who last updated the object. | [optional] [readonly] 

## Example

```python
from openapi_client.models.order_type import OrderType

# TODO update the JSON string below
json = "{}"
# create an instance of OrderType from a JSON string
order_type_instance = OrderType.from_json(json)
# print the JSON string representation of the object
print(OrderType.to_json())

# convert the object into a dict
order_type_dict = order_type_instance.to_dict()
# create an instance of OrderType from a dict
order_type_from_dict = OrderType.from_dict(order_type_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


