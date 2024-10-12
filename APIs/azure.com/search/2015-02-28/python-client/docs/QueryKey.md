# QueryKey

Describes an API key for a given Azure Search service that has permissions for query operations only.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**key** | **str** | The value of the query API key. | [optional] [readonly] 
**name** | **str** | The name of the query API key; may be empty. | [optional] [readonly] 

## Example

```python
from openapi_client.models.query_key import QueryKey

# TODO update the JSON string below
json = "{}"
# create an instance of QueryKey from a JSON string
query_key_instance = QueryKey.from_json(json)
# print the JSON string representation of the object
print(QueryKey.to_json())

# convert the object into a dict
query_key_dict = query_key_instance.to_dict()
# create an instance of QueryKey from a dict
query_key_from_dict = QueryKey.from_dict(query_key_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


