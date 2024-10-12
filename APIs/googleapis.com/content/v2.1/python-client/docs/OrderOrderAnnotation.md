# OrderOrderAnnotation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | Key for additional google provided (as key-value pairs) annotation. | [optional] 
**value** | **str** | Value for additional google provided (as key-value pairs) annotation. | [optional] 

## Example

```python
from openapi_client.models.order_order_annotation import OrderOrderAnnotation

# TODO update the JSON string below
json = "{}"
# create an instance of OrderOrderAnnotation from a JSON string
order_order_annotation_instance = OrderOrderAnnotation.from_json(json)
# print the JSON string representation of the object
print(OrderOrderAnnotation.to_json())

# convert the object into a dict
order_order_annotation_dict = order_order_annotation_instance.to_dict()
# create an instance of OrderOrderAnnotation from a dict
order_order_annotation_from_dict = OrderOrderAnnotation.from_dict(order_order_annotation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


