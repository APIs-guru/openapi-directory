# BigQueryQuerySpec

Specifies a custom BigQuery query.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**raw_query** | **str** | The raw query string. | [optional] 

## Example

```python
from openapi_client.models.big_query_query_spec import BigQueryQuerySpec

# TODO update the JSON string below
json = "{}"
# create an instance of BigQueryQuerySpec from a JSON string
big_query_query_spec_instance = BigQueryQuerySpec.from_json(json)
# print the JSON string representation of the object
print(BigQueryQuerySpec.to_json())

# convert the object into a dict
big_query_query_spec_dict = big_query_query_spec_instance.to_dict()
# create an instance of BigQueryQuerySpec from a dict
big_query_query_spec_from_dict = BigQueryQuerySpec.from_dict(big_query_query_spec_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


