# AmlUserFeature

Features enabled for a workspace

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | Describes the feature for user experience | [optional] 
**display_name** | **str** | Specifies the feature name  | [optional] 
**id** | **str** | Specifies the feature ID | [optional] 

## Example

```python
from openapi_client.models.aml_user_feature import AmlUserFeature

# TODO update the JSON string below
json = "{}"
# create an instance of AmlUserFeature from a JSON string
aml_user_feature_instance = AmlUserFeature.from_json(json)
# print the JSON string representation of the object
print(AmlUserFeature.to_json())

# convert the object into a dict
aml_user_feature_dict = aml_user_feature_instance.to_dict()
# create an instance of AmlUserFeature from a dict
aml_user_feature_from_dict = AmlUserFeature.from_dict(aml_user_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


