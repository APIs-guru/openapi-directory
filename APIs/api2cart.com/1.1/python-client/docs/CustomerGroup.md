# CustomerGroup


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**additional_fields** | **object** |  | [optional] 
**custom_fields** | **object** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.customer_group import CustomerGroup

# TODO update the JSON string below
json = "{}"
# create an instance of CustomerGroup from a JSON string
customer_group_instance = CustomerGroup.from_json(json)
# print the JSON string representation of the object
print(CustomerGroup.to_json())

# convert the object into a dict
customer_group_dict = customer_group_instance.to_dict()
# create an instance of CustomerGroup from a dict
customer_group_from_dict = CustomerGroup.from_dict(customer_group_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


