# DumpFlag

Dump flag definition.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** | The name of the flag | [optional] 
**value** | **str** | The value of the flag. | [optional] 

## Example

```python
from openapi_client.models.dump_flag import DumpFlag

# TODO update the JSON string below
json = "{}"
# create an instance of DumpFlag from a JSON string
dump_flag_instance = DumpFlag.from_json(json)
# print the JSON string representation of the object
print(DumpFlag.to_json())

# convert the object into a dict
dump_flag_dict = dump_flag_instance.to_dict()
# create an instance of DumpFlag from a dict
dump_flag_from_dict = DumpFlag.from_dict(dump_flag_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


