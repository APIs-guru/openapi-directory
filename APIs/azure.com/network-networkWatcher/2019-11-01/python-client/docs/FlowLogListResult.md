# FlowLogListResult

List of flow logs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_link** | **str** | The URL to get the next set of results. | [optional] [readonly] 
**value** | [**List[FlowLog]**](FlowLog.md) | Information about flow log resource. | [optional] 

## Example

```python
from openapi_client.models.flow_log_list_result import FlowLogListResult

# TODO update the JSON string below
json = "{}"
# create an instance of FlowLogListResult from a JSON string
flow_log_list_result_instance = FlowLogListResult.from_json(json)
# print the JSON string representation of the object
print(FlowLogListResult.to_json())

# convert the object into a dict
flow_log_list_result_dict = flow_log_list_result_instance.to_dict()
# create an instance of FlowLogListResult from a dict
flow_log_list_result_from_dict = FlowLogListResult.from_dict(flow_log_list_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


