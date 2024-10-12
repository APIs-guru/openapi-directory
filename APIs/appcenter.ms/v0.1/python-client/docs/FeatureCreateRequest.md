# FeatureCreateRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The friendly name of the feature | [optional] 
**display_name** | **str** | The full (friendly) name of the feature. | 
**name** | **str** | The unique name of the feature | 
**state** | **int** | The state of the feature | [optional] 

## Example

```python
from openapi_client.models.feature_create_request import FeatureCreateRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureCreateRequest from a JSON string
feature_create_request_instance = FeatureCreateRequest.from_json(json)
# print the JSON string representation of the object
print(FeatureCreateRequest.to_json())

# convert the object into a dict
feature_create_request_dict = feature_create_request_instance.to_dict()
# create an instance of FeatureCreateRequest from a dict
feature_create_request_from_dict = FeatureCreateRequest.from_dict(feature_create_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


