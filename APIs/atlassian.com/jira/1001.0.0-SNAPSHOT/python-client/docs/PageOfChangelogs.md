# PageOfChangelogs

A page of changelogs.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**histories** | [**List[Changelog]**](Changelog.md) | The list of changelogs. | [optional] [readonly] 
**max_results** | **int** | The maximum number of results that could be on the page. | [optional] [readonly] 
**start_at** | **int** | The index of the first item returned on the page. | [optional] [readonly] 
**total** | **int** | The number of results on the page. | [optional] [readonly] 

## Example

```python
from openapi_client.models.page_of_changelogs import PageOfChangelogs

# TODO update the JSON string below
json = "{}"
# create an instance of PageOfChangelogs from a JSON string
page_of_changelogs_instance = PageOfChangelogs.from_json(json)
# print the JSON string representation of the object
print(PageOfChangelogs.to_json())

# convert the object into a dict
page_of_changelogs_dict = page_of_changelogs_instance.to_dict()
# create an instance of PageOfChangelogs from a dict
page_of_changelogs_from_dict = PageOfChangelogs.from_dict(page_of_changelogs_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


