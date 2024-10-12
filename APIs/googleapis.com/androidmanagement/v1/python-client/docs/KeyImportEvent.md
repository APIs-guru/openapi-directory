# KeyImportEvent

A cryptographic key including user installed, admin installed and system maintained private key is imported on the device either by the user or management. This is available device-wide on fully managed devices and within the work profile on organization-owned devices with a work profile.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**application_uid** | **int** | UID of the application which imported the key | [optional] 
**key_alias** | **str** | Alias of the key. | [optional] 
**success** | **bool** | Whether the operation was successful. | [optional] 

## Example

```python
from openapi_client.models.key_import_event import KeyImportEvent

# TODO update the JSON string below
json = "{}"
# create an instance of KeyImportEvent from a JSON string
key_import_event_instance = KeyImportEvent.from_json(json)
# print the JSON string representation of the object
print(KeyImportEvent.to_json())

# convert the object into a dict
key_import_event_dict = key_import_event_instance.to_dict()
# create an instance of KeyImportEvent from a dict
key_import_event_from_dict = KeyImportEvent.from_dict(key_import_event_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


