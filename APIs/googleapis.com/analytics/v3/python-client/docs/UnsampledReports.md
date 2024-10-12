# UnsampledReports

An unsampled report collection lists Analytics unsampled reports to which the user has access. Each view (profile) can have a set of unsampled reports. Each resource in the unsampled report collection corresponds to a single Analytics unsampled report.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[UnsampledReport]**](UnsampledReport.md) | A list of unsampled reports. | [optional] 
**items_per_page** | **int** | The maximum number of resources the response can contain, regardless of the actual number of resources returned. Its value ranges from 1 to 1000 with a value of 1000 by default, or otherwise specified by the max-results query parameter. | [optional] 
**kind** | **str** | Collection type. | [optional] [default to 'analytics#unsampledReports']
**next_link** | **str** | Link to next page for this unsampled report collection. | [optional] 
**previous_link** | **str** | Link to previous page for this unsampled report collection. | [optional] 
**start_index** | **int** | The starting index of the resources, which is 1 by default or otherwise specified by the start-index query parameter. | [optional] 
**total_results** | **int** | The total number of results for the query, regardless of the number of resources in the result. | [optional] 
**username** | **str** | Email ID of the authenticated user | [optional] 

## Example

```python
from openapi_client.models.unsampled_reports import UnsampledReports

# TODO update the JSON string below
json = "{}"
# create an instance of UnsampledReports from a JSON string
unsampled_reports_instance = UnsampledReports.from_json(json)
# print the JSON string representation of the object
print(UnsampledReports.to_json())

# convert the object into a dict
unsampled_reports_dict = unsampled_reports_instance.to_dict()
# create an instance of UnsampledReports from a dict
unsampled_reports_from_dict = UnsampledReports.from_dict(unsampled_reports_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


