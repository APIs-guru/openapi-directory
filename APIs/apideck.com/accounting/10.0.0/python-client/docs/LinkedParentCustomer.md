# LinkedParentCustomer

The parent customer this entity is linked to.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The parent ID of the customer this entity is linked to. | 
**name** | **str** | The name of the parent customer. | [optional] 

## Example

```python
from openapi_client.models.linked_parent_customer import LinkedParentCustomer

# TODO update the JSON string below
json = "{}"
# create an instance of LinkedParentCustomer from a JSON string
linked_parent_customer_instance = LinkedParentCustomer.from_json(json)
# print the JSON string representation of the object
print(LinkedParentCustomer.to_json())

# convert the object into a dict
linked_parent_customer_dict = linked_parent_customer_instance.to_dict()
# create an instance of LinkedParentCustomer from a dict
linked_parent_customer_from_dict = LinkedParentCustomer.from_dict(linked_parent_customer_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


