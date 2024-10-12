# RerunTriggerResource

RerunTrigger resource type.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Trigger that schedules pipeline reruns for all fixed time interval windows from a requested start time to requested end time. | 
**etag** | **str** | Etag identifies change in the resource. | [optional] [readonly] 
**id** | **str** | The resource identifier. | [optional] [readonly] 
**name** | **str** | The resource name. | [optional] [readonly] 
**type** | **str** | The resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.rerun_trigger_resource import RerunTriggerResource

# TODO update the JSON string below
json = "{}"
# create an instance of RerunTriggerResource from a JSON string
rerun_trigger_resource_instance = RerunTriggerResource.from_json(json)
# print the JSON string representation of the object
print(RerunTriggerResource.to_json())

# convert the object into a dict
rerun_trigger_resource_dict = rerun_trigger_resource_instance.to_dict()
# create an instance of RerunTriggerResource from a dict
rerun_trigger_resource_from_dict = RerunTriggerResource.from_dict(rerun_trigger_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


