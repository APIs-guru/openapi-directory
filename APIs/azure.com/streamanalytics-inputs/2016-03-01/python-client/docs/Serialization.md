# Serialization

Describes how data from an input is serialized or how data is serialized when written to an output.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**type** | **str** | Indicates the type of serialization that the input or output uses. Required on PUT (CreateOrReplace) requests. | [optional] 

## Example

```python
from openapi_client.models.serialization import Serialization

# TODO update the JSON string below
json = "{}"
# create an instance of Serialization from a JSON string
serialization_instance = Serialization.from_json(json)
# print the JSON string representation of the object
print(Serialization.to_json())

# convert the object into a dict
serialization_dict = serialization_instance.to_dict()
# create an instance of Serialization from a dict
serialization_from_dict = Serialization.from_dict(serialization_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


