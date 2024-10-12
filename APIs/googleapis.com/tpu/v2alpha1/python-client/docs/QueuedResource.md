# QueuedResource

A QueuedResource represents a request for resources that will be placed in a queue and fulfilled when the necessary resources are available.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**best_effort** | **object** | BestEffort tier definition. | [optional] 
**create_time** | **str** | Output only. The time when the QueuedResource was created. | [optional] [readonly] 
**guaranteed** | [**Guaranteed**](Guaranteed.md) |  | [optional] 
**name** | **str** | Output only. Immutable. The name of the QueuedResource. | [optional] [readonly] 
**queueing_policy** | [**QueueingPolicy**](QueueingPolicy.md) |  | [optional] 
**reservation_name** | **str** | Name of the reservation in which the resource should be provisioned. Format: projects/{project}/locations/{zone}/reservations/{reservation} | [optional] 
**spot** | **object** | Spot tier definition. | [optional] 
**state** | [**QueuedResourceState**](QueuedResourceState.md) |  | [optional] 
**tpu** | [**Tpu**](Tpu.md) |  | [optional] 

## Example

```python
from openapi_client.models.queued_resource import QueuedResource

# TODO update the JSON string below
json = "{}"
# create an instance of QueuedResource from a JSON string
queued_resource_instance = QueuedResource.from_json(json)
# print the JSON string representation of the object
print(QueuedResource.to_json())

# convert the object into a dict
queued_resource_dict = queued_resource_instance.to_dict()
# create an instance of QueuedResource from a dict
queued_resource_from_dict = QueuedResource.from_dict(queued_resource_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


