# DirectedReadOptions

The DirectedReadOptions can be used to indicate which replicas or regions should be used for non-transactional reads or queries. DirectedReadOptions may only be specified for a read-only transaction, otherwise the API will return an `INVALID_ARGUMENT` error.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exclude_replicas** | [**ExcludeReplicas**](ExcludeReplicas.md) |  | [optional] 
**include_replicas** | [**IncludeReplicas**](IncludeReplicas.md) |  | [optional] 

## Example

```python
from openapi_client.models.directed_read_options import DirectedReadOptions

# TODO update the JSON string below
json = "{}"
# create an instance of DirectedReadOptions from a JSON string
directed_read_options_instance = DirectedReadOptions.from_json(json)
# print the JSON string representation of the object
print(DirectedReadOptions.to_json())

# convert the object into a dict
directed_read_options_dict = directed_read_options_instance.to_dict()
# create an instance of DirectedReadOptions from a dict
directed_read_options_from_dict = DirectedReadOptions.from_dict(directed_read_options_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


