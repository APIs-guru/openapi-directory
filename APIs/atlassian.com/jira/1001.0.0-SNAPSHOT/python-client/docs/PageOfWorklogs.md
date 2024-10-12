# PageOfWorklogs

Paginated list of worklog details

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**max_results** | **int** | The maximum number of results that could be on the page. | [optional] [readonly] 
**start_at** | **int** | The index of the first item returned on the page. | [optional] [readonly] 
**total** | **int** | The number of results on the page. | [optional] [readonly] 
**worklogs** | [**List[Worklog]**](Worklog.md) | List of worklogs. | [optional] [readonly] 

## Example

```python
from openapi_client.models.page_of_worklogs import PageOfWorklogs

# TODO update the JSON string below
json = "{}"
# create an instance of PageOfWorklogs from a JSON string
page_of_worklogs_instance = PageOfWorklogs.from_json(json)
# print the JSON string representation of the object
print(PageOfWorklogs.to_json())

# convert the object into a dict
page_of_worklogs_dict = page_of_worklogs_instance.to_dict()
# create an instance of PageOfWorklogs from a dict
page_of_worklogs_from_dict = PageOfWorklogs.from_dict(page_of_worklogs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


