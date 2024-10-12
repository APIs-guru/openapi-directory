# ItemsSecurityRights


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[SecurityRights]**](SecurityRights.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_security_rights import ItemsSecurityRights

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsSecurityRights from a JSON string
items_security_rights_instance = ItemsSecurityRights.from_json(json)
# print the JSON string representation of the object
print(ItemsSecurityRights.to_json())

# convert the object into a dict
items_security_rights_dict = items_security_rights_instance.to_dict()
# create an instance of ItemsSecurityRights from a dict
items_security_rights_from_dict = ItemsSecurityRights.from_dict(items_security_rights_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


