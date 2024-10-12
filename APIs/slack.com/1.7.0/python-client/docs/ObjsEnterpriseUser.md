# ObjsEnterpriseUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**enterprise_id** | **str** |  | 
**enterprise_name** | **str** |  | 
**id** | **str** |  | 
**is_admin** | **bool** |  | 
**is_owner** | **bool** |  | 
**teams** | **List[str]** |  | 

## Example

```python
from openapi_client.models.objs_enterprise_user import ObjsEnterpriseUser

# TODO update the JSON string below
json = "{}"
# create an instance of ObjsEnterpriseUser from a JSON string
objs_enterprise_user_instance = ObjsEnterpriseUser.from_json(json)
# print the JSON string representation of the object
print(ObjsEnterpriseUser.to_json())

# convert the object into a dict
objs_enterprise_user_dict = objs_enterprise_user_instance.to_dict()
# create an instance of ObjsEnterpriseUser from a dict
objs_enterprise_user_from_dict = ObjsEnterpriseUser.from_dict(objs_enterprise_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


