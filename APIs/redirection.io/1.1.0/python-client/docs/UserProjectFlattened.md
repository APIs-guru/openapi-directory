# UserProjectFlattened



## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**functional_roles** | **List[str]** |  | [optional] 
**project** | **str** |  | [optional] 
**user** | **str** |  | [optional] 

## Example

```python
from openapi_client.models.user_project_flattened import UserProjectFlattened

# TODO update the JSON string below
json = "{}"
# create an instance of UserProjectFlattened from a JSON string
user_project_flattened_instance = UserProjectFlattened.from_json(json)
# print the JSON string representation of the object
print(UserProjectFlattened.to_json())

# convert the object into a dict
user_project_flattened_dict = user_project_flattened_instance.to_dict()
# create an instance of UserProjectFlattened from a dict
user_project_flattened_from_dict = UserProjectFlattened.from_dict(user_project_flattened_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


