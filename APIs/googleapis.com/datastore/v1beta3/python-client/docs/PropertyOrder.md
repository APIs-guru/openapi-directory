# PropertyOrder

The desired order for a specific property.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**direction** | **str** | The direction to order by. Defaults to &#x60;ASCENDING&#x60;. | [optional] 
**var_property** | [**PropertyReference**](PropertyReference.md) |  | [optional] 

## Example

```python
from openapi_client.models.property_order import PropertyOrder

# TODO update the JSON string below
json = "{}"
# create an instance of PropertyOrder from a JSON string
property_order_instance = PropertyOrder.from_json(json)
# print the JSON string representation of the object
print(PropertyOrder.to_json())

# convert the object into a dict
property_order_dict = property_order_instance.to_dict()
# create an instance of PropertyOrder from a dict
property_order_from_dict = PropertyOrder.from_dict(property_order_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


