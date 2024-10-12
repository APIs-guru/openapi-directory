# Machine

A machine resource represents a discovered computer system. It can be *monitored*, i.e., a Dependency Agent is running on it, or *discovered*, i.e., its existence was inferred by observing the data stream from monitored machines. As machines change, prior versions of the machine resource are preserved and available for access. A machine is live during an interval of time, if either its Dependency Agent has reported data during (parts) of that interval, or a Dependency agent running on other machines has reported activity associated with the machine.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**properties** | **object** | Resource properties. | [optional] 
**etag** | **str** | Resource ETAG. | [optional] 
**kind** | **str** | Additional resource type qualifier. | 
**id** | **str** | Resource identifier. | [optional] [readonly] 
**name** | **str** | Resource name. | [optional] [readonly] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.machine import Machine

# TODO update the JSON string below
json = "{}"
# create an instance of Machine from a JSON string
machine_instance = Machine.from_json(json)
# print the JSON string representation of the object
print(Machine.to_json())

# convert the object into a dict
machine_dict = machine_instance.to_dict()
# create an instance of Machine from a dict
machine_from_dict = Machine.from_dict(machine_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


