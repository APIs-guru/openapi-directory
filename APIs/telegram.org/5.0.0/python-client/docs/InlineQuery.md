# InlineQuery

This object represents an incoming inline query. When the user sends an empty query, your bot could return some default or trending results.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_from** | [**User**](User.md) |  | 
**id** | **str** | Unique identifier for this query | 
**location** | [**Location**](Location.md) |  | [optional] 
**offset** | **str** | Offset of the results to be returned, can be controlled by the bot | 
**query** | **str** | Text of the query (up to 256 characters) | 

## Example

```python
from openapi_client.models.inline_query import InlineQuery

# TODO update the JSON string below
json = "{}"
# create an instance of InlineQuery from a JSON string
inline_query_instance = InlineQuery.from_json(json)
# print the JSON string representation of the object
print(InlineQuery.to_json())

# convert the object into a dict
inline_query_dict = inline_query_instance.to_dict()
# create an instance of InlineQuery from a dict
inline_query_from_dict = InlineQuery.from_dict(inline_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


