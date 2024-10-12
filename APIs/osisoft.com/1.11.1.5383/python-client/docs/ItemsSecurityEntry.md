# ItemsSecurityEntry


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[SecurityEntry]**](SecurityEntry.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_security_entry import ItemsSecurityEntry

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsSecurityEntry from a JSON string
items_security_entry_instance = ItemsSecurityEntry.from_json(json)
# print the JSON string representation of the object
print(ItemsSecurityEntry.to_json())

# convert the object into a dict
items_security_entry_dict = items_security_entry_instance.to_dict()
# create an instance of ItemsSecurityEntry from a dict
items_security_entry_from_dict = ItemsSecurityEntry.from_dict(items_security_entry_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


