# ListAllProjects


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**org** | [**ListAllProjects200ResponseOrg**](ListAllProjects200ResponseOrg.md) |  | [optional] 
**projects** | [**List[ProjectWithoutRemediation]**](ProjectWithoutRemediation.md) | A list of org&#39;s projects | [optional] 

## Example

```python
from openapi_client.models.list_all_projects import ListAllProjects

# TODO update the JSON string below
json = "{}"
# create an instance of ListAllProjects from a JSON string
list_all_projects_instance = ListAllProjects.from_json(json)
# print the JSON string representation of the object
print(ListAllProjects.to_json())

# convert the object into a dict
list_all_projects_dict = list_all_projects_instance.to_dict()
# create an instance of ListAllProjects from a dict
list_all_projects_from_dict = ListAllProjects.from_dict(list_all_projects_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


