# Process

A process resource represents a process running on a machine. The process may be actively *monitored*, i.e., a Dependency Agent is running on its machine, or *discovered*, i.e., its existence was inferred by observing the data stream from monitored machines. A process resource represents a pool of actual operating system resources that share command lines and metadata. As the process pool evolves over time, prior versions of the process resource are preserved and available for access. A process is live during an interval of time, if that process is executing during (parts) of that interval

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
from openapi_client.models.process import Process

# TODO update the JSON string below
json = "{}"
# create an instance of Process from a JSON string
process_instance = Process.from_json(json)
# print the JSON string representation of the object
print(Process.to_json())

# convert the object into a dict
process_dict = process_instance.to_dict()
# create an instance of Process from a dict
process_from_dict = Process.from_dict(process_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


