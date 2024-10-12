# ProjectIdentifierBean

The identifiers for a project.

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **int** | The ID of the project. | [optional] [readonly] 
**key** | **str** | The key of the project. | [optional] [readonly] 

## Example

```python
from openapi_client.models.project_identifier_bean import ProjectIdentifierBean

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectIdentifierBean from a JSON string
project_identifier_bean_instance = ProjectIdentifierBean.from_json(json)
# print the JSON string representation of the object
print(ProjectIdentifierBean.to_json())

# convert the object into a dict
project_identifier_bean_dict = project_identifier_bean_instance.to_dict()
# create an instance of ProjectIdentifierBean from a dict
project_identifier_bean_from_dict = ProjectIdentifierBean.from_dict(project_identifier_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


