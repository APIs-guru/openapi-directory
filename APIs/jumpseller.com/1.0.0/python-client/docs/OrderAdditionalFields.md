# OrderAdditionalFields

Additional field of an order

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** | Label of the additional field | [optional] 
**value** | **str** | Value of the additional field | [optional] 

## Example

```python
from openapi_client.models.order_additional_fields import OrderAdditionalFields

# TODO update the JSON string below
json = "{}"
# create an instance of OrderAdditionalFields from a JSON string
order_additional_fields_instance = OrderAdditionalFields.from_json(json)
# print the JSON string representation of the object
print(OrderAdditionalFields.to_json())

# convert the object into a dict
order_additional_fields_dict = order_additional_fields_instance.to_dict()
# create an instance of OrderAdditionalFields from a dict
order_additional_fields_from_dict = OrderAdditionalFields.from_dict(order_additional_fields_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


