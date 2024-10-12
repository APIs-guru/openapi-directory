# ReadinessCheck

Readiness checking configuration for VM instances. Unhealthy instances are removed from traffic rotation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**app_start_timeout** | **str** | A maximum time limit on application initialization, measured from moment the application successfully replies to a healthcheck until it is ready to serve traffic. | [optional] 
**check_interval** | **str** | Interval between health checks. | [optional] 
**failure_threshold** | **int** | Number of consecutive failed checks required before removing traffic. | [optional] 
**host** | **str** | Host header to send when performing a HTTP Readiness check. Example: \&quot;myapp.appspot.com\&quot; | [optional] 
**path** | **str** | The request path. | [optional] 
**success_threshold** | **int** | Number of consecutive successful checks required before receiving traffic. | [optional] 
**timeout** | **str** | Time before the check is considered failed. | [optional] 

## Example

```python
from openapi_client.models.readiness_check import ReadinessCheck

# TODO update the JSON string below
json = "{}"
# create an instance of ReadinessCheck from a JSON string
readiness_check_instance = ReadinessCheck.from_json(json)
# print the JSON string representation of the object
print(ReadinessCheck.to_json())

# convert the object into a dict
readiness_check_dict = readiness_check_instance.to_dict()
# create an instance of ReadinessCheck from a dict
readiness_check_from_dict = ReadinessCheck.from_dict(readiness_check_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


