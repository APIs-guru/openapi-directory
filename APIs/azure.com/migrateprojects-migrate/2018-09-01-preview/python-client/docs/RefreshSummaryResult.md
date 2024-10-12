# RefreshSummaryResult

Class representing the refresh summary status of the migrate project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_refreshed** | **bool** | Gets or sets a value indicating whether the migrate project summary is refreshed. | [optional] 

## Example

```python
from openapi_client.models.refresh_summary_result import RefreshSummaryResult

# TODO update the JSON string below
json = "{}"
# create an instance of RefreshSummaryResult from a JSON string
refresh_summary_result_instance = RefreshSummaryResult.from_json(json)
# print the JSON string representation of the object
print(RefreshSummaryResult.to_json())

# convert the object into a dict
refresh_summary_result_dict = refresh_summary_result_instance.to_dict()
# create an instance of RefreshSummaryResult from a dict
refresh_summary_result_from_dict = RefreshSummaryResult.from_dict(refresh_summary_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


