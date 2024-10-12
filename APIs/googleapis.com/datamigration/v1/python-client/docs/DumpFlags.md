# DumpFlags

Dump flags definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dump_flags** | [**List[DumpFlag]**](DumpFlag.md) | The flags for the initial dump. | [optional] 

## Example

```python
from openapi_client.models.dump_flags import DumpFlags

# TODO update the JSON string below
json = "{}"
# create an instance of DumpFlags from a JSON string
dump_flags_instance = DumpFlags.from_json(json)
# print the JSON string representation of the object
print(DumpFlags.to_json())

# convert the object into a dict
dump_flags_dict = dump_flags_instance.to_dict()
# create an instance of DumpFlags from a dict
dump_flags_from_dict = DumpFlags.from_dict(dump_flags_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


