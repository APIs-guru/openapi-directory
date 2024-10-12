# TopLevelDomainCollection

Collection of Top Level Domains

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources | [optional] 
**value** | [**List[TopLevelDomain]**](TopLevelDomain.md) | Collection of resources | [optional] 

## Example

```python
from openapi_client.models.top_level_domain_collection import TopLevelDomainCollection

# TODO update the JSON string below
json = "{}"
# create an instance of TopLevelDomainCollection from a JSON string
top_level_domain_collection_instance = TopLevelDomainCollection.from_json(json)
# print the JSON string representation of the object
print(TopLevelDomainCollection.to_json())

# convert the object into a dict
top_level_domain_collection_dict = top_level_domain_collection_instance.to_dict()
# create an instance of TopLevelDomainCollection from a dict
top_level_domain_collection_from_dict = TopLevelDomainCollection.from_dict(top_level_domain_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


