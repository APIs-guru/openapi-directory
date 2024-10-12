# CreateUpdateRoleRequestBean


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**description** | **str** | A description of the project role. Required when fully updating a project role. Optional when creating or partially updating a project role. | [optional] 
**name** | **str** | The name of the project role. Must be unique. Cannot begin or end with whitespace. The maximum length is 255 characters. Required when creating a project role. Optional when partially updating a project role. | [optional] 

## Example

```python
from openapi_client.models.create_update_role_request_bean import CreateUpdateRoleRequestBean

# TODO update the JSON string below
json = "{}"
# create an instance of CreateUpdateRoleRequestBean from a JSON string
create_update_role_request_bean_instance = CreateUpdateRoleRequestBean.from_json(json)
# print the JSON string representation of the object
print(CreateUpdateRoleRequestBean.to_json())

# convert the object into a dict
create_update_role_request_bean_dict = create_update_role_request_bean_instance.to_dict()
# create an instance of CreateUpdateRoleRequestBean from a dict
create_update_role_request_bean_from_dict = CreateUpdateRoleRequestBean.from_dict(create_update_role_request_bean_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


