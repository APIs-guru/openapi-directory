# QueryOverride

QueryOverride. Query message defines query override for HTTP targets.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**var_query_params** | **str** | The query parameters (e.g., qparam1&#x3D;123&amp;qparam2&#x3D;456). Default is an empty string. | [optional] 

## Example

```python
from openapi_client.models.query_override import QueryOverride

# TODO update the JSON string below
json = "{}"
# create an instance of QueryOverride from a JSON string
query_override_instance = QueryOverride.from_json(json)
# print the JSON string representation of the object
print(QueryOverride.to_json())

# convert the object into a dict
query_override_dict = query_override_instance.to_dict()
# create an instance of QueryOverride from a dict
query_override_from_dict = QueryOverride.from_dict(query_override_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


