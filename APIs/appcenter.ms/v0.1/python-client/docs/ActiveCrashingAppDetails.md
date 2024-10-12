# ActiveCrashingAppDetails


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**apps_with_crashes** | [**List[ActiveCrashingAppDetailsAppsWithCrashesInner]**](ActiveCrashingAppDetailsAppsWithCrashesInner.md) | details of the apps with crashes | [optional] 
**next_link** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.active_crashing_app_details import ActiveCrashingAppDetails

# TODO update the JSON string below
json = "{}"
# create an instance of ActiveCrashingAppDetails from a JSON string
active_crashing_app_details_instance = ActiveCrashingAppDetails.from_json(json)
# print the JSON string representation of the object
print(ActiveCrashingAppDetails.to_json())

# convert the object into a dict
active_crashing_app_details_dict = active_crashing_app_details_instance.to_dict()
# create an instance of ActiveCrashingAppDetails from a dict
active_crashing_app_details_from_dict = ActiveCrashingAppDetails.from_dict(active_crashing_app_details_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


