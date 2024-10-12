# KeyIntegrityViolationEvent

A cryptographic key including user installed, admin installed and system maintained private key is determined to be corrupted due to storage corruption, hardware failure or some OS issue. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_uid** | **int** | UID of the application which owns the key | [optional] 
**key_alias** | **str** | Alias of the key. | [optional] 

## Example

```python
from openapi_client.models.key_integrity_violation_event import KeyIntegrityViolationEvent

# TODO update the JSON string below
json = "{}"
# create an instance of KeyIntegrityViolationEvent from a JSON string
key_integrity_violation_event_instance = KeyIntegrityViolationEvent.from_json(json)
# print the JSON string representation of the object
print(KeyIntegrityViolationEvent.to_json())

# convert the object into a dict
key_integrity_violation_event_dict = key_integrity_violation_event_instance.to_dict()
# create an instance of KeyIntegrityViolationEvent from a dict
key_integrity_violation_event_from_dict = KeyIntegrityViolationEvent.from_dict(key_integrity_violation_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


