# ProjectRelation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | [**ProjectEntityRelation**](ProjectEntityRelation.md) |  | [optional] 
**type** | **str** | Type | [optional] 

## Example

```python
from openapi_client.models.project_relation import ProjectRelation

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectRelation from a JSON string
project_relation_instance = ProjectRelation.from_json(json)
# print the JSON string representation of the object
print(ProjectRelation.to_json())

# convert the object into a dict
project_relation_dict = project_relation_instance.to_dict()
# create an instance of ProjectRelation from a dict
project_relation_from_dict = ProjectRelation.from_dict(project_relation_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


