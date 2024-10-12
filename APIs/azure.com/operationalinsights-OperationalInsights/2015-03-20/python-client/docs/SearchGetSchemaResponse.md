# SearchGetSchemaResponse

The get schema operation response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**metadata** | [**SearchMetadata**](SearchMetadata.md) |  | [optional] 
**value** | [**List[SearchSchemaValue]**](SearchSchemaValue.md) | The array of result values. | [optional] 

## Example

```python
from openapi_client.models.search_get_schema_response import SearchGetSchemaResponse

# TODO update the JSON string below
json = "{}"
# create an instance of SearchGetSchemaResponse from a JSON string
search_get_schema_response_instance = SearchGetSchemaResponse.from_json(json)
# print the JSON string representation of the object
print(SearchGetSchemaResponse.to_json())

# convert the object into a dict
search_get_schema_response_dict = search_get_schema_response_instance.to_dict()
# create an instance of SearchGetSchemaResponse from a dict
search_get_schema_response_from_dict = SearchGetSchemaResponse.from_dict(search_get_schema_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


