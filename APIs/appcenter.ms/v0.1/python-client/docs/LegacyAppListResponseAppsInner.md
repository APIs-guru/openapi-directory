# LegacyAppListResponseAppsInner


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**collaborators** | [**Dict[str, LegacyAppCollaboratorsValue]**](LegacyAppCollaboratorsValue.md) |  | [optional] 
**deployments** | **List[str]** |  | [optional] 
**name** | **str** | The app name. | [optional] 

## Example

```python
from openapi_client.models.legacy_app_list_response_apps_inner import LegacyAppListResponseAppsInner

# TODO update the JSON string below
json = "{}"
# create an instance of LegacyAppListResponseAppsInner from a JSON string
legacy_app_list_response_apps_inner_instance = LegacyAppListResponseAppsInner.from_json(json)
# print the JSON string representation of the object
print(LegacyAppListResponseAppsInner.to_json())

# convert the object into a dict
legacy_app_list_response_apps_inner_dict = legacy_app_list_response_apps_inner_instance.to_dict()
# create an instance of LegacyAppListResponseAppsInner from a dict
legacy_app_list_response_apps_inner_from_dict = LegacyAppListResponseAppsInner.from_dict(legacy_app_list_response_apps_inner_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


