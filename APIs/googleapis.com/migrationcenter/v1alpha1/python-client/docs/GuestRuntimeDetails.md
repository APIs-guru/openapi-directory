# GuestRuntimeDetails

Guest OS runtime information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** | Domain, e.g. c.stratozone-development.internal. | [optional] 
**installed_apps** | [**GuestInstalledApplicationList**](GuestInstalledApplicationList.md) |  | [optional] 
**last_uptime** | [**ModelDate**](ModelDate.md) |  | [optional] 
**machine_name** | **str** | Machine name. | [optional] 
**network_info** | [**RuntimeNetworkInfo**](RuntimeNetworkInfo.md) |  | [optional] 
**open_file_list** | [**OpenFileList**](OpenFileList.md) |  | [optional] 
**processes** | [**RunningProcessList**](RunningProcessList.md) |  | [optional] 
**services** | [**RunningServiceList**](RunningServiceList.md) |  | [optional] 

## Example

```python
from openapi_client.models.guest_runtime_details import GuestRuntimeDetails

# TODO update the JSON string below
json = "{}"
# create an instance of GuestRuntimeDetails from a JSON string
guest_runtime_details_instance = GuestRuntimeDetails.from_json(json)
# print the JSON string representation of the object
print(GuestRuntimeDetails.to_json())

# convert the object into a dict
guest_runtime_details_dict = guest_runtime_details_instance.to_dict()
# create an instance of GuestRuntimeDetails from a dict
guest_runtime_details_from_dict = GuestRuntimeDetails.from_dict(guest_runtime_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


