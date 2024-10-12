# EntityListResult

Describes the result of the request to view entities.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**count** | **int** | Total count of records that match the filter | [optional] [readonly] 
**next_link** | **str** | The URL to use for getting the next set of results. | [optional] [readonly] 
**value** | [**List[EntityInfo]**](EntityInfo.md) | The list of entities. | [optional] 

## Example

```python
from openapi_client.models.entity_list_result import EntityListResult

# TODO update the JSON string below
json = "{}"
# create an instance of EntityListResult from a JSON string
entity_list_result_instance = EntityListResult.from_json(json)
# print the JSON string representation of the object
print(EntityListResult.to_json())

# convert the object into a dict
entity_list_result_dict = entity_list_result_instance.to_dict()
# create an instance of EntityListResult from a dict
entity_list_result_from_dict = EntityListResult.from_dict(entity_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


