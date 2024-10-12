# Query

Represents a query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**QueryMetadata**](QueryMetadata.md) |  | [optional] 
**params** | [**Parameters**](Parameters.md) |  | [optional] 
**query_id** | **str** | Output only. Query ID. | [optional] [readonly] 
**schedule** | [**QuerySchedule**](QuerySchedule.md) |  | [optional] 

## Example

```python
from openapi_client.models.query import Query

# TODO update the JSON string below
json = "{}"
# create an instance of Query from a JSON string
query_instance = Query.from_json(json)
# print the JSON string representation of the object
print(Query.to_json())

# convert the object into a dict
query_dict = query_instance.to_dict()
# create an instance of Query from a dict
query_from_dict = Query.from_dict(query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


