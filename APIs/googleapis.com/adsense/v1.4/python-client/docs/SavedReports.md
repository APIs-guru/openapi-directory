# SavedReports


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**etag** | **str** | ETag of this response for caching purposes. | [optional] 
**items** | [**List[SavedReport]**](SavedReport.md) | The saved reports returned in this list response. | [optional] 
**kind** | **str** | Kind of list this is, in this case adsense#savedReports. | [optional] [default to 'adsense#savedReports']
**next_page_token** | **str** | Continuation token used to page through saved reports. To retrieve the next page of results, set the next request&#39;s \&quot;pageToken\&quot; value to this. | [optional] 

## Example

```python
from openapi_client.models.saved_reports import SavedReports

# TODO update the JSON string below
json = "{}"
# create an instance of SavedReports from a JSON string
saved_reports_instance = SavedReports.from_json(json)
# print the JSON string representation of the object
print(SavedReports.to_json())

# convert the object into a dict
saved_reports_dict = saved_reports_instance.to_dict()
# create an instance of SavedReports from a dict
saved_reports_from_dict = SavedReports.from_dict(saved_reports_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


