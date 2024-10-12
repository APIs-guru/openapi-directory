# Customer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**active_flag** | **bool** |  | [optional] [default to True]
**change_date** | **datetime** |  | 
**company** | **str** |  | [optional] 
**cookies** | **object** |  | [optional] 
**create_date** | **datetime** |  | 
**department** | **str** |  | [optional] 
**email** | **str** |  | [optional] 
**first_name** | **str** |  | [optional] 
**id** | **str** |  | 
**last_name** | **str** |  | [optional] 
**marketing_opt_in** | **bool** |  | [optional] 
**name** | **str** |  | [optional] 
**phone** | **str** |  | [optional] 
**position** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.customer import Customer

# TODO update the JSON string below
json = "{}"
# create an instance of Customer from a JSON string
customer_instance = Customer.from_json(json)
# print the JSON string representation of the object
print(Customer.to_json())

# convert the object into a dict
customer_dict = customer_instance.to_dict()
# create an instance of Customer from a dict
customer_from_dict = Customer.from_dict(customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


