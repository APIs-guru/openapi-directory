# TransportDependency


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**labels** | **List[str]** | Set of labels that allow to define groups of transport bindings. The mechanism of the grouping is defined below this table. | 
**serializers** | **List[str]** | Information about the serializers in this transport binding, as defined in the SerializerTypes type in ETSI GS MEC 011 [i.4]. Support for at least one of the entries is required in conjunction with the transport. | 
**transport** | [**TransportDescriptor**](TransportDescriptor.md) |  | 

## Example

```python
from openapi_client.models.transport_dependency import TransportDependency

# TODO update the JSON string below
json = "{}"
# create an instance of TransportDependency from a JSON string
transport_dependency_instance = TransportDependency.from_json(json)
# print the JSON string representation of the object
print(TransportDependency.to_json())

# convert the object into a dict
transport_dependency_dict = transport_dependency_instance.to_dict()
# create an instance of TransportDependency from a dict
transport_dependency_from_dict = TransportDependency.from_dict(transport_dependency_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


