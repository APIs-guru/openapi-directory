# KeyDestructionEvent

A cryptographic key including user installed, admin installed and system maintained private key is removed from the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_uid** | **int** | UID of the application which owns the key. | [optional] 
**key_alias** | **str** | Alias of the key. | [optional] 
**success** | **bool** | Whether the operation was successful. | [optional] 

## Example

```python
from openapi_client.models.key_destruction_event import KeyDestructionEvent

# TODO update the JSON string below
json = "{}"
# create an instance of KeyDestructionEvent from a JSON string
key_destruction_event_instance = KeyDestructionEvent.from_json(json)
# print the JSON string representation of the object
print(KeyDestructionEvent.to_json())

# convert the object into a dict
key_destruction_event_dict = key_destruction_event_instance.to_dict()
# create an instance of KeyDestructionEvent from a dict
key_destruction_event_from_dict = KeyDestructionEvent.from_dict(key_destruction_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


