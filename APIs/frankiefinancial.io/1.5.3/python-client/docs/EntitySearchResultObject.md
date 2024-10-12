# EntitySearchResultObject

Contains the results of a given entity search.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity_search_results** | [**List[EntitySearchResultListItem]**](EntitySearchResultListItem.md) | The list of (potentially) matching entities with confidence levels.  If you are the \&quot;owner\&quot; of the entity - i.e. the same CustomerID and CustomerChildID (if relevant) - then the full details of the entity and any owned documents will be returned, except for the contents of any attached scans.  If you are not the owner of the entity (or linked documents), then just the ID and confidence level is returned. You can still use this ID to retrieve any check results (see GET  /entity/{entityId}/checks and GET /document/{documentId}/checks)  | [optional] 
**request_id** | **str** | Unique identifier for every request. Can be used for tracking down answers with technical support.   Uses the ULID format (a time-based, sortable UUID)  Note: this will be different for every request.  | 

## Example

```python
from openapi_client.models.entity_search_result_object import EntitySearchResultObject

# TODO update the JSON string below
json = "{}"
# create an instance of EntitySearchResultObject from a JSON string
entity_search_result_object_instance = EntitySearchResultObject.from_json(json)
# print the JSON string representation of the object
print(EntitySearchResultObject.to_json())

# convert the object into a dict
entity_search_result_object_dict = entity_search_result_object_instance.to_dict()
# create an instance of EntitySearchResultObject from a dict
entity_search_result_object_from_dict = EntitySearchResultObject.from_dict(entity_search_result_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


