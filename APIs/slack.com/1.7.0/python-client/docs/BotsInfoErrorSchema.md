# BotsInfoErrorSchema

Schema for error response from bots.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**callstack** | **str** | Note: PHP callstack is only visible in dev/qa | [optional] 
**error** | **str** |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.bots_info_error_schema import BotsInfoErrorSchema

# TODO update the JSON string below
json = "{}"
# create an instance of BotsInfoErrorSchema from a JSON string
bots_info_error_schema_instance = BotsInfoErrorSchema.from_json(json)
# print the JSON string representation of the object
print(BotsInfoErrorSchema.to_json())

# convert the object into a dict
bots_info_error_schema_dict = bots_info_error_schema_instance.to_dict()
# create an instance of BotsInfoErrorSchema from a dict
bots_info_error_schema_from_dict = BotsInfoErrorSchema.from_dict(bots_info_error_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


