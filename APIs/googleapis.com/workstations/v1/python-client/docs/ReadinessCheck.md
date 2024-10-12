# ReadinessCheck

A readiness check to be performed on a workstation.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**path** | **str** | Optional. Path to which the request should be sent. | [optional] 
**port** | **int** | Optional. Port to which the request should be sent. | [optional] 

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


