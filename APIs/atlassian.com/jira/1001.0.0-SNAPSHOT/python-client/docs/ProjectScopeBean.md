# ProjectScopeBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**attributes** | **List[str]** | Defines the behavior of the option in the project.If notSelectable is set, the option cannot be set as the field&#39;s value. This is useful for archiving an option that has previously been selected but shouldn&#39;t be used anymore.If defaultValue is set, the option is selected by default. | [optional] 
**id** | **int** | The ID of the project that the option&#39;s behavior applies to. | [optional] 

## Example

```python
from openapi_client.models.project_scope_bean import ProjectScopeBean

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectScopeBean from a JSON string
project_scope_bean_instance = ProjectScopeBean.from_json(json)
# print the JSON string representation of the object
print(ProjectScopeBean.to_json())

# convert the object into a dict
project_scope_bean_dict = project_scope_bean_instance.to_dict()
# create an instance of ProjectScopeBean from a dict
project_scope_bean_from_dict = ProjectScopeBean.from_dict(project_scope_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


