# BotsInfoSchema

Schema for successful response from bots.info method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**bot** | [**BotsInfoSchemaBot**](BotsInfoSchemaBot.md) |  | 
**ok** | **bool** |  | 

## Example

```python
from openapi_client.models.bots_info_schema import BotsInfoSchema

# TODO update the JSON string below
json = "{}"
# create an instance of BotsInfoSchema from a JSON string
bots_info_schema_instance = BotsInfoSchema.from_json(json)
# print the JSON string representation of the object
print(BotsInfoSchema.to_json())

# convert the object into a dict
bots_info_schema_dict = bots_info_schema_instance.to_dict()
# create an instance of BotsInfoSchema from a dict
bots_info_schema_from_dict = BotsInfoSchema.from_dict(bots_info_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


