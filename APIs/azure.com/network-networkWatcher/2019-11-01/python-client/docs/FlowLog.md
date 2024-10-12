# FlowLog

A flow log resource.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | A unique read-only string that changes whenever the resource is updated. | [optional] [readonly] 
**properties** | [**FlowLogPropertiesFormat**](FlowLogPropertiesFormat.md) |  | [optional] 
**id** | **str** | Resource ID. | [optional] 
**location** | **str** | Resource location. | [optional] 
**name** | **str** | Resource name. | [optional] [readonly] 
**tags** | **Dict[str, str]** | Resource tags. | [optional] 
**type** | **str** | Resource type. | [optional] [readonly] 

## Example

```python
from openapi_client.models.flow_log import FlowLog

# TODO update the JSON string below
json = "{}"
# create an instance of FlowLog from a JSON string
flow_log_instance = FlowLog.from_json(json)
# print the JSON string representation of the object
print(FlowLog.to_json())

# convert the object into a dict
flow_log_dict = flow_log_instance.to_dict()
# create an instance of FlowLog from a dict
flow_log_from_dict = FlowLog.from_dict(flow_log_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


