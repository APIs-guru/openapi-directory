# SearchResponseSchema


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**search_response** | [**SearchResponse**](SearchResponse.md) |  | [optional] 

## Example

```python
from openapi_client.models.search_response_schema import SearchResponseSchema

# TODO update the JSON string below
json = "{}"
# create an instance of SearchResponseSchema from a JSON string
search_response_schema_instance = SearchResponseSchema.from_json(json)
# print the JSON string representation of the object
print(SearchResponseSchema.to_json())

# convert the object into a dict
search_response_schema_dict = search_response_schema_instance.to_dict()
# create an instance of SearchResponseSchema from a dict
search_response_schema_from_dict = SearchResponseSchema.from_dict(search_response_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


