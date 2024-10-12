# UpdateProject


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**country** | **str** | The country code | [optional] 
**locale** | **str** | The primary locale for this project | [optional] 
**name** | **str** | The internal name of the project | [optional] 
**note** | **str** | The internal note field | [optional] 
**status** | **str** | Project status. Can be either ACTIVATED, NEW or DISABLED | [optional] 
**timezone** | **str** | The main timezone for the project | [optional] 
**user_description** | **str** | The description presented to participants. This value can be *null*. | [optional] 
**user_title** | **str** | The title presented to participants | [optional] 

## Example

```python
from openapi_client.models.update_project import UpdateProject

# TODO update the JSON string below
json = "{}"
# create an instance of UpdateProject from a JSON string
update_project_instance = UpdateProject.from_json(json)
# print the JSON string representation of the object
print(UpdateProject.to_json())

# convert the object into a dict
update_project_dict = update_project_instance.to_dict()
# create an instance of UpdateProject from a dict
update_project_from_dict = UpdateProject.from_dict(update_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


