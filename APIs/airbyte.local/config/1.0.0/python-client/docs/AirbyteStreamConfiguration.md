# AirbyteStreamConfiguration

the mutable part of the stream to configure the destination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias_name** | **str** | Alias name to the stream to be used in the destination | [optional] 
**cursor_field** | **List[str]** | Path to the field that will be used to determine if a record is new or modified since the last sync. This field is REQUIRED if &#x60;sync_mode&#x60; is &#x60;incremental&#x60;. Otherwise it is ignored. | [optional] 
**destination_sync_mode** | [**DestinationSyncMode**](DestinationSyncMode.md) |  | 
**field_selection_enabled** | **bool** | Whether field selection should be enabled. If this is true, only the properties in &#x60;selectedFields&#x60; will be included. | [optional] 
**primary_key** | **List[List[str]]** | Paths to the fields that will be used as primary key. This field is REQUIRED if &#x60;destination_sync_mode&#x60; is &#x60;*_dedup&#x60;. Otherwise it is ignored. | [optional] 
**selected** | **bool** | If this is true, the stream is selected with all of its properties. For new connections, this considers if the stream is suggested or not | [optional] 
**selected_fields** | [**List[SelectedFieldInfo]**](SelectedFieldInfo.md) | Paths to the fields that will be included in the configured catalog. This must be set if &#x60;fieldSelectedEnabled&#x60; is set. An empty list indicates that no properties will be included. | [optional] 
**suggested** | **bool** | Does the connector suggest that this stream be enabled by default? | [optional] 
**sync_mode** | [**SyncMode**](SyncMode.md) |  | 

## Example

```python
from openapi_client.models.airbyte_stream_configuration import AirbyteStreamConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AirbyteStreamConfiguration from a JSON string
airbyte_stream_configuration_instance = AirbyteStreamConfiguration.from_json(json)
# print the JSON string representation of the object
print(AirbyteStreamConfiguration.to_json())

# convert the object into a dict
airbyte_stream_configuration_dict = airbyte_stream_configuration_instance.to_dict()
# create an instance of AirbyteStreamConfiguration from a dict
airbyte_stream_configuration_from_dict = AirbyteStreamConfiguration.from_dict(airbyte_stream_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


