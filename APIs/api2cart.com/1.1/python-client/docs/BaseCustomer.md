# BaseCustomer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**last_name** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.base_customer import BaseCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of BaseCustomer from a JSON string
base_customer_instance = BaseCustomer.from_json(json)
# print the JSON string representation of the object
print(BaseCustomer.to_json())

# convert the object into a dict
base_customer_dict = base_customer_instance.to_dict()
# create an instance of BaseCustomer from a dict
base_customer_from_dict = BaseCustomer.from_dict(base_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


