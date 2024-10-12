# UserProjectRead



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**functional_roles** | **List[str]** |  | 
**id** | **str** |  | [optional] [readonly] 
**user** | **str** |  | 

## Example

```python
from openapi_client.models.user_project_read import UserProjectRead

# TODO update the JSON string below
json = "{}"
# create an instance of UserProjectRead from a JSON string
user_project_read_instance = UserProjectRead.from_json(json)
# print the JSON string representation of the object
print(UserProjectRead.to_json())

# convert the object into a dict
user_project_read_dict = user_project_read_instance.to_dict()
# create an instance of UserProjectRead from a dict
user_project_read_from_dict = UserProjectRead.from_dict(user_project_read_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


