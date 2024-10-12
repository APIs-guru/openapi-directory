# ConcurrentAccessRestriction


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**device_allowed** | **bool** | Whether access is granted for this (user, device, volume). | [optional] 
**kind** | **str** | Resource type. | [optional] 
**max_concurrent_devices** | **int** | The maximum number of concurrent access licenses for this volume. | [optional] 
**message** | **str** | Error/warning message. | [optional] 
**nonce** | **str** | Client nonce for verification. Download access and client-validation only. | [optional] 
**reason_code** | **str** | Error/warning reason code. | [optional] 
**restricted** | **bool** | Whether this volume has any concurrent access restrictions. | [optional] 
**signature** | **str** | Response signature. | [optional] 
**source** | **str** | Client app identifier for verification. Download access and client-validation only. | [optional] 
**time_window_seconds** | **int** | Time in seconds for license auto-expiration. | [optional] 
**volume_id** | **str** | Identifies the volume for which this entry applies. | [optional] 

## Example

```python
from openapi_client.models.concurrent_access_restriction import ConcurrentAccessRestriction

# TODO update the JSON string below
json = "{}"
# create an instance of ConcurrentAccessRestriction from a JSON string
concurrent_access_restriction_instance = ConcurrentAccessRestriction.from_json(json)
# print the JSON string representation of the object
print(ConcurrentAccessRestriction.to_json())

# convert the object into a dict
concurrent_access_restriction_dict = concurrent_access_restriction_instance.to_dict()
# create an instance of ConcurrentAccessRestriction from a dict
concurrent_access_restriction_from_dict = ConcurrentAccessRestriction.from_dict(concurrent_access_restriction_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


