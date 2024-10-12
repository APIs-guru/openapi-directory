# JSONRegexFeature

Exported Model - A Pattern feature.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**activated** | **bool** | Indicates if the Pattern feature is enabled. | [optional] 
**name** | **str** | Name of the feature. | [optional] 
**pattern** | **str** | The Regular Expression to match. | [optional] 

## Example

```python
from openapi_client.models.json_regex_feature import JSONRegexFeature

# TODO update the JSON string below
json = "{}"
# create an instance of JSONRegexFeature from a JSON string
json_regex_feature_instance = JSONRegexFeature.from_json(json)
# print the JSON string representation of the object
print(JSONRegexFeature.to_json())

# convert the object into a dict
json_regex_feature_dict = json_regex_feature_instance.to_dict()
# create an instance of JSONRegexFeature from a dict
json_regex_feature_from_dict = JSONRegexFeature.from_dict(json_regex_feature_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


