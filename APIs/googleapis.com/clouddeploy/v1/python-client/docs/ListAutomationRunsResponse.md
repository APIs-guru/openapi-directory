# ListAutomationRunsResponse

The response object from `ListAutomationRuns`.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**automation_runs** | [**List[AutomationRun]**](AutomationRun.md) | The &#x60;AutomationRuns&#x60; objects. | [optional] 
**next_page_token** | **str** | A token, which can be sent as &#x60;page_token&#x60; to retrieve the next page. If this field is omitted, there are no subsequent pages. | [optional] 
**unreachable** | **List[str]** | Locations that could not be reached. | [optional] 

## Example

```python
from openapi_client.models.list_automation_runs_response import ListAutomationRunsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListAutomationRunsResponse from a JSON string
list_automation_runs_response_instance = ListAutomationRunsResponse.from_json(json)
# print the JSON string representation of the object
print(ListAutomationRunsResponse.to_json())

# convert the object into a dict
list_automation_runs_response_dict = list_automation_runs_response_instance.to_dict()
# create an instance of ListAutomationRunsResponse from a dict
list_automation_runs_response_from_dict = ListAutomationRunsResponse.from_dict(list_automation_runs_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


