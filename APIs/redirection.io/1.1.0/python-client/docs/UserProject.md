# UserProject



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**functional_roles** | **List[str]** |  | 
**id** | **str** |  | [optional] [readonly] 
**project** | **str** |  | 
**user** | **str** |  | 

## Example

```python
from openapi_client.models.user_project import UserProject

# TODO update the JSON string below
json = "{}"
# create an instance of UserProject from a JSON string
user_project_instance = UserProject.from_json(json)
# print the JSON string representation of the object
print(UserProject.to_json())

# convert the object into a dict
user_project_dict = user_project_instance.to_dict()
# create an instance of UserProject from a dict
user_project_from_dict = UserProject.from_dict(user_project_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


