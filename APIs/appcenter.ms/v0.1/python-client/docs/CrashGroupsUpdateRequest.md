# CrashGroupsUpdateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**annotation** | **str** |  | [optional] 
**status** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.crash_groups_update_request import CrashGroupsUpdateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of CrashGroupsUpdateRequest from a JSON string
crash_groups_update_request_instance = CrashGroupsUpdateRequest.from_json(json)
# print the JSON string representation of the object
print(CrashGroupsUpdateRequest.to_json())

# convert the object into a dict
crash_groups_update_request_dict = crash_groups_update_request_instance.to_dict()
# create an instance of CrashGroupsUpdateRequest from a dict
crash_groups_update_request_from_dict = CrashGroupsUpdateRequest.from_dict(crash_groups_update_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


