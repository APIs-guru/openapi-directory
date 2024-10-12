# ChangeLogsListResponse

Change Log List Response

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**change_logs** | [**List[ChangeLog]**](ChangeLog.md) | Change log collection. | [optional] 
**kind** | **str** | Identifies what kind of resource this is. Value: the fixed string \&quot;dfareporting#changeLogsListResponse\&quot;. | [optional] 
**next_page_token** | **str** | Pagination token to be used for the next list operation. | [optional] 

## Example

```python
from openapi_client.models.change_logs_list_response import ChangeLogsListResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ChangeLogsListResponse from a JSON string
change_logs_list_response_instance = ChangeLogsListResponse.from_json(json)
# print the JSON string representation of the object
print(ChangeLogsListResponse.to_json())

# convert the object into a dict
change_logs_list_response_dict = change_logs_list_response_instance.to_dict()
# create an instance of ChangeLogsListResponse from a dict
change_logs_list_response_from_dict = ChangeLogsListResponse.from_dict(change_logs_list_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


