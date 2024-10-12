# SearchRequestSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_request** | [**SearchRequest**](SearchRequest.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_request_schema import SearchRequestSchema

# TODO update the JSON string below
json = "{}"
# create an instance of SearchRequestSchema from a JSON string
search_request_schema_instance = SearchRequestSchema.from_json(json)
# print the JSON string representation of the object
print(SearchRequestSchema.to_json())

# convert the object into a dict
search_request_schema_dict = search_request_schema_instance.to_dict()
# create an instance of SearchRequestSchema from a dict
search_request_schema_from_dict = SearchRequestSchema.from_dict(search_request_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


