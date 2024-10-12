# Role

a role item.  *New in version 2.1.0* 

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**actions** | [**List[ActionResource]**](ActionResource.md) |  | [optional] 
**name** | **str** | The name of the role  *Changed in version 2.3.0*&amp;#58; A minimum character length requirement (&#39;minLength&#39;) is added.  | [optional] 

## Example

```python
from openapi_client.models.role import Role

# TODO update the JSON string below
json = "{}"
# create an instance of Role from a JSON string
role_instance = Role.from_json(json)
# print the JSON string representation of the object
print(Role.to_json())

# convert the object into a dict
role_dict = role_instance.to_dict()
# create an instance of Role from a dict
role_from_dict = Role.from_dict(role_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


