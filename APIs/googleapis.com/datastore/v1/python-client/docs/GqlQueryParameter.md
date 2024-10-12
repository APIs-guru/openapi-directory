# GqlQueryParameter

A binding parameter for a GQL query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cursor** | **bytearray** | A query cursor. Query cursors are returned in query result batches. | [optional] 
**value** | [**Value**](Value.md) |  | [optional] 

## Example

```python
from openapi_client.models.gql_query_parameter import GqlQueryParameter

# TODO update the JSON string below
json = "{}"
# create an instance of GqlQueryParameter from a JSON string
gql_query_parameter_instance = GqlQueryParameter.from_json(json)
# print the JSON string representation of the object
print(GqlQueryParameter.to_json())

# convert the object into a dict
gql_query_parameter_dict = gql_query_parameter_instance.to_dict()
# create an instance of GqlQueryParameter from a dict
gql_query_parameter_from_dict = GqlQueryParameter.from_dict(gql_query_parameter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


