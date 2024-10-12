# QuerySource

List of sources that the user can search using the query API.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**display_name** | **str** | Display name of the data source. | [optional] 
**operators** | [**List[QueryOperator]**](QueryOperator.md) | List of all operators applicable for this source. | [optional] 
**short_name** | **str** | A short name or alias for the source. This value can be used with the &#39;source&#39; operator. | [optional] 
**source** | [**Source**](Source.md) |  | [optional] 

## Example

```python
from openapi_client.models.query_source import QuerySource

# TODO update the JSON string below
json = "{}"
# create an instance of QuerySource from a JSON string
query_source_instance = QuerySource.from_json(json)
# print the JSON string representation of the object
print(QuerySource.to_json())

# convert the object into a dict
query_source_dict = query_source_instance.to_dict()
# create an instance of QuerySource from a dict
query_source_from_dict = QuerySource.from_dict(query_source_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


