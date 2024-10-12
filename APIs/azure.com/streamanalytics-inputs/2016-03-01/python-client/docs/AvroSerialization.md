# AvroSerialization

Describes how data from an input is serialized or how data is serialized when written to an output in Avro format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | The properties that are associated with the Avro serialization type. | [optional] 

## Example

```python
from openapi_client.models.avro_serialization import AvroSerialization

# TODO update the JSON string below
json = "{}"
# create an instance of AvroSerialization from a JSON string
avro_serialization_instance = AvroSerialization.from_json(json)
# print the JSON string representation of the object
print(AvroSerialization.to_json())

# convert the object into a dict
avro_serialization_dict = avro_serialization_instance.to_dict()
# create an instance of AvroSerialization from a dict
avro_serialization_from_dict = AvroSerialization.from_dict(avro_serialization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


