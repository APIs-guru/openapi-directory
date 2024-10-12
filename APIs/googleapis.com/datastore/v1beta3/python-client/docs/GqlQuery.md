# GqlQuery

A [GQL query](https://cloud.google.com/datastore/docs/apis/gql/gql_reference).

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**allow_literals** | **bool** | When false, the query string must not contain any literals and instead must bind all values. For example, &#x60;SELECT * FROM Kind WHERE a &#x3D; &#39;string literal&#39;&#x60; is not allowed, while &#x60;SELECT * FROM Kind WHERE a &#x3D; @value&#x60; is. | [optional] 
**named_bindings** | [**Dict[str, GqlQueryParameter]**](GqlQueryParameter.md) | For each non-reserved named binding site in the query string, there must be a named parameter with that name, but not necessarily the inverse. Key must match regex &#x60;A-Za-z_$*&#x60;, must not match regex &#x60;__.*__&#x60;, and must not be &#x60;\&quot;\&quot;&#x60;. | [optional] 
**positional_bindings** | [**List[GqlQueryParameter]**](GqlQueryParameter.md) | Numbered binding site @1 references the first numbered parameter, effectively using 1-based indexing, rather than the usual 0. For each binding site numbered i in &#x60;query_string&#x60;, there must be an i-th numbered parameter. The inverse must also be true. | [optional] 
**query_string** | **str** | A string of the format described [here](https://cloud.google.com/datastore/docs/apis/gql/gql_reference). | [optional] 

## Example

```python
from openapi_client.models.gql_query import GqlQuery

# TODO update the JSON string below
json = "{}"
# create an instance of GqlQuery from a JSON string
gql_query_instance = GqlQuery.from_json(json)
# print the JSON string representation of the object
print(GqlQuery.to_json())

# convert the object into a dict
gql_query_dict = gql_query_instance.to_dict()
# create an instance of GqlQuery from a dict
gql_query_from_dict = GqlQuery.from_dict(gql_query_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


