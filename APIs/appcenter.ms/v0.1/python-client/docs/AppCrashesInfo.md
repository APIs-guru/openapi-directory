# AppCrashesInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**features** | [**CrashesGetAppCrashesInfo200ResponseFeatures**](CrashesGetAppCrashesInfo200ResponseFeatures.md) |  | 
**has_crashes** | **bool** |  | 

## Example

```python
from openapi_client.models.app_crashes_info import AppCrashesInfo

# TODO update the JSON string below
json = "{}"
# create an instance of AppCrashesInfo from a JSON string
app_crashes_info_instance = AppCrashesInfo.from_json(json)
# print the JSON string representation of the object
print(AppCrashesInfo.to_json())

# convert the object into a dict
app_crashes_info_dict = app_crashes_info_instance.to_dict()
# create an instance of AppCrashesInfo from a dict
app_crashes_info_from_dict = AppCrashesInfo.from_dict(app_crashes_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


