# ResourceOwners


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**links** | [**ResourceMembersLinks**](ResourceMembersLinks.md) |  | [optional] 
**users** | [**List[ResourceOwner]**](ResourceOwner.md) |  | [optional] 

## Example

```python
from openapi_client.models.resource_owners import ResourceOwners

# TODO update the JSON string below
json = "{}"
# create an instance of ResourceOwners from a JSON string
resource_owners_instance = ResourceOwners.from_json(json)
# print the JSON string representation of the object
print(ResourceOwners.to_json())

# convert the object into a dict
resource_owners_dict = resource_owners_instance.to_dict()
# create an instance of ResourceOwners from a dict
resource_owners_from_dict = ResourceOwners.from_dict(resource_owners_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


