# Profile

Profile resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**deployment** | [**Deployment**](Deployment.md) |  | [optional] 
**duration** | **str** | Duration of the profiling session. Input (for the offline mode) or output (for the online mode). The field represents requested profiling duration. It may slightly differ from the effective profiling duration, which is recorded in the profile data, in case the profiling can&#39;t be stopped immediately (e.g. in case stopping the profiling is handled asynchronously). | [optional] 
**labels** | **Dict[str, str]** | Input only. Labels associated to this specific profile. These labels will get merged with the deployment labels for the final data set. See documentation on deployment labels for validation rules and limits. | [optional] 
**name** | **str** | Output only. Opaque, server-assigned, unique ID for this profile. | [optional] [readonly] 
**profile_bytes** | **bytearray** | Input only. Profile bytes, as a gzip compressed serialized proto, the format is https://github.com/google/pprof/blob/master/proto/profile.proto. | [optional] 
**profile_type** | **str** | Type of profile. For offline mode, this must be specified when creating the profile. For online mode it is assigned and returned by the server. | [optional] 
**start_time** | **str** | Output only. Start time for the profile. This output is only present in response from the ListProfiles method. | [optional] [readonly] 

## Example

```python
from openapi_client.models.profile import Profile

# TODO update the JSON string below
json = "{}"
# create an instance of Profile from a JSON string
profile_instance = Profile.from_json(json)
# print the JSON string representation of the object
print(Profile.to_json())

# convert the object into a dict
profile_dict = profile_instance.to_dict()
# create an instance of Profile from a dict
profile_from_dict = Profile.from_dict(profile_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


