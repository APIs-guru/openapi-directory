# DomainOwnershipIdentifierCollection

Collection of domain ownership identifiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[DomainOwnershipIdentifier]**](DomainOwnershipIdentifier.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.domain_ownership_identifier_collection import DomainOwnershipIdentifierCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DomainOwnershipIdentifierCollection from a JSON string
domain_ownership_identifier_collection_instance = DomainOwnershipIdentifierCollection.from_json(json)
# print the JSON string representation of the object
print(DomainOwnershipIdentifierCollection.to_json())

# convert the object into a dict
domain_ownership_identifier_collection_dict = domain_ownership_identifier_collection_instance.to_dict()
# create an instance of DomainOwnershipIdentifierCollection from a dict
domain_ownership_identifier_collection_from_dict = DomainOwnershipIdentifierCollection.from_dict(domain_ownership_identifier_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


