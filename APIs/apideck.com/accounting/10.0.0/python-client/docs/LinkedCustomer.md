# LinkedCustomer

The customer this entity is linked to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**company_name** | **str** | The company name of the customer. | [optional] [readonly] 
**display_id** | **str** | The display ID of the customer. | [optional] [readonly] 
**display_name** | **str** | The display name of the customer. | [optional] 
**id** | **str** | The ID of the customer this entity is linked to. | 
**name** | **str** | The name of the customer. Deprecated, use display_name instead. | [optional] 

## Example

```python
from openapi_client.models.linked_customer import LinkedCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedCustomer from a JSON string
linked_customer_instance = LinkedCustomer.from_json(json)
# print the JSON string representation of the object
print(LinkedCustomer.to_json())

# convert the object into a dict
linked_customer_dict = linked_customer_instance.to_dict()
# create an instance of LinkedCustomer from a dict
linked_customer_from_dict = LinkedCustomer.from_dict(linked_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


