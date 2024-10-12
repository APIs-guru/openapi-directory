# PagecountsProject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**items** | [**List[PagecountsProjectItemsInner]**](PagecountsProjectItemsInner.md) |  | [optional] 

## Example

```python
from openapi_client.models.pagecounts_project import PagecountsProject

# TODO update the JSON string below
json = "{}"
# create an instance of PagecountsProject from a JSON string
pagecounts_project_instance = PagecountsProject.from_json(json)
# print the JSON string representation of the object
print(PagecountsProject.to_json())

# convert the object into a dict
pagecounts_project_dict = pagecounts_project_instance.to_dict()
# create an instance of PagecountsProject from a dict
pagecounts_project_from_dict = PagecountsProject.from_dict(pagecounts_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


