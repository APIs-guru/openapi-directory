# LivenessCheck

Health checking configuration for VM instances. Unhealthy instances are killed and replaced with new instances.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**check_interval** | **str** | Interval between health checks. | [optional] 
**failure_threshold** | **int** | Number of consecutive failed checks required before considering the VM unhealthy. | [optional] 
**host** | **str** | Host header to send when performing a HTTP Liveness check. Example: \&quot;myapp.appspot.com\&quot; | [optional] 
**initial_delay** | **str** | The initial delay before starting to execute the checks. | [optional] 
**path** | **str** | The request path. | [optional] 
**success_threshold** | **int** | Number of consecutive successful checks required before considering the VM healthy. | [optional] 
**timeout** | **str** | Time before the check is considered failed. | [optional] 

## Example

```python
from openapi_client.models.liveness_check import LivenessCheck

# TODO update the JSON string below
json = "{}"
# create an instance of LivenessCheck from a JSON string
liveness_check_instance = LivenessCheck.from_json(json)
# print the JSON string representation of the object
print(LivenessCheck.to_json())

# convert the object into a dict
liveness_check_dict = liveness_check_instance.to_dict()
# create an instance of LivenessCheck from a dict
liveness_check_from_dict = LivenessCheck.from_dict(liveness_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


