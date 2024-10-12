# AddProject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country code. Default value will be used if not specified | [optional] 
**created_by** | **str** | The id of the user that created the project. If the creator is not known this value can be *null* or not specified | [optional] 
**design_id** | **int** | The id of the design this project should be based on | 
**locale** | **str** | The primary locale for this project. Default value will be used if not specified | [optional] 
**name** | **str** | The internal name of the project | 
**note** | **str** | The internal note field | [optional] 
**timezone** | **str** | The main timezone for the project. Do not specify for default timezone | [optional] 
**user_description** | **str** | The description presented to participants. Do not specify for default value from design | [optional] 
**user_title** | **str** | The title presented to participants. Do not specify for default value from design | [optional] 

## Example

```python
from openapi_client.models.add_project import AddProject

# TODO update the JSON string below
json = "{}"
# create an instance of AddProject from a JSON string
add_project_instance = AddProject.from_json(json)
# print the JSON string representation of the object
print(AddProject.to_json())

# convert the object into a dict
add_project_dict = add_project_instance.to_dict()
# create an instance of AddProject from a dict
add_project_from_dict = AddProject.from_dict(add_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


