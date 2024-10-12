# TransportDescriptor


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol** | **str** | The name of the protocol used. Shall be set to HTTP for a REST API. | 
**security** | **object** | See MEC011 | 
**type** | **str** |  | 
**version** | **str** | The version of the protocol used. | 

## Example

```python
from openapi_client.models.transport_descriptor import TransportDescriptor

# TODO update the JSON string below
json = "{}"
# create an instance of TransportDescriptor from a JSON string
transport_descriptor_instance = TransportDescriptor.from_json(json)
# print the JSON string representation of the object
print(TransportDescriptor.to_json())

# convert the object into a dict
transport_descriptor_dict = transport_descriptor_instance.to_dict()
# create an instance of TransportDescriptor from a dict
transport_descriptor_from_dict = TransportDescriptor.from_dict(transport_descriptor_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


