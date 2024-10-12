# TransportsSupported

'Indicates transports and serialization formats supported made available to the service-consuming application. Defaults to REST + JSON if absent.'

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**serializers** | **List[str]** | &#39;Information about the serializers in this binding, as defined in the SerializerTypes type in ETSI GS MEC 011 &#39; | [optional] 
**transport** | [**TransportDescriptor**](TransportDescriptor.md) |  | [optional] 

## Example

```python
from openapi_client.models.transports_supported import TransportsSupported

# TODO update the JSON string below
json = "{}"
# create an instance of TransportsSupported from a JSON string
transports_supported_instance = TransportsSupported.from_json(json)
# print the JSON string representation of the object
print(TransportsSupported.to_json())

# convert the object into a dict
transports_supported_dict = transports_supported_instance.to_dict()
# create an instance of TransportsSupported from a dict
transports_supported_from_dict = TransportsSupported.from_dict(transports_supported_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


