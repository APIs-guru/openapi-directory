# ProjectDescribe


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**entity** | **str** | Entity | [optional] 
**var_schema** | [**SchemaDescribe**](SchemaDescribe.md) |  | [optional] 

## Example

```python
from openapi_client.models.project_describe import ProjectDescribe

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectDescribe from a JSON string
project_describe_instance = ProjectDescribe.from_json(json)
# print the JSON string representation of the object
print(ProjectDescribe.to_json())

# convert the object into a dict
project_describe_dict = project_describe_instance.to_dict()
# create an instance of ProjectDescribe from a dict
project_describe_from_dict = ProjectDescribe.from_dict(project_describe_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


