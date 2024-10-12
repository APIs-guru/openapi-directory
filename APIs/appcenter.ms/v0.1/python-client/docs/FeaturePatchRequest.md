# FeaturePatchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | The friendly name of the feature | [optional] 
**display_name** | **str** | The full (friendly) name of the feature. | [optional] 
**state** | **int** | The state of the feature | [optional] 

## Example

```python
from openapi_client.models.feature_patch_request import FeaturePatchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of FeaturePatchRequest from a JSON string
feature_patch_request_instance = FeaturePatchRequest.from_json(json)
# print the JSON string representation of the object
print(FeaturePatchRequest.to_json())

# convert the object into a dict
feature_patch_request_dict = feature_patch_request_instance.to_dict()
# create an instance of FeaturePatchRequest from a dict
feature_patch_request_from_dict = FeaturePatchRequest.from_dict(feature_patch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


