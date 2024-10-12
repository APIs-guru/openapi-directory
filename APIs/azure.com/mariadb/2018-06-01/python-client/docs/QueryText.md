# QueryText

Represents a Query Text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**QueryTextProperties**](QueryTextProperties.md) |  | [optional] 
**id** | **str** | Resource ID | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.query_text import QueryText

# TODO update the JSON string below
json = "{}"
# create an instance of QueryText from a JSON string
query_text_instance = QueryText.from_json(json)
# print the JSON string representation of the object
print(QueryText.to_json())

# convert the object into a dict
query_text_dict = query_text_instance.to_dict()
# create an instance of QueryText from a dict
query_text_from_dict = QueryText.from_dict(query_text_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


