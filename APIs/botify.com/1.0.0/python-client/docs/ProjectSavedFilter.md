# ProjectSavedFilter


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**filters** | **object** |  | 
**identifier** | **str** |  | [optional] [readonly] 
**name** | **str** |  | 

## Example

```python
from openapi_client.models.project_saved_filter import ProjectSavedFilter

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectSavedFilter from a JSON string
project_saved_filter_instance = ProjectSavedFilter.from_json(json)
# print the JSON string representation of the object
print(ProjectSavedFilter.to_json())

# convert the object into a dict
project_saved_filter_dict = project_saved_filter_instance.to_dict()
# create an instance of ProjectSavedFilter from a dict
project_saved_filter_from_dict = ProjectSavedFilter.from_dict(project_saved_filter_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


