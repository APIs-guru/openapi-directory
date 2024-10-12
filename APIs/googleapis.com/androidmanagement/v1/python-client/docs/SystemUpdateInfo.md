# SystemUpdateInfo

Information about a potential pending system update.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**update_received_time** | **str** | The time when the update was first available. A zero value indicates that this field is not set. This field is set only if an update is available (that is, updateStatus is neither UPDATE_STATUS_UNKNOWN nor UP_TO_DATE). | [optional] 
**update_status** | **str** | The status of an update: whether an update exists and what type it is. | [optional] 

## Example

```python
from openapi_client.models.system_update_info import SystemUpdateInfo

# TODO update the JSON string below
json = "{}"
# create an instance of SystemUpdateInfo from a JSON string
system_update_info_instance = SystemUpdateInfo.from_json(json)
# print the JSON string representation of the object
print(SystemUpdateInfo.to_json())

# convert the object into a dict
system_update_info_dict = system_update_info_instance.to_dict()
# create an instance of SystemUpdateInfo from a dict
system_update_info_from_dict = SystemUpdateInfo.from_dict(system_update_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


