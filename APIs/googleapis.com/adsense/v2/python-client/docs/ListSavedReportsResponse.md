# ListSavedReportsResponse

Response definition for the saved reports list rpc.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**next_page_token** | **str** | Continuation token used to page through reports. To retrieve the next page of the results, set the next request&#39;s \&quot;page_token\&quot; value to this. | [optional] 
**saved_reports** | [**List[SavedReport]**](SavedReport.md) | The reports returned in this list response. | [optional] 

## Example

```python
from openapi_client.models.list_saved_reports_response import ListSavedReportsResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListSavedReportsResponse from a JSON string
list_saved_reports_response_instance = ListSavedReportsResponse.from_json(json)
# print the JSON string representation of the object
print(ListSavedReportsResponse.to_json())

# convert the object into a dict
list_saved_reports_response_dict = list_saved_reports_response_instance.to_dict()
# create an instance of ListSavedReportsResponse from a dict
list_saved_reports_response_from_dict = ListSavedReportsResponse.from_dict(list_saved_reports_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


