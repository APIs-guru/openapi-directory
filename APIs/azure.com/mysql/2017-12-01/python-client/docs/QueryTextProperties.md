# QueryTextProperties

The properties of a query text.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**query_id** | **str** | Query identifier unique to the server. | [optional] 
**query_text** | **str** | Query text. | [optional] 

## Example

```python
from openapi_client.models.query_text_properties import QueryTextProperties

# TODO update the JSON string below
json = "{}"
# create an instance of QueryTextProperties from a JSON string
query_text_properties_instance = QueryTextProperties.from_json(json)
# print the JSON string representation of the object
print(QueryTextProperties.to_json())

# convert the object into a dict
query_text_properties_dict = query_text_properties_instance.to_dict()
# create an instance of QueryTextProperties from a dict
query_text_properties_from_dict = QueryTextProperties.from_dict(query_text_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


