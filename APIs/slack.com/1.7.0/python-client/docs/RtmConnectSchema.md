# RtmConnectSchema

Schema for successful response from rtm.connect method

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ok** | **bool** |  | 
**var_self** | [**RtmConnectSchemaSelf**](RtmConnectSchemaSelf.md) |  | 
**team** | [**RtmConnectSchemaTeam**](RtmConnectSchemaTeam.md) |  | 
**url** | **str** |  | 

## Example

```python
from openapi_client.models.rtm_connect_schema import RtmConnectSchema

# TODO update the JSON string below
json = "{}"
# create an instance of RtmConnectSchema from a JSON string
rtm_connect_schema_instance = RtmConnectSchema.from_json(json)
# print the JSON string representation of the object
print(RtmConnectSchema.to_json())

# convert the object into a dict
rtm_connect_schema_dict = rtm_connect_schema_instance.to_dict()
# create an instance of RtmConnectSchema from a dict
rtm_connect_schema_from_dict = RtmConnectSchema.from_dict(rtm_connect_schema_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


