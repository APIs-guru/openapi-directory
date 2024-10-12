# SignalRKeys

A class represents the access keys of SignalR service.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**primary_connection_string** | **str** | SignalR connection string constructed via the primaryKey | [optional] 
**primary_key** | **str** | The primary access key. | [optional] 
**secondary_connection_string** | **str** | SignalR connection string constructed via the secondaryKey | [optional] 
**secondary_key** | **str** | The secondary access key. | [optional] 

## Example

```python
from openapi_client.models.signal_r_keys import SignalRKeys

# TODO update the JSON string below
json = "{}"
# create an instance of SignalRKeys from a JSON string
signal_r_keys_instance = SignalRKeys.from_json(json)
# print the JSON string representation of the object
print(SignalRKeys.to_json())

# convert the object into a dict
signal_r_keys_dict = signal_r_keys_instance.to_dict()
# create an instance of SignalRKeys from a dict
signal_r_keys_from_dict = SignalRKeys.from_dict(signal_r_keys_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


