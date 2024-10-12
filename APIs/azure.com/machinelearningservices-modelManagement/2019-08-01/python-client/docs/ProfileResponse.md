# ProfileResponse

The profile response.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created_time** | **datetime** | The profile creation time (UTC). | [optional] 
**description** | **str** | The profile description. | [optional] 
**error** | [**ModelErrorResponse**](ModelErrorResponse.md) |  | [optional] 
**image_id** | **str** | The Image Id. | [optional] 
**input_data** | **str** | The input data. | [optional] 
**kv_tags** | **Dict[str, str]** | The profile tags dictionary. Tags are mutable. | [optional] 
**name** | **str** | The profile name. | [optional] 
**profile_run_result** | **str** | The profile run result. | [optional] 
**profiling_error_logs** | **str** | The profiling error logs. | [optional] 
**properties** | **Dict[str, str]** | The profile properties dictionary. Properties are immutable. | [optional] 
**recommendation_latency_in_ms** | **float** | Latency associated with the recommended memory/cpu config | [optional] 
**recommended_cpu** | **float** | The recommended CPU allocation. | [optional] 
**recommended_memory_in_gb** | **float** | The recommended amount of memory to allocate in GB. | [optional] 
**state** | **str** | The state of the profile. | [optional] 

## Example

```python
from openapi_client.models.profile_response import ProfileResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileResponse from a JSON string
profile_response_instance = ProfileResponse.from_json(json)
# print the JSON string representation of the object
print(ProfileResponse.to_json())

# convert the object into a dict
profile_response_dict = profile_response_instance.to_dict()
# create an instance of ProfileResponse from a dict
profile_response_from_dict = ProfileResponse.from_dict(profile_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


