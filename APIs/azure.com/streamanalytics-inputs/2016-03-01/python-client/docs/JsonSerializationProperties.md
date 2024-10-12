# JsonSerializationProperties

The properties that are associated with the JSON serialization type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**encoding** | [**Encoding**](Encoding.md) |  | [optional] 
**format** | [**JsonOutputSerializationFormat**](JsonOutputSerializationFormat.md) |  | [optional] 

## Example

```python
from openapi_client.models.json_serialization_properties import JsonSerializationProperties

# TODO update the JSON string below
json = "{}"
# create an instance of JsonSerializationProperties from a JSON string
json_serialization_properties_instance = JsonSerializationProperties.from_json(json)
# print the JSON string representation of the object
print(JsonSerializationProperties.to_json())

# convert the object into a dict
json_serialization_properties_dict = json_serialization_properties_instance.to_dict()
# create an instance of JsonSerializationProperties from a dict
json_serialization_properties_from_dict = JsonSerializationProperties.from_dict(json_serialization_properties_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


