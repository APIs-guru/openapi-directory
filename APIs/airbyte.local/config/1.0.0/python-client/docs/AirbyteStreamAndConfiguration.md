# AirbyteStreamAndConfiguration

each stream is split in two parts; the immutable schema from source and mutable configuration for destination

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**config** | [**AirbyteStreamConfiguration**](AirbyteStreamConfiguration.md) |  | [optional] 
**stream** | [**AirbyteStream**](AirbyteStream.md) |  | [optional] 

## Example

```python
from openapi_client.models.airbyte_stream_and_configuration import AirbyteStreamAndConfiguration

# TODO update the JSON string below
json = "{}"
# create an instance of AirbyteStreamAndConfiguration from a JSON string
airbyte_stream_and_configuration_instance = AirbyteStreamAndConfiguration.from_json(json)
# print the JSON string representation of the object
print(AirbyteStreamAndConfiguration.to_json())

# convert the object into a dict
airbyte_stream_and_configuration_dict = airbyte_stream_and_configuration_instance.to_dict()
# create an instance of AirbyteStreamAndConfiguration from a dict
airbyte_stream_and_configuration_from_dict = AirbyteStreamAndConfiguration.from_dict(airbyte_stream_and_configuration_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


