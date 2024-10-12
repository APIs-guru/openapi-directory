# Query

Query influx using the Flux language

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dialect** | [**Dialect**](Dialect.md) |  | [optional] 
**extern** | [**File**](File.md) |  | [optional] 
**now** | **datetime** | Specifies the time that should be reported as \&quot;now\&quot; in the query. Default is the server&#39;s now time. | [optional] 
**params** | **Dict[str, object]** | Enumeration of key/value pairs that respresent parameters to be injected into query (can only specify either this field or extern and not both)  | [optional] 
**query** | **str** | Query script to execute. | 
**type** | **str** | The type of query. Must be \&quot;flux\&quot;. | [optional] 

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


