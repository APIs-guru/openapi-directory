# LogContainer


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exceeded_max_limit** | **bool** | indicates if the number of available logs are more than the max allowed return limit(100). | [optional] 
**last_received_log_timestamp** | **datetime** | the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call. | [optional] 
**logs** | [**List[LogContainerLogsInner]**](LogContainerLogsInner.md) | the list of logs | 

## Example

```python
from openapi_client.models.log_container import LogContainer

# TODO update the JSON string below
json = "{}"
# create an instance of LogContainer from a JSON string
log_container_instance = LogContainer.from_json(json)
# print the JSON string representation of the object
print(LogContainer.to_json())

# convert the object into a dict
log_container_dict = log_container_instance.to_dict()
# create an instance of LogContainer from a dict
log_container_from_dict = LogContainer.from_dict(log_container_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


