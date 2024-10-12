# AvroConfig

Configuration for writing message data in Avro format. Message payloads and metadata will be written to files as an Avro binary.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**write_metadata** | **bool** | Optional. When true, write the subscription name, message_id, publish_time, attributes, and ordering_key as additional fields in the output. The subscription name, message_id, and publish_time fields are put in their own fields while all other message properties other than data (for example, an ordering_key, if present) are added as entries in the attributes map. | [optional] 

## Example

```python
from openapi_client.models.avro_config import AvroConfig

# TODO update the JSON string below
json = "{}"
# create an instance of AvroConfig from a JSON string
avro_config_instance = AvroConfig.from_json(json)
# print the JSON string representation of the object
print(AvroConfig.to_json())

# convert the object into a dict
avro_config_dict = avro_config_instance.to_dict()
# create an instance of AvroConfig from a dict
avro_config_from_dict = AvroConfig.from_dict(avro_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


