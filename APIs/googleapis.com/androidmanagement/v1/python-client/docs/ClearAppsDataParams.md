# ClearAppsDataParams

Parameters associated with the CLEAR_APP_DATA command to clear the data of specified apps from the device.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**package_names** | **List[str]** | The package names of the apps whose data will be cleared when the command is executed. | [optional] 

## Example

```python
from openapi_client.models.clear_apps_data_params import ClearAppsDataParams

# TODO update the JSON string below
json = "{}"
# create an instance of ClearAppsDataParams from a JSON string
clear_apps_data_params_instance = ClearAppsDataParams.from_json(json)
# print the JSON string representation of the object
print(ClearAppsDataParams.to_json())

# convert the object into a dict
clear_apps_data_params_dict = clear_apps_data_params_instance.to_dict()
# create an instance of ClearAppsDataParams from a dict
clear_apps_data_params_from_dict = ClearAppsDataParams.from_dict(clear_apps_data_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


