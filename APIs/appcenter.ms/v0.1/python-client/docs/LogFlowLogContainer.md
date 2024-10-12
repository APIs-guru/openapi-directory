# LogFlowLogContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exceeded_max_limit** | **bool** | indicates if the number of available logs are more than the max allowed return limit(100). | [optional] 
**last_received_log_timestamp** | **datetime** | the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call. | [optional] 
**logs** | [**List[AnalyticsLogFlow200ResponseLogsInner]**](AnalyticsLogFlow200ResponseLogsInner.md) | the list of logs | 

## Example

```python
from openapi_client.models.log_flow_log_container import LogFlowLogContainer

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowLogContainer from a JSON string
log_flow_log_container_instance = LogFlowLogContainer.from_json(json)
# print the JSON string representation of the object
print(LogFlowLogContainer.to_json())

# convert the object into a dict
log_flow_log_container_dict = log_flow_log_container_instance.to_dict()
# create an instance of LogFlowLogContainer from a dict
log_flow_log_container_from_dict = LogFlowLogContainer.from_dict(log_flow_log_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


