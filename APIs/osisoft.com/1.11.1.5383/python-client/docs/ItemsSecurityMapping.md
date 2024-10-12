# ItemsSecurityMapping


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[SecurityMapping]**](SecurityMapping.md) |  | [optional] 
**links** | [**PaginationLinks**](PaginationLinks.md) |  | [optional] 

## Example

```python
from openapi_client.models.items_security_mapping import ItemsSecurityMapping

# TODO update the JSON string below
json = "{}"
# create an instance of ItemsSecurityMapping from a JSON string
items_security_mapping_instance = ItemsSecurityMapping.from_json(json)
# print the JSON string representation of the object
print(ItemsSecurityMapping.to_json())

# convert the object into a dict
items_security_mapping_dict = items_security_mapping_instance.to_dict()
# create an instance of ItemsSecurityMapping from a dict
items_security_mapping_from_dict = ItemsSecurityMapping.from_dict(items_security_mapping_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


