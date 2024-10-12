# QueryInfo

Query optimization information for a QUERY job.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**optimization_details** | **Dict[str, object]** | Output only. Information about query optimizations. | [optional] [readonly] 

## Example

```python
from openapi_client.models.query_info import QueryInfo

# TODO update the JSON string below
json = "{}"
# create an instance of QueryInfo from a JSON string
query_info_instance = QueryInfo.from_json(json)
# print the JSON string representation of the object
print(QueryInfo.to_json())

# convert the object into a dict
query_info_dict = query_info_instance.to_dict()
# create an instance of QueryInfo from a dict
query_info_from_dict = QueryInfo.from_dict(query_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


