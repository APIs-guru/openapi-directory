# RunningService

Guest OS running service details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cmdline** | **str** | Service command line. | [optional] 
**exe_path** | **str** | Service binary path. | [optional] 
**pid** | **str** | Service pid. | [optional] 
**service_name** | **str** | Service name. | [optional] 
**start_mode** | **str** | Service start mode (OS-agnostic). | [optional] 
**state** | **str** | Service state (OS-agnostic). | [optional] 

## Example

```python
from openapi_client.models.running_service import RunningService

# TODO update the JSON string below
json = "{}"
# create an instance of RunningService from a JSON string
running_service_instance = RunningService.from_json(json)
# print the JSON string representation of the object
print(RunningService.to_json())

# convert the object into a dict
running_service_dict = running_service_instance.to_dict()
# create an instance of RunningService from a dict
running_service_from_dict = RunningService.from_dict(running_service_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


