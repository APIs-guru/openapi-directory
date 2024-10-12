# FeatureResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_at** | **str** | The creation date of the feature | [optional] 
**description** | **str** | The description of the feature | [optional] 
**display_name** | **str** | The friendly name of the feature | 
**name** | **str** | The unique name of the feature | 
**state** | **int** | The state (unset, enabled, disabled) of the feature | 
**updated_at** | **str** | The date the feature was last updated at | [optional] 

## Example

```python
from openapi_client.models.feature_response import FeatureResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureResponse from a JSON string
feature_response_instance = FeatureResponse.from_json(json)
# print the JSON string representation of the object
print(FeatureResponse.to_json())

# convert the object into a dict
feature_response_dict = feature_response_instance.to_dict()
# create an instance of FeatureResponse from a dict
feature_response_from_dict = FeatureResponse.from_dict(feature_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


