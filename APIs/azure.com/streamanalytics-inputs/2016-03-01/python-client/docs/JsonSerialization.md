# JsonSerialization

Describes how data from an input is serialized or how data is serialized when written to an output in JSON format.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | [**JsonSerializationProperties**](JsonSerializationProperties.md) |  | [optional] 

## Example

```python
from openapi_client.models.json_serialization import JsonSerialization

# TODO update the JSON string below
json = "{}"
# create an instance of JsonSerialization from a JSON string
json_serialization_instance = JsonSerialization.from_json(json)
# print the JSON string representation of the object
print(JsonSerialization.to_json())

# convert the object into a dict
json_serialization_dict = json_serialization_instance.to_dict()
# create an instance of JsonSerialization from a dict
json_serialization_from_dict = JsonSerialization.from_dict(json_serialization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


