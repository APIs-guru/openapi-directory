# ChaosContext

Describes a map, which is a collection of (string, string) type key-value pairs. The map can be used to record information about the Chaos run. There cannot be more than 100 such pairs and each string (key or value) can be at most 4095 characters long. This map is set by the starter of the Chaos run to optionally store the context about the specific run.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**map** | **Dict[str, str]** | Describes a map that contains a collection of ChaosContextMapItem&#39;s. | [optional] 

## Example

```python
from openapi_client.models.chaos_context import ChaosContext

# TODO update the JSON string below
json = "{}"
# create an instance of ChaosContext from a JSON string
chaos_context_instance = ChaosContext.from_json(json)
# print the JSON string representation of the object
print(ChaosContext.to_json())

# convert the object into a dict
chaos_context_dict = chaos_context_instance.to_dict()
# create an instance of ChaosContext from a dict
chaos_context_from_dict = ChaosContext.from_dict(chaos_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


