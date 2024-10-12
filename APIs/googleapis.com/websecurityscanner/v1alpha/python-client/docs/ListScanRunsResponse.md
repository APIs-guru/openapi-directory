# ListScanRunsResponse

Response for the `ListScanRuns` method.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Token to retrieve the next page of results, or empty if there are no more results in the list. | [optional] 
**scan_runs** | [**List[ScanRun]**](ScanRun.md) | The list of ScanRuns returned. | [optional] 

## Example

```python
from openapi_client.models.list_scan_runs_response import ListScanRunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListScanRunsResponse from a JSON string
list_scan_runs_response_instance = ListScanRunsResponse.from_json(json)
# print the JSON string representation of the object
print(ListScanRunsResponse.to_json())

# convert the object into a dict
list_scan_runs_response_dict = list_scan_runs_response_instance.to_dict()
# create an instance of ListScanRunsResponse from a dict
list_scan_runs_response_from_dict = ListScanRunsResponse.from_dict(list_scan_runs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


