# CustomerAttributeValue


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**value** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.customer_attribute_value import CustomerAttributeValue

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAttributeValue from a JSON string
customer_attribute_value_instance = CustomerAttributeValue.from_json(json)
# print the JSON string representation of the object
print(CustomerAttributeValue.to_json())

# convert the object into a dict
customer_attribute_value_dict = customer_attribute_value_instance.to_dict()
# create an instance of CustomerAttributeValue from a dict
customer_attribute_value_from_dict = CustomerAttributeValue.from_dict(customer_attribute_value_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


