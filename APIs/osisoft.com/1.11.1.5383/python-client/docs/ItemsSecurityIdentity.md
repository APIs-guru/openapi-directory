# ItemsSecurityIdentity


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[SecurityIdentity]**](SecurityIdentity.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_security_identity import ItemsSecurityIdentity

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsSecurityIdentity from a JSON string
items_security_identity_instance = ItemsSecurityIdentity.from_json(json)
# print the JSON string representation of the object
print(ItemsSecurityIdentity.to_json())

# convert the object into a dict
items_security_identity_dict = items_security_identity_instance.to_dict()
# create an instance of ItemsSecurityIdentity from a dict
items_security_identity_from_dict = ItemsSecurityIdentity.from_dict(items_security_identity_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


