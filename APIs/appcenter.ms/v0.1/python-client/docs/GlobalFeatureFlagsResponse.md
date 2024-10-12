# GlobalFeatureFlagsResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**value** | **Dict[str, str]** | The dictionary of global state values indexed by feature flag names | 

## Example

```python
from openapi_client.models.global_feature_flags_response import GlobalFeatureFlagsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of GlobalFeatureFlagsResponse from a JSON string
global_feature_flags_response_instance = GlobalFeatureFlagsResponse.from_json(json)
# print the JSON string representation of the object
print(GlobalFeatureFlagsResponse.to_json())

# convert the object into a dict
global_feature_flags_response_dict = global_feature_flags_response_instance.to_dict()
# create an instance of GlobalFeatureFlagsResponse from a dict
global_feature_flags_response_from_dict = GlobalFeatureFlagsResponse.from_dict(global_feature_flags_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


