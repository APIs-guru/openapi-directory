# HashOfProtocols

A hash of protocols that accrued network usage, keyed by the name of the protocol that generated the usage.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**zones** | [**HashOfZones**](HashOfZones.md) |  | [optional] 

## Example

```python
from openapi_client.models.hash_of_protocols import HashOfProtocols

# TODO update the JSON string below
json = "{}"
# create an instance of HashOfProtocols from a JSON string
hash_of_protocols_instance = HashOfProtocols.from_json(json)
# print the JSON string representation of the object
print(HashOfProtocols.to_json())

# convert the object into a dict
hash_of_protocols_dict = hash_of_protocols_instance.to_dict()
# create an instance of HashOfProtocols from a dict
hash_of_protocols_from_dict = HashOfProtocols.from_dict(hash_of_protocols_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


