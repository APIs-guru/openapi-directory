# AirbyteStream

the immutable schema defined by the source

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_cursor_field** | **List[str]** | Path to the field that will be used to determine if a record is new or modified since the last sync. If not provided by the source, the end user will have to specify the comparable themselves. | [optional] 
**json_schema** | **object** | Stream schema using Json Schema specs. | [optional] 
**name** | **str** | Stream&#39;s name. | 
**namespace** | **str** | Optional Source-defined namespace. Airbyte streams from the same sources should have the same namespace. Currently only used by JDBC destinations to determine what schema to write to. | [optional] 
**source_defined_cursor** | **bool** | If the source defines the cursor field, then any other cursor field inputs will be ignored. If it does not, either the user_provided one is used, or the default one is used as a backup. | [optional] 
**source_defined_primary_key** | **List[List[str]]** | If the source defines the primary key, paths to the fields that will be used as a primary key. If not provided by the source, the end user will have to specify the primary key themselves. | [optional] 
**supported_sync_modes** | [**List[SyncMode]**](SyncMode.md) |  | [optional] 

## Example

```python
from openapi_client.models.airbyte_stream import AirbyteStream

# TODO update the JSON string below
json = "{}"
# create an instance of AirbyteStream from a JSON string
airbyte_stream_instance = AirbyteStream.from_json(json)
# print the JSON string representation of the object
print(AirbyteStream.to_json())

# convert the object into a dict
airbyte_stream_dict = airbyte_stream_instance.to_dict()
# create an instance of AirbyteStream from a dict
airbyte_stream_from_dict = AirbyteStream.from_dict(airbyte_stream_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


