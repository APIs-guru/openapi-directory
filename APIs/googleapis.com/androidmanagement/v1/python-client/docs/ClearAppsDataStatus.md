# ClearAppsDataStatus

Status of the CLEAR_APP_DATA command to clear the data of specified apps from the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**results** | [**Dict[str, PerAppResult]**](PerAppResult.md) | The per-app results, a mapping from package names to the respective clearing result. | [optional] 

## Example

```python
from openapi_client.models.clear_apps_data_status import ClearAppsDataStatus

# TODO update the JSON string below
json = "{}"
# create an instance of ClearAppsDataStatus from a JSON string
clear_apps_data_status_instance = ClearAppsDataStatus.from_json(json)
# print the JSON string representation of the object
print(ClearAppsDataStatus.to_json())

# convert the object into a dict
clear_apps_data_status_dict = clear_apps_data_status_instance.to_dict()
# create an instance of ClearAppsDataStatus from a dict
clear_apps_data_status_from_dict = ClearAppsDataStatus.from_dict(clear_apps_data_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


