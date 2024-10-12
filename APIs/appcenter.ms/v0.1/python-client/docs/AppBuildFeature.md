# AppBuildFeature

supported feature

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | [optional] 
**value** | **bool** |  | [optional] 

## Example

```python
from openapi_client.models.app_build_feature import AppBuildFeature

# TODO update the JSON string below
json = "{}"
# create an instance of AppBuildFeature from a JSON string
app_build_feature_instance = AppBuildFeature.from_json(json)
# print the JSON string representation of the object
print(AppBuildFeature.to_json())

# convert the object into a dict
app_build_feature_dict = app_build_feature_instance.to_dict()
# create an instance of AppBuildFeature from a dict
app_build_feature_from_dict = AppBuildFeature.from_dict(app_build_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


