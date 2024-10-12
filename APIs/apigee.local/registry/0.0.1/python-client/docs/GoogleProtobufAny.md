# GoogleProtobufAny

Contains an arbitrary serialized message along with a @type that describes the type of the serialized message.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | The type of the serialized message. | [optional] 

## Example

```python
from openapi_client.models.google_protobuf_any import GoogleProtobufAny

# TODO update the JSON string below
json = "{}"
# create an instance of GoogleProtobufAny from a JSON string
google_protobuf_any_instance = GoogleProtobufAny.from_json(json)
# print the JSON string representation of the object
print(GoogleProtobufAny.to_json())

# convert the object into a dict
google_protobuf_any_dict = google_protobuf_any_instance.to_dict()
# create an instance of GoogleProtobufAny from a dict
google_protobuf_any_from_dict = GoogleProtobufAny.from_dict(google_protobuf_any_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


