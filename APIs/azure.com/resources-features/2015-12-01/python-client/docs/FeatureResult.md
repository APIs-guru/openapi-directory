# FeatureResult

Previewed feature information.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** | The resource ID of the feature. | [optional] 
**name** | **str** | The name of the feature. | [optional] 
**properties** | [**FeatureProperties**](FeatureProperties.md) |  | [optional] 
**type** | **str** | The resource type of the feature. | [optional] 

## Example

```python
from openapi_client.models.feature_result import FeatureResult

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureResult from a JSON string
feature_result_instance = FeatureResult.from_json(json)
# print the JSON string representation of the object
print(FeatureResult.to_json())

# convert the object into a dict
feature_result_dict = feature_result_instance.to_dict()
# create an instance of FeatureResult from a dict
feature_result_from_dict = FeatureResult.from_dict(feature_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


