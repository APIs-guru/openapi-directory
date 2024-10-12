# LogFlowGenericLogContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exceeded_max_limit** | **bool** | indicates if the number of available logs are more than the max allowed return limit(100). | [optional] 
**last_received_log_timestamp** | **datetime** | the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call. | [optional] 
**logs** | [**List[AnalyticsGenericLogFlow200ResponseLogsInner]**](AnalyticsGenericLogFlow200ResponseLogsInner.md) | the list of logs | 

## Example

```python
from openapi_client.models.log_flow_generic_log_container import LogFlowGenericLogContainer

# TODO update the JSON string below
json = "{}"
# create an instance of LogFlowGenericLogContainer from a JSON string
log_flow_generic_log_container_instance = LogFlowGenericLogContainer.from_json(json)
# print the JSON string representation of the object
print(LogFlowGenericLogContainer.to_json())

# convert the object into a dict
log_flow_generic_log_container_dict = log_flow_generic_log_container_instance.to_dict()
# create an instance of LogFlowGenericLogContainer from a dict
log_flow_generic_log_container_from_dict = LogFlowGenericLogContainer.from_dict(log_flow_generic_log_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


