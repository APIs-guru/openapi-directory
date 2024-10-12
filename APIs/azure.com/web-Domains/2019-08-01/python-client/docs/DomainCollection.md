# DomainCollection

Collection of domains.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[Domain]**](Domain.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.domain_collection import DomainCollection

# TODO update the JSON string below
json = "{}"
# create an instance of DomainCollection from a JSON string
domain_collection_instance = DomainCollection.from_json(json)
# print the JSON string representation of the object
print(DomainCollection.to_json())

# convert the object into a dict
domain_collection_dict = domain_collection_instance.to_dict()
# create an instance of DomainCollection from a dict
domain_collection_from_dict = DomainCollection.from_dict(domain_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


