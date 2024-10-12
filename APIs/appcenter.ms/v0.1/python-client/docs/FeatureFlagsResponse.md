# FeatureFlagsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**feature_flags** | **List[str]** |  | 

## Example

```python
from openapi_client.models.feature_flags_response import FeatureFlagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of FeatureFlagsResponse from a JSON string
feature_flags_response_instance = FeatureFlagsResponse.from_json(json)
# print the JSON string representation of the object
print(FeatureFlagsResponse.to_json())

# convert the object into a dict
feature_flags_response_dict = feature_flags_response_instance.to_dict()
# create an instance of FeatureFlagsResponse from a dict
feature_flags_response_from_dict = FeatureFlagsResponse.from_dict(feature_flags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


