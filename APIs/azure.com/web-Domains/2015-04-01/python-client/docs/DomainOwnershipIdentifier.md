# DomainOwnershipIdentifier

Domain ownership Identifier.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | DomainOwnershipIdentifier resource specific properties | [optional] 
**id** | **str** | Resource Id. | [optional] [readonly] 
**kind** | **str** | Kind of resource. | [optional] 
**name** | **str** | Resource Name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.domain_ownership_identifier import DomainOwnershipIdentifier

# TODO update the JSON string below
json = "{}"
# create an instance of DomainOwnershipIdentifier from a JSON string
domain_ownership_identifier_instance = DomainOwnershipIdentifier.from_json(json)
# print the JSON string representation of the object
print(DomainOwnershipIdentifier.to_json())

# convert the object into a dict
domain_ownership_identifier_dict = domain_ownership_identifier_instance.to_dict()
# create an instance of DomainOwnershipIdentifier from a dict
domain_ownership_identifier_from_dict = DomainOwnershipIdentifier.from_dict(domain_ownership_identifier_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


