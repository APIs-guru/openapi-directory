# RuntimeInfo

Runtime information about workload execution.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**approximate_usage** | [**UsageMetrics**](UsageMetrics.md) |  | [optional] 
**current_usage** | [**UsageSnapshot**](UsageSnapshot.md) |  | [optional] 
**diagnostic_output_uri** | **str** | Output only. A URI pointing to the location of the diagnostics tarball. | [optional] [readonly] 
**endpoints** | **Dict[str, str]** | Output only. Map of remote access endpoints (such as web interfaces and APIs) to their URIs. | [optional] [readonly] 
**output_uri** | **str** | Output only. A URI pointing to the location of the stdout and stderr of the workload. | [optional] [readonly] 

## Example

```python
from openapi_client.models.runtime_info import RuntimeInfo

# TODO update the JSON string below
json = "{}"
# create an instance of RuntimeInfo from a JSON string
runtime_info_instance = RuntimeInfo.from_json(json)
# print the JSON string representation of the object
print(RuntimeInfo.to_json())

# convert the object into a dict
runtime_info_dict = runtime_info_instance.to_dict()
# create an instance of RuntimeInfo from a dict
runtime_info_from_dict = RuntimeInfo.from_dict(runtime_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


