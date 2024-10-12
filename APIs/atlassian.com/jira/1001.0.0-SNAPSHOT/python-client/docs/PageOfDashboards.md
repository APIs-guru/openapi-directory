# PageOfDashboards

A page containing dashboard details.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**dashboards** | [**List[Dashboard]**](Dashboard.md) | List of dashboards. | [optional] [readonly] 
**max_results** | **int** | The maximum number of results that could be on the page. | [optional] [readonly] 
**next** | **str** | The URL of the next page of results, if any. | [optional] [readonly] 
**prev** | **str** | The URL of the previous page of results, if any. | [optional] [readonly] 
**start_at** | **int** | The index of the first item returned on the page. | [optional] [readonly] 
**total** | **int** | The number of results on the page. | [optional] [readonly] 

## Example

```python
from openapi_client.models.page_of_dashboards import PageOfDashboards

# TODO update the JSON string below
json = "{}"
# create an instance of PageOfDashboards from a JSON string
page_of_dashboards_instance = PageOfDashboards.from_json(json)
# print the JSON string representation of the object
print(PageOfDashboards.to_json())

# convert the object into a dict
page_of_dashboards_dict = page_of_dashboards_instance.to_dict()
# create an instance of PageOfDashboards from a dict
page_of_dashboards_from_dict = PageOfDashboards.from_dict(page_of_dashboards_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


