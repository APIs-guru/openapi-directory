# ErrorsListSessionLogs200Response


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**exceeded_max_limit** | **bool** | indicates if the number of available logs are more than the max allowed return limit(100). | [optional] 
**last_received_log_timestamp** | **datetime** | the timestamp of the last log received. This value can be used as the start time parameter in the consecutive API call. | [optional] 
**logs** | [**List[ErrorsListSessionLogs200ResponseLogsInner]**](ErrorsListSessionLogs200ResponseLogsInner.md) | the list of logs | 

## Example

```python
from openapi_client.models.errors_list_session_logs200_response import ErrorsListSessionLogs200Response

# TODO update the JSON string below
json = "{}"
# create an instance of ErrorsListSessionLogs200Response from a JSON string
errors_list_session_logs200_response_instance = ErrorsListSessionLogs200Response.from_json(json)
# print the JSON string representation of the object
print(ErrorsListSessionLogs200Response.to_json())

# convert the object into a dict
errors_list_session_logs200_response_dict = errors_list_session_logs200_response_instance.to_dict()
# create an instance of ErrorsListSessionLogs200Response from a dict
errors_list_session_logs200_response_from_dict = ErrorsListSessionLogs200Response.from_dict(errors_list_session_logs200_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


