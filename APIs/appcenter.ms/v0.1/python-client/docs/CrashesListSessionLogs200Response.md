# CrashesListSessionLogs200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exceeded_max_limit** | **bool** | indicates if the number of available logs are more than the max allowed return limit(100). | [optional] 
**last_received_log_timestamp** | **datetime** | the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call. | [optional] 
**logs** | [**List[CrashesListSessionLogs200ResponseLogsInner]**](CrashesListSessionLogs200ResponseLogsInner.md) | the list of logs | 

## Example

```python
from openapi_client.models.crashes_list_session_logs200_response import CrashesListSessionLogs200Response

# TODO update the JSON string below
json = "{}"
# create an instance of CrashesListSessionLogs200Response from a JSON string
crashes_list_session_logs200_response_instance = CrashesListSessionLogs200Response.from_json(json)
# print the JSON string representation of the object
print(CrashesListSessionLogs200Response.to_json())

# convert the object into a dict
crashes_list_session_logs200_response_dict = crashes_list_session_logs200_response_instance.to_dict()
# create an instance of CrashesListSessionLogs200Response from a dict
crashes_list_session_logs200_response_from_dict = CrashesListSessionLogs200Response.from_dict(crashes_list_session_logs200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


