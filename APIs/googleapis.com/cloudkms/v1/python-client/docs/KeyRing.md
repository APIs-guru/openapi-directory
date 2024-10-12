# KeyRing

A KeyRing is a toplevel logical grouping of CryptoKeys.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**create_time** | **str** | Output only. The time at which this KeyRing was created. | [optional] [readonly] 
**name** | **str** | Output only. The resource name for the KeyRing in the format &#x60;projects/*/locations/*/keyRings/*&#x60;. | [optional] [readonly] 

## Example

```python
from openapi_client.models.key_ring import KeyRing

# TODO update the JSON string below
json = "{}"
# create an instance of KeyRing from a JSON string
key_ring_instance = KeyRing.from_json(json)
# print the JSON string representation of the object
print(KeyRing.to_json())

# convert the object into a dict
key_ring_dict = key_ring_instance.to_dict()
# create an instance of KeyRing from a dict
key_ring_from_dict = KeyRing.from_dict(key_ring_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


