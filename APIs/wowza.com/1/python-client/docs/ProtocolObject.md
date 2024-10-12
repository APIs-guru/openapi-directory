# ProtocolObject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**protocol_name** | [**TheNameOfTheProtocol**](TheNameOfTheProtocol.md) |  | [optional] 

## Example

```python
from openapi_client.models.protocol_object import ProtocolObject

# TODO update the JSON string below
json = "{}"
# create an instance of ProtocolObject from a JSON string
protocol_object_instance = ProtocolObject.from_json(json)
# print the JSON string representation of the object
print(ProtocolObject.to_json())

# convert the object into a dict
protocol_object_dict = protocol_object_instance.to_dict()
# create an instance of ProtocolObject from a dict
protocol_object_from_dict = ProtocolObject.from_dict(protocol_object_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


