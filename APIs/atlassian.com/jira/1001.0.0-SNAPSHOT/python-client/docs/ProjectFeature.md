# ProjectFeature

Details of a project feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature** | **str** | The key of the feature. | [optional] 
**image_uri** | **str** | URI for the image representing the feature. | [optional] 
**localised_description** | **str** | Localized display description for the feature. | [optional] 
**localised_name** | **str** | Localized display name for the feature. | [optional] 
**prerequisites** | **List[str]** | List of keys of the features required to enable the feature. | [optional] 
**project_id** | **int** | The ID of the project. | [optional] 
**state** | **str** | The state of the feature. When updating the state of a feature, only ENABLED and DISABLED are supported. Responses can contain all values | [optional] 
**toggle_locked** | **bool** | Whether the state of the feature can be updated. | [optional] 

## Example

```python
from openapi_client.models.project_feature import ProjectFeature

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectFeature from a JSON string
project_feature_instance = ProjectFeature.from_json(json)
# print the JSON string representation of the object
print(ProjectFeature.to_json())

# convert the object into a dict
project_feature_dict = project_feature_instance.to_dict()
# create an instance of ProjectFeature from a dict
project_feature_from_dict = ProjectFeature.from_dict(project_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


