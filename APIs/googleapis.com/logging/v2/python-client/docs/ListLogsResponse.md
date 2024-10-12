# ListLogsResponse

Result returned from ListLogs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**log_names** | **List[str]** | A list of log names. For example, \&quot;projects/my-project/logs/syslog\&quot; or \&quot;organizations/123/logs/cloudresourcemanager.googleapis.com%2Factivity\&quot;. | [optional] 
**next_page_token** | **str** | If there might be more results than those appearing in this response, then nextPageToken is included. To get the next set of results, call this method again using the value of nextPageToken as pageToken. | [optional] 

## Example

```python
from openapi_client.models.list_logs_response import ListLogsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListLogsResponse from a JSON string
list_logs_response_instance = ListLogsResponse.from_json(json)
# print the JSON string representation of the object
print(ListLogsResponse.to_json())

# convert the object into a dict
list_logs_response_dict = list_logs_response_instance.to_dict()
# create an instance of ListLogsResponse from a dict
list_logs_response_from_dict = ListLogsResponse.from_dict(list_logs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


