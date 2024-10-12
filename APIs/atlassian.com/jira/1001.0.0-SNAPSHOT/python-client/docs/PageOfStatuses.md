# PageOfStatuses


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_last** | **bool** | Whether this is the last page. | [optional] 
**max_results** | **int** | The maximum number of items that could be returned. | [optional] 
**next_page** | **str** | The URL of the next page of results, if any. | [optional] 
**var_self** | **str** | The URL of this page. | [optional] 
**start_at** | **int** | The index of the first item returned on the page. | [optional] 
**total** | **int** | Number of items that satisfy the search. | [optional] 
**values** | [**List[JiraStatus]**](JiraStatus.md) | The list of items. | [optional] 

## Example

```python
from openapi_client.models.page_of_statuses import PageOfStatuses

# TODO update the JSON string below
json = "{}"
# create an instance of PageOfStatuses from a JSON string
page_of_statuses_instance = PageOfStatuses.from_json(json)
# print the JSON string representation of the object
print(PageOfStatuses.to_json())

# convert the object into a dict
page_of_statuses_dict = page_of_statuses_instance.to_dict()
# create an instance of PageOfStatuses from a dict
page_of_statuses_from_dict = PageOfStatuses.from_dict(page_of_statuses_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


