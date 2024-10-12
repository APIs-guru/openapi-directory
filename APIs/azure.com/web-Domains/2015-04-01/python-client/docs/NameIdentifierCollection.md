# NameIdentifierCollection

Collection of domain name identifiers.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | Link to next page of resources. | [optional] [readonly] 
**value** | [**List[DomainsCheckAvailabilityRequest]**](DomainsCheckAvailabilityRequest.md) | Collection of resources. | 

## Example

```python
from openapi_client.models.name_identifier_collection import NameIdentifierCollection

# TODO update the JSON string below
json = "{}"
# create an instance of NameIdentifierCollection from a JSON string
name_identifier_collection_instance = NameIdentifierCollection.from_json(json)
# print the JSON string representation of the object
print(NameIdentifierCollection.to_json())

# convert the object into a dict
name_identifier_collection_dict = name_identifier_collection_instance.to_dict()
# create an instance of NameIdentifierCollection from a dict
name_identifier_collection_from_dict = NameIdentifierCollection.from_dict(name_identifier_collection_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


