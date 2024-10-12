# AppFeatures


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**crash_download_raw** | **bool** | App supports download of raw crashes | [optional] 
**crashgroup_analytics_crashfreeusers** | **bool** | App supports the &#39;crash free user&#39; metric | [optional] 
**crashgroup_analytics_impactedusers** | **bool** | App supports the &#39;impacted users&#39; metric | [optional] 
**crashgroup_modify_annotation** | **bool** | App supports modification of crashgroup annotation | [optional] 
**crashgroup_modify_status** | **bool** | App supports modification of crashgroup status | [optional] 
**search** | **bool** | App supports search API | [optional] 

## Example

```python
from openapi_client.models.app_features import AppFeatures

# TODO update the JSON string below
json = "{}"
# create an instance of AppFeatures from a JSON string
app_features_instance = AppFeatures.from_json(json)
# print the JSON string representation of the object
print(AppFeatures.to_json())

# convert the object into a dict
app_features_dict = app_features_instance.to_dict()
# create an instance of AppFeatures from a dict
app_features_from_dict = AppFeatures.from_dict(app_features_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


