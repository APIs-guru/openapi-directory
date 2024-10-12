# UsesFeature

A tag within a manifest. https://developer.android.com/guide/topics/manifest/uses-feature-element.html

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_required** | **bool** | The android:required value | [optional] 
**name** | **str** | The android:name value | [optional] 

## Example

```python
from openapi_client.models.uses_feature import UsesFeature

# TODO update the JSON string below
json = "{}"
# create an instance of UsesFeature from a JSON string
uses_feature_instance = UsesFeature.from_json(json)
# print the JSON string representation of the object
print(UsesFeature.to_json())

# convert the object into a dict
uses_feature_dict = uses_feature_instance.to_dict()
# create an instance of UsesFeature from a dict
uses_feature_from_dict = UsesFeature.from_dict(uses_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


