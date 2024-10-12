# OutputPropertiesSerialization

Describes how data from an input is serialized or how data is serialized when written to an output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.output_properties_serialization import OutputPropertiesSerialization

# TODO update the JSON string below
json = "{}"
# create an instance of OutputPropertiesSerialization from a JSON string
output_properties_serialization_instance = OutputPropertiesSerialization.from_json(json)
# print the JSON string representation of the object
print(OutputPropertiesSerialization.to_json())

# convert the object into a dict
output_properties_serialization_dict = output_properties_serialization_instance.to_dict()
# create an instance of OutputPropertiesSerialization from a dict
output_properties_serialization_from_dict = OutputPropertiesSerialization.from_dict(output_properties_serialization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


