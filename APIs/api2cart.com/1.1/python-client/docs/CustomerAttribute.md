# CustomerAttribute


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**attribute_id** | **str** |  | [optional] 
**code** | **str** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**name** | **str** |  | [optional] 
**type** | **str** |  | [optional] 
**values** | [**List[CustomerAttributeValue]**](CustomerAttributeValue.md) |  | [optional] 

## Example

```python
from openapi_client.models.customer_attribute import CustomerAttribute

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerAttribute from a JSON string
customer_attribute_instance = CustomerAttribute.from_json(json)
# print the JSON string representation of the object
print(CustomerAttribute.to_json())

# convert the object into a dict
customer_attribute_dict = customer_attribute_instance.to_dict()
# create an instance of CustomerAttribute from a dict
customer_attribute_from_dict = CustomerAttribute.from_dict(customer_attribute_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


